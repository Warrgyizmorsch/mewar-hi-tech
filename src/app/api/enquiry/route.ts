import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message || !body.type) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!["Contact", "Product"].includes(body.type)) {
      return NextResponse.json(
        { message: "Invalid enquiry type" },
        { status: 400 }
      );
    }

    // Connect to database
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { message: "Database connection failed. Please try again later." },
        { status: 503 }
      );
    }

    const enquiry = new Enquiry({
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company || undefined,
      address: body.address || undefined,
      message: body.message,
      type: body.type,
      productName: body.productName || undefined,
    });

    console.log("Saving enquiry to MongoDB...");
    await enquiry.save();
    console.log("Enquiry saved successfully!");

    return NextResponse.json(
      { message: "Enquiry submitted successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { message: "Internal server error: " + (error.message || "Unknown error") },
      { status: 500 }
    );
  }
}

