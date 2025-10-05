// src/pages/PrivacyPolicy.js
import SectionBlock from '../components/SectionBlock';

export default function PrivacyPolicy() {
  return (
    <SectionBlock title="Privacy Policy" bg="white">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <p className="text-textdark text-sm leading-relaxed">
            The responsible body for data protection is 3 Steps Athletics, located at Im Hüttengraben 6, 8700 Küsnacht. You can contact us by email at info@3stepsathletics.ch.
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            We treat your personal data confidentially and in accordance with data protection regulations. We want to point out that data transmission over the Internet may have security vulnerabilities, and complete protection from third-party access is not possible. Personal data, such as name, address, or email, is collected on a voluntary basis as much as possible. We will not pass on your data to third parties without your consent.
          </p>
        </div>
      </div>
    </SectionBlock>
  );
}