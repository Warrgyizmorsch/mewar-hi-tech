import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Job from "@/models/Job";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Job ID is required" },
        { status: 400 }
      );
    }
    
    const body = await req.json();
    
    const updatedJob = await Job.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    
    if (!updatedJob) {
      return NextResponse.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: updatedJob });
  } catch (error: any) {
    console.error("Error updating job:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update job" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Job ID is required" },
        { status: 400 }
      );
    }
    
    const deletedJob = await Job.findByIdAndDelete(id);
    
    if (!deletedJob) {
      return NextResponse.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: "Job deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting job:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete job" },
      { status: 500 }
    );
  }
}
