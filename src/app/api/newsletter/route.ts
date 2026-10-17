import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";

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

    if (!body || !body.email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { message: "Database connection failed. Please try again later." },
        { status: 503 }
      );
    }

    const existingSubscriber = await Newsletter.findOne({ email: body.email });
    if (existingSubscriber) {
      return NextResponse.json({ message: "Email is already subscribed" }, { status: 400 });
    }

    const subscriber = new Newsletter({
      email: body.email,
    });

    console.log("Saving newsletter subscriber to MongoDB...");
    await subscriber.save();
    console.log("Newsletter subscriber saved successfully!");

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "Failed to subscribe to newsletter. Please try again later." },
      { status: 500 }
    );
  }
}

