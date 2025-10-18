// src/pages/WhoWeAre.js

"use client";

import { useTranslations } from 'next-intl';
import SectionBlock from '../components/SectionBlock';
import kevinImage from '../images/people/kevin.jpg';
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
                name="Kevin Kasper" 
                age={t('ageDisplay', { age: 21 })} // pass "years old" translation here
                roles={[
                    t('kevin.role1'),
                    t('kevin.role2'),
                ]}
                quote={t('kevin.quote')} 
            />
            {/* add more team members here */}
        </SectionBlock>
    );
}