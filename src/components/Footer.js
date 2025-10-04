"use client";

import React from 'react';
import Link from 'next/link'; // Changed from 'react-router-dom'
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import mainIcon from '../assets/main_icon_cropped.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
        {/* Top row for mobile: logo + social */}
        <div className="w-full flex justify-between items-center md:justify-start md:gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* NOTE: Assets must be in the 'public' folder and referenced as '/main_icon_cropped.png' */}
            <img src={mainIcon.src || mainIcon} alt="3Steps Athletics Logo" className="h-8 md:h-10 object-contain" />
          </div>

          {/* Social media icons (mobile: right-aligned, desktop: hidden here) */}
          <div className="flex gap-x-4 md:hidden">
            <a href="https://instagram.com/yourorg" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-primary hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://facebook.com/yourorg" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-primary hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://linkedin.com/yourorg" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <Linkedin className="w-5 h-5 text-primary hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>

        {/* Nav links (mobile: centered below, desktop: inline with logo) */}
        <div className="w-full md:flex md:items-center md:justify-end md:gap-x-8">
          <div className="flex flex-wrap justify-center gap-x-6 text-textdark text-sm md:justify-end">
            {/* Changed 'to' to 'href' */}
            <Link href="/about/whoweare" className="hover:text-primary transition-colors">Team</Link>
            <Link href="/about/why-3-steps" className="hover:text-primary transition-colors">Mission</Link>
            <Link href="/partners" className="hover:text-primary transition-colors">Partners</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
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
        &copy; {new Date().getFullYear()} 3Steps Athletics. All rights reserved.{' '}
        <Link
          href="/legalnotice" // Changed 'to' to 'href'
          className="underline hover:text-primary transition-colors"
        >
          Legal Notice
        </Link>
      </div>
    </footer>
  );
}