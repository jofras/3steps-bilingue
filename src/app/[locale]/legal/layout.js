// src/app/[locale]/legal/layout.js
"use client";

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';

export default function LegalLayout({ children }) {
  const pathname = usePathname();
  const { locale } = useParams();

  const linkClass = (path) =>
    `text-sm md:text-lg font-medium transition-colors ${
      pathname.includes(path)
        ? 'text-primary'
        : 'text-textdark hover:text-primary'
    }`;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 -mt-2 md:mt-2">
      <nav className="flex gap-6 justify-center mb-8">
        <Link href={`/${locale}/legal/impressum`} className={linkClass('/impressum')}>
          Legal Notice
        </Link>
        <Link href={`/${locale}/legal/privacy`} className={linkClass('/privacy')}>
          Privacy Policy
        </Link>
        <Link href={`/${locale}/legal/terms`} className={linkClass('/terms')}>
          Terms & Conditions
        </Link>
      </nav>
      {children}
    </div>
  );
}
