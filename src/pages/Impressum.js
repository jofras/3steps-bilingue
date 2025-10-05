// src/pages/Impressum.js
import SectionBlock from '../components/SectionBlock';

export default function Impressum() {
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