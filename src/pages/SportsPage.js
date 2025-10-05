// src/pages/SportsPage.js

import Link from 'next/link';   // 💡 FIX: Use Next.js Link
import Image from 'next/image'; // 💡 NEW: Import Next.js Image component

// --- Image Imports (These are fine) ---
import hockey3 from '../images/hockey3.jpg';
import floorball1 from '../images/floorball1.jpg'; // Hero image
import floorball2 from '../images/floorball2.jpg' // Floorball card image

const sports = [
  // 💡 NOTE: Ensure you create the corresponding Next.js route folders (e.g., src/app/hockey/page.js)
  { name: 'Hockey', path: '/hockey', img: hockey3 },
  { name: 'Floorball', path: '/floorball', img: floorball2 },
];

export default function SportsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center bg-gray-300">
        <Image // 💡 FIX: Replaced <img> with <Image />
            src={floorball1} 
            alt="Young athletes playing sports" 
            width={1600} // Required for local images
            height={1200} // Required for local images
            priority // Load the hero image early
            className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
          <h1 className="font-heading text-5xl md:text-6xl text-white text-center drop-shadow-lg">Our Sports</h1>
          <p className="text-white text-lg md:text-2xl mt-4 text-center">Hockey & Floorball – for every young athlete</p>
        </div>
      </div>

      {/* Intro Section (Fine as is) */}
      <div className="w-full max-w-3xl mx-auto text-center mt-12 px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-gray-800">Empowering every athlete</h2>
        <p className="text-gray-600 text-base md:text-lg mt-3">
          3 Steps Athletics aims to give as many people as possible, especially children, the 
          opportunity to pursue the sport they love and continuously develop their skills. In doing 
          so, we combine passion and hard work with expertise.
        </p>
      </div>
      
      {/* Sport Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 z-20 relative">
        {sports.map((sport) => (
            <Link 
                href={sport.path} // 💡 FIX: Use 'href' instead of 'to'
                key={sport.name} 
                className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 w-64 flex flex-col items-center p-4 cursor-pointer"
            >
            <Image // 💡 FIX: Replaced <img> with <Image />
                src={sport.img} 
                alt={sport.name} 
                width={256} // w-64 approx
                height={128} // h-32 approx
                className="w-full h-32 object-cover rounded-md mb-3" 
            />
            <span className="font-heading text-xl font-bold text-primary mb-1">{sport.name}</span>
            </Link>
        ))}
      </div>
    </div>
  );
}