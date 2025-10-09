// src/app/[locale]/layout.js
import { Bowlby_One_SC, Sigmar, Nunito_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  
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
          <Navbar />
          <main className="flex-1 pt-20 md:pt-24">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}