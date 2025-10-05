// src/pages/OurPurpose.js

import SectionBlock from '../components/SectionBlock';

export default function OurPurpose() {
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
            &quot;Sport has the power to change the world. It has the power to inspire, it has the power to 
            unite people in a way that little else does.&quot;
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
            That&apos;s why we remain open to new ideas, test innovative training methods and constantly adapt our program to offer our participants the best service possible.
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