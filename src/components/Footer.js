// src/components/Footer.js

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import mainIcon from '../assets/main_icon_cropped.png';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
        {/* Top row for mobile: logo + social */}
        <div className="w-full flex justify-between items-center md:justify-start md:gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={mainIcon}
              alt="3Steps Athletics Logo"
              width={40}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Social media icons (mobile only) */}
          <div className="flex gap-x-4 md:hidden">
            <a href="https://instagram.com/3stepshockey" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-primary hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://facebook.com/3stepshockey" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-primary hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://linkedin.com/yourorg" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <Linkedin className="w-5 h-5 text-primary hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="w-full md:flex md:items-center md:justify-end md:gap-x-8">
          <div className="flex flex-wrap justify-center gap-x-6 text-textdark text-sm md:justify-end">
            <Link href={`/${locale}/about/whoweare`} className="hover:text-primary transition-colors">
              {t('team')}
            </Link>
            <Link href={`/${locale}/about/why-3-steps`} className="hover:text-primary transition-colors">
              {t('mission')}
            </Link>
            <Link href={`/${locale}/partners`} className="hover:text-primary transition-colors">
              {t('partners')}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-primary transition-colors">
              {t('contact')}
            </Link>
          </div>

          {/* Social Media Icons (desktop only) */}
          <div className="hidden md:flex justify-end gap-x-6 mt-4 md:mt-0">
            <a href="https://instagram.com/3stepshockey" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-primary hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://facebook.com/3stepshockey" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-primary hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://linkedin.com/yourorg" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <Linkedin className="w-5 h-5 text-primary hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-4 px-4">
        {t('copyright', { year: currentYear })}{' '}
        <Link
          href={`/${locale}/legal/impressum`}
          className="underline hover:text-primary transition-colors"
        >
          {t('legalNotice')}
        </Link>
      </div>
    </footer>
  );
}