// src/app/layout.js

// 1. All standard imports at the very top
import './globals.css'; 
import { Bowlby_One_SC, Sigmar, Nunito_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// 2. DEFINE TOP-LEVEL METADATA CONSTANT HERE (before font variables)
export const metadata = {
  title: '3Steps Athletics', 
  description: 'Your Sports Camp Platform.',
  icons: {
    icon: '../assets/main_icon_cropped.png', 
  },
};


// 3. Configure Font Loading and CSS Variables (Constants defined here)
const body = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-body', 
});

const heading = Sigmar({
  subsets: ['latin'],
  weight: '400', 
  variable: '--font-heading', 
});

const display = Bowlby_One_SC({
  subsets: ['latin'],
  weight: '400', 
  variable: '--font-display', 
});


// 4. The main RootLayout function
export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${body.variable} ${heading.variable} ${display.variable}`}
    >
      <body
        // ✅ FIX: Move wrapper classes directly to the body tag
        className="min-h-screen bg-background font-body text-textdark flex flex-col"
      >
        
        <Navbar />
        
        {/* The pt-20/24 padding is correct for pushing content below the fixed navbar */}
        <main className="flex-1 pt-20 md:pt-24">
          {children} {/* Renders the content of the current page */}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}