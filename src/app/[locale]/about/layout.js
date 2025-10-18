// src/app/[locale]/about/layout.js (about navigation menu)

"use client"; 

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useTranslations } from 'use-intl';

export default function AboutLayout({ children }) {
  const pathname = usePathname();
  const params = useParams(); 
  const locale = params.locale; 
  const isActive = (path) => pathname.includes(path);

  const t = useTranslations('about')

  const linkClass = (path) =>
    `text-sm md:text-lg font-medium transition-colors ${isActive(path) ? 'text-primary' : 'text-textdark hover:text-primary'
    }`;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 -mt-2 md:mt-2">
      <nav className="flex gap-6 justify-center mb-8">
        <Link
          href={`/${locale}/about/whoweare`}
          className={linkClass('/whoweare')}
        >
          {t('whoweare.title')}
        </Link>
        <Link
          href={`/${locale}/about/purpose`} 
          className={linkClass('/purpose')}
        >
          {t('purpose.title')}
        </Link>
        <Link
          href={`/${locale}/about/why-3-steps`} 
          className={linkClass('/why-3-steps')}
        >
          {t('why3steps.title')}
        </Link>
      </nav>

      {children}
    </div>
  );
}