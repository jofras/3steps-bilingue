// SportsPage.js 

// import React from 'react';
import { Link } from 'react-router-dom';
import hockey3 from '../images/hockey3.jpg';
import floorball1 from '../images/floorball1.jpg';
import floorball2 from '../images/floorball2.jpg'

const sports = [
  { name: 'Hockey', path: '/hockey', img: hockey3 },
  { name: 'Floorball', path: '/floorball', img: floorball2 },
  //{ name: 'Soccer', path: '/soccer', img: soccer3 },
];

export default function SportsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center bg-gray-300">
        <img src={floorball1} alt="Young athletes playing sports" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
          <h1 className="font-heading text-5xl md:text-6xl text-white text-center drop-shadow-lg">Our Sports</h1>
          <p className="text-white text-lg md:text-2xl mt-4 text-center">Hockey & Floorball – for every young athlete</p>
        </div>
      </div>

      {/* Intro Section */}
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
            <Link to={sport.path} key={sport.name} className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 w-64 flex flex-col items-center p-4 cursor-pointer">
            <img src={sport.img} alt={sport.name} className="w-full h-32 object-cover rounded-md mb-3" />
            <span className="font-heading text-xl font-bold text-primary mb-1">{sport.name}</span>
            </Link>
        ))}
        </div>
      {/* More sections will go here */}
    </div>
  );
}
