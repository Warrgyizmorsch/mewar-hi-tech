import { NextRequest } from "next/server";

const encoder = new TextEncoder();

/**
 * Derives a CryptoKey for HMAC-SHA256 from the JWT secret
 */
async function getSecretKey(): Promise<CryptoKey> {
  const secret = process.env.JWT_SECRET || "mewar-hi-tech-default-secure-secret-2026";
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

/**
 * Base64 URL encode helper
 */
function toBase64Url(str: string): string {
  return btoa(str)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/**
 * Base64 URL decode helper
 */
function fromBase64Url(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  return atob(base64);
}

/**
 * Generates a cryptographically signed HMAC token for admin session
 */
export async function signAdminToken(email: string): Promise<string> {
  const header = toBase64Url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7; // 7 days
  const payload = toBase64Url(
    JSON.stringify({
      email,
      role: "admin",
      exp,
      iat: Math.floor(Date.now() / 1000),
    })
  );
  const data = `${header}.${payload}`;

  const key = await getSecretKey();
  const signatureBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(data)
  );

  const signature = toBase64Url(
    String.fromCharCode(...new Uint8Array(signatureBuffer))
  );

  return `${data}.${signature}`;
}

/**
 * Verifies the cryptographically signed HMAC token
 */
export async function verifyAdminToken(token: string | undefined): Promise<boolean> {
  if (!token || typeof token !== "string") return false;

  try {
    const parts = token.split(".");
    if (parts.length !== 3) return false;

    const [header, payload, signature] = parts;
    const data = `${header}.${payload}`;

    // Verify expiration timestamp
    const decodedPayload = JSON.parse(fromBase64Url(payload));
    if (
      decodedPayload.exp &&
      decodedPayload.exp < Math.floor(Date.now() / 1000)
    ) {
      return false;
    }

    if (decodedPayload.role !== "admin") {
      return false;
    }

    const key = await getSecretKey();
    const rawSignature = fromBase64Url(signature);
    const sigBytes = new Uint8Array(rawSignature.length);
    for (let i = 0; i < rawSignature.length; i++) {
      sigBytes[i] = rawSignature.charCodeAt(i);
    }

    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBytes,
      encoder.encode(data)
    );

    return isValid;
  } catch {
    return false;
  }
}

/**
 * Helper to check admin authorization from NextRequest (Cookie or Authorization header)
 */
export async function isAdminAuthorized(req: NextRequest | Request): Promise<boolean> {
  let token: string | undefined;

  // Check cookie
  if ("cookies" in req && typeof req.cookies?.get === "function") {
    token = req.cookies.get("admin_token")?.value;
  }

  // Fallback to Cookie header
  if (!token) {
    const cookieHeader = req.headers.get("cookie") || "";
    const match = cookieHeader.match(/admin_token=([^;]+)/);
    if (match) {
      token = match[1];
    }
  }

  // Fallback to Authorization: Bearer <token>
  if (!token) {
    const authHeader = req.headers.get("authorization") || "";
    if (authHeader.startsWith("Bearer ")) {
      token = authHeader.substring(7).trim();
    }
  }

  return verifyAdminToken(token);
}
