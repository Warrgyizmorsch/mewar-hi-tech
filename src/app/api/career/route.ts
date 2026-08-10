import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import connectToDatabase from "@/lib/mongodb";
import Career from "@/models/Career";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const experience = formData.get("experience") as string;
    const file = formData.get("resume") as File;

    if (!name || !email || !phone || !position || !file) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = uniqueSuffix + "-" + file.name.replace(/\s/g, "_");
    
    const uploadDir = path.join(process.cwd(), "public/uploads/resumes");
    const filepath = path.join(uploadDir, filename);

    // Write file to public/uploads/resumes
    await writeFile(filepath, buffer);

    const resumeUrl = `/uploads/resumes/${filename}`;

    // Save to DB
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { message: "Database connection failed. Please try again later." },
        { status: 503 }
      );
    }
    
    const careerApp = new Career({
      name,
      email,
      phone,
      position,
      experience: experience || undefined,
      resumeUrl,
    });

    console.log("Saving career application to MongoDB...");
    await careerApp.save();
    console.log("Career application saved successfully!");

    return NextResponse.json({ message: "Application submitted successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("Career application error:", error);
    return NextResponse.json(
      { message: "Internal server error: " + (error.message || "Unknown error") },
      { status: 500 }
    );
  }
}
