import Link from 'next/link';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
};

const services: Service[] = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Residential Cleaning',
    description:
      'Comprehensive top-to-bottom home cleaning. We cover every room with the attention to detail your space deserves — kitchens, bathrooms, bedrooms, and beyond.',
    highlight: true,
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Commercial Cleaning',
    description:
      'Keep your business spotless and professional. We work around your schedule to minimize disruption while delivering a consistently clean workspace your team and clients will notice.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: 'Post-Construction Cleanup',
    description:
      'New builds and renovations leave behind dust, debris, and residue. We handle the full construction cleanup so your space is move-in ready — down to the last detail.',
    highlight: true,
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22V12M12 12L5 6.5M12 12l7-5.5" />
        <path d="M5 6.5V17a2 2 0 002 2h10a2 2 0 002-2V6.5" />
        <path d="M3 7l9-5 9 5" />
      </svg>
    ),
    title: 'Deep Cleaning',
    description:
      'A thorough, intensive clean that goes far beyond the surface. Perfect for seasonal refreshes, first-time cleanings, or any time your space needs a true reset.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
    title: 'Move-In / Move-Out Cleaning',
    description:
      'Moving is stressful enough. Let us handle the cleaning so you can focus on the transition. We ensure the space is fresh for whoever comes next.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Custom Cleaning Plans',
    description:
      'Not every space fits a template. We build a cleaning plan around your specific needs, preferences, and schedule — so you always get exactly what you need.',
    highlight: true,
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'Office &amp; Business Cleaning',
    description:
      'A clean office is a productive office. We maintain your workplace with professional-grade products and a reliable recurring schedule your team can count on.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 3a2.85 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
    title: 'Recurring Maintenance Cleaning',
    description:
      'Weekly, bi-weekly, or monthly — we keep your home or business in perfect condition on a schedule that works for you. Consistency you can rely on.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-site-bg" aria-labelledby="services-heading">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-light text-teal-dark text-xs font-dm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            What We Offer
          </div>
          <h2
            id="services-heading"
            className="font-playfair font-bold text-navy text-4xl md:text-5xl mb-5"
          >
            Every Clean, Done Right
          </h2>
          <p className="text-navy/75 font-dm text-lg max-w-2xl mx-auto leading-relaxed">
            From routine maintenance to post-construction restoration, we bring the same first-class
            approach to every job — no shortcuts, no compromises.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <article
              key={i}
              className={`service-card relative bg-white rounded-xl p-6 border-2 cursor-default ${
                service.highlight ? 'border-teal/40 shadow-card' : 'border-transparent shadow-card'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="bg-teal-light text-teal-dark text-xs font-dm font-semibold px-2.5 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-teal-light text-teal-dark flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-teal-dark group-hover:text-white">
                {service.icon}
              </div>
              <h3
                className="font-playfair font-semibold text-navy text-lg mb-2 leading-snug"
                dangerouslySetInnerHTML={{ __html: service.title }}
              />
              <p className="text-navy/75 font-dm text-sm leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-dark text-white font-dm font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-teal hover:shadow-teal hover:-translate-y-0.5"
          >
            Get a Custom Quote
            <svg
              width="18"
              height="18"
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
