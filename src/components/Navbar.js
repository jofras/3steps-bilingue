// src/components/Navbar.js

"use client";

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import mainIcon from '../assets/main_icon_cropped.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Navigation items with translation keys
  const navItems = [
    { 
      labelKey: 'programs', 
      to: `/${locale}/programs` 
    },
    { 
      labelKey: 'multimedia', 
      to: `/${locale}/multimedia`, 
      dropdown: [
        { labelKey: 'visuals', to: `/${locale}/multimedia` },
        { labelKey: 'news', to: `/${locale}/news` }
      ]
    },
    { 
      labelKey: 'about', 
      to: `/${locale}/about/whoweare`, 
      dropdown: [
        { labelKey: 'whoweare', to: `/${locale}/about/whoweare` }, 
        { labelKey: 'purpose', to: `/${locale}/about/purpose` },
        { labelKey: 'why3steps', to: `/${locale}/about/why-3-steps` }
      ]
    },
    { labelKey: 'partners', to: `/${locale}/partners` },
    { labelKey: 'contact', to: `/${locale}/contact` },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDropdownEnter = (label) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setDropdownTimeout(timeout);
  };

  const switchLocale = (newLocale) => {
    // Remove current locale from pathname and replace with new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale || ''}`);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-nav transition-all duration-300 font-body">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-5">
        
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image
            src={mainIcon}
            alt="3Steps Athletics Logo"
            width={64}
            height={64}
            priority
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            item.dropdown ? (
              <div 
                key={item.labelKey}
                className="relative group"
                onMouseEnter={() => handleDropdownEnter(item.labelKey)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link 
                  href={item.to} 
                  className="font-medium text-lg text-textdark hover:text-primary transition-colors duration-200 focus:outline-none"
                >
                  {t(item.labelKey)}
                </Link>
                <div className={`absolute left-0 mt-2 w-48 bg-white rounded shadow-lg transition-opacity duration-200 pointer-events-none z-20 ${activeDropdown === item.labelKey ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}>
                  {item.dropdown.map((sub) => (
                    <Link 
                      key={sub.labelKey} 
                      href={sub.to} 
                      className="block px-4 py-2 text-base text-textdark hover:bg-background hover:text-primary transition-colors duration-150"
                    >
                      {t(sub.labelKey)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link 
                key={item.labelKey} 
                href={item.to} 
                className="font-medium text-lg text-textdark hover:text-primary transition-colors duration-200"
              >
                {t(item.labelKey)}
              </Link>
            )
          ))}

          {/* Language Switcher */}
          <button
            onClick={() => switchLocale(locale === 'en' ? 'de' : 'en')}
            className="ml-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium text-textdark transition-colors duration-200"
            aria-label="Switch language"
          >
            {locale === 'en' ? '🇩🇪 DE' : '🇬🇧 EN'}
          </button>
        </div>
        
        {/* Hamburger for mobile */}
        <button 
          className="md:hidden flex flex-col items-center gap-[4px]" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Open menu"
        >
          <span className="w-6 h-1 bg-primary rounded transition-all duration-200"></span>
          <span className="w-6 h-1 bg-primary rounded transition-all duration-200"></span>
          <span className="w-6 h-1 bg-primary rounded transition-all duration-200"></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-nav px-4 py-2 space-y-2 animate-fade-in-down">
          {navItems.map((item) => (
            item.dropdown ? (
              <div key={item.labelKey}>
                <Link 
                  href={item.to} 
                  className="font-medium text-textdark mb-1 block transition-colors duration-200 hover:text-primary"
                >
                  {t(item.labelKey)}
                </Link>
                <div className="pl-2 space-y-1">
                  {item.dropdown.map((sub) => (
                    <Link 
                      key={sub.labelKey} 
                      href={sub.to} 
                      className="block text-sm text-textdark hover:text-primary transition-colors duration-150"
                    >
                      {t(sub.labelKey)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link 
                key={item.labelKey} 
                href={item.to} 
                className="block font-medium text-textdark hover:text-primary transition-colors duration-200"
              >
                {t(item.labelKey)}
              </Link>
            )
          ))}

          {/* Language Switcher (Mobile) */}
          <button
            onClick={() => switchLocale(locale === 'en' ? 'de' : 'en')}
            className="w-full text-left font-medium text-textdark hover:text-primary transition-colors duration-200 py-2"
          >
            {locale === 'en' ? '🇩🇪 Deutsch' : '🇬🇧 English'}
          </button>
        </div>
      )}
    </nav>
  );
}