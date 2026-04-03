import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 20% 50%, rgba(45,212,191,0.07) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(13,148,136,0.09) 0%, transparent 40%), linear-gradient(135deg, #0F172A 0%, #0D1F3A 35%, #0B2545 65%, #0C2E4F 100%)',
      }}
      aria-label="Hero section"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-teal" />
        <div className="absolute top-40 right-40 w-48 h-48 rounded-full border border-teal" />
        <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full border border-teal" />
      </div>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-teal-dark/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-56 h-56 bg-teal/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-teal/30 text-teal-light text-xs font-dm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" aria-hidden="true" />
              Serving Northern Virginia
            </div>

            <h1 className="font-playfair font-bold text-white leading-tight mb-6">
              <span className="block text-4xl sm:text-5xl xl:text-6xl mb-1">
                First Class Cleaning
              </span>
              <span className="block text-4xl sm:text-5xl xl:text-6xl gradient-text">
                for Your Home
              </span>
              <span className="block text-4xl sm:text-5xl xl:text-6xl text-white">
                &amp; Business
              </span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl font-dm leading-relaxed mb-10 max-w-xl">
              Detailed, custom cleaning services across Northern Virginia. Residential, commercial,
              and post-construction — we leave every space spotless.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:5713835946"
                className="inline-flex items-center justify-center gap-3 bg-teal-dark text-white font-dm font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-teal hover:shadow-teal-lg hover:-translate-y-1"
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
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/50 text-white font-dm font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-white hover:text-navy hover:border-white hover:-translate-y-1"
              >
                Request a Free Quote
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

            {/* Phone numbers */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-white/80 text-sm font-dm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-teal flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:5713835946" className="hover:text-teal transition-colors">
                  571-383-5946
                </a>
                <span>·</span>
                <a href="tel:5715529996" className="hover:text-teal transition-colors">
                  571-552-9996
                </a>
              </div>
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="hidden lg:block relative" aria-hidden="true">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-dark flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M9 11.5c0 2.485-2.015 4.5-4.5 4.5S0 13.985 0 11.5 2.015 7 4.5 7 9 9.015 9 11.5zM4.5 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM24 11.5C24 13.985 21.985 16 19.5 16S15 13.985 15 11.5 17.015 7 19.5 7 24 9.015 24 11.5zm-4.5-2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 2c2.485 0 4.5 2.015 4.5 4.5S14.485 11 12 11s-4.5-2.015-4.5-4.5S9.515 2 12 2zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 13c2.67 0 8 1.34 8 4v1H4v-1c0-2.66 5.33-4 8-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-playfair font-semibold text-lg">
                      Patricia Zavala
                    </p>
                    <p className="text-teal-light text-sm font-dm">CEO &amp; Founder</p>
                  </div>
                </div>
                <p className="text-white/80 font-dm text-base leading-relaxed mb-6">
                  "Every home and business deserves a first-class clean. We bring attention to
                  detail that most companies overlook — because the details are everything."
                </p>
                <div className="flex gap-1" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#2DD4BF"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="text-teal-light text-sm font-dm ml-2">5.0 · Google Reviews</span>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-teal-dark rounded-2xl px-5 py-4 shadow-teal-lg animate-float">
                <p className="text-white font-playfair font-bold text-2xl">100%</p>
                <p className="text-teal-light text-xs font-dm font-medium">
                  Satisfaction Guarantee
                </p>
              </div>
              <div
                className="absolute -bottom-6 -left-6 bg-navy/90 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-soft animate-float"
                style={{ animationDelay: '2s' }}
              >
                <p className="text-white font-playfair font-bold text-2xl">NoVA</p>
                <p className="text-teal text-xs font-dm font-medium">Licensed &amp; Insured</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path d="M0 80H1440V40C1200 80 960 20 720 40C480 60 240 10 0 40V80Z" fill="#F8FFFE" />
        </svg>
      </div>
    </section>
  );
}
