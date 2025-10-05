// src/components/Navbar.js

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 💡 NEW: Import Next.js Image component
import { usePathname } from 'next/navigation';
import mainIcon from '../assets/main_icon_cropped.png'; // Local image object

const navItems = [
  // { label: 'Sports', to: '/sports' },
  { label: 'Programs', to: '/programs' },
  { label: 'Multimedia', to: '/multimedia', dropdown: [
    { label: 'Visuals', to: '/multimedia' },
    { label: 'News', to: '/news' }
  ]},
  { label: 'About', to: '/about/whoweare', dropdown: [
    { label: 'Who We Are', to: '/about/whoweare' }, 
    { label: 'Our Purpose', to: '/about/purpose' },
    { label: 'Why 3 Steps?', to: '/about/why-3-steps' }
  ]},
  { label: 'Partners', to: '/partners' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  
  const pathname = usePathname(); 

  useEffect(() => {
    // Close mobile menu on route change using 'pathname'
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

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-nav transition-all duration-300 font-body">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-5">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image // 💡 FIX: Use Image component instead of <img>
            src={mainIcon} 
            alt="3Steps Athletics Logo" 
            width={64}  // Appropriate size for h-12/h-16 class (e.g., 64px)
            height={64} 
            priority // Load the logo early
            className="h-12 md:h-16 w-auto object-contain" 
          />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item, idx) => (
            item.dropdown ? (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link href={item.to} className="font-medium text-lg text-textdark hover:text-primary transition-colors duration-200 focus:outline-none">
                  {item.label}
                </Link>
                <div className={`absolute left-0 mt-2 w-48 bg-white rounded shadow-lg transition-opacity duration-200 pointer-events-none z-20 ${activeDropdown === item.label ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}>
                  {item.dropdown.map((sub, i) => (
                    sub.href ? (
                      <a key={sub.label} href={sub.href} className="block px-4 py-2 text-base text-textdark hover:bg-background hover:text-primary transition-colors duration-150">
                        {sub.label}
                      </a>
                    ) : (
                      <Link key={sub.label} href={sub.to} className="block px-4 py-2 text-base text-textdark hover:bg-background hover:text-primary transition-colors duration-150">
                        {sub.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.to || `/${item.label.toLowerCase()}`} className="font-medium text-lg text-textdark hover:text-primary transition-colors duration-200">
                {item.label}
              </Link>
            )
          ))}
        </div>
        
        {/* Hamburger for mobile */}
        {/* ... (Hamburger button is fine) ... */}
        <button className="md:hidden flex flex-col items-center gap-[4px]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <span className="w-6 h-1 bg-primary rounded transition-all duration-200"></span>
          <span className="w-6 h-1 bg-primary rounded transition-all duration-200"></span>
          <span className="w-6 h-1 bg-primary rounded transition-all duration-200"></span>
        </button>
      </div>
      
      {/* Mobile Menu (Fine as is) */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-nav px-4 py-2 space-y-2 animate-fade-in-down">
          {navItems.map((item) => (
            item.dropdown ? (
              <div key={item.label}>
                <Link href={item.to} className="font-medium text-textdark mb-1 block transition-colors duration-200 hover:text-primary">
                  {item.label}
                </Link>
                <div className="pl-2 space-y-1">
                  {item.dropdown.map((sub) => (
                    sub.href ? (
                      <a key={sub.label} href={sub.href} className="block text-sm text-textdark hover:text-primary transition-colors duration-150">
                        {sub.label}
                      </a>
                    ) : (
                      <Link key={sub.label} href={sub.to} className="block text-sm text-textdark hover:text-primary transition-colors duration-150">
                        {sub.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.to || `/${item.label.toLowerCase()}`} className="block font-medium text-textdark hover:text-primary transition-colors duration-200">
                {item.label}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
}