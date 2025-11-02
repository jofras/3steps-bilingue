// src/pages/Partners.js

"use client";

import { useTranslations, useLocale } from 'next-intl';
import SectionBlock from '../components/SectionBlock';
import Image from 'next/image'; 
import Link from 'next/link';

// logo imports
import slapshootLogo from '../images/partners/slapshoot.png';

const partners = [
  { name: 'Slapshoot Photo Company', logo: slapshootLogo, url: 'https://slapshoot-photocompany.jimdosite.com/' },
];

export default function Partners() {
  const t = useTranslations('partners');
  const locale = useLocale();
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 -mt-4 md:mt-8">
      <SectionBlock
        title={t('title')} 
        bg="white"
        cta={
          <div className="mt-10 md:mt-6">
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t("button")}
            </Link>
          </div>
        }
        padding="px-8 md:px-8"
      >
        <p className="mb-8">
          {t('subtitle')} 
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center mb-8">
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 h-28 flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Image 
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={192}
                height={112}
                className="h-full max-h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}