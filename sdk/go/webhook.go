package hitechpos

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
)

// Webhook headers emitted by HiTechPos.
const (
	SignatureHeader = "X-HitechPos-Signature"
	EventHeader     = "X-HitechPos-Event"
	DeliveryHeader  = "X-HitechPos-Delivery"
)

// ComputeSignature returns the hex HMAC-SHA256 of payload keyed by secret.
func ComputeSignature(secret string, payload []byte) string {
	mac := hmac.New(sha256.New, []byte(secret))
	mac.Write(payload)
	return hex.EncodeToString(mac.Sum(nil))
}

// VerifySignature constant-time compares the incoming signature.
func VerifySignature(secret string, payload []byte, signature string) bool {
	expected := ComputeSignature(secret, payload)
	return hmac.Equal([]byte(expected), []byte(signature))
}

// ParseEvent decodes a webhook JSON payload.
func ParseEvent(payload []byte) (map[string]interface{}, error) {
	var out map[string]interface{}
	err := json.Unmarshal(payload, &out)
	return out, err
}
