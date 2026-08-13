import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Job from "@/models/Job";

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    
    // Parse query params (e.g., ?activeOnly=true)
    const { searchParams } = new URL(req.url);
    const activeOnly = searchParams.get("activeOnly") === "true";
    
    let query = {};
    if (activeOnly) {
      query = { isActive: true };
    }
    
    // Fetch jobs, sorted by newest first
    const jobs = await Job.find(query).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: jobs });
  } catch (error: any) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    
    const body = await req.json();
    
    // Validation
    const { title, department, experience, education, location, type } = body;
    if (!title || !department || !experience || !education || !location || !type) {
      return NextResponse.json(
        { success: false, message: "Please provide all required fields." },
        { status: 400 }
      );
    }
    
    const newJob = await Job.create(body);
    
    return NextResponse.json({ success: true, data: newJob }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to create job posting" },
      { status: 500 }
    );
  }
}
