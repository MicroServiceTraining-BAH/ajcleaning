import type { Metadata } from 'next';
import Link from 'next/link';
import BookCTA from '@/components/BookCTA';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Patricia Zavala, CEO and founder of A & J First Class Cleaning. Detail-oriented, custom cleaning services trusted by homeowners and businesses across Northern Virginia.',
};

const milestones = [
  {
    year: 'Founded',
    label: 'A & J First Class Cleaning',
    desc: 'Patricia Zavala launched the company with one mission: to deliver cleaning services that truly stand apart through attention to detail and a custom approach.',
  },
  {
    year: 'Expanded',
    label: 'Commercial Services',
    desc: 'Growing demand led us to expand beyond residential — serving offices, retail spaces, and businesses across Northern Virginia.',
  },
  {
    year: 'Added',
    label: 'Post-Construction Cleanup',
    desc: 'Partnering with contractors and developers to provide thorough post-construction cleaning so every new space is ready from day one.',
  },
  {
    year: 'Today',
    label: 'Trusted Across NoVA',
    desc: 'Serving hundreds of happy homeowners, property managers, and businesses across Herndon, Reston, Ashburn, McLean, and beyond.',
  },
];

const teamValues = [
  {
    title: 'Detail-Oriented',
    desc: "We clean what others overlook. Every corner, every surface, every detail — because that's what first class means.",
    icon: '🔍',
  },
  {
    title: 'Custom Approach',
    desc: 'No two homes or businesses are the same. We tailor every clean to your specific space and needs.',
    icon: '✨',
  },
  {
    title: 'Reliable & Punctual',
    desc: 'We show up when we say we will. Your schedule matters, and we respect it — every single time.',
    icon: '⏱',
  },
  {
    title: 'Trusted & Insured',
    desc: 'Licensed and insured for your peace of mind. We treat every space as if it were our own.',
    icon: '🛡',
  },
  {
    title: 'Locally Owned',
    desc: "We're your neighbors. We're invested in the Northern Virginia community we serve.",
    icon: '🏡',
  },
  {
    title: 'Client-First',
    desc: "Your satisfaction is our standard. We don't consider a job done until you do.",
    icon: '⭐',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundColor: '#0F172A' }}
        aria-labelledby="about-page-heading"
      >
        <div className="absolute inset-0 hero-pattern pointer-events-none" aria-hidden="true" />
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-teal/30 text-teal-light text-xs font-dm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Our Story
            </div>
            <h1
              id="about-page-heading"
              className="font-playfair font-bold text-white text-5xl md:text-6xl leading-tight mb-6"
            >
              The People Behind <span className="gradient-text">First Class Clean</span>
            </h1>
            <p className="text-white/85 font-dm text-xl leading-relaxed max-w-2xl">
              A & J First Class Cleaning was built on the belief that every home and business
              deserves to be treated with genuine care — not just a quick wipe-down, but a real,
              thorough clean that makes a visible difference.
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

      {/* Patricia Section */}
      <section className="section-pad bg-site-bg" aria-labelledby="patricia-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-teal-50 to-teal-light flex items-center justify-center shadow-soft border border-teal/20">
                <div className="text-center p-8">
                  <div className="w-28 h-28 rounded-full bg-teal-dark/20 flex items-center justify-center mx-auto mb-5">
                    <svg
                      width="56"
                      height="56"
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
                  <p className="font-playfair font-bold text-teal-dark text-2xl mb-1">
                    Patricia Zavala
                  </p>
                  <p className="text-teal-dark text-base font-dm">CEO &amp; Founder</p>
                  <p className="text-teal-dark/40 text-xs font-dm mt-3 italic">
                    Professional photo coming soon
                  </p>
                </div>
              </div>
              <div
                className="absolute -bottom-5 -right-5 bg-navy rounded-2xl p-5 shadow-hover"
                aria-hidden="true"
              >
                <p className="text-teal font-playfair font-bold text-3xl">NoVA</p>
                <p className="text-white/85 text-sm font-dm">Based &amp; Trusted</p>
              </div>
            </div>

            {/* Copy */}
            <div>
              <h2
                id="patricia-heading"
                className="font-playfair font-bold text-navy text-4xl md:text-5xl leading-tight mb-6"
              >
                Meet Patricia, <span className="gradient-text">CEO &amp; Founder</span>
              </h2>
              <div className="space-y-4 text-navy/65 font-dm text-base leading-relaxed">
                <p>
                  Patricia Zavala founded A &amp; J First Class Cleaning with a straightforward
                  philosophy: if you&apos;re going to clean something, clean it right. No shortcuts.
                  No rushing. No half measures.
                </p>
                <p>
                  As a lifelong Northern Virginia resident, Patricia understands what homeowners and
                  businesses here expect — and she built her company to exceed it. What started as a
                  residential cleaning service has grown into a full-service cleaning company
                  trusted by property managers, contractors, and families across the region.
                </p>
                <p>
                  Patricia leads every team personally and holds every job to the same standard
                  she&apos;d apply to her own home. Her attention to detail and genuine care for her
                  clients is what keeps them coming back — and what makes A &amp; J truly first
                  class.
                </p>
                <p>
                  When you book with A &amp; J, you&apos;re not getting a faceless cleaning crew.
                  You&apos;re getting a team that knows your name, knows your space, and takes pride
                  in the work they do.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book a Cleaning
                </Link>
                <a href="tel:5713835946" className="btn-outline">
                  Call 571-383-5946
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white" aria-labelledby="values-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2
              id="values-heading"
              className="font-playfair font-bold text-navy text-4xl md:text-5xl mb-4"
            >
              What We Stand For
            </h2>
            <p className="text-navy/60 font-dm text-lg max-w-xl mx-auto">
              These aren&apos;t just words on a page — they&apos;re the standard we hold every job
              to.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamValues.map((v) => (
              <div
                key={v.title}
                className="bg-site-bg rounded-xl p-6 border border-slate-100 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-4" aria-hidden="true">
                  {v.icon}
                </div>
                <h3 className="font-playfair font-semibold text-navy text-xl mb-2">{v.title}</h3>
                <p className="text-navy/60 font-dm text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-site-bg" aria-labelledby="story-heading">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2
              id="story-heading"
              className="font-playfair font-bold text-navy text-4xl md:text-5xl text-center mb-14"
            >
              How We Got Here
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-8 top-0 bottom-0 w-px bg-teal-light md:left-1/2"
                aria-hidden="true"
              />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-teal-dark border-4 border-white shadow-teal -translate-x-1/2 mt-1.5"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-card border border-slate-100">
                        <span className="text-teal-dark font-dm font-bold text-xs uppercase tracking-widest">
                          {m.year}
                        </span>
                        <h3 className="font-playfair font-semibold text-navy text-lg mt-1 mb-2">
                          {m.label}
                        </h3>
                        <p className="text-navy/60 font-dm text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookCTA />
    </>
  );
}
