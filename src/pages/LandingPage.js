// LandingPage.js

import Slider from "react-slick"; // At top of file
import { Link } from 'react-router-dom';
import hockey3 from '../images/hockey3.jpg';
import floorball1 from '../images/floorball1.jpg';
import soccer3 from '../images/soccer3.jpg';
import soccer4 from '../images/soccer4.jpg'; // Using as a generic hero

import bkLogo from '../images/partners/bk.svg.png';
import nikeLogo from '../images/partners/nike.svg.png';
import nvidiaLogo from '../images/partners/nvidia.svg.png';
import underarmourLogo from '../images/partners/underarmour.svg.png';

const heroImages = [soccer4, soccer3, floorball1, hockey3]; // reuse existing images

const sports = [
  { name: 'Hockey', path: '/hockey', img: hockey3 },
  { name: 'Floorball', path: '/floorball', img: floorball1 }
];

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen md:min-h-0 md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full z-10">
          {/* Left Side: Text and Button */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-6 md:p-12">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-center md:text-left leading-tight">
              Become <span className="whitespace-nowrap">your best</span>
            </h1>
            <Link
              to="/signup"
              className="mt-4 md:mt-8 bg-accent text-white px-6 py-2 text-base md:px-12 md:py-4 md:text-xl font-bold shadow-lg hover:bg-green-600 transition-transform hover:scale-105 rounded-full"
            >
              Sign Up Now
            </Link>
          </div>
          {/* Right Side: Slideshow */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full">
            <Slider
              autoplay
              infinite
              speed={1000}
              autoplaySpeed={3000}
              fade
              arrows={false}
              className="w-full h-full slider-container"
            >
              {heroImages.map((img, i) => (
                <div key={i} className="w-full h-full slide-wrapper">
                  <div className="w-full h-full">
                    <img
                      src={img}
                      alt={`Slide ${i}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="w-full max-w-3xl mx-auto text-center -mt-24 md:mt-12 px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-gray-800">Get better at what you love</h2>
        <p className="text-gray-600 text-base md:text-lg mt-3">
          3 Steps Athletics offers training and events in various sports to help you improve in the
          sport you love to do. The goal is to combine hard work with the love we share for the
          sport.
        </p>
      </div>

      {/* Sport Cards
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 z-20 relative">
        {sports.map((sport) => (
          <Link to={sport.path} key={sport.name} className="bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 w-64 flex flex-col items-center p-4 cursor-pointer">
            <img src={sport.img} alt={sport.name} className="w-full h-32 object-cover rounded-md mb-3" />
            <span className="font-heading text-xl font-bold text-primary mb-1">{sport.name}</span>
          </Link>
        ))}
      </div> */}

      {/* Signup Button
      <div className="flex justify-center mt-10">
        <Link
          to="/signup"
          className="bg-accent text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-600 transition"
        >
          Go to Signup Page
        </Link>
      </div> */}

      {/* More sections will go here */}

      {/* Follow Us Section */}
      <div className="w-full max-w-5xl mx-auto text-center mt-16 md:mt-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-gray-800">Follow Us</h2>
        <p className="text-gray-600 text-base md:text-lg mt-3">
          Get the latest from our social media – events, training tips, and behind-the-scenes.
        </p>

        <Slider
          slidesToShow={4}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={3500}
          infinite
          arrows={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                // Add centerPadding here for larger screens if needed, e.g., '60px'
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                // Add centerPadding here for medium screens if needed
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                // Add centerPadding here for small screens if needed
              }
            },
          ]}
          // Add these global settings for padding
          centerMode={true} // Enables center mode, which helps with partial slides
          centerPadding={'20px'} // Adjust this value to control how much is visible of the next/previous slide
          className="mt-8 follow-us-slider" // Add a class for specific styling
        >
          {[
            {
              id: '1',
              title: 'Training Day Highlights',
              img: 'https://via.placeholder.com/300x200.png?text=Post+1',
              url: 'https://instagram.com/yourhandle',
            },
            {
              id: '2',
              title: 'Behind the Scenes',
              img: 'https://via.placeholder.com/300x200.png?text=Post+2',
              url: 'https://twitter.com/yourhandle',
            },
            {
              id: '3',
              title: 'Game Moments',
              img: 'https://via.placeholder.com/300x200.png?text=Post+3',
              url: 'https://facebook.com/yourpage',
            },
            {
              id: '4',
              title: 'Tips & Tricks',
              img: 'https://via.placeholder.com/300x200.png?text=Post+4',
              url: 'https://instagram.com/yourhandle',
            },
            // Add more if needed
          ].map((post) => (
            <div key={post.id} className="px-2"> {/* Added padding to the slide wrapper */}
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition"
              >
                <img src={post.img} alt={post.title} className="w-full h-40 object-cover" />
                <div className="p-3 text-left">
                  <h3 className="text-sm font-semibold text-gray-700">{post.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* Our Partners Section */}
      <div className="w-full max-w-6xl mx-auto text-center mt-16 md:mt-20 px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-4">Our Partners</h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          We are grateful to have you as partners.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {[
            { name: 'BK', logo: bkLogo, url: 'https://www.bk.com' },
            { name: 'Nike', logo: nikeLogo, url: 'https://www.nike.com' },
            { name: 'Nvidia', logo: nvidiaLogo, url: 'https://www.nvidia.com' },
            { name: 'Under Armour', logo: underarmourLogo, url: 'https://www.underarmour.com' },
          ].map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 h-28 flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-full max-h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>

        <div className="mt-10 md:mt-6">
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      {/* Add this CSS in your component's stylesheet or as a style tag */}
      <style jsx>{`
        .slider-container .slick-list,
        .slider-container .slick-track {
          height: 100% !important;
        }

        .slide-wrapper {
          height: 60vh !important;
        }

        @media (min-width: 768px) {
          .slide-wrapper {
            height: 85vh !important;
          }
        }

        .slider-container .slick-slide > div {
          height: 100%;
        }

        /* Specific styling for the Follow Us slider to prevent cut-off */
        .follow-us-slider .slick-list {
            margin: 0 -20px; /* Adjust this value. This negative margin counteracts padding applied by slick-slide */
        }
        .follow-us-slider .slick-slide > div {
            padding: 0 20px; /* Add padding to create space between slides */
        }

      `}</style>
    </div>
  );
}