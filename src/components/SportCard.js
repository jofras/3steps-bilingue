import React from 'react';
import { Link } from 'react-router-dom';

export default function SportCard({ title, image, link }) {
  return (
    <Link to={link} className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 w-64 flex flex-col items-center p-4 cursor-pointer">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-md mb-3" />
      <span className="font-heading text-xl font-bold text-primary mb-1">{title}</span>
    </Link>
  );
} 