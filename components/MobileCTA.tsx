'use client';

import { useState, useEffect } from 'react';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-500 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white border-t border-slate-200 shadow-nav px-4 py-3 flex gap-3">
        <a
          href="tel:5713835946"
          className="flex-1 flex items-center justify-center gap-2 bg-teal-dark text-white font-dm font-semibold text-sm py-3.5 rounded-lg transition-all duration-200 active:scale-95"
          aria-label="Call A & J First Class Cleaning at 571-383-5946"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call Now
        </a>
        <a
          href="mailto:aandjfirstclasscleaning@gmail.com"
          className="flex-1 flex items-center justify-center gap-2 border-2 border-teal-dark text-teal-dark font-dm font-semibold text-sm py-3.5 rounded-lg transition-all duration-200 active:scale-95"
          aria-label="Email A & J First Class Cleaning"
        >
          <svg
            width="18"
            height="18"
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
    </div>
  );
}
