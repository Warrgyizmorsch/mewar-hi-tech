import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAdminSession } from '@/lib/auth'

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith('/admin')) {
    // Exclude the login page itself
    if (path === '/admin/login') {
      return NextResponse.next();
    }

    const token = request.cookies.get('admin_token')?.value;

    // Verify token and role cryptographically
    const session = await getAdminSession(token);
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Role guard: spare_parts role is only permitted to access /admin/enquiries
    if (session.role === 'spare_parts') {
      if (!path.startsWith('/admin/enquiries')) {
        return NextResponse.redirect(new URL('/admin/enquiries', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
}

