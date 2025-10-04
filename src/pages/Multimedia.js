// Multimedia.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hockey1 from '../images/hockey1.jpg';
import hockey2 from '../images/hockey2.jpg';

const photos = [
  { src: hockey1, alt: 'Hockey players in action' },
  { src: hockey2, alt: 'Hockey players in action (again)' },
];

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Rick Roll' },
  { id: 'oHg5SJYRHA0', title: 'Rick Roll #2' }
];

export const newsItems = [
  { slug: 'default-article', title: 'Random Article', date: 'Some date', excerpt: 'Lorem ipsum', content: 'Full article content goes here.' }
];

export default function Multimedia() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full z-10">
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-8 md:p-12 pt-8">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-center leading-tight mb-4">
              Our Journey
            </h1>
            <p className="text-lg md:text-xl text-center opacity-90 max-w-md">
              Relive the unforgettable moments that shaped 3 Steps Athletics
            </p>
            <p className="text-sm md:text-base text-center mt-4 opacity-75 font-medium tracking-wider">
              #3stepsathletics
            </p>
          </div>
          
          {/* Right Side: Photo Slideshow */}
          <div className="w-full md:w-1/2 h-full">
            <Swiper
              modules={[Autoplay, A11y]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-full"
            >
              {photos.slice(0, 4).map((photo, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-full">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        {/* Photos Section */}
        <section id="photos" className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-3">
            Photo Gallery
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Capturing the spirit, dedication, and joy that defines our athletic community
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active'
              }}
              loop={true}
              className="rounded-xl photo-swiper"
            >
              {photos.map((photo, i) => (
                <SwiperSlide key={i}>
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-3">
            Video Highlights
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Watch our athletes in action and see the passion that drives us forward
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active'
              }}
              loop={true}
              className="rounded-xl video-swiper"
            >
              {videos.map((video, i) => (
                <SwiperSlide key={i} className='pb-8'>
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                    {/* This invisible element ensures the arrows are vertically centered on the video */}
                    <div className="absolute inset-0 z-10"></div>
                  </div>
                  <h3 className="font-body text-lg font-semibold text-gray-800 mt-4">
                    {video.title}
                  </h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* News Section */}
        <section className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-3">
            Latest News
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Stay updated with the latest happenings and achievements at 3 Steps Athletics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, i) => (
              <Link
                key={i}
                to={`/multimedia/news/${item.slug}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-200 p-6 text-left group"
              >
                <div className="flex flex-col h-full">
                  <h3 className="font-heading text-lg text-primary mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {item.date}
                  </p>
                  <p className="text-sm text-gray-600 flex-grow leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wide group-hover:text-blue-600 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .photo-swiper .swiper-pagination-bullet {
          background-color: #0E68F2 !important;
          opacity: 0.3;
        }
        .photo-swiper .swiper-pagination-bullet-active {
          opacity: 1;s
        }
        .video-swiper .swiper-pagination-bullet {
          background-color: #0E68F2 !important;
          opacity: 0.3;
        }
        .video-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #0E68F2 !important;
        }
        @media (max-width: 767px) {
          .swiper-button-next,
          .swiper-button-prev {
            font-size: 1.5rem !important; /* Adjust size as needed */
            width: 1.5rem !important; /* Adjust width as needed */
            height: 1.5rem !important; /* Adjust height as needed */
          }
        }
      `}</style>
    </div>
  );
}