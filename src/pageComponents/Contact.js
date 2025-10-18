// src/pages/Contact.js

"use client";

import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  
  return (
    <div className="max-w-3xl mx-auto py-8 md:py-16 px-4">
      <h1 className="font-heading text-4xl text-primary mb-6 text-center">
        {t('title')}
      </h1>

      <div className="bg-white rounded-lg shadow p-6">
        <iframe
          // the link to the google form
          src="https://docs.google.com/forms/d/e/1FAIpQLScXLF2D_35xkR3Olhpw49KU6q0S3ulteASOo6p9qWX0kuR9Hw/viewform?embedded=true"
          width="100%" 
          height="1326"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="rounded w-full h-[1326px] md:h-[1226px]" 
          title={t('formTitle')}
        >
          {t('loading')}
        </iframe>
      </div>
    </div>
  );
}