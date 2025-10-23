'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    const supportedLocales = ['en', 'de'];
    const locale = supportedLocales.includes(browserLang) ? browserLang : 'en';
    
    // Redirect to detected or default locale
    window.location.replace(`/${locale}`);
  }, []);

  // Show nothing while redirecting
  return null;
}