// src/pages/Programs.js

"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import shootout from "../images/2023/IMG_5638.jpeg";
import sboevImg from "../images/people/sboev.jpg";
import orlovImg from "../images/people/orlov.jpg";
import CoachCard from '../components/CoachCard';
import { EventSection } from '../components/EventSection';
import patrikImg from "../images/people/patrik.jpeg";

export default function Programs() {
    const t = useTranslations('programs');

    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* hero section */}
            <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center bg-gray-300">
                <Image
                    src={shootout}
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

            {/* intro section */}
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

            {/* age groups section */}
            <div className="w-full max-w-3xl mx-auto text-center mt-12 px-4">
                <h2 className="font-heading text-3xl md:text-4xl text-gray-800">
                    {t('ageGroups.title')}
                </h2>

                <p className="text-gray-600 text-base md:text-lg mt-4">
                    {t('ageGroups.reasoning')}
                </p>

                <ul className="list-disc list-inside text-gray-600 text-base pl-4 md:text-lg mt-3">
                    <li>
                        <span className="font-semibold">
                            {t('ageGroups.juniors.title')}:
                        </span>{" "}
                        {t('ageGroups.juniors.description')}
                    </li>
                    <li className="mt-2">
                        <span className="font-semibold">
                            {t('ageGroups.prospects.title')}:
                        </span>{" "}
                        {t('ageGroups.prospects.description')}
                    </li>
                </ul>
            </div>

           {/* guest coaches */}
<div className="w-full max-w-4xl mx-auto text-center mt-12 px-4">
    <h2 className="font-heading text-3xl md:text-4xl text-textdark">
        {t('guestCoaches.title')}
    </h2>

    <p className="text-textmid text-base md:text-lg mt-3">
        {t('guestCoaches.paragraph1')}
    </p>

    {/* Centered single column layout wrapper */}
    <div className="mt-8 flex justify-center">
        <CoachCard
            imageSrc={patrikImg}
            name="Patrik Almström"
            bullets={[
                t('guestCoaches.patrik.bullet1'),
                t('guestCoaches.patrik.bullet2'),
            ]}
        />
                    <CoachCard
                    imageSrc={orlovImg}
                    name="Sergei Orlov"
                    bullets={[
                        t('guestCoaches.orlov.bullet1'),
                        t('guestCoaches.orlov.bullet2'),
                        t('guestCoaches.orlov.bullet3'),
                    ]}
                    />
                </div>
            </div>

            {/* events section */}
            <EventSection />
        </div>
    );
}
