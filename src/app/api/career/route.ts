import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import connectToDatabase from "@/lib/mongodb";
import Career from "@/models/Career";
import {
  containsScriptOrCode,
  validateCompanyName,
  validateEmailAddress,
  validateExperience,
  validateMobileNumber,
  validatePersonName,
  validateResumeFile,
} from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { message: "Invalid content type. multipart/form-data is required." },
        { status: 400 }
      );
    }

    let formData: FormData;
    try {
      formData = await req.formData();
    } catch {
      return NextResponse.json(
        { message: "Failed to parse form data." },
        { status: 400 }
      );
    }
    
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const position = String(formData.get("position") || "").trim();
    const experience = String(formData.get("experience") || "").trim();
    const file = formData.get("resume") as File | null;

    if ([name, email, phone, position, experience].some((val) => containsScriptOrCode(val))) {
      return NextResponse.json(
        { message: "Script tags, script files, and HTML content are not allowed." },
        { status: 400 }
      );
    }

    const validationError =
      validatePersonName(name) ||
      validateEmailAddress(email) ||
      validateMobileNumber(phone) ||
      validateCompanyName(position, true) ||
      validateExperience(experience, true) ||
      validateResumeFile(file);

    if (validationError || !file) {
      return NextResponse.json(
        { message: validationError || "Missing required fields" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create sanitized unique filename
    const safeBaseName = path.basename(file.name).replace(/[^A-Za-z0-9._-]/g, "_");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = uniqueSuffix + "-" + safeBaseName;
    
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
      experience,
      resumeUrl,
    });

    console.log("Saving career application to MongoDB...");
    await careerApp.save();
    console.log("Career application saved successfully!");

    return NextResponse.json({ message: "Application submitted successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("Career application error:", error);
    return NextResponse.json(
      { message: "Failed to submit career application. Please try again later." },
      { status: 500 }
    );
  }
}

