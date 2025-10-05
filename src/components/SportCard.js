// src/components/SportCard.js

import Link from 'next/link';   // 💡 FIX: Use Next.js Link
import Image from 'next/image'; // 💡 NEW: Import Next.js Image component

// Note: This component is a Server Component by default, which is ideal.

export default function SportCard({ title, image, link }) {
  // Assuming 'image' prop is a local image object (like from a file import)
  return (
    <Link 
      href={link} // 💡 FIX: Use 'href' instead of 'to'
      className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 w-64 flex flex-col items-center p-4 cursor-pointer"
    >
      <Image // 💡 FIX: Replaced <img> with <Image />
        src={image} 
        alt={title} 
        // Set explicit width/height based on the card's dimensions (w-64 / h-32)
        width={256}  // w-64 is 256px
        height={128} // h-32 is 128px
        className="w-full h-32 object-cover rounded-md mb-3" 
      />
      <span className="font-heading text-xl font-bold text-primary mb-1">{title}</span>
    </Link>
  );
}