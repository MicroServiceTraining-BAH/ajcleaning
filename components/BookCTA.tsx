export default function BookCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #0c3a4a 40%, #0D766E 100%)' }}
      aria-labelledby="book-cta-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        {/* Pattern dots */}
        <svg className="absolute inset-0 w-full h-full opacity-5" aria-hidden="true">
          <defs>
            <pattern id="cta-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      <div className="container-site relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-dm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" aria-hidden="true" />
            Book Your Cleaning
          </div>

          <h2
            id="book-cta-heading"
            className="font-playfair font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            Ready for a <span className="text-teal">Spotless</span> Space?
          </h2>

          <p className="text-white/90 font-dm text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Book your cleaning today and experience what first-class really means. Residential,
            commercial, and post-construction — we cover all of Northern Virginia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5713835946"
              className="inline-flex items-center justify-center gap-3 bg-white text-navy font-dm font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-teal-light hover:-translate-y-1 hover:shadow-soft"
              aria-label="Call us now at 571-383-5946"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call Now — 571-383-5946
            </a>
            <a
              href="mailto:aandjfirstclasscleaning@gmail.com"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/50 text-white font-dm font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-1"
              aria-label="Email us at aandjfirstclasscleaning@gmail.com"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email Us
            </a>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-white/75 text-sm font-dm">
            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-teal"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Licensed &amp; Insured
            </span>
            <span className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-teal"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              5-Star Google Rated
            </span>
            <span className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-teal"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Same-Week Availability
            </span>
            <span className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-teal"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              Locally Owned &amp; Operated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
