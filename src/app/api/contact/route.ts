import { NextRequest, NextResponse } from "next/server";
import {
  buildContactEmailHtml,
  type ContactRequest,
} from "@/lib/contact";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactRequest;
    const payload: ContactRequest = {
      name: body.name?.trim() ?? "",
      email: body.email?.trim() ?? "",
      phone: body.phone?.trim() ?? "",
      address: body.address?.trim() ?? "",
      service: body.service?.trim() ?? "",
      budget: body.budget?.trim() ?? "",
      details: body.details?.trim() ?? "",
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const html = buildContactEmailHtml(payload);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Visionable Website <onboarding@resend.dev>",
        to: ["info@visionablelandscaping.com"],
        subject: `New Consultation: ${payload.name} — ${payload.service}`,
        html,
        reply_to: payload.email,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
