import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { isAdminAuthorized } from "@/lib/auth";
import {
  containsScriptOrCode,
  validateAddress,
  validateCompanyName,
  validateEmailAddress,
  validateMobileNumber,
  validatePersonName,
  validateQueryText,
} from "@/lib/validation";

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

    if (!["Contact", "Product", "SparePart", "Both"].includes(body.type)) {
      return NextResponse.json(
        { message: "Invalid enquiry type" },
        { status: 400 }
      );
    }

    const stringFields = [
      body.name,
      body.email,
      body.phone,
      body.company,
      body.address,
      body.message,
      body.productName,
      body.machineType,
      body.partName,
    ];
    if (stringFields.some((val) => typeof val === "string" && containsScriptOrCode(val))) {
      return NextResponse.json(
        { message: "Script tags, script files, and HTML content are not allowed." },
        { status: 400 }
      );
    }

    const requireCompany =
      body.source === "brochure" ||
      body.source === "enquiry-modal" ||
      body.source === "contact-page";
    const requireAddress =
      body.source === "enquiry-modal" || body.source === "contact-page";

    const validationError =
      validatePersonName(String(body.name || "")) ||
      validateEmailAddress(String(body.email || "")) ||
      validateMobileNumber(String(body.phone || "")) ||
      validateCompanyName(String(body.company || ""), requireCompany) ||
      validateAddress(String(body.address || ""), requireAddress) ||
      validateQueryText(String(body.message || ""), "Message", true);

    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
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
      name: String(body.name).trim(),
      email: String(body.email).trim(),
      phone: String(body.phone).trim(),
      company: body.company ? String(body.company).trim() : undefined,
      address: body.address ? String(body.address).trim() : undefined,
      message: String(body.message).trim(),
      type: body.type,
      productName: body.productName || undefined,
      machineType: body.machineType || undefined,
      partName: body.partName || undefined,
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

export async function PATCH(req: NextRequest) {
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

    const { id, status } = body || {};
    const validStatuses = ["Pending", "Connected", "In Discussion", "Converted", "Disqualified", "Rejected"];
    if (!id || !status || !validStatuses.includes(status)) {
      return NextResponse.json({ message: "Invalid enquiry ID or status" }, { status: 400 });
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({ message: "Database connection failed." }, { status: 503 });
    }

    const updated = await Enquiry.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ message: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Status updated successfully", enquiry: updated },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Enquiry status update error:", error);
    return NextResponse.json(
      { message: "Failed to update enquiry status" },
      { status: 500 }
    );
  }
}

