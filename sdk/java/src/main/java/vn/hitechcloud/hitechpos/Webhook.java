package vn.hitechcloud.hitechpos;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.util.Map;

public class Webhook {
    public static final String SIGNATURE_HEADER = "X-HitechPos-Signature";
    public static final String EVENT_HEADER = "X-HitechPos-Event";
    public static final String DELIVERY_HEADER = "X-HitechPos-Delivery";

    public static String computeSignature(String secret, String payload) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
            byte[] raw = mac.doFinal(payload.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte b : raw) sb.append(String.format("%02x", b));
            return sb.toString();
        } catch (Exception e) {
            throw new RuntimeException("Unable to compute signature", e);
        }
    }

    public static boolean verifySignature(String secret, String payload, String signature) {
        String expected = computeSignature(secret, payload);
        if (signature == null || expected.length() != signature.length()) return false;
        int diff = 0;
        for (int i = 0; i < expected.length(); i++) diff |= expected.charAt(i) ^ signature.charAt(i);
        return diff == 0;
    }

    public static Map<String, Object> parseEvent(String payload) {
        Type mapType = new TypeToken<Map<String, Object>>() {}.getType();
        return new Gson().fromJson(payload, mapType);
    }
}
