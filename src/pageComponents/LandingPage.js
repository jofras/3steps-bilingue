"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

// swiper imports 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// for arrow
import { ArrowRightIcon } from '@heroicons/react/20/solid';

// LOCAL IMAGE IMPORTS

// hockey
import kidsSmiling from "../images/2025/IMG_9344.jpeg"
import everybodySmiling from "../images/2025/IMG_9358.jpeg"
import dominos from "../images/2025/IMG_9361.jpeg"
import tireflip from "../images/2025_2/IMG_0386.jpeg"
import speed from "../images/2025_2/IMG_0404.jpeg"
import shot from "../images/2025/IMG_9340.jpeg"
import highFive from "../images/2025/IMG_9347.jpeg"
import attentive from "../images/2025/IMG_9332.jpeg"
import boardBattle from "../images/2025/IMG_9354.jpeg"
import postedUp from "../images/2025/IMG_9297.jpeg"

// floorball
import floorball1 from "../images/random_floorball_pics/floorball1.jpg"
import floorball2 from "../images/random_floorball_pics/floorball2.jpg"

import slapshootLogo from "../images/partners/slapshoot.png"

const heroImages = [shot, highFive, attentive, tireflip, floorball2];

const sports = [
  { name: "Hockey", path: "/sports/hockey", img: speed },
  { name: "Floorball", path: "/sports/floorball", img: floorball1 },
];

const partnersData = [
  { name: "Slapshoot Photo Company", logo: slapshootLogo, url: "https://slapshoot-photocompany.jimdosite.com/" },
];

const followPosts = [
  {
    id: "1",
    title: "Training Day Highlights",
    img: kidsSmiling,
    url: "https://www.instagram.com/3stepsathletics/",
  },
  {
    id: "2",
    title: "Evolution",
    img: dominos,
    url: "https://www.instagram.com/3stepsathletics/",
  },
  {
    id: "3",
    title: "Best Camp Ever!!!",
    img: everybodySmiling,
    url: "https://www.instagram.com/3stepsathletics/",
  },
  {
    id: "4",
    title: "Heating Up!",
    img: boardBattle,
    url: "https://www.instagram.com/3stepsathletics/",
  },
  {
    id: "5",
    title: "Locked In",
    img: postedUp,
    url: "https://www.instagram.com/3stepsathletics/",
  },
];

// main landing page
export default function LandingPage() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <>
      {/* Custom styles for Swiper pagination bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ffffff;
          opacity: 0.7;
          transition: all 0.2s ease-in-out;
        }
        .swiper-pagination-bullet-active {
          background-color: #4ade80; /* accent color */
          opacity: 1;
          transform: scale(1.2);
        }
        .swiper-button-next, .swiper-button-prev {
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          width: 16px;
          height: 16px;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 6px;
          font-weight: bold;
        }
      `}</style>

      <div className="w-full min-h-screen flex flex-col">
        {/* hero section */}
        <div className="relative w-full min-h-screen md:h-[85vh] overflow-hidden">
          <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full z-10">
            {/* left side */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-6 md:p-12">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-center md:text-left leading-tight">
                {t("hero.mainTitle")}
              </h1>
              <Link
                href={`/${locale}/signup`}
                className="mt-6 md:mt-8 bg-accent text-white px-8 py-3 md:px-12 md:py-4 md:text-xl font-bold shadow-lg hover:bg-green-600 transition-transform hover:scale-105 rounded-full"
              >
                {t("hero.signUpButton")}
              </Link>
            </div>

            {/* right side (hero slider) */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-full">
              <Swiper
                modules={[Autoplay, A11y]}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
              >
                {heroImages.map((imgSrc, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-full">
                      <Image
                        src={imgSrc}
                        alt={`Hero image ${i + 1}`}
                        fill
                        priority={i === 0}
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* intro section */}
        <div className="w-full max-w-3xl mx-auto text-center -mt-24 md:mt-12 px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-800">{t("intro.title")}</h2>
          <p className="text-gray-600 text-base md:text-lg mt-3">{t("intro.paragraph")}</p>
        </div>

        {/* sports cards */}
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
                className="w-full h-32 object-cover rounded-md mb-3"
              />
              <span className="font-heading text-xl font-bold text-primary mb-1">
                {sport.name}
              </span>
            </Link>
          ))}
        </div>

        {/* find out more button */}
        <div className="w-full text-center mt-6 md:mt-8 px-4">
          <Link
            href={`/${locale}/programs`}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {t("intro.findOutMore")}
          </Link>
        </div>

        {/* follow us */}
        <div className="w-full max-w-6xl mx-auto text-center mt-16 md:mt-20 px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-800">{t("follow.title")}</h2>
          <p className="text-gray-600 text-base md:text-lg mt-3">{t("follow.subtitle")}</p>

          <div className="mt-8">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={16}
              slidesPerView={1.5}
              centeredSlides={true}
              loop={true}
              navigation
              autoplay={{ delay: 4000, disableOnInteraction: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2.5,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 4,
                  centeredSlides: false,
                },
              }}
              className="py-2"
            >
              {followPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="relative w-full aspect-square">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                      />
                    </div>
                    <div className="p-3 text-left">
                      <h3 className="text-sm font-semibold text-gray-700 truncate">{post.title}</h3>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* partners section */}
        <div className="w-full max-w-6xl mx-auto text-center mt-16 md:mt-20 px-4 py-8">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-4">
            {t("partners.title")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">{t("partners.subtitle")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            {partnersData.map((partner, i) => (
              <a
                key={i}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 h-28 flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={192}
                  height={112}
                  className="h-full max-h-16 w-auto object-contain"
                />
              </a>
            ))}
          </div>

          <div className="mt-10 md:mt-6">
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t("partners.button")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

