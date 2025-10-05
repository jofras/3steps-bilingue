// src/pages/OurPurpose.js

"use client";

import { useTranslations } from 'next-intl';
import SectionBlock from '../components/SectionBlock';

export default function OurPurpose() {
  const t = useTranslations('about.purpose');

  return (
    <SectionBlock title={t('title')} bg="white">
      <div className="max-w-3xl mx-auto px-4 space-y-12">
        {/* section 1 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary mb-2">
            {t('section1.heading')}
          </h3>
          <p className="text-textdark text-base">
            {t('section1.paragraph1')}
          </p>
          <p className="text-textdark text-base">
            {t('section1.paragraph2')}
          </p>
          <p className="text-textdark text-base">
            {t('section1.paragraph3')}
          </p>
          <p className="text-textdark text-base">
            {t('section1.paragraph4')}
          </p>
          <p className="text-textdark text-base italic">
            {t('section1.quote')}
          </p>
        </div>

        {/* section 2 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary mb-2">
            {t('section2.heading')}
          </h3>
          <p className="text-textdark text-base">
            {t('section2.paragraph1')}
          </p>

          <p className="text-textdark text-base">
            {t('section2.paragraph2')}
          </p>
          <ul className="list-disc list-inside text-textdark text-base pl-4 space-y-1">
            <li>{t('section2.list1')}</li>
            <li>{t('section2.list2')}</li>
            <li>{t('section2.list3')}</li>
          </ul>

          <p className="text-textdark text-base">
            {t('section2.paragraph3')}
          </p>

          <p className="text-textdark text-base">
            {t('section2.paragraph4')}
          </p>

          <p className="text-textdark text-base">
            {t('section2.paragraph5')}
          </p>

          <p className="text-textdark text-base">
            {t('section2.paragraph6')}
          </p>

          <p className="text-textdark text-base font-semibold">
            {t('section2.closingStatement')}
          </p>
        </div>
      </div>
    </SectionBlock>
  );
}