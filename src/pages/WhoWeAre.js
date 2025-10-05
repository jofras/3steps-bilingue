// src/pages/WhoWeAre.js

import SectionBlock from '../components/SectionBlock';
import kevinImage from '../images/kevin2.jpg';
import TeamMemberCard from "../components/TeamMemberCard";

export default function WhoWeAre() {
    return (
        <SectionBlock title="Who We Are" bg="white">
            <div className="max-w-3xl mx-auto px-4 mb-12">
                <p className="text-textdark text-base leading-relaxed">
                    To promote sport and the younger generation, we offer our programs during the season break.
                    In this way we help the “stars of tomorrow” to realize their dream. We are a young team,
                    all with coaching experience and actively play ice hockey ourselves. That&apos;s why
                    we know how to treat the participants and what it takes to become a professional. We
                    look forward to getting to know you personally!
                </p>
            </div>
            <TeamMemberCard
                imageSrc={kevinImage}
                name="Kevin Kasper"
                age={21}
                roles={[
                    "Founder 3 Steps Athletics & Lead Coach Ice Hockey",
                    "Active player for Ohio University D1 Ice Hockey Team",
                ]}
                quote={`I started playing hockey for the Lions organization when I was 5 years old. 
            With an exception of 2 seasons, one of which I played for the EHC Kloten and one that I 
            had to miss out because of my health, I played all those years as a Lion until the end of 
            the 23/24 season. In 2022 I started 3 Steps Hockey and been coaching actively ever since. 
            I founded it to share my love for sports and help participants improve at it through a well-rounded 
            and holistic approach to training.`}
            />
            {/* Add more team members here as needed */}
        </SectionBlock>
    );
}