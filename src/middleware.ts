import { NextRequest, NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

export { default } from "next-auth/middleware"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const url = request.nextUrl

  // Allow unauthenticated access to sign-in and sign-up pages
  if (!token && (url.pathname.startsWith('/auth/sign-in') || url.pathname.startsWith('/auth/sign-up'))) {
    return NextResponse.next()
  }

  // Redirect authenticated users to dashboard if they are trying to access sign-in or sign-up
  if (token && (url.pathname.startsWith('/auth/sign-in') || url.pathname.startsWith('/auth/sign-up'))) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Allow other paths if authenticated
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/auth/sign-in',
    '/auth/sign-up',
    '/',
    '/dashboard/:path*',
    '/verify/:path*',
  ],
}
