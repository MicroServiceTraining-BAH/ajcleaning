import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get a free quote for residential, commercial, or post-construction cleaning in Northern Virginia. Call 571-383-5946 or email aandjfirstclasscleaning@gmail.com.',
};

const faqs = [
  {
    q: 'How quickly can you schedule a cleaning?',
    a: "We typically have availability within the same week. For urgent needs, call us directly and we'll do our best to accommodate you as soon as possible.",
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: "Not at all. Many clients prefer to be away during cleaning. We'll coordinate a key or entry method that works for you. Your security is our priority.",
  },
  {
    q: 'What areas in Northern Virginia do you serve?',
    a: 'We serve Herndon, Reston, Ashburn, Sterling, McLean, Fairfax, Chantilly, Leesburg, and the surrounding Northern Virginia area. Not sure if we cover your location? Just call us.',
  },
  {
    q: 'Do you bring your own cleaning supplies?',
    a: "Yes, we bring all professional-grade cleaning supplies and equipment. If you have specific product preferences or allergies, let us know and we'll accommodate you.",
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. We are fully licensed and insured for your peace of mind. You can trust that your home or business is in safe, professional hands.',
  },
  {
    q: 'How do you price your services?',
    a: "Pricing depends on the size of your space, the type of cleaning needed, and the frequency. Contact us for a free, no-obligation quote — there's never any pressure.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundColor: '#0F172A' }}
        aria-labelledby="contact-page-heading"
      >
        <div className="absolute inset-0 hero-pattern pointer-events-none" aria-hidden="true" />
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-teal/30 text-teal-light text-xs font-dm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Get in Touch
            </div>
            <h1
              id="contact-page-heading"
              className="font-playfair font-bold text-white text-5xl md:text-6xl leading-tight mb-6"
            >
              Let&apos;s Talk About <span className="gradient-text">Your Space</span>
            </h1>
            <p className="text-white/85 font-dm text-xl leading-relaxed max-w-2xl">
              Ready for a first-class clean? Fill out the form, call us directly, or send us an
              email. We&apos;ll get back to you fast and make booking easy.
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

      {/* Contact content */}
      <section className="section-pad bg-site-bg" aria-label="Contact information and form">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left — Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-playfair font-bold text-navy text-3xl mb-2">
                  Contact Information
                </h2>
                <p className="text-navy/75 font-dm text-base">
                  Reach Patricia and the A &amp; J team through any of the channels below.
                </p>
              </div>

              {/* Phone cards */}
              <div className="space-y-4">
                <a
                  href="tel:5713835946"
                  className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-card border border-slate-100 hover:border-teal/40 hover:shadow-hover transition-all duration-300 group"
                  aria-label="Call primary number 571-383-5946"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-light text-teal-dark flex items-center justify-center flex-shrink-0 group-hover:bg-teal-dark group-hover:text-white transition-all duration-300">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-dm font-semibold text-navy text-base">571-383-5946</p>
                    <p className="text-navy/50 text-sm font-dm">Primary line</p>
                  </div>
                </a>

                <a
                  href="tel:5715529996"
                  className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-card border border-slate-100 hover:border-teal/40 hover:shadow-hover transition-all duration-300 group"
                  aria-label="Call secondary number 571-552-9996"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-light text-teal-dark flex items-center justify-center flex-shrink-0 group-hover:bg-teal-dark group-hover:text-white transition-all duration-300">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-dm font-semibold text-navy text-base">571-552-9996</p>
                    <p className="text-navy/50 text-sm font-dm">Secondary line</p>
                  </div>
                </a>

                <a
                  href="mailto:aandjfirstclasscleaning@gmail.com"
                  className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-card border border-slate-100 hover:border-teal/40 hover:shadow-hover transition-all duration-300 group"
                  aria-label="Send email to aandjfirstclasscleaning@gmail.com"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-light text-teal-dark flex items-center justify-center flex-shrink-0 group-hover:bg-teal-dark group-hover:text-white transition-all duration-300">
                    <svg
                      width="22"
                      height="22"
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
                  </div>
                  <div>
                    <p className="font-dm font-semibold text-navy text-sm break-all">
                      aandjfirstclasscleaning@gmail.com
                    </p>
                    <p className="text-navy/50 text-sm font-dm">Email us anytime</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-card border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-teal-light text-teal-dark flex items-center justify-center flex-shrink-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-dm font-semibold text-navy text-base">Northern Virginia</p>
                    <p className="text-navy/50 text-sm font-dm">
                      Herndon, Reston, Ashburn &amp; more
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-navy rounded-xl p-6">
                <h3 className="font-playfair font-semibold text-white text-lg mb-4">
                  Business Hours
                </h3>
                <dl className="space-y-2">
                  {[
                    { day: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' },
                    { day: 'Saturday', hours: '8:00 AM – 5:00 PM' },
                    { day: 'Sunday', hours: 'By appointment' },
                  ].map((h) => (
                    <div key={h.day} className="flex items-center justify-between">
                      <dt className="text-white/80 font-dm text-sm">{h.day}</dt>
                      <dd className="text-teal font-dm font-medium text-sm">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white" aria-labelledby="faq-heading">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2
                id="faq-heading"
                className="font-playfair font-bold text-navy text-4xl md:text-5xl mb-4"
              >
                Common Questions
              </h2>
              <p className="text-navy/60 font-dm text-lg">
                Everything you need to know before booking your first clean.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-site-bg rounded-xl p-6 border border-slate-100 shadow-card"
                >
                  <h3 className="font-playfair font-semibold text-navy text-lg mb-2">{faq.q}</h3>
                  <p className="text-navy/60 font-dm text-base leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-navy/55 font-dm text-base mb-2">Still have questions?</p>
              <a
                href="tel:5713835946"
                className="text-teal-dark font-dm font-semibold hover:text-teal transition-colors text-lg"
              >
                Call us at 571-383-5946
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
