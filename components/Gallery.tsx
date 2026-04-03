import Link from 'next/link';

const slots = [
  { label: 'Before & After — Kitchen Deep Clean', tag: 'Residential' },
  { label: 'Before & After — Office Space', tag: 'Commercial' },
  { label: 'Before & After — Post-Construction', tag: 'Construction' },
  { label: 'Before & After — Bathroom Restoration', tag: 'Deep Clean' },
  { label: 'Before & After — Move-Out Clean', tag: 'Move-Out' },
  { label: 'Before & After — Living Room', tag: 'Residential' },
];

const tagColors: Record<string, string> = {
  Residential: 'bg-teal-light text-teal-dark',
  Commercial: 'bg-blue-50 text-blue-700',
  Construction: 'bg-amber-50 text-amber-700',
  'Deep Clean': 'bg-purple-50 text-purple-700',
  'Move-Out': 'bg-rose-50 text-rose-700',
};

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-white" aria-labelledby="gallery-heading">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-light text-teal-dark text-xs font-dm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Our Work
          </div>
          <h2
            id="gallery-heading"
            className="font-playfair font-bold text-navy text-4xl md:text-5xl mb-5"
          >
            See the Difference
          </h2>
          <p className="text-navy/75 font-dm text-lg max-w-xl mx-auto">
            Before and after photos from real jobs across Northern Virginia. The results speak for
            themselves.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {slots.map((slot, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-dashed border-slate-200 bg-slate-50 hover:border-teal/40 transition-all duration-300 cursor-pointer"
              role="img"
              aria-label={slot.label}
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center transition-all duration-300 group-hover:bg-teal-50/50">
                <div className="w-14 h-14 rounded-xl bg-slate-200 group-hover:bg-teal-light flex items-center justify-center transition-colors duration-300">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400 group-hover:text-teal-dark transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy/80 font-dm text-sm font-medium leading-snug">
                    {slot.label}
                  </p>
                  <p className="text-navy/55 text-xs font-dm mt-1">Photo coming soon</p>
                </div>
                <span
                  className={`text-xs font-dm font-semibold px-3 py-1 rounded-full ${tagColors[slot.tag] ?? 'bg-slate-100 text-slate-600'}`}
                >
                  {slot.tag}
                </span>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 border-2 border-teal/0 group-hover:border-teal/30 rounded-xl transition-colors duration-300 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-navy/70 font-dm text-sm mb-4">
            Real before &amp; after photos will be added as we continue serving clients across
            Northern Virginia.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border-2 border-teal-dark text-teal-dark font-dm font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-teal-dark hover:text-white hover:-translate-y-0.5"
          >
            View Full Gallery
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
