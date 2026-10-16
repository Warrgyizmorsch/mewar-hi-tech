import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { isAdminAuthorized } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { message: "Invalid JSON request body" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!body || !body.name || !body.email || !body.phone || !body.message || !body.type) {
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
      { message: "Failed to submit enquiry. Please try again later." },
      { status: 500 }
    );
  }
}


export async function DELETE(req: NextRequest) {
  try {
    const isAuth = await isAdminAuthorized(req);
    if (!isAuth) {
      return NextResponse.json(
        { message: "Unauthorized. Admin authentication required." },
        { status: 401 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ message: "Invalid JSON request body" }, { status: 400 });
    }

    const { ids } = body || {};
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
    return NextResponse.json(
      { message: "Failed to delete enquiries" },
      { status: 500 }
    );
  }
}

