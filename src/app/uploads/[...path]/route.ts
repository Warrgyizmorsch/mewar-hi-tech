import { NextRequest, NextResponse } from "next/server";
import { readFile, stat } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

const MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

async function handleFileRequest(
  paramsPromise: Promise<{ path: string[] }>,
  isHead = false
): Promise<Response> {
  try {
    const { path: rawSegments } = await paramsPromise;

    if (!rawSegments || rawSegments.length === 0) {
      return new NextResponse("Not Found", { status: 404 });
    }

    // Decode and validate segments to prevent directory traversal
    const pathSegments = rawSegments.map((segment) => {
      try {
        return decodeURIComponent(segment);
      } catch {
        return segment;
      }
    });

    for (const segment of pathSegments) {
      if (
        segment.includes("..") ||
        segment.includes("/") ||
        segment.includes("\\")
      ) {
        return new NextResponse("Forbidden", { status: 403 });
      }
    }

    const uploadBaseDir = path.resolve(process.cwd(), "public", "uploads");
    const filePath = path.resolve(uploadBaseDir, ...pathSegments);

    // Verify the resolved path is strictly within the uploads directory
    if (!filePath.startsWith(uploadBaseDir)) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    // Verify the file exists and is a regular file
    let fileStat;
    try {
      fileStat = await stat(filePath);
      if (!fileStat.isFile()) {
        return new NextResponse("Not Found", { status: 404 });
      }
    } catch {
      return new NextResponse("Not Found", { status: 404 });
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    const headers = new Headers();
    headers.set("Content-Type", contentType);
    headers.set("Content-Length", String(fileStat.size));
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    if (isHead) {
      return new NextResponse(null, { status: 200, headers });
    }

    const fileBuffer = await readFile(filePath);
    return new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error serving uploaded file:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleFileRequest(params, false);
}

export async function HEAD(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return handleFileRequest(params, true);
}
