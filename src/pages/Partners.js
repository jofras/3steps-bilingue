// Partners.js

import SectionBlock from '../components/SectionBlock';
import bkLogo from '../images/partners/bk.svg.png';
import nikeLogo from '../images/partners/nike.svg.png';
import nvidiaLogo from '../images/partners/nvidia.svg.png';
import underarmourLogo from '../images/partners/underarmour.svg.png';

const partners = [
  { name: 'BK', logo: bkLogo, url: 'https://www.bk.com' },
  { name: 'Nike', logo: nikeLogo, url: 'https://www.nike.com' },
  { name: 'Nvidia', logo: nvidiaLogo, url: 'https://www.nvidia.com' },
  { name: 'Under Armour', logo: underarmourLogo, url: 'https://www.underarmour.com' },
];

export default function Partners() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 -mt-4 md:mt-8">
      <SectionBlock
        title="Our Partners"
        bg="white"
        cta={
          <a
            href="/contact"
            className="bg-primary text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition"
          >
            Become a Partner
          </a>
        }
        padding="px-8 md:px-8"
      >
        <p className="mb-8">
          We are grateful to have you as partners.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center mb-8">
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 h-28 flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-full max-h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}