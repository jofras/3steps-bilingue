// src/middleware.js
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'de'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Prefix strategy: 'always' shows /en and /de, 'as-needed' only shows /de
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};