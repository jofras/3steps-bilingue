// src/app/legal/layout.js (The navigation menu)

"use client"; // Required for usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LegalLayout({ children }) {
  const pathname = usePathname();

  const linkClass = (path) => 
    `text-sm md:text-lg font-medium transition-colors ${
      pathname.includes(path) ? 'text-primary' : 'text-textdark hover:text-primary'
    }`;
    
  // NOTE: The inline CSS logic (.disclaimer-title) has been removed here.
  // It should be moved to src/app/globals.css if needed.

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 -mt-2 md:mt-2">
      <nav className="flex gap-6 justify-center mb-8">
        <Link href="/legal/impressum" className={linkClass('/impressum')}>Legal Notice</Link>
        <Link href="/legal/privacy" className={linkClass('/privacy')}>Privacy Policy</Link>
        <Link href="/legal/terms" className={linkClass('/terms')}>Terms & Conditions</Link>
      </nav>
      
      {/* Renders the specific sub-page content */}
      {children} 
    </div>
  );
}