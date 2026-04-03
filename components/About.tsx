import Link from 'next/link';

const values = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    label: 'Detail-Oriented',
    desc: 'We clean what others miss',
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Reliable',
    desc: 'On time, every time',
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    label: 'Locally Owned',
    desc: 'Serving our community with pride',
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22V12M12 12L5 6.5M12 12l7-5.5" />
        <path d="M5 6.5V17a2 2 0 002 2h10a2 2 0 002-2V6.5" />
        <path d="M3 7l9-5 9 5" />
      </svg>
    ),
    label: 'Custom Approach',
    desc: 'No two spaces are the same',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white" aria-labelledby="about-heading">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main photo placeholder */}
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-teal-50 to-teal-light overflow-hidden flex items-center justify-center shadow-soft border border-teal/20">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-teal-dark/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0D9488"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="font-playfair font-semibold text-teal-dark text-xl mb-1">
                    Patricia Zavala
                  </p>
                  <p className="text-teal-dark text-sm font-dm">CEO &amp; Founder</p>
                  <p className="text-teal-dark/70 text-xs font-dm mt-4 italic">Photo coming soon</p>
                </div>
              </div>

              {/* Accent card */}
              <div
                className="absolute -bottom-6 -right-6 bg-navy rounded-2xl p-5 shadow-hover max-w-xs"
                aria-hidden="true"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-dark flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-dm font-semibold text-sm">5-Star Rated</p>
                    <p className="text-teal-light text-xs font-dm">Northern Virginia</p>
                  </div>
                </div>
                <div className="flex gap-1" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#2DD4BF"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Teal accent corner */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-teal/30 -z-10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right — Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-teal-light text-teal-dark text-xs font-dm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              About Us
            </div>
            <h2
              id="about-heading"
              className="font-playfair font-bold text-navy text-4xl md:text-5xl leading-tight mb-6"
            >
              Cleaning with Purpose, <span className="gradient-text">Led by Patricia</span>
            </h2>

            <div className="space-y-4 text-navy/80 font-dm text-base leading-relaxed mb-8">
              <p>
                A &amp; J First Class Cleaning was built on a simple belief: every home and business
                deserves to be treated with care. As CEO and founder, Patricia Zavala leads every
                job with that standard — not just clean, but first-class clean.
              </p>
              <p>
                Based in Northern Virginia, we&apos;ve built a reputation as a trusted, locally
                owned cleaning company that homeowners, property managers, and businesses rely on.
                Whether it&apos;s a weekly house clean or a post-construction site restoration, our
                approach never changes — detailed, thorough, and custom to your needs.
              </p>
              <p>
                We don&apos;t cut corners. We don&apos;t rush. We show up on time, every time, and
                we don&apos;t leave until the job is done right. That&apos;s the A &amp; J First
                Class promise.
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-light text-teal-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-dm font-semibold text-navy text-sm">{v.label}</p>
                    <p className="font-dm text-navy/70 text-xs">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-teal-dark text-white font-dm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:bg-teal hover:shadow-teal hover:-translate-y-0.5"
              >
                Our Story
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
              <a
                href="tel:5713835946"
                className="inline-flex items-center gap-2 border-2 border-navy/20 text-navy font-dm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:border-teal-dark hover:text-teal-dark"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                571-383-5946
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
