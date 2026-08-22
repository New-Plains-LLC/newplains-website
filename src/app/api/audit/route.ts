import { NextRequest, NextResponse } from "next/server";

type AuditPayload = {
  name?: string;
  email?: string;
  company?: string;
  workflow?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: AuditPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const workflow = body.workflow?.trim() ?? "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (!name || !workflow) {
    return NextResponse.json(
      { error: "Name and workflow description required" },
      { status: 400 },
    );
  }

  // Placeholder — log to server output.
  // Wire to your inbox / CRM as the next step.
  console.log("[audit]", {
    ts: new Date().toISOString(),
    name,
    email,
    company,
    workflow,
  });

  return NextResponse.json({ ok: true });
}
