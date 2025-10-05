// src/app/[locale]/page.js
import { useTranslations } from 'next-intl';
import LandingPage from '../../pages/LandingPage';

export default function Home() {
  return <LandingPage />;
}