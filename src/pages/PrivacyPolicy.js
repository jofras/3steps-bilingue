// src/pages/PrivacyPolicy.js

"use client";

import { useTranslations } from 'next-intl';
import SectionBlock from '../components/SectionBlock';

export default function PrivacyPolicy() {
  const t = useTranslations('legal.privacy');
  
  return (
    <SectionBlock title={t('title')} bg="white">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <p className="text-textdark text-sm leading-relaxed">
            {t('paragraph1')}
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            {t('paragraph2')}
          </p>
        </div>
      </div>
    </SectionBlock>
  );
}