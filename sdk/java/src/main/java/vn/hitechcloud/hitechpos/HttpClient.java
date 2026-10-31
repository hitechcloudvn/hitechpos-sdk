package vn.hitechcloud.hitechpos;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.lang.reflect.Type;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;

public class HttpClient {
    private final String baseUrl;
    private final int timeout;
    private final int maxRetries;
    private String token;
    private final Gson gson = new Gson();

    public HttpClient(String baseUrl, String token, int timeout, int maxRetries) {
        this.baseUrl = baseUrl.replaceAll("/$", "");
        this.token = token;
        this.timeout = timeout;
        this.maxRetries = maxRetries;
    }

    public void setToken(String token) { this.token = token; }
    public void clearToken() { this.token = null; }

    public Map<String, Object> request(String method, String path, Object body, Map<String, String> params) {
        Exception lastError = null;
        for (int attempt = 0; attempt <= maxRetries; attempt++) {
            try {
                StringBuilder urlStr = new StringBuilder(baseUrl).append(path);
                if (params != null && !params.isEmpty()) {
                    boolean first = true;
                    for (Map.Entry<String, String> e : params.entrySet()) {
                        urlStr.append(first ? "?" : "&");
                        urlStr.append(URLEncoder.encode(e.getKey(), StandardCharsets.UTF_8));
                        urlStr.append("=");
                        urlStr.append(URLEncoder.encode(e.getValue(), StandardCharsets.UTF_8));
                        first = false;
                    }
                }
                HttpURLConnection conn = (HttpURLConnection) new URL(urlStr.toString()).openConnection();
                conn.setRequestMethod(method);
                conn.setConnectTimeout(timeout * 1000);
                conn.setReadTimeout(timeout * 1000);
                conn.setRequestProperty("Content-Type", "application/json");
                conn.setRequestProperty("Accept", "application/json");
                conn.setRequestProperty("User-Agent", "HiTechPos-Java-SDK/" + HiTechPos.VERSION);
                if (token != null) {
                    conn.setRequestProperty("Authorization", "Bearer " + token);
                }
                if (body != null && ("POST".equals(method) || "PUT".equals(method))) {
                    conn.setDoOutput(true);
                    try (OutputStream os = conn.getOutputStream()) {
                        os.write(gson.toJson(body).getBytes(StandardCharsets.UTF_8));
                    }
                }

                int status = conn.getResponseCode();
                if (status == 429 && attempt < maxRetries) {
                    String ra = conn.getHeaderField("Retry-After");
                    int seconds = ra != null ? Integer.parseInt(ra) : (1 << attempt);
                    Thread.sleep(seconds * 1000L);
                    continue;
                }
                if (status >= 500 && attempt < maxRetries) {
                    Thread.sleep((long) Math.pow(2, attempt) * 1000);
                    continue;
                }

                InputStream is = status >= 400 ? conn.getErrorStream() : conn.getInputStream();
                String responseBody = readStream(is);
                Type mapType = new TypeToken<Map<String, Object>>() {}.getType();
                Map<String, Object> result = responseBody.isEmpty() ? null : gson.fromJson(responseBody, mapType);

                if (status >= 400) {
                    int ra = 60;
                    String raHeader = conn.getHeaderField("Retry-After");
                    if (raHeader != null) {
                        try { ra = Integer.parseInt(raHeader); } catch (NumberFormatException ignored) {}
                    }
                    throw mapError(status, result, ra);
                }
                return result;
            } catch (HiTechPosException e) {
                throw e;
            } catch (Exception e) {
                lastError = e;
                if (attempt < maxRetries) {
                    try { Thread.sleep((long) Math.pow(2, attempt) * 1000); }
                    catch (InterruptedException ie) { Thread.currentThread().interrupt(); }
                }
            }
        }
        throw new HiTechPosException("Request failed: " + (lastError != null ? lastError.getMessage() : "unknown"), 0, null);
    }

    public Map<String, Object> get(String path, Map<String, String> params) { return request("GET", path, null, params); }
    public Map<String, Object> get(String path) { return request("GET", path, null, null); }
    public Map<String, Object> post(String path, Object body) { return request("POST", path, body, null); }
    public Map<String, Object> put(String path, Object body) { return request("PUT", path, body, null); }
    public Map<String, Object> delete(String path) { return request("DELETE", path, null, null); }

    private String readStream(InputStream is) throws IOException {
        if (is == null) return "";
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8))) {
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) sb.append(line);
            return sb.toString();
        }
    }

    private HiTechPosException mapError(int status, Map<String, Object> data, int retryAfter) {
        String message = "API error";
        if (data != null) {
            if (data.get("error") != null) message = data.get("error").toString();
            else if (data.get("message") != null) message = data.get("message").toString();
        }
        switch (status) {
            case 401: return new AuthenticationException(message, status, data);
            case 403: return new AuthorizationException(message, status, data);
            case 404: return new NotFoundException(message, status, data);
            case 422: return new ValidationException(message, status, data);
            case 429: return new RateLimitException(message, status, data, retryAfter);
            default:
                if (status >= 500) return new ServerException(message, status, data);
                return new HiTechPosException(message, status, data);
        }
    }
}
