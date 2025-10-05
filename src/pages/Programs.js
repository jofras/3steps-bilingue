// src/pages/Programs.js

import Image from 'next/image'; // 💡 NEW: Import the Next.js Image component
import soccer4 from '../images/soccer4.jpg'; // using as generic hero
import { EventSection } from '../components/EventSection'; // NOTE: Ensure EventSection is Next.js compatible

export default function Programs() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center bg-gray-300">
                <Image // 💡 FIX: Replaced <img> with <Image />
                    src={soccer4}
                    alt="Young athletes playing sports"
                    // 💡 Required dimensions (use large numbers to cover the whole viewport)
                    width={1600} 
                    height={1200}
                    priority // Load this hero image early
                    className="absolute inset-0 w-full h-full object-cover object-center" 
                />
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
                    <h1 className="font-heading text-5xl md:text-6xl text-white text-center drop-shadow-lg">Our Programs</h1>
                    <p className="text-white text-lg md:text-2xl mt-4 text-center">Hockey programs – for every young athlete</p>
                </div>
            </div>

            {/* Intro Section */}
            {/* ... (rest of the component is fine) ... */}
            <div className="w-full max-w-3xl mx-auto text-center mt-12 px-4">
                <h2 className="font-heading text-3xl md:text-4xl font text-gray-800">Empowering every athlete</h2>
                <p className="text-gray-600 text-base md:text-lg mt-3">
                    In order to achieve the greatest possible training effect, we train very intensively during
                    our programs, but still with joy. Each player is treated individually. The focus is on the
                    individual and we consistently work on personal skills.
                </p>
                <p className="text-gray-600 text-base md:text-lg mt-3">
                    We mainly focus on technical skills:
                </p>
                <ul className="list-disc list-inside text-gray-600 text-base pl-4 md:text-lg mt-3">
                    <li>Shooting</li>
                    <li>Stickhandling</li>
                    <li>Skating</li>
                </ul>
                <p className="text-gray-600 text-base md:text-lg mt-3">
                    These three core areas symbolize our 3 steps in training. Through targeted exercises, we
                    improve not only technique but also understanding of the game and game intelligence.
                </p>
                <p className="text-gray-600 text-base md:text-lg mt-3">
                    Our aim is to improve the players in a playful way, with enthusiasm, but also with the
                    necessary toughness, so that they can successfully apply what they have learned in
                    competition.
                </p>
            </div>

            {/* Events section */}
            <EventSection />

            {/* More sections will go here */}
        </div>
    );
}