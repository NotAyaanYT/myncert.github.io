import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (email === 'admin@ncertsolutionshub.com' && password === 'admin123') {
    return NextResponse.json({
      success: true,
      user: { id: '1', name: 'Admin', email, role: 'admin' },
    });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
