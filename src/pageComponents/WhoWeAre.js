// src/pages/WhoWeAre.js

"use client";

import { useTranslations } from 'next-intl';
import SectionBlock from '../components/SectionBlock';
import cedricImage from '../images/people/cedi.jpg';
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
                imageSrc={cedricImage}
                name="Cedric Schumacher" 
                age={t('ageDisplay', { age: 23 })} // pass "years old" translation here
                roles={[
                    t('cedric.role1'),
                    t('cedric.role2'),
                ]}
                quote={t('about.whoweare.cedric.quote')} 
            />
            {/* add more team members here */}
        </SectionBlock>
    );
}
