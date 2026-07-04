// src/pages/WhoWeAre.js

"use client";

import { useTranslations } from 'next-intl';
import SectionBlock from '../components/SectionBlock';
import kevinImage from '../images/people/kevin_new.jpg';
import lukasImage from '../images/people/lukas.jpg';
import justinImage from '../images/people/justin.jpg';
import TeamMemberCard from "../components/TeamMemberCard";
import patrikImage from '../images/people/patrik.jpeg';

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
                imageSrc={lukasImage}
                name="Lukas Rubin" 
                age={t('ageDisplay', { age: 25 })} // pass "years old" translation here
                roles={[
                    t('lukas.role1'),
                    t('lukas.role2'),
                ]}
                quote={t('lukas.quote')} 
            />
            <TeamMemberCard
                imageSrc={justinImage}
                name="Justin Gull" 
                age={t('ageDisplay', { age: 21 })} // pass "years old" translation here
                roles={[
                    t('justin.role1'),
                    t('justin.role2'),
                ]}
                quote={t('justin.quote')} 
            />
            <TeamMemberCard
                imageSrc={patrikImage}
                name="Patrik Alström" 
                age={t('ageDisplay', { age: 23 })} // pass "years old" translation here
                roles={[
                    t('patrik.role1'),
                    t('patrik.role2'),
                ]}
                quote={t('patrik.quote')} 
            />
            {/* add more team members here */}
        </SectionBlock>
    );
}
