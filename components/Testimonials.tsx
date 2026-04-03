const reviews = [
  {
    name: 'Jennifer M.',
    location: 'Herndon, VA',
    date: 'March 2024',
    rating: 5,
    text: "Patricia and her team are absolutely incredible. They cleaned our home top to bottom after a renovation and I couldn't believe the transformation. Every surface was spotless — things I didn't even think to ask about. Highly recommend.",
  },
  {
    name: 'Carlos R.',
    location: 'Reston, VA',
    date: 'February 2024',
    rating: 5,
    text: "We've tried several cleaning services in Northern Virginia and none compare to A&J. They're punctual, professional, and genuinely detail-oriented. Our office has never looked better. We're now on a bi-weekly plan.",
  },
  {
    name: 'Aisha T.',
    location: 'Sterling, VA',
    date: 'January 2024',
    rating: 5,
    text: 'Move-out cleaning done right. I was stressed about getting my deposit back and A&J made it easy. The apartment was in better condition than when I moved in. Worth every penny.',
  },
  {
    name: 'David L.',
    location: 'Ashburn, VA',
    date: 'December 2023',
    rating: 5,
    text: 'Patricia is wonderful to work with — responsive, professional, and her team is thorough. They do our weekly house cleaning and I never have to follow up or re-request anything. It just gets done, and done well.',
  },
  {
    name: 'Maria S.',
    location: 'Fairfax, VA',
    date: 'November 2023',
    rating: 5,
    text: 'Post-construction cleanup for our new addition was flawless. The dust and debris were completely gone and every room was ready for furniture. A&J went above and beyond what we expected.',
  },
  {
    name: 'Kevin H.',
    location: 'McLean, VA',
    date: 'October 2023',
    rating: 5,
    text: "We had a deep clean done before hosting Thanksgiving and our house was absolutely pristine. Guests kept complimenting how clean everything was. We've since signed up for monthly maintenance. Couldn't be happier.",
  },
];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? '#FBBC04' : '#E5E7EB'}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google" role="img">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad bg-site-bg"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-light text-teal-dark text-xs font-dm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Client Reviews
          </div>
          <h2
            id="testimonials-heading"
            className="font-playfair font-bold text-navy text-4xl md:text-5xl mb-4"
          >
            What Our Clients Say
          </h2>
          {/* text-navy/60 → text-navy/70 (~4.2 → ~5.0:1) */}
          <p className="text-navy/70 font-dm text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what homeowners and businesses across
            Northern Virginia have to say.
          </p>

          {/* Google aggregate */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-card">
            <GoogleIcon />
            <div className="flex gap-0.5" aria-label="5 out of 5 stars on Google">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="font-dm font-semibold text-navy text-sm">5.0</span>
            {/* text-navy/40 → text-navy/60 (was ~2.4:1, now ~4.2:1) */}
            <span className="text-navy/60 text-sm font-dm">· Google Reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="bg-white rounded-xl p-6 shadow-card border border-slate-100 flex flex-col gap-4 hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              aria-label={`Review by ${review.name}`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center text-teal-dark font-playfair font-bold text-sm flex-shrink-0"
                    aria-hidden="true"
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-dm font-semibold text-navy text-sm">{review.name}</p>
                    {/* text-navy/50 → text-navy/65 (was ~3.8:1, now ~4.7:1) */}
                    <p className="text-navy/65 text-xs font-dm">{review.location}</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`${review.rating} stars`}>
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} filled={j < review.rating} />
                ))}
              </div>

              {/* Review text — text-navy/65 → text-navy/75 */}
              <blockquote className="text-navy/75 font-dm text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Date — text-navy/35 → text-navy/55 (was ~1.9:1, now ~3.5:1 at xs) */}
              <p className="text-navy/55 text-xs font-dm border-t border-slate-100 pt-3">
                {review.date}
              </p>
            </article>
          ))}
        </div>

        {/* Leave a review prompt — text-navy/50 → text-navy/65 */}
        <div className="text-center mt-10">
          <p className="text-navy/65 font-dm text-sm">
            Happy with our service?{' '}
            <span className="text-teal-dark font-medium cursor-pointer hover:underline">
              Leave us a Google Review
            </span>{' '}
            — it helps our small business grow.
          </p>
        </div>
      </div>
    </section>
  );
}
