import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { isAdminAuthorized } from "@/lib/auth";

export const dynamic = "force-dynamic";

// Safely obtain sharp instance if native platform binary is available
async function getSharpInstance() {
  try {
    const sharpModule = await import("sharp");
    return sharpModule.default || sharpModule;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const isAuth = await isAdminAuthorized(req);
    if (!isAuth) {
      return NextResponse.json(
        { error: "Unauthorized. Admin authentication required." },
        { status: 401 }
      );
    }

    const contentType = req.headers.get("content-type") || "";
    const uploadDir = path.join(process.cwd(), "public/uploads");
    await mkdir(uploadDir, { recursive: true }).catch(() => {});

    // 1. Support Base64 Image Upload (for clipboard pasted images in Quill)
    if (contentType.includes("application/json")) {
      const body = await req.json().catch(() => ({}));
      const { base64, filename: customName } = body;

      if (!base64 || typeof base64 !== "string") {
        return NextResponse.json({ error: "Invalid base64 payload." }, { status: 400 });
      }

      // Extract mime type and raw base64 data
      const matches = base64.match(/^data:([A-Za-z-+]+);base64,(.+)$/) || base64.match(/^data:([^;]+);base64,(.+)$/);
      let buffer: Buffer;
      let ext = ".jpg";

      if (matches && matches.length === 3) {
        const mime = matches[1];
        if (mime.includes("png")) ext = ".png";
        else if (mime.includes("webp")) ext = ".webp";
        else if (mime.includes("gif")) ext = ".gif";
        buffer = Buffer.from(matches[2], "base64");
      } else {
        buffer = Buffer.from(base64, "base64");
      }

      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      let filename = `${uniqueSuffix}-${(customName || "image").replace(/[^a-zA-Z0-9.-]/g, "")}`;
      if (!filename.endsWith(ext)) filename += ext;

      // Optimize image buffer with sharp if available on the server
      let finalBuffer = buffer;
      try {
        const sharpInstance = await getSharpInstance();
        if (sharpInstance) {
          finalBuffer = await sharpInstance(buffer)
            .resize({ width: 1920, withoutEnlargement: true })
            .webp({ quality: 85 })
            .toBuffer();
          filename = filename.replace(/\.[^.]+$/, ".webp");
        }
      } catch {
        // Fallback to original buffer if sharp fails or binary is incompatible
      }

      const filepath = path.join(uploadDir, filename);
      await writeFile(filepath, finalBuffer);
      return NextResponse.json({ url: `/uploads/${filename}` });
    }

    // 2. Support Multipart Form Data (standard file upload)
    if (contentType.includes("multipart/form-data")) {
      let data: FormData;
      try {
        data = await req.formData();
      } catch {
        return NextResponse.json(
          { error: "Failed to parse form data." },
          { status: 400 }
        );
      }

      const file: File | null = data.get("file") as unknown as File;
      if (!file || typeof file.arrayBuffer !== "function") {
        return NextResponse.json({ error: "No file received." }, { status: 400 });
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const originalName = (file.name || "upload").replace(/[^a-zA-Z0-9.-]/g, "");
      let filename = `${uniqueSuffix}-${originalName}`;
      const isImage = file.type?.startsWith("image/") || /\.(jpg|jpeg|png|webp)$/i.test(originalName);

      let finalBuffer = buffer;

      if (isImage) {
        try {
          const sharpInstance = await getSharpInstance();
          if (sharpInstance) {
            finalBuffer = await sharpInstance(buffer)
              .resize({ width: 1920, withoutEnlargement: true })
              .webp({ quality: 85 })
              .toBuffer();
            filename = filename.replace(/\.[^.]+$/, ".webp");
          }
        } catch {
          // If sharp optimization fails, preserve original buffer
          finalBuffer = buffer;
        }
      }

      const filepath = path.join(uploadDir, filename);
      await writeFile(filepath, finalBuffer);

      return NextResponse.json({ url: `/uploads/${filename}` });
    }

    return NextResponse.json(
      { error: "Unsupported content type." },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ error: "Failed to upload file." }, { status: 500 });
  }
}
