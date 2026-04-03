const trustItems = [
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
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Detailed &amp; Custom',
    desc: 'Every clean tailored to your specific needs',
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
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Residential + Commercial',
    desc: 'Homes, offices &amp; businesses of all sizes',
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
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Construction Cleanup',
    desc: 'Post-construction &amp; renovation cleans',
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
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
        <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="none" />
        <path d="M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
    title: 'Trusted &amp; Local',
    desc: 'Locally owned, serving Northern Virginia',
  },
];

export default function TrustBar() {
  return (
    <section
      className="py-12 bg-white border-y border-slate-100"
      aria-label="Why choose A & J First Class Cleaning"
    >
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3 group">
              <div className="w-14 h-14 rounded-xl bg-teal-light text-teal-dark flex items-center justify-center transition-all duration-300 group-hover:bg-teal-dark group-hover:text-white group-hover:shadow-teal">
                {item.icon}
              </div>
              <div>
                <p
                  className="font-playfair font-semibold text-navy text-base mb-0.5"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="text-navy/70 text-xs font-dm leading-snug"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
