// SectionBlock.js

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
              <img key={i} src={img} alt="Section visual" className="rounded shadow" />
            ))}
          </div>
        )}
        {cta && <div className="flex justify-center mt-6">{cta}</div>}
      </div>
    </section>
  );
}