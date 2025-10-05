// src/pages/WhoWeAre.js

"use client";

import { useTranslations } from 'next-intl';
import SectionBlock from '../components/SectionBlock';
import kevinImage from '../images/kevin2.jpg';
import TeamMemberCard from "../components/TeamMemberCard";

export default function WhoWeAre() {
    const t = useTranslations('about.whoweare');

    return (
        <SectionBlock title={t('title')} bg="white">
            <div className="max-w-3xl mx-auto px-4 mb-12">
                <p className="text-textdark text-base leading-relaxed">
                    {t('introParagraph')}
                </p>
            </div>
            <TeamMemberCard
                imageSrc={kevinImage}
                name="Kevin Kasper" // Proper noun/name (not translated)
                age={21} // Data (not translated)
                roles={[
                    // Roles should be translated
                    t('kevin.role1'),
                    t('kevin.role2'),
                ]}
                quote={t('kevin.quote')} // Quote should be translated
            />
            {/* Add more team members here as needed */}
        </SectionBlock>
    );
}