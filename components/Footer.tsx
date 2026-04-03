import Link from 'next/link';

const services = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Post-Construction Cleanup',
  'Deep Cleaning',
  'Move-In / Move-Out',
  'Custom Cleaning Plans',
  'Office Cleaning',
  'Recurring Maintenance',
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#0F172A' }} aria-label="Site footer">
      {/* Main footer */}
      <div className="container-site py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-5 group"
              aria-label="A & J First Class Cleaning home"
            >
              <div className="w-9 h-9 rounded-lg bg-teal-dark flex items-center justify-center group-hover:bg-teal transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M10 2C10 2 4 5 4 10.5C4 13.538 6.686 16 10 16C13.314 16 16 13.538 16 10.5C16 5 10 2 10 2Z"
                    fill="white"
                    opacity="0.9"
                  />
                  <path
                    d="M7 12C7 12 8.5 14 10 14C11.5 14 13 12 13 12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="14" cy="5" r="2" fill="#CCFBF1" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block font-playfair font-bold text-white text-base">
                  A&amp;J First Class
                </span>
                <span className="block text-xs font-dm font-medium tracking-widest uppercase text-teal">
                  Cleaning
                </span>
              </div>
            </Link>
            {/* text-white/55 → text-white/75 (was ~3.4:1, now ~4.7:1) */}
            <p className="text-white/75 font-dm text-sm leading-relaxed mb-6">
              Detailed, custom cleaning services across Northern Virginia. Residential, commercial,
              and post-construction.
            </p>
            <div className="space-y-2">
              {/* text-white/65 → text-white/80 (was ~4.1:1, now ~5.2:1) */}
              <a
                href="tel:5713835946"
                className="flex items-center gap-2 text-white/80 hover:text-teal text-sm font-dm transition-colors duration-200"
                aria-label="Call us at 571-383-5946"
              >
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
                571-383-5946
              </a>
              <a
                href="tel:5715529996"
                className="flex items-center gap-2 text-white/80 hover:text-teal text-sm font-dm transition-colors duration-200"
                aria-label="Call us at 571-552-9996"
              >
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
                571-552-9996
              </a>
              <a
                href="mailto:aandjfirstclasscleaning@gmail.com"
                className="flex items-center gap-2 text-white/80 hover:text-teal text-sm font-dm transition-colors duration-200 break-all"
                aria-label="Email us"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal flex-shrink-0"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                aandjfirstclasscleaning@gmail.com
              </a>
              <div className="flex items-center gap-2 text-white/80 text-sm font-dm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Northern Virginia
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-dm font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {/* text-white/55 → text-white/75 */}
                    <Link
                      href={link.href}
                      className="text-white/75 hover:text-teal font-dm text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-dm font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  {/* text-white/55 → text-white/75 */}
                  <Link
                    href="/services"
                    className="text-white/75 hover:text-teal font-dm text-sm transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service area + CTA */}
          <div>
            <h3 className="font-dm font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Service Area
            </h3>
            <ul className="space-y-1.5 mb-7">
              {[
                'Herndon, VA',
                'Reston, VA',
                'Ashburn, VA',
                'Sterling, VA',
                'McLean, VA',
                'Fairfax, VA',
                'Chantilly, VA',
                'Leesburg, VA',
              ].map((city) => (
                /* text-white/50 → text-white/70 */
                <li key={city} className="text-white/70 font-dm text-sm flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-teal rounded-full flex-shrink-0" aria-hidden="true" />
                  {city}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-dark text-white font-dm font-semibold text-sm px-5 py-3 rounded-lg transition-all duration-300 hover:bg-teal hover:shadow-teal"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* text-white/35 → text-white/60 */}
          <p className="text-white/60 font-dm text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} A &amp; J First Class Cleaning. All rights reserved.
            Northern Virginia&apos;s trusted cleaning service.
          </p>
          {/* text-white/35 → text-white/60 */}
          <a
            href="https://lvluplocal.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-teal font-dm text-xs transition-colors duration-200 flex items-center gap-1"
            aria-label="Website made by Level Up Local"
          >
            Made by <span className="text-teal font-semibold">Level Up Local</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
