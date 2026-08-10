import mongoose from "mongoose";
import dns from "dns";

// Set public DNS servers to prevent querySrv ECONNREFUSED errors caused by local ISP/Router DNS
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (err) {
  console.warn("Could not set custom DNS servers:", err);
}

// Global is used here to maintain a cached connection across hot reloads in development.
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    console.warn(
      "MONGODB_URI environment variable is missing inside .env.local or Vercel Environment Variables"
    );
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    try {
      dns.setServers(["8.8.8.8", "1.1.1.1"]);
    } catch {}

    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((m) => m)
      .catch((err) => {
        cached.promise = null;
        console.warn("MongoDB Connection Failed (Handled):", err.message || err);
        return null;
      });
  }

  cached.conn = await cached.promise;
  if (!cached.conn) {
    cached.promise = null;
  }

  return cached.conn;
}

export default connectToDatabase;
