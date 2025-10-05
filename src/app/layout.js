// src/app/layout.js
import './globals.css';
import { Bowlby_One_SC, Sigmar, Nunito_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: '3Steps Athletics',
  description: 'Your Sports Camp Platform.',
  icons: {
    icon: '../assets/main_icon_cropped.png',
  },
};

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

const locales = ['en', 'de'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${body.variable} ${heading.variable} ${display.variable}`}
    >
      <body className="min-h-screen bg-background font-body text-textdark flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}