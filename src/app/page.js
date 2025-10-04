// src/app/page.js

// Import the component that used to be rendered at path="/"
import LandingPage from '../pages/LandingPage'; 

// Next.js components are Server Components by default
export default function Home() {
  return (
    <LandingPage />
  );
}