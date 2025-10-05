// src/pages/Programs.js

"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import soccer4 from '../images/soccer4.jpg';
import { EventSection } from '../components/EventSection';

export default function Programs() {
    const t = useTranslations('programs');

    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center bg-gray-300">
                <Image
                    src={soccer4}
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

            {/* Intro Section */}
            <div className="w-full max-w-3xl mx-auto text-center mt-12 px-4">
                <h2 className="font-heading text-3xl md:text-4xl font text-gray-800">
                    {t('intro.title')}
                </h2>
                <p className="text-gray-600 text-base md:text-lg mt-3">
                    {t('intro.paragraph1')}
                </p>
                <p className="text-gray-600 text-base md:text-lg mt-3">
                    {t('intro.focusIntro')}
                </p>
                <ul className="list-disc list-inside text-gray-600 text-base pl-4 md:text-lg mt-3">
                    <li>{t('intro.skills.shooting')}</li>
                    <li>{t('intro.skills.stickhandling')}</li>
                    <li>{t('intro.skills.skating')}</li>
                </ul>
                <p className="text-gray-600 text-base md:text-lg mt-3">
                    {t('intro.paragraph2')}
                </p>
                <p className="text-gray-600 text-base md:text-lg mt-3">
                    {t('intro.paragraph3')}
                </p>
            </div>

            {/* Events section */}
            <EventSection />
        </div>
    );
}