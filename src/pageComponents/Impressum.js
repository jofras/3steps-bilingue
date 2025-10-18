// src/pages/Impressum.js

"use client";

import { useTranslations } from 'next-intl';
import SectionBlock from '../components/SectionBlock';

export default function Impressum() {
    // the translations we use here (see messages/*.json)
    const t = useTranslations('legal.impressum'); 

    return (
        <SectionBlock title={t('title')} bg="white"> 
            <div className="max-w-3xl mx-auto px-4 space-y-8">
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                        {t('contactAddress.title')}
                    </h3>
                    {/* contact details */}
                    <p className="text-textdark text-sm leading-relaxed">
                        3 Steps Athletics<br />
                        Im Hüttengraben 6<br />
                        8700 Küsnacht<br />
                        {t('contactAddress.phone')}: +41 76 321 17 76 (Whatsapp)<br />
                        E-Mail: info@3stepshockey.ch<br />
                    </p>
                    <p className="text-textdark text-sm leading-relaxed">
                        {t('contactAddress.authorizedPerson')}:<br />
                        Kevin Kasper, {t('contactAddress.professionalTitle')}
                    </p>

                    <h3 className="text-xl font-semibold text-primary mb-2 mt-4 disclaimer-title">
                        {t('disclaimer.title')}
                    </h3>
                    <p className="text-textdark text-sm leading-relaxed">
                        {t('disclaimer.paragraph1')}
                    </p>
                    <p className="text-textdark text-sm leading-relaxed">
                        {t('disclaimer.paragraph2')}
                    </p>
                    <p className="text-textdark text-sm leading-relaxed">
                        {t('disclaimer.paragraph3')}
                    </p>
                    <p className="text-textdark text-sm leading-relaxed">
                        {t('disclaimer.paragraph4')}
                    </p>
                </div>
            </div>
        </SectionBlock>
    );
}