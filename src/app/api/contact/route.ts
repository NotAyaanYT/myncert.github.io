import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  return NextResponse.json({ success: true, message: 'Message received. We will get back to you soon.' });
}
