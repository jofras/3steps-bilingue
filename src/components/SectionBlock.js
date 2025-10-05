// src/components/SectionBlock.js

import Image from 'next/image'; // 💡 NEW: Import the Next.js Image component

// NOTE: Since the imageGrid prop likely contains local image objects imported via 'import x from y',
// we use Next.js Image here. If it contained only strings (like external URLs), 
// we would need to handle remote patterns in next.config.js, but the <Image/> component is still preferred.

export default function SectionBlock({ title, children, bg = 'white', imageGrid, cta, titleFont = 'heading', padding = 'px-4 md:px-8' }) {
  return (
    <section className={`w-full pt-8 pb-8 ${padding} ${bg === 'gray' ? 'bg-background' : 'bg-white'} rounded-xl`}>
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className={`text-4xl mb-8 text-primary text-center font-${titleFont}`}>
            {title}
          </h2>
        )}
        <div className="text-lg text-textdark mb-6 text-center">{children}</div>

        {imageGrid && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {imageGrid.map((img, i) => (
              <Image // 💡 FIX: Replaced <img> with <Image />
                key={i} 
                src={img} 
                alt="Section visual" 
                // Set explicit width/height. Use 'fill' property or set a fixed size based on container.
                // Assuming images are loaded as object imports, fixed size is necessary here.
                width={300} 
                height={200}
                className="rounded shadow w-full h-auto object-cover" // Ensure object-cover works correctly with w/h
              />
            ))}
          </div>
        )}
        {cta && <div className="flex justify-center mt-6">{cta}</div>}
      </div>
    </section>
  );
}