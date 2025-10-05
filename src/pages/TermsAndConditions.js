// src/pages/TermsAndConditions.js
import SectionBlock from "../components/SectionBlock";

export default function TermsAndConditions() {
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