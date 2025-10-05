// src/pages/Why3Steps.js

"use client";

import { useTranslations } from 'next-intl';
import SectionBlock from '../components/SectionBlock';

export default function Why3Steps() {
  const t = useTranslations('why3steps');

  return (
    <SectionBlock title={t('title')} bg="white">
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        <p className="text-textdark text-base">
          <strong>{t('intro.brand')}</strong> {t('intro.text')}
        </p>

        <p className="text-textdark text-base">
          {t('complexity.paragraph1')}
        </p>

        <p className="text-textdark text-base">
          {t('complexity.paragraph2')}
        </p>

        <p className="text-textdark text-base">
          {t('categories.intro')}
        </p>

        <ul className="list-disc list-inside text-textdark text-base space-y-1">
          <li>{t('categories.ability')}</li>
          <li>{t('categories.physique')}</li>
          <li>{t('categories.mind')}</li>
        </ul>

        <p className="text-textdark text-base">
          {t('categories.subdivision')}
        </p>

        <p className="text-textdark text-base">
          {t('approach.paragraph1')}
        </p>

        <p className="text-textdark text-base">
          {t('approach.paragraph2')}
        </p>
      </div>
    </SectionBlock>
  );
}