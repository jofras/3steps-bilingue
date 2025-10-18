// src/pages/SportsPage.js

"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';   
import Image from 'next/image'; 

// image imports
import hockey3 from '../images/2025_2/IMG_9346.jpeg';
import floorball1 from '../images/2025_2/IMG_9358.jpeg';
import floorball2 from '../images/2025_2/IMG_9365.jpeg';

const sports = [
  // gonna have to change these paths per branch, or link to the other site's url
  { name: 'Hockey', path: '/hockey', img: hockey3 },
  { name: 'Floorball', path: '/floorball', img: floorball2 },
];

export default function SportsPage() {
  const t = useTranslations('sports'); 

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* hero section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center bg-gray-300">
        <Image 
            src={floorball1} 
            alt={t('hero.imageAlt')} 
            width={1600} 
            height={1200}
            priority
            className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
            <h1 className="font-heading text-5xl md:text-6xl text-white text-center drop-shadow-lg">
                {t('hero.title')} 
            </h1>
            <p className="text-white text-lg md:text-2xl mt-4 text-center">
                {t('hero.subtitle')} 
            </p>
        </div>
      </div>

      {/* intro */}
      <div className="w-full max-w-3xl mx-auto text-center mt-12 px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-gray-800">
            {t('intro.title')} 
        </h2>
        <p className="text-gray-600 text-base md:text-lg mt-3">
            {t('intro.paragraph')} 
        </p>
      </div>
      
      {/* sport cards (change .path to .url later) */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 z-20 relative">
        {sports.map((sport) => (
            <Link 
                href={sport.path}
                key={sport.name} 
                className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 w-64 flex flex-col items-center p-4 cursor-pointer"
            >
            <Image 
                src={sport.img} 
                alt={sport.name} 
                width={256}
                height={128}
                className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="font-heading text-xl text-primary">{sport.name}</h3>
            </Link>
        ))}
      </div>
    </div>
  );
}