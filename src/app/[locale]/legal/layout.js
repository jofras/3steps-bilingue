// src/app/[locale]/legal/layout.js
"use client";

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useTranslations } from 'use-intl';

export default function LegalLayout({ children }) {
  const pathname = usePathname();
  const params = useParams(); 
  const locale = params.locale; 

  const linkClass = (path) =>
    `text-sm md:text-lg font-medium transition-colors ${
      pathname.includes(path)
        ? 'text-primary'
        : 'text-textdark hover:text-primary'
    }`;

  const t = useTranslations('legal')

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 -mt-2 md:mt-2">
      <nav className="flex gap-6 justify-center mb-8">
        <Link href={`/${locale}/legal/impressum`} className={linkClass('/impressum')}>
          {t('impressum.title')}
        </Link>
        <Link href={`/${locale}/legal/privacy`} className={linkClass('/privacy')}>
          {t('privacy.title')}
        </Link>
        <Link href={`/${locale}/legal/terms`} className={linkClass('/terms')}>
          {t('terms.headerTitle')}
        </Link>
      </nav>
      {children}
    </div>
  );
}
