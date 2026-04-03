'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isTransparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-nav'
        }`}
      >
        <div className="container-site">
          <nav
            className="flex items-center justify-between h-18 md:h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label="A & J First Class Cleaning home"
            >
              <div className="w-9 h-9 rounded-lg bg-teal-dark flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-teal group-hover:shadow-teal">
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
                <span
                  className={`block font-playfair font-bold text-base transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-navy'}`}
                >
                  A&amp;J First Class
                </span>
                <span
                  className={`block text-xs font-dm font-medium tracking-widest uppercase transition-colors duration-300 ${isTransparent ? 'text-teal-light/80' : 'text-teal-dark'}`}
                >
                  Cleaning
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-dm ${
                    pathname === link.href
                      ? isTransparent
                        ? 'text-teal bg-white/10'
                        : 'text-teal-dark bg-teal-light'
                      : isTransparent
                        ? 'text-white/85 hover:text-white hover:bg-white/10'
                        : 'text-navy/70 hover:text-navy hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:5713835946"
                className={`flex items-center gap-2 text-sm font-semibold font-dm transition-colors duration-200 ${
                  isTransparent
                    ? 'text-teal-light hover:text-teal'
                    : 'text-teal-dark hover:text-teal'
                }`}
                aria-label="Call us at 571-383-5946"
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
              <Link
                href="/contact"
                className="bg-teal-dark text-white font-dm font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:bg-teal hover:shadow-teal hover:-translate-y-0.5"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isTransparent ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-slate-100'
              }`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-navy'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-navy'} ${menuOpen ? 'opacity-0 w-0' : 'w-full'}`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-navy'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          aria-modal="true"
          role="dialog"
          aria-label="Navigation menu"
        >
          <div
            className="absolute inset-0 bg-navy/95 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative flex flex-col h-full pt-24 px-6 pb-8">
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-playfair font-semibold py-4 border-b border-white/10 transition-all duration-200 ${
                    pathname === link.href ? 'text-teal' : 'text-white hover:text-teal'
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="tel:5713835946"
                className="flex items-center justify-center gap-2 bg-teal-dark text-white font-dm font-semibold text-lg py-4 rounded-xl"
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
                571-383-5946
              </a>
              <a
                href="mailto:aandjfirstclasscleaning@gmail.com"
                className="flex items-center justify-center gap-2 border-2 border-white/30 text-white font-dm font-medium text-base py-3.5 rounded-xl hover:border-teal hover:text-teal transition-colors"
              >
                aandjfirstclasscleaning@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
