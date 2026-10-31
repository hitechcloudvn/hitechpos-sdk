import { createHmac, timingSafeEqual } from "crypto";

export const SIGNATURE_HEADER = "x-hitechpos-signature";
export const EVENT_HEADER = "x-hitechpos-event";
export const DELIVERY_HEADER = "x-hitechpos-delivery";

export function computeSignature(secret: string, payload: string | Buffer): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function verifySignature(
  secret: string, payload: string | Buffer, signature: string,
): boolean {
  const expected = computeSignature(secret, payload);
  const a = Buffer.from(expected);
  const b = Buffer.from(signature || "");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function parseEvent<T = Record<string, unknown>>(payload: string | Buffer): T {
  return JSON.parse(payload.toString()) as T;
}
