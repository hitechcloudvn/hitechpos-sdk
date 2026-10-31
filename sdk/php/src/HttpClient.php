<?php

namespace HiTechCloud\HiTechPos;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Exception\ConnectException;

class HttpClient
{
    private Client $client;
    private ?string $token;
    private int $maxRetries;

    public function __construct(string $baseUrl, ?string $token = null, int $timeout = 30, int $maxRetries = 3)
    {
        $this->token = $token;
        $this->maxRetries = $maxRetries;
        $this->client = new Client([
            'base_uri' => rtrim($baseUrl, '/') . '/',
            'timeout' => $timeout,
            'http_errors' => false,
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
                'User-Agent' => 'HiTechPos-PHP-SDK/1.0.0',
            ],
        ]);
    }

    public function setToken(string $token): void
    {
        $this->token = $token;
    }

    public function clearToken(): void
    {
        $this->token = null;
    }

    private function headers(): array
    {
        $headers = [];
        if ($this->token) {
            $headers['Authorization'] = 'Bearer ' . $this->token;
        }
        return $headers;
    }

    public function request(string $method, string $path, ?array $data = null, ?array $params = null): ?array
    {
        $lastException = null;
        for ($attempt = 0; $attempt <= $this->maxRetries; $attempt++) {
            try {
                $options = ['headers' => $this->headers()];
                if ($data !== null) {
                    $options['json'] = $data;
                }
                if (!empty($params)) {
                    $options['query'] = $params;
                }
                $response = $this->client->request($method, ltrim($path, '/'), $options);
                $status = $response->getStatusCode();
                $body = (string) $response->getBody();
                $decoded = $body === '' ? null : json_decode($body, true);

                if ($status === 429 && $attempt < $this->maxRetries) {
                    sleep((int) ($response->getHeader('Retry-After')[0] ?? (2 ** $attempt)));
                    continue;
                }
                if ($status >= 500 && $attempt < $this->maxRetries) {
                    sleep(2 ** $attempt);
                    continue;
                }
                if ($status >= 400) {
                    $this->raise($status, $decoded, $response->getHeader('Retry-After')[0] ?? 60);
                }
                return $decoded;
            } catch (ConnectException $e) {
                $lastException = $e;
                if ($attempt < $this->maxRetries) {
                    sleep(2 ** $attempt);
                    continue;
                }
            }
        }
        throw new HiTechPosException('Request failed: ' . ($lastException ? $lastException->getMessage() : 'unknown'));
    }

    private function raise(int $status, ?array $body, $retryAfter): void
    {
        $message = $body['error'] ?? $body['message'] ?? ('HTTP ' . $status);
        if (is_array($message)) {
            $message = implode('; ', $message);
        }
        switch ($status) {
            case 401:
                throw new AuthenticationException($message, $body);
            case 403:
                throw new AuthorizationException($message, $body);
            case 404:
                throw new NotFoundException($message, $body);
            case 422:
                throw new ValidationException($message, $body);
            case 429:
                throw new RateLimitException($message, (int) $retryAfter, $body);
            default:
                if ($status >= 500) {
                    throw new ServerException($message, $status, $body);
                }
                throw new HiTechPosException($message, $status, $body);
        }
    }

    public function get(string $path, ?array $params = null): ?array
    {
        return $this->request('GET', $path, null, $params);
    }

    public function post(string $path, ?array $data = null): ?array
    {
        return $this->request('POST', $path, $data ?? []);
    }

    public function put(string $path, ?array $data = null): ?array
    {
        return $this->request('PUT', $path, $data ?? []);
    }

    public function delete(string $path): ?array
    {
        return $this->request('DELETE', $path);
    }
}
