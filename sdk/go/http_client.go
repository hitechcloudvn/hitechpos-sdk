package hitechpos

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"
)

// HTTPClient handles HTTP requests with retry logic.
type HTTPClient struct {
	baseURL    string
	httpClient *http.Client
	token      string
	maxRetries int
}

func newHTTPClient(baseURL, token string, timeout time.Duration, maxRetries int) *HTTPClient {
	return &HTTPClient{
		baseURL:    strings.TrimRight(baseURL, "/"),
		httpClient: &http.Client{Timeout: timeout},
		token:      token,
		maxRetries: maxRetries,
	}
}

// SetToken sets the bearer token.
func (c *HTTPClient) SetToken(token string) { c.token = token }

// ClearToken removes the bearer token.
func (c *HTTPClient) ClearToken() { c.token = "" }

// Request performs an HTTP request with retries on 429 / 5xx.
func (c *HTTPClient) Request(method, path string, body interface{}, params map[string]string) (map[string]interface{}, error) {
	var lastErr error
	for attempt := 0; attempt <= c.maxRetries; attempt++ {
		var bodyReader io.Reader
		if body != nil {
			jsonBody, err := json.Marshal(body)
			if err != nil {
				return nil, fmt.Errorf("marshal body: %w", err)
			}
			bodyReader = bytes.NewReader(jsonBody)
		}

		fullURL := c.baseURL + path
		if len(params) > 0 {
			q := url.Values{}
			for k, v := range params {
				q.Set(k, v)
			}
			fullURL += "?" + q.Encode()
		}

		req, err := http.NewRequest(method, fullURL, bodyReader)
		if err != nil {
			return nil, fmt.Errorf("create request: %w", err)
		}
		req.Header.Set("Content-Type", "application/json")
		req.Header.Set("Accept", "application/json")
		req.Header.Set("User-Agent", "HiTechPos-Go-SDK/"+Version)
		if c.token != "" {
			req.Header.Set("Authorization", "Bearer "+c.token)
		}

		resp, err := c.httpClient.Do(req)
		if err != nil {
			lastErr = err
			if attempt < c.maxRetries {
				time.Sleep(time.Duration(1<<uint(attempt)) * time.Second)
				continue
			}
			return nil, fmt.Errorf("request failed: %w", err)
		}

		respBody, _ := io.ReadAll(resp.Body)
		resp.Body.Close()

		if resp.StatusCode == 429 && attempt < c.maxRetries {
			seconds, _ := strconv.Atoi(resp.Header.Get("Retry-After"))
			if seconds == 0 {
				seconds = 1 << uint(attempt)
			}
			time.Sleep(time.Duration(seconds) * time.Second)
			continue
		}
		if resp.StatusCode >= 500 && attempt < c.maxRetries {
			time.Sleep(time.Duration(1<<uint(attempt)) * time.Second)
			continue
		}

		var result map[string]interface{}
		if len(respBody) > 0 {
			if err := json.Unmarshal(respBody, &result); err != nil {
				if resp.StatusCode >= 400 {
					return nil, mapError(resp.StatusCode, map[string]interface{}{"message": string(respBody)}, 60)
				}
				return nil, fmt.Errorf("unmarshal response: %w", err)
			}
		}

		if resp.StatusCode >= 400 {
			retryAfter, _ := strconv.Atoi(resp.Header.Get("Retry-After"))
			if retryAfter == 0 {
				retryAfter = 60
			}
			return nil, mapError(resp.StatusCode, result, retryAfter)
		}
		return result, nil
	}
	return nil, lastErr
}

// Get performs a GET request.
func (c *HTTPClient) Get(path string, params map[string]string) (map[string]interface{}, error) {
	return c.Request("GET", path, nil, params)
}

// Post performs a POST request.
func (c *HTTPClient) Post(path string, body interface{}) (map[string]interface{}, error) {
	return c.Request("POST", path, body, nil)
}

// Put performs a PUT request.
func (c *HTTPClient) Put(path string, body interface{}) (map[string]interface{}, error) {
	return c.Request("PUT", path, body, nil)
}

// Delete performs a DELETE request.
func (c *HTTPClient) Delete(path string) (map[string]interface{}, error) {
	return c.Request("DELETE", path, nil, nil)
}
