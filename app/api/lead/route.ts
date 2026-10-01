import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  intent?: string;
  area?: string;
  message?: string;
};

export async function POST(req: Request) {
  const lead = (await req.json().catch(() => null)) as Lead | null;

  if (!lead?.name?.trim() || (!lead.phone?.trim() && !lead.email?.trim())) {
    return NextResponse.json({ error: "Name and a phone number or email are required." }, { status: 400 });
  }

  const webhook = process.env.WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, source: "taniajaturner.com", submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Could not deliver your message. Please call or text instead." }, { status: 502 });
    }
  } else {
    console.warn("WEBHOOK_URL is not set — lead not forwarded:", lead);
  }

  return NextResponse.json({ ok: true });
}
