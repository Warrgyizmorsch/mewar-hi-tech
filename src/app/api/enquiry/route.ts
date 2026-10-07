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
      const message = process.env.MONGODB_URI
        ? "Database connection failed. Please try again later."
        : "Database is not configured on this server. Add the MONGODB_URI environment variable in production.";

      return NextResponse.json({ message }, { status: 503 });
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

export async function DELETE(req: NextRequest) {
  try {
    const { ids } = await req.json();
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ message: "No IDs provided for deletion" }, { status: 400 });
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({ message: "Database connection failed." }, { status: 503 });
    }

    await Enquiry.deleteMany({ _id: { $in: ids } });

    return NextResponse.json({ message: "Enquiries deleted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Enquiry deletion error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
