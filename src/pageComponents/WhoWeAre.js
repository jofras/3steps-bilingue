// src/pages/WhoWeAre.js

"use client";

import { useTranslations } from 'next-intl';
import SectionBlock from '../components/SectionBlock';
import kevinImage from '../images/people/kevin_new.jpg';
import lukasImage from '../images/people/lukas.jpg';
import justinImage from '../images/people/justin.jpg';
import cedricImage from '../images/people/cedric.jpg';
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
                age={t('ageDisplay', { age: 22 })} // pass "years old" translation here
                roles={[
                    t('kevin.role1'),
                    t('kevin.role2'),
                ]}
                quote={t('kevin.quote')} 
            />
           <TeamMemberCard
                imageSrc={cedricImage}
                name="Cedric Schumacher" 
                age={t('ageDisplay', { age: 23 })} // pass "years old" translation here
                roles={[
                    t('cedric.role1'),
                    t('cedric.role2'),
                ]}
                quote={t('cedric.quote')} 
            />
            {/* add more team members here */}
        </SectionBlock>
    );
}
