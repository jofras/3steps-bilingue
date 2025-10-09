// src/pages/TermsAndConditions.js

"use client";

import { useTranslations } from 'next-intl';
import SectionBlock from "../components/SectionBlock";

export default function TermsAndConditions() {
  const t = useTranslations('legal.terms');

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
          <p className="text-textdark text-sm leading-relaxed">
            {t('paragraph3')}
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            {t('paragraph4')}
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            {t('paragraph5')}
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            {t('paragraph6')}
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            {t('paragraph7')}
          </p>
        </div>
      </div>
    </SectionBlock>
  );
}