import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { signAdminToken } from "@/lib/auth";

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

    const { email, password } = body || {};

    // 1. Super Admin Credentials
    const configuredEmail = process.env.ADMIN_EMAIL || "admin@mewar.com";
    const configuredPassword = process.env.ADMIN_PASSWORD || "Admin@123";

    // 2. Spare Parts Department Credentials
    const sparePartsEmail = process.env.SPARE_PARTS_EMAIL || "spareparts@mewar.com";
    const sparePartsAltEmail = "spareparts@mewarhitech.com";
    const sparePartsPassword = process.env.SPARE_PARTS_PASSWORD || "SpareParts@123";

    let role = "";
    let userEmail = "";

    if (email === configuredEmail && password === configuredPassword) {
      role = "admin";
      userEmail = email;
    } else if (
      (email === sparePartsEmail || email === sparePartsAltEmail) &&
      password === sparePartsPassword
    ) {
      role = "spare_parts";
      userEmail = email;
    }

    if (role) {
      const token = await signAdminToken(userEmail, role);
      const cookieStore = await cookies();
      cookieStore.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      return NextResponse.json({ success: true, role });
    }

    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

