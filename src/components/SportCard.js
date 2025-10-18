// src/components/SportCard.js

import Link from 'next/link'; 
import Image from 'next/image'; 

export default function SportCard({ title, image, link }) {
  return (
    <Link 
      href={link} 
      className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 w-64 flex flex-col items-center p-4 cursor-pointer"
    >
      <Image 
        src={image} 
        alt={title} 
        // set explicit width/height based on the card's dimensions (w-64 / h-32)
        width={256}  // w-64 = 256px
        height={128} // h-32 = 128px
        className="w-full h-32 object-cover rounded-md mb-3" 
      />
      <span className="font-heading text-xl font-bold text-primary mb-1">{title}</span>
    </Link>
  );
}