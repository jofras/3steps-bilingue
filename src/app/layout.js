// src/app/layout.js
import './globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: '3Steps Athletics',
  description: 'Your Sports Camp Platform.',
  icons: {
    icon: '../assets/main_icon_cropped.png',
  },
};

// no locale logic here
export default function RootLayout({ children }) {
  return children;
}