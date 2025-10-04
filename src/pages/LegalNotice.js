// LegalNotice.js

import { Routes, Route, Link, Outlet } from 'react-router-dom';
import SectionBlock from '../components/SectionBlock';

function Impressum() {
  return (
    <SectionBlock title="Legal Notice" bg="white">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-primary mb-2">Contact Address</h3>
          <p className="text-textdark text-sm leading-relaxed">
            3 Steps Athletics<br />
            Im Hüttengraben 6<br />
            8700 Küsnacht<br />
            Phone: +41 76 321 17 76 (Whatsapp)<br />
            E-Mail: info@3stepshockey.ch<br />
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            Authorized person(s) responsible:<br />
            Kevin Kasper, Managing Director
          </p>
          <h3 className="text-xl font-semibold text-primary mb-2 mt-4 disclaimer-title">Disclaimer</h3>
          <p className="text-textdark text-sm leading-relaxed">
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            As a service provider, we are responsible for our own content on these pages in accordance with general legislation. However, as a service provider, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general legislation remain unaffected by this. However, liability in this respect is only possible from the time of knowledge of a specific infringement. As soon as we become aware of such infringements, we will remove this content immediately.
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of an infringement. If we become aware of any legal infringements, we will remove such links immediately.
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            The content and works provided on these pages are governed by the copyright laws of Switzerland. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
          </p>
        </div>
      </div>
    </SectionBlock>
  );
}

function PrivacyPolicy() {
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

function TermsAndConditions() {
  return (
    <SectionBlock title="Terms & Conditions" bg="white">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <p className="text-textdark text-sm leading-relaxed">
            These General Terms and Conditions (GTC) apply to all registrations, bookings, and services made via our website or other means. For minors, the consent of a legal guardian is required.
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            The prices on the website are binding, and by registering, you agree to pay the full amount. If payment fails, you will receive an invoice to be paid within 14 days.
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            Registration is done online, and a binding contract is only concluded once you have received an explicit confirmation of participation from 3 Steps Athletics.
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            Cancellations made up to 4 weeks before the event are free of charge. Within 2 weeks of the start, 50% of the fee is due, and less than 24 hours before, 100% is due.
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            3 Steps Athletics accepts no liability for injury, theft, loss, or damage to personal belongings during the event. Any claims for damages are excluded.
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            By registering, you grant permission for photos and videos of the participant to be used for advertising purposes.
          </p>
          <p className="text-textdark text-sm leading-relaxed">
            The governing law is Swiss law, and the non-exclusive jurisdiction is the courts of Zurich.
          </p>
        </div>
      </div>
    </SectionBlock>
  );
}

export default function LegalNotice() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 -mt-2 md:mt-2">
      {/* Navigation menu commented out as requested */}
      <nav className="flex gap-6 justify-center mb-8">
        <Link to="impressum" className="text-textdark text-sm md:text-lg hover:text-primary font-medium">Legal Notice</Link>
        <Link to="privacy" className="text-textdark text-sm md:text-lg hover:text-primary font-medium">Privacy Policy</Link>
        <Link to="terms" className="text-textdark text-sm md:text-lg hover:text-primary font-medium">Terms & Conditions</Link>
      </nav>
      <Routes>
        <Route path="impressum" element={<Impressum />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsAndConditions />} />
        <Route index element={<Impressum />} />
      </Routes>
      <Outlet />
      <style jsx>{`
        .disclaimer-title {
          margin-top: 1.2rem !important;
        }
      `}</style>
    </div>
  );
}