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

// LOCAL IMAGE IMPORTS

// hockey
import kidsSmiling from "../images/2024/IMG_9344.jpeg"
import everybodySmiling from "../images/2024/IMG_9358.jpeg"
import dominos from "../images/2024/IMG_9361.jpeg"
import speed from "../images/2025/IMG_0404.jpeg"
import shot from "../images/2024/IMG_9340.jpeg"
import highFive from "../images/2024/IMG_9347.jpeg"
import attentive from "../images/2024/IMG_9332.jpeg"
import boardBattle from "../images/2024/IMG_9354.jpeg"
import postedUp from "../images/2024/IMG_9297.jpeg"
import sboev1 from "../images/hockey/IMG_4209.JPG"

// floorball
import floorball1 from "../images/random_floorball_pics/floorball1.jpg"
import floorball3 from "../images/random_floorball_pics/floorball3.jpg"
import cedigame1 from "../images/random_floorball_pics/cedigame1.jpeg"

// football
import football1 from "../images/random_soccer_pics/soccer1.jpg"

import slapshootLogo from "../images/partners/slapshoot.png"

const heroImages = [highFive, cedigame1, shot, football1, attentive, floorball3];

const partnersData = [
  { name: "Slapshoot Photo Company", logo: slapshootLogo, url: "https://slapshoot-photocompany.jimdosite.com/" },
];

const followPosts = [
  {
    id: "1",
    type: "instagram",
    title: "Training Day Highlights",
    img: kidsSmiling,
    likes: "102",
    comments: "15",
    url: "https://www.instagram.com/3stepshockey/",
  },
  {
    id: "2",
    type: "instagram",
    title: "Evolution",
    img: dominos,
    likes: "78",
    comments: "12",
    url: "https://www.instagram.com/3stepshockey/",
  },
  {
    id: "3",
    type: "instagram",
    title: "Best Camp Ever!!!",
    img: everybodySmiling,
    likes: "56",
    comments: "8",
    url: "https://www.instagram.com/3stepshockey/",
  },
  {
    id: "4",
    type: "instagram",
    title: "Heating Up!",
    img: boardBattle,
    likes: "45",
    comments: "6",
    url: "https://www.instagram.com/3stepshockey/",
  },
  {
    id: "5",
    title: "Locked In",
    type: "instagram",
    img: postedUp,
    likes: "32",
    comments: "4",
    url: "https://www.instagram.com/3stepshockey/",
  },
  { 
    id: "6",
    title: "Guest Coach sessions are officially underway on the ice! 🔥",
    type: "instagram",
    img: sboev1,
    likes: "48",
    comments: "5",
    url: "https://www.instagram.com/p/DZTpeU-Df8O/?img_index=1",
  },
];

export default function LandingPage() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ffffff;
          opacity: 0.7;
          transition: all 0.2s ease-in-out;
        }
        .swiper-pagination-bullet-active {
          background-color: #4ade80;
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

      <div className="w-full min-h-screen flex flex-col font-sans">
        {/* hero section */}
        <div className="relative w-full min-h-screen md:h-[85vh] overflow-hidden">
          <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full z-10">
            {/* left side */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-6 md:p-12">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-center md:text-left leading-tight">
                {t("hero.mainTitle")}
              </h1>
              <Link
                href={`/${locale}/sports`}
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

        {/* find out more button */}
        <div className="w-full text-center mt-6 md:mt-8 px-4">
          <Link
            href={`/${locale}/sports`}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {t("intro.findOutMore")}
          </Link>
        </div>

        {/* follow us section */}
        <div className="w-full max-w-6xl mx-auto text-center mt-16 md:mt-20 px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-800">{t("follow.title")}</h2>
          <p className="text-gray-600 text-base md:text-lg mt-3">{t("follow.subtitle")}</p>

          <div className="mt-8">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={16}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              navigation
              autoplay={{ delay: 4000, disableOnInteraction: true }}
              breakpoints={{
                480: { slidesPerView: 1.8, centeredSlides: true },
                768: { slidesPerView: 2.8, centeredSlides: false },
                1024: { slidesPerView: 4, centeredSlides: false },
              }}
              className="py-4"
            >
              {followPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  {post.type === "instagram" ? (
                    /* 📸 TYPE A: HIGH-FIDELITY INSTAGRAM RENDERING */
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-left select-none"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between p-2.5">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 p-[1.5px]">
                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[8px] font-black text-gray-800 tracking-tighter">
                              3S
                          </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-gray-900 leading-none tracking-tight">3stepsathletics</span>
                            <span className="text-[9px] text-gray-400 leading-none mt-0.5">Original audio</span>
                          </div>
                        </div>
                        <svg className="text-gray-400" aria-label="More options" fill="currentColor" height="14" viewBox="0 0 24 24" width="14">
                          <circle cx="12" cy="12" r="1.5"></circle>
                          <circle cx="6" cy="12" r="1.5"></circle>
                          <circle cx="18" cy="12" r="1.5"></circle>
                        </svg>
                      </div>

                      {/* Main Photo */}
                      <div className="relative w-full aspect-square bg-gray-50 border-y border-gray-100/50">
                        <Image
                          src={post.img}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                        />
                      </div>

                      {/* Actions */}
                      <div className="px-2.5 pt-2.5 pb-1 flex items-center justify-between text-gray-900">
                        <div className="flex items-center space-x-3.5">
                          <svg aria-label="Like" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
                            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752a1 1 0 0 1-1 0c-.438-.283-1.791-1.509-4.303-3.752C4.145 14.081 1.5 12.194 1.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.209.28.41.57.594.86c.178-.287.37-.57.579-.85a4.21 4.21 0 0 1 3.736-1.951m0-2a6.21 6.21 0 0 0-5.504 2.954 6.21 6.21 0 0 0-5.504-2.954 6.99 6.99 0 0 0-6.784 7.122c0 4.106 3.533 6.51 6.455 9.132l1.603 1.44a3 3 0 0 0 3.92 0l1.603-1.44c2.922-2.622 6.455-5.026 6.455-9.132a6.99 6.99 0 0 0-6.784-7.122z"></path>
                          </svg>
                          <svg aria-label="Comment" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
                            <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615l2.522.841a1.5 1.5 0 0 0 1.91-1.91l-.842-2.546zM12 21a9 9 0 1 1 9-9 8.979 8.979 0 0 1-9 9z" fillRule="evenodd"></path>
                          </svg>
                          <svg aria-label="Share Post" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
                            <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                            <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
                          </svg>
                        </div>
                        <svg aria-label="Save" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
                          <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
                        </svg>
                      </div>

                      {/* Details Area */}
                      <div className="px-2.5 pb-3 text-gray-900 space-y-0.5">
                        <div className="text-[11px] font-bold leading-tight">{post.likes} likes</div>
                        <p className="text-[11px] leading-snug line-clamp-2">
                          <span className="font-bold mr-1">3stepsathletics</span>
                          {post.title}
                        </p>
                        <div className="text-gray-400 text-[10px] font-medium pt-0.5">
                          View all {post.comments} comments
                        </div>
                      </div>
                    </a>
                  ) : (
                    /* 🖼️ TYPE B: CLEAN FULL-BLEED REGULAR PHOTO CARD WITH HOVER OVERLAY */
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 aspect-square group bg-gray-100"
                    >
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                      />
                      {/* Interactive Hover Overlay Layer */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <div className="text-center text-white space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          {/* Instagram Vector Icon Mockup */}
                          <svg className="mx-auto text-white/90" aria-label="Instagram" fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.85.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324 4.162 4.162 0 0 1 0 8.324zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path>
                          </svg>
                          <span className="block text-xs font-semibold tracking-wide">View on Instagram</span>
                        </div>
                      </div>
                    </a>
                  )}
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