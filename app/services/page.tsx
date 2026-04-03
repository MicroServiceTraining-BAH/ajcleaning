import type { Metadata } from 'next';
import Link from 'next/link';
import BookCTA from '@/components/BookCTA';

export const metadata: Metadata = {
  title: 'Cleaning Services',
  description:
    'Full-service cleaning for homes, businesses, and post-construction sites across Northern Virginia. Residential, commercial, deep clean, move-in/out, and custom cleaning plans.',
};

type ServiceDetail = {
  title: string;
  description: string;
  includes: string[];
  icon: React.ReactNode;
  tag?: string;
};

const serviceDetails: ServiceDetail[] = [
  {
    title: 'Residential Cleaning',
    tag: 'Most Popular',
    description:
      'Your home should be your sanctuary. Our residential cleaning service covers every room, top to bottom, leaving your space fresh, spotless, and exactly the way you want it. We adapt to your schedule and preferences.',
    includes: [
      'Kitchen cleaning — countertops, appliances, sink, cabinet exteriors',
      'Bathroom scrubbing and disinfecting',
      'Dusting all surfaces, fixtures, and fans',
      'Vacuuming and mopping all floors',
      'Bed making and linen changing (upon request)',
      'Trash removal from all rooms',
      'Window sill and baseboard wiping',
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Commercial Cleaning',
    description:
      'A clean workplace reflects your brand. We keep your business looking professional with reliable, disruption-free commercial cleaning. Flexible scheduling means we work when it works for you — before hours, after hours, or on weekends.',
    includes: [
      'Office desks and workstation sanitizing',
      'Conference room and common area cleaning',
      'Kitchen and break room cleaning',
      'Restroom disinfecting',
      'Reception and lobby presentation',
      'Trash and recycling removal',
      'Floor vacuuming, sweeping, and mopping',
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Post-Construction Cleanup',
    tag: 'Specialized',
    description:
      'Construction leaves behind dust, debris, adhesive residue, and fine particles that require a specialized approach. Our post-construction cleanup team has the experience and equipment to bring your newly built or renovated space to move-in ready condition.',
    includes: [
      'Removal of construction dust from all surfaces',
      'Cleaning and polishing new fixtures and appliances',
      'Window and glass cleaning inside and out',
      'Grout and tile cleaning',
      'Paint overspray and sticker removal',
      'Floor polishing and debris removal',
      'Final detail inspection before handoff',
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Deep Cleaning',
    description:
      'A deep clean goes beyond your standard maintenance. We tackle built-up grime, hard-to-reach areas, and everything in between. Perfect for first-time clients, seasonal refreshes, or any time your space needs a genuine reset.',
    includes: [
      'Inside oven and refrigerator cleaning',
      'Inside cabinet and drawer cleaning',
      'Grout scrubbing and tile cleaning',
      'Detailed baseboard and trim cleaning',
      'Ceiling fan blade and light fixture cleaning',
      'Behind and under furniture cleaning',
      'Full window and blind cleaning',
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22V12M12 12L5 6.5M12 12l7-5.5" />
        <path d="M5 6.5V17a2 2 0 002 2h10a2 2 0 002-2V6.5" />
        <path d="M3 7l9-5 9 5" />
      </svg>
    ),
  },
  {
    title: 'Move-In / Move-Out Cleaning',
    description:
      'Moving is already stressful — the cleaning shouldn&apos;t be. Whether you&apos;re leaving a rental and need your deposit back, or moving into a new place and want a fresh start, we handle the entire cleaning process so you can focus on the move.',
    includes: [
      'Full deep clean of all rooms',
      'Inside all cabinets, drawers, and closets',
      'Appliance cleaning inside and out',
      'Bathroom and kitchen disinfecting',
      'Wall spot cleaning',
      'All floors vacuumed, swept, and mopped',
      'Final walkthrough with checklist',
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    title: 'Custom Cleaning Plans',
    tag: 'Flexible',
    description:
      'Not every space fits a standard package. We build completely custom cleaning plans around your schedule, priorities, and specific needs. Tell us what matters most and we&apos;ll design a plan that delivers it, every time.',
    includes: [
      'Initial consultation to assess your space',
      'Custom scope of work built around your needs',
      'Flexible scheduling — weekly, bi-weekly, monthly',
      'Priority areas and focus rooms defined by you',
      'Preferred products or eco-friendly options',
      'Ongoing adjustments as your needs change',
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Office & Business Cleaning',
    description:
      'Employees perform better in clean, organized environments. Our office cleaning services are scheduled around your business hours and calibrated to maintain a consistently professional workspace that reflects well on your company.',
    includes: [
      'Daily, weekly, or bi-weekly scheduling',
      'Desk and workstation cleaning',
      'Kitchen and break room sanitizing',
      'Restroom cleaning and restocking',
      'Lobby and reception area maintenance',
      'Meeting room reset and cleaning',
      'Trash removal and liner replacement',
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    title: 'Recurring Maintenance Cleaning',
    description:
      'The best way to maintain a clean space is consistency. Our recurring maintenance cleanings keep your home or business in peak condition without you having to think about it. Set it up once, then enjoy a clean space — always.',
    includes: [
      'Weekly, bi-weekly, or monthly options',
      'Consistent team assigned to your property',
      'Same checklist, same standards, every visit',
      'Priority scheduling for existing clients',
      'Flexible rescheduling when life happens',
      'Quarterly deep clean add-on available',
    ],
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 3a2.85 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundColor: '#0F172A' }}
        aria-labelledby="services-page-heading"
      >
        <div className="absolute inset-0 hero-pattern pointer-events-none" aria-hidden="true" />
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-teal/30 text-teal-light text-xs font-dm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              What We Offer
            </div>
            <h1
              id="services-page-heading"
              className="font-playfair font-bold text-white text-5xl md:text-6xl leading-tight mb-6"
            >
              First Class Cleaning, <span className="gradient-text">Every Service</span>
            </h1>
            <p className="text-white/85 font-dm text-xl leading-relaxed max-w-2xl">
              From residential maintenance to post-construction restoration — we bring the same
              detail-oriented standard to every job across Northern Virginia.
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

      {/* Services */}
      <section className="section-pad bg-site-bg" aria-label="Service details">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8">
            {serviceDetails.map((s, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-teal-light text-teal-dark flex items-center justify-center flex-shrink-0">
                    {s.icon}
                  </div>
                  {s.tag && (
                    <span className="bg-teal-light text-teal-dark text-xs font-dm font-semibold px-3 py-1 rounded-full flex-shrink-0">
                      {s.tag}
                    </span>
                  )}
                </div>
                <h2 className="font-playfair font-bold text-navy text-2xl mb-3">{s.title}</h2>
                <p className="text-navy/80 font-dm text-sm leading-relaxed mb-6">{s.description}</p>
                <div>
                  <p className="text-teal-dark font-dm font-semibold text-xs uppercase tracking-widest mb-3">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-2">
                    {s.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-navy/65 font-dm text-sm">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-teal-dark flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" fill="#CCFBF1" />
                          <path
                            d="m9 12 2 2 4-4"
                            stroke="#0D9488"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-navy/55 font-dm text-base mb-6 max-w-xl mx-auto">
              Not sure which service is right for you? Call us and we&apos;ll help you figure out
              the best plan for your space and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Free Quote
              </Link>
              <a href="tel:5713835946" className="btn-outline">
                Call 571-383-5946
              </a>
            </div>
          </div>
        </div>
      </section>

      <BookCTA />
    </>
  );
}
