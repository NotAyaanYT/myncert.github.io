import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import { verifyPassword, generateToken, setAuthCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Only allow the authorized admin email
    const ADMIN_EMAIL = 'am7641991@gmail.com';

    if (email !== ADMIN_EMAIL) {
      return NextResponse.json(
        { error: 'Access denied. Unauthorized email.' },
        { status: 403 }
      );
    }

    // Find user in database
    const user = await prisma.user.findUnique({
      where: { email },
      include: { roles: { include: { role: true } } },
    });

    if (!user || !user.isActive) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check if user has admin role
    const isAdmin = user.roles.some(ur => ur.role.name === 'admin');
    if (!isAdmin) {
      return NextResponse.json(
        { error: 'Access denied. Admin role required.' },
        { status: 403 }
      );
    }

    // Generate token
    const token = await generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: 'admin',
    });

    // Set auth cookie
    await setAuthCookie(token);

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    return NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email, role: 'admin' },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed. Please try again.' },
      { status: 500 }
    );
  }
}
