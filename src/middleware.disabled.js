// src/middleware.js

import { NextResponse } from 'next/server';

const locales = ['en', 'de'];
const defaultLocale = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect root "/" to "/en"
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Redirect any non-locale top-level route to default locale
  const pathLocale = pathname.split('/')[1];
  if (!locales.includes(pathLocale) && pathLocale !== '') {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ]
};