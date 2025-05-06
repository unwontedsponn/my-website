// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Here you'd integrate with a mail service like Resend, SendGrid, or forward to your own inbox.
  // For now, just log or simulate
  console.log('Contact form submitted:', { name, email, message });

  return NextResponse.json({ success: true });
}
