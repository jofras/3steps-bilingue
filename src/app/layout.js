// src/app/layout.js

// Import global styles (This is the file where you include Tailwind directives)
import './globals.css'; 

// Import your client components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// NOTE: You will need to handle your 'slick-carousel' CSS imports here or in globals.css.
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({ children }) {
  // The 'min-h-screen...' wrapper and Navbar/Footer now belong here.
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background font-body text-textdark flex flex-col">
          <Navbar />
          {/* pt-20/24 is used to push content below Navbar */}
          <main className="flex-1 pt-20 md:pt-24">
            {children} {/* This renders the content of the current page */}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}