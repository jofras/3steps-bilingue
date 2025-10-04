// About.js

import { Routes, Route, Link, Outlet } from 'react-router-dom';
import SectionBlock from '../components/SectionBlock';
import kevin2 from '../images/kevin2.jpg';

import TeamMemberCard from "../components/TeamMemberCard";

function WhoWeAre() {
  return (
    <SectionBlock title="Who We Are" bg="white">
      <div className="max-w-3xl mx-auto px-4 mb-12">
        <p className="text-textdark text-base leading-relaxed">
          To promote sport and the younger generation, we offer our programs during the season break. 
          In this way we help the “stars of tomorrow” to realize their dream. We are a young team, 
          all with coaching experience and actively play ice hockey ourselves. That's why 
          we know how to treat the participants and what it takes to become a professional. We 
          look forward to getting to know you personally!
        </p>
      </div>
      <TeamMemberCard
        imageSrc={kevin2}
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



function OurPurpose() {
  return (
    <SectionBlock title="Our Purpose" bg="white">
      <div className="max-w-3xl mx-auto px-4 space-y-12">
        {/* section 1 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary mb-2">Our Drive at 3 Steps Athletics</h3>
          <p className="text-textdark text-base">
            We at 3 Steps Athletics are young, motivated and active athletes ourselves. We are 
            driven by our passion for sport and it is precisely this enthusiasm that we want to pass 
            on to our participants. Our aim is to get people, especially children and young people, 
            excited about sport and help them to get better at the sport they love. 
          </p>
          <p className="text-textdark text-base">
            The trick is to combine hard work with passion. This is how we develop not only as 
            athletes, but also as people and achieve things that previously seemed unthinkable. We 
            want to combine the two to create the most holistic and effective training experience 
            possible.
          </p>
          <p className="text-textdark text-base">
            At a time when the digital world is increasingly influencing our lives, it is more important 
            than ever to inspire children and young people to exercise and play sport. Today, young 
            people are moving less than ever before. Instead of sitting in front of their cell phones for 
            hours on end, we want to motivate them to do sport, to develop a genuine enjoyment of 
            it and the inner will to get the best out of themselves in their discipline.
          </p>
          <p className="text-textdark text-base">
            Our training sessions not only promote athletic development, but they also strengthen 
            the community. Sport unites. Nelson Mandela also summed this up:
          </p>
          <p className="text-textdark text-base italic">
            "Sport has the power to change the world. It has the power to inspire, it has the power to 
            unite people in a way that little else does."
          </p>
        </div>

        {/* section 2 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary mb-2">What makes us special</h3>
          <p className="text-textdark text-base">
            Our young age and our own active sports experience give us a direct line to the 
            participants. We understand their perspective, speak their language and know how to 
            motivate them. As we are active ourselves, we are able to demonstrate each exercise 
            correctly and comprehensibly, which is crucial for the learning process. After all, 
            children and young people not only learn by doing, but also visually by seeing.
          </p>

          <p className="text-textdark text-base">
            Our training concept is based on a simple but effective principle: we always ask ourselves the following questions first:
          </p>
          <ul className="list-disc list-inside text-textdark text-base pl-4 space-y-1">
            <li>Which abilities (skills) should be trained?</li>
            <li>How can they be learned and improved?</li>
            <li>What effect do these skills have in games or competitions?</li>
          </ul>

          <p className="text-textdark text-base">
            Only when we can clearly answer these questions do we integrate an element into our program. Every exercise, every method is a conscious decision and has a specific application in the respective sport. We always ask ourselves whether this exercise would help us progress and make us a more complete player as well.
          </p>

          <p className="text-textdark text-base">
            Our approach is driven by constant reflection and improvement. We believe in the principle that “change is the only constant in life”, as the Greek philosopher Heraclitus once said.
          </p>

          <p className="text-textdark text-base">
            That's why we remain open to new ideas, test innovative training methods and constantly adapt our program to offer our participants the best service possible.
          </p>

          <p className="text-textdark text-base">
            Our drive: to strengthen society with the power of sport and to especially support children and young people.
          </p>

          <p className="text-textdark text-base font-semibold">
            Young. Dynamic. Innovative. That is 3 Steps Athletics.
          </p>
        </div>
      </div>
    </SectionBlock>
  );
}

function Why3Steps() {
  return (
    <SectionBlock title="Why 3 Steps?" bg="white">
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        <p className="text-textdark text-base">
          <strong>3 Steps</strong> stands for wholeness. Many things are often summarized with 3 things and so 3 Steps is
          symbolic of the fact that we try to take into account all aspects that influence people and athletes and thus their
          performance in sport.
        </p>

        <p className="text-textdark text-base">
          Life is complex and is influenced by many different factors and so is sport. Just as in life, many different
          factors contribute to success or failure, so it is in sport. An athlete's performance is influenced by many different
          variables, and with 3 Steps we try to integrate all these aspects into our program.
        </p>

        <p className="text-textdark text-base">
          Sport can also be roughly divided into 3 categories:
        </p>

        <ul className="list-disc list-inside text-textdark text-base space-y-1">
          <li>Sport-specific ability</li>
          <li>Physique</li>
          <li>Mind</li>
        </ul>

        <p className="text-textdark text-base">
          These categories can then be divided again into 3 further categories and then those categories again. This shows
          that sport is a never-ending learning and development process. You are never finished, neither as a person nor as
          an athlete.
        </p>

        <p className="text-textdark text-base">
          In the midst of this complexity, it is crucial to keep a clear head and focus on the essentials. This is exactly
          where our training comes in:
        </p>

        <p className="text-textdark text-base">
          We provide structure and take a targeted yet holistic approach. Our goal is to offer training that is both
          comprehensive and effective, focused on what really matters and is aligned with our capabilities, considering the
          scope of each training.
        </p>
      </div>
    </SectionBlock>
  );
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 -mt-2 md:mt-2">
      <nav className="flex gap-6 justify-center mb-8">
        <Link to="whoweare" className="text-textdark text-sm md:text-lg hover:text-primary font-medium">Who We Are</Link>
        <Link to="purpose" className="text-textdark text-sm md:text-lg hover:text-primary font-medium">Our Purpose</Link>
        <Link to="why-3-steps" className="text-textdark text-sm md:text-lg hover:text-primary font-medium">Why 3 Steps?</Link>
      </nav>
      <Routes>
        <Route path="whoweare" element={<WhoWeAre />} />
        <Route path="purpose" element={<OurPurpose />} />
        <Route path="why-3-steps" element={<Why3Steps />} />
        <Route index element={<OurPurpose />} />
      </Routes>
      <Outlet />
    </div>
  );
}