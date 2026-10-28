/**
 * Ultra-Fast In-Memory TTL Cache for Node.js / Next.js Runtime
 * Provides sub-millisecond retrieval without external dependencies.
 * Perfect for shared hosting (Namecheap/cPanel) where local Redis is unavailable.
 */

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

// Global scope ensures persistence across hot reloads in development
const globalCache = (global as any).__mewar_cache || new Map<string, CacheEntry<any>>();
if (!(global as any).__mewar_cache) {
  (global as any).__mewar_cache = globalCache;
}

/**
 * Retrieve a cached value if it has not expired
 */
export function getCache<T>(key: string): T | null {
  const entry = globalCache.get(key);
  if (!entry) return null;

  if (Date.now() > entry.expiresAt) {
    globalCache.delete(key);
    return null;
  }

  return entry.value as T;
}

/**
 * Store a value in memory with a Time-To-Live (in seconds)
 */
export function setCache<T>(key: string, value: T, ttlSeconds: number = 60): void {
  globalCache.set(key, {
    value,
    expiresAt: Date.now() + ttlSeconds * 1000,
  });
}

/**
 * Invalidate a specific key or all keys matching a prefix
 */
export function invalidateCache(prefixOrKey: string): void {
  for (const key of globalCache.keys()) {
    if (key === prefixOrKey || key.startsWith(prefixOrKey)) {
      globalCache.delete(key);
    }
  }
}

/**
 * Clear the entire memory cache
 */
export function clearCache(): void {
  globalCache.clear();
}

