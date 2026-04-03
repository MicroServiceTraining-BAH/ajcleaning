import type { Metadata } from 'next';
import BookCTA from '@/components/BookCTA';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Before and after photos from A & J First Class Cleaning jobs across Northern Virginia. Residential, commercial, and post-construction cleaning results.',
};

type GallerySlot = {
  label: string;
  sublabel: string;
  tag: string;
  size?: 'large' | 'normal';
};

const gallerySlots: GallerySlot[] = [
  {
    label: 'Kitchen Deep Clean',
    sublabel: 'Grease removal, appliance cleaning, cabinet restoration',
    tag: 'Residential',
    size: 'large',
  },
  {
    label: 'Post-Construction Site',
    sublabel: 'Full debris removal and detail clean',
    tag: 'Construction',
  },
  { label: 'Office Space Refresh', sublabel: 'Commercial cleaning, Reston VA', tag: 'Commercial' },
  {
    label: 'Master Bathroom',
    sublabel: 'Grout scrubbing, fixture polishing, tile restoration',
    tag: 'Deep Clean',
    size: 'large',
  },
  {
    label: 'Move-Out Apartment',
    sublabel: 'Full move-out clean, deposit return ready',
    tag: 'Move-Out',
  },
  {
    label: 'Living Room Maintenance',
    sublabel: 'Weekly recurring clean, Herndon VA',
    tag: 'Residential',
  },
  {
    label: 'New Construction Home',
    sublabel: 'Post-build final clean, Ashburn VA',
    tag: 'Construction',
  },
  {
    label: 'Restaurant Kitchen',
    sublabel: 'Commercial deep clean',
    tag: 'Commercial',
    size: 'large',
  },
  { label: 'Primary Bedroom', sublabel: 'Bi-weekly maintenance clean', tag: 'Residential' },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  Residential: { bg: 'bg-teal-light', text: 'text-teal-dark' },
  Commercial: { bg: 'bg-blue-50', text: 'text-blue-700' },
  Construction: { bg: 'bg-amber-50', text: 'text-amber-700' },
  'Deep Clean': { bg: 'bg-purple-50', text: 'text-purple-700' },
  'Move-Out': { bg: 'bg-rose-50', text: 'text-rose-700' },
};

const categories = ['All', 'Residential', 'Commercial', 'Construction', 'Deep Clean', 'Move-Out'];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundColor: '#0F172A' }}
        aria-labelledby="gallery-page-heading"
      >
        <div className="absolute inset-0 hero-pattern pointer-events-none" aria-hidden="true" />
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-teal/30 text-teal-light text-xs font-dm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Our Work
            </div>
            <h1
              id="gallery-page-heading"
              className="font-playfair font-bold text-white text-5xl md:text-6xl leading-tight mb-6"
            >
              See the <span className="gradient-text">Difference</span>
            </h1>
            <p className="text-white/85 font-dm text-xl leading-relaxed max-w-2xl">
              Before and after photos from real jobs across Northern Virginia. Every photo tells the
              same story — first class results, every time.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path d="M0 60H1440V30C1200 60 960 10 720 30C480 50 240 5 0 30V60Z" fill="#F8FFFE" />
          </svg>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-site-bg" aria-label="Photo gallery">
        <div className="container-site">
          {/* Filter tabs — decorative for now */}
          <div
            className="flex flex-wrap gap-2 justify-center mb-12"
            role="list"
            aria-label="Gallery categories"
          >
            {categories.map((cat, i) => (
              <span
                key={cat}
                role="listitem"
                className={`px-4 py-2 rounded-full font-dm text-sm font-medium cursor-default transition-all ${
                  i === 0
                    ? 'bg-teal-dark text-white shadow-teal'
                    : 'bg-white text-navy/60 border border-slate-200 hover:border-teal-dark hover:text-teal-dark'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {gallerySlots.map((slot, i) => {
              const colors = tagColors[slot.tag] ?? { bg: 'bg-slate-100', text: 'text-slate-600' };
              return (
                <div
                  key={i}
                  className={`group break-inside-avoid rounded-xl overflow-hidden border-2 border-dashed border-slate-200 bg-white hover:border-teal/40 transition-all duration-300 cursor-pointer shadow-card hover:shadow-hover ${
                    slot.size === 'large' ? 'aspect-[4/5]' : 'aspect-[4/3]'
                  } relative flex flex-col items-center justify-center gap-3 p-6 text-center`}
                  role="img"
                  aria-label={`${slot.label} — ${slot.sublabel}`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center transition-all duration-300 group-hover:bg-teal-50/30">
                    <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-teal-light flex items-center justify-center transition-colors duration-300">
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
                      <p className="text-navy font-dm font-semibold text-sm leading-snug">
                        {slot.label}
                      </p>
                      <p className="text-navy/65 text-xs font-dm mt-1 leading-snug">
                        {slot.sublabel}
                      </p>
                      <p className="text-navy/30 text-xs font-dm mt-1 italic">Photo coming soon</p>
                    </div>
                    <span
                      className={`text-xs font-dm font-semibold px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}
                    >
                      {slot.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Notice */}
          <div className="mt-12 bg-white rounded-2xl border border-teal/20 p-8 text-center shadow-card">
            <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mx-auto mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0D9488"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h2 className="font-playfair font-bold text-navy text-2xl mb-2">Photos In Progress</h2>
            <p className="text-navy/60 font-dm text-base max-w-lg mx-auto">
              We&apos;re actively photographing our jobs across Northern Virginia. Real
              before-and-after photos will be added here as they come in. In the meantime, our
              Google reviews speak for themselves.
            </p>
          </div>
        </div>
      </section>

      <BookCTA />
    </>
  );
}
