// src/pages/LandingPage.js

"use client"; // 🛑 REQUIRED because of Slider, Link, and useEffect/useState (if used)

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image'; // 💡 NEW: Use for all images
import Link from 'next/link';   // 💡 NEW: Use for routing
import Slider from "react-slick"; // KEEP: Slick Carousel is fine, but mandates "use client"

// --- Image Imports (Keep these, but they are now image objects) ---
import hockey3 from '../images/hockey3.jpg';
import floorball1 from '../images/floorball1.jpg';
import soccer3 from '../images/soccer3.jpg';
import soccer4 from '../images/soccer4.jpg'; 
import bkLogo from '../images/partners/bk.svg.png';
import nikeLogo from '../images/partners/nike.svg.png';
import nvidiaLogo from '../images/partners/nvidia.svg.png';
import underarmourLogo from '../images/partners/underarmour.svg.png';

const heroImages = [soccer4, soccer3, floorball1, hockey3];

const sports = [
  // NOTE: You will need to create Next.js routes for these paths (e.g., src/app/hockey/page.js)
  { name: 'Hockey', path: '/sports/hockey', img: hockey3 },
  { name: 'Floorball', path: '/sports/floorball', img: floorball1 }
];

// Partner data is fine
const partnersData = [
    { name: 'BK', logo: bkLogo, url: 'https://www.bk.com' },
    { name: 'Nike', logo: nikeLogo, url: 'https://www.nike.com' },
    { name: 'Nvidia', logo: nvidiaLogo, url: 'https://www.nvidia.com' },
    { name: 'Under Armour', logo: underarmourLogo, url: 'https://www.underarmour.com' },
];

// Placeholder data for Follow Us section
const followPosts = [
    { id: '1', title: 'Training Day Highlights', img: 'https://via.placeholder.com/300x200.png?text=Post+1', url: 'https://instagram.com/yourhandle', },
    { id: '2', title: 'Behind the Scenes', img: 'https://via.placeholder.com/300x200.png?text=Post+2', url: 'https://twitter.com/yourhandle', },
    { id: '3', title: 'Game Moments', img: 'https://via.placeholder.com/300x200.png?text=Post+3', url: 'https://facebook.com/yourpage', },
    { id: '4', title: 'Tips & Tricks', img: 'https://via.placeholder.com/300x200.png?text=Post+4', url: 'https://instagram.com/yourhandle', },
];


export default function LandingPage() {
  const t = useTranslations('home');

  return (
    <div className="w-full min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="relative w-full min-h-screen md:min-h-0 md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full z-10">
          
          {/* Left Side: Text and Button */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-6 md:p-12">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-center md:text-left leading-tight">
              {t('hero.mainTitle')}
            </h1>
            <Link
              href="/signup" 
              className="mt-4 md:mt-8 bg-accent text-white px-6 py-2 text-base md:px-12 md:py-4 md:text-xl font-bold shadow-lg hover:bg-green-600 transition-transform hover:scale-105 rounded-full"
            >
              {t('hero.signUpButton')}
            </Link>
          </div>
          
          {/* Right Side: Slideshow (Image component used inside slider) */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full">
            <Slider
              autoplay
              infinite
              speed={1000}
              autoplaySpeed={3000}
              fade
              arrows={false}
              className="w-full h-full slider-container"
            >
              {heroImages.map((img, i) => (
                <div key={i} className="w-full h-full slide-wrapper">
                  <div className="w-full h-full">
                    <Image // 💡 FIX: Using Next.js Image component
                      src={img}
                      alt={`Slide ${i}`}
                      // Set fixed large dimensions and use object-cover to make it responsive
                      width={1000} 
                      height={1000}
                      priority={i === 0} // Load the first image early
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="w-full max-w-3xl mx-auto text-center -mt-24 md:mt-12 px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-gray-800">{t('intro.title')}</h2>
        <p className="text-gray-600 text-base md:text-lg mt-3">
          {t('intro.paragraph')}
        </p>
      </div>

      {/* Sport Cards (Uncommented and fixed) 
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 z-20 relative">
        {sports.map((sport) => (
          <Link href={sport.path} key={sport.name} className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 w-64 flex flex-col items-center p-4 cursor-pointer">
            <Image 
              src={sport.img} 
              alt={sport.name} 
              width={256} // Approximate width in px
              height={128} // Approximate height in px
              className="w-full h-32 object-cover rounded-md mb-3" 
            />
            <span className="font-heading text-xl font-bold text-primary mb-1">{sport.name}</span>
          </Link>
        ))}
      </div> */}


      {/* Follow Us Section (Fixed Image tags) */}
      <div className="w-full max-w-5xl mx-auto text-center mt-16 md:mt-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-gray-800">{t('follow.title')}</h2>
        <p className="text-gray-600 text-base md:text-lg mt-3">
          {t('follow.subtitle')}
        </p>

        <Slider
          // ... (Slider settings remain the same) ...
          slidesToShow={4}
          // ...
          centerMode={true} 
          centerPadding={'20px'} 
          className="mt-8 follow-us-slider" 
        >
          {followPosts.map((post) => (
            <div key={post.id} className="px-2">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition"
              >
                <Image // 💡 FIX: Using Next.js Image component for external source
                  src={post.img} 
                  alt={post.title} 
                  width={300} // Defined width
                  height={200} // Defined height
                  className="w-full h-40 object-cover" 
                />
                <div className="p-3 text-left">
                  <h3 className="text-sm font-semibold text-gray-700">{post.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* Our Partners Section (Fixed Image tags) */}
      <div className="w-full max-w-6xl mx-auto text-center mt-16 md:mt-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-4">{t('partners.title')}</h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          {t('partners.subtitle')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {partnersData.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 h-28 flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Image // 💡 FIX: Using Next.js Image component for local logos
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={192} // w-48 is 192px
                height={112} // h-28 is 112px
                className="h-full max-h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>

        <div className="mt-10 md:mt-6">
          <Link
            href="/contact" // 💡 FIX: Changed 'to' to 'href'
            className="inline-block bg-primary text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition"
          >
            {t('partners.button')}
          </Link>
        </div>
      </div>

      {/* 💡 FIX: Next.js uses <style jsx> only for styled-jsx, which is now deprecated. 
         For global styles, use globals.css or modules. If you need inline styles, use the 'style' prop. 
         These styles are better placed in globals.css if they must be global. */}
      {/* For now, we'll keep the styles but remove the 'style jsx' tag to avoid errors */}
      
    </div>
  );
}