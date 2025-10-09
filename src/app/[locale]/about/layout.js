// src/app/about/layout.js (The navigation menu)

"use client"; // Must be a Client Component to use usePathname

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';

export default function AboutLayout({ children }) {
  const pathname = usePathname();
  const params = useParams(); // 💡 Get params
  const locale = params.locale; // 💡 Get the current locale ('en', 'de', etc.)
  // Function to determine if a link is active
  const isActive = (path) => pathname.includes(path);

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
          Who We Are
        </Link>
        <Link
          href={`/${locale}/about/purpose`} 
          className={linkClass('/purpose')}
        >
          Our Purpose
        </Link>
        <Link
          href={`/${locale}/about/why-3-steps`} 
          className={linkClass('/why-3-steps')}
        >
          Why 3 Steps?
        </Link>
      </nav>

      {/* Renders the specific sub-page content (e.g., purpose/page.js) */}
      {children}
    </div>
  );
}