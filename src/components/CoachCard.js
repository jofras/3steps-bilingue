// src/components/CoachCard.js

import Image from "next/image";

export default function CoachCard({ imageSrc, name, bullets }) {
  return (
    <div
      className="
        bg-white rounded-xl shadow-md p-5
        flex flex-col items-center text-center
        transition-transform transition-shadow duration-200
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* image */}
      <div className="w-full aspect-square relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-lg object-cover object-[center_30%]"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      {/* name */}
      <h3 className="mt-4 text-xl font-heading text-primary">
        {name}
      </h3>

      {/* bullets */}
      <ul className="mt-3 list-disc list-inside text-textmid text-sm text-left space-y-1">
        {bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
