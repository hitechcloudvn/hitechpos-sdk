import axios, { AxiosInstance, AxiosError } from "axios";
import {
  HiTechPosError, AuthenticationError, AuthorizationError, NotFoundError,
  ValidationError, RateLimitError, ServerError,
} from "./errors";

export type QueryParams = Record<string, string | number | boolean | undefined>;
export type JsonBody = Record<string, unknown>;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class HTTPClient {
  private client: AxiosInstance;
  private maxRetries: number;

  constructor(baseUrl: string, token?: string, timeout = 30000, maxRetries = 3) {
    this.maxRetries = maxRetries;
    this.client = axios.create({
      baseURL: baseUrl.replace(/\/$/, ""),
      timeout,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "HiTechPos-NodeJS-SDK/1.0.0",
      },
    });
    if (token) this.setToken(token);
  }

  setToken(token: string): void {
    this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  clearToken(): void {
    delete this.client.defaults.headers.common["Authorization"];
  }

  private raise(error: AxiosError): never {
    if (!error.response) throw new HiTechPosError(error.message);
    const { status, data, headers } = error.response;
    const body = data as Record<string, unknown> | undefined;
    const message =
      (body?.error as string) || (body?.message as string) || `HTTP ${status}`;
    switch (status) {
      case 401: throw new AuthenticationError(message, body);
      case 403: throw new AuthorizationError(message, body);
      case 404: throw new NotFoundError(message, body);
      case 422: throw new ValidationError(message, body);
      case 429: {
        const ra = parseInt(String(headers["retry-after"] ?? "60"), 10);
        throw new RateLimitError(message, ra, body);
      }
      default:
        if (status >= 500) throw new ServerError(message, status, body);
        throw new HiTechPosError(message, status, body);
    }
  }

  async request<T = unknown>(
    method: string, path: string, data?: JsonBody | null, params?: QueryParams | null,
  ): Promise<T> {
    let lastError: AxiosError | undefined;
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        const resp = await this.client.request<T>({
          method, url: path,
          data: data ?? undefined,
          params: params ?? undefined,
        });
        return resp.data;
      } catch (err) {
        const error = err as AxiosError;
        lastError = error;
        const status = error.response?.status;
        if (status === 429 && attempt < this.maxRetries) {
          const ra = parseInt(String(error.response?.headers["retry-after"] ?? "60"), 10);
          await sleep(ra * 1000);
          continue;
        }
        if ((!error.response || (status && status >= 500)) && attempt < this.maxRetries) {
          await sleep(2 ** attempt * 1000);
          continue;
        }
        this.raise(error);
      }
    }
    this.raise(lastError as AxiosError);
  }

  get<T = unknown>(path: string, params?: QueryParams): Promise<T> {
    return this.request<T>("GET", path, null, params);
  }
  post<T = unknown>(path: string, data?: JsonBody): Promise<T> {
    return this.request<T>("POST", path, data);
  }
  put<T = unknown>(path: string, data?: JsonBody): Promise<T> {
    return this.request<T>("PUT", path, data);
  }
  delete<T = unknown>(path: string): Promise<T> {
    return this.request<T>("DELETE", path);
  }

  async *paginate<T = unknown>(path: string, params?: QueryParams): AsyncGenerator<T> {
    const p: QueryParams = { page_number: 1, page_size: 50, ...(params || {}) };
    for (;;) {
      const resp = (await this.get<Record<string, any>>(path, p)) || {};
      for (const item of resp.data ?? []) yield item as T;
      const meta = resp.meta?.pagination;
      if (!meta?.has_more) break;
      p.page_number = Number(meta.page_number ?? p.page_number) + 1;
    }
  }
}
