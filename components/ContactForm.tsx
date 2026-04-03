'use client';

import { useState, type FormEvent } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const serviceOptions = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Post-Construction Cleanup',
  'Deep Cleaning',
  'Move-In / Move-Out Cleaning',
  'Custom Cleaning Plan',
  'Office & Business Cleaning',
  'Recurring Maintenance Cleaning',
  'Other',
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData): Record<string, string> => {
    const errs: Record<string, string> = {};
    const name = data.get('name') as string;
    const phone = data.get('phone') as string;
    const email = data.get('email') as string;
    const service = data.get('service') as string;
    const message = data.get('message') as string;

    if (!name || name.trim().length < 2) errs.name = 'Please enter your full name.';
    if (!phone || !/^\+?[\d\s\-().]{7,}$/.test(phone))
      errs.phone = 'Please enter a valid phone number.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = 'Please enter a valid email address.';
    if (!service) errs.service = 'Please select a service type.';
    if (!message || message.trim().length < 10)
      errs.message = 'Please briefly describe what you need (at least 10 characters).';

    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setFormState('submitting');

    // Mock submit — replace with real API call
    await new Promise((r) => setTimeout(r, 1500));
    setFormState('success');
  };

  if (formState === 'success') {
    return (
      <div className="bg-teal-light border border-teal/30 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-teal-dark flex items-center justify-center mx-auto mb-5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-playfair font-bold text-navy text-2xl mb-2">Message Sent!</h3>
        <p className="text-navy/80 font-dm text-base max-w-sm mx-auto">
          Thanks for reaching out. Patricia will get back to you within 24 hours to discuss your
          cleaning needs.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-6 text-teal-dark font-dm font-semibold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-8 shadow-soft border border-slate-100"
      aria-label="Contact form"
    >
      <h3 className="font-playfair font-bold text-navy text-2xl mb-1">Request a Free Quote</h3>
      <p className="text-navy/70 font-dm text-sm mb-7">
        Fill out the form and we&apos;ll get back to you within 24 hours.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-navy font-dm font-medium text-sm mb-1.5">
            Full Name{' '}
            <span className="text-rose-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Jane Smith"
            className={`w-full px-4 py-3 rounded-lg border font-dm text-sm text-navy placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent ${
              errors.name
                ? 'border-rose-400 bg-rose-50'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
            onBlur={(e) => {
              if (!e.target.value.trim())
                setErrors((prev) => ({ ...prev, name: 'Please enter your full name.' }));
              else
                setErrors((prev) => {
                  const n = { ...prev };
                  delete n.name;
                  return n;
                });
            }}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-rose-500 text-xs font-dm" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-navy font-dm font-medium text-sm mb-1.5">
            Phone Number{' '}
            <span className="text-rose-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(571) 000-0000"
            className={`w-full px-4 py-3 rounded-lg border font-dm text-sm text-navy placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent ${
              errors.phone
                ? 'border-rose-400 bg-rose-50'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-rose-500 text-xs font-dm" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="mb-5">
        <label htmlFor="email" className="block text-navy font-dm font-medium text-sm mb-1.5">
          Email Address{' '}
          <span className="text-rose-500" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="jane@example.com"
          className={`w-full px-4 py-3 rounded-lg border font-dm text-sm text-navy placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent ${
            errors.email
              ? 'border-rose-400 bg-rose-50'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-rose-500 text-xs font-dm" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Service */}
      <div className="mb-5">
        <label htmlFor="service" className="block text-navy font-dm font-medium text-sm mb-1.5">
          Service Needed{' '}
          <span className="text-rose-500" aria-hidden="true">
            *
          </span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={`w-full px-4 py-3 rounded-lg border font-dm text-sm text-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent appearance-none bg-white ${
            errors.service
              ? 'border-rose-400 bg-rose-50'
              : 'border-slate-200 hover:border-slate-300'
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%230F172A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 14px center',
          }}
          aria-describedby={errors.service ? 'service-error' : undefined}
          aria-invalid={!!errors.service}
        >
          <option value="" disabled>
            Select a service...
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1.5 text-rose-500 text-xs font-dm" role="alert">
            {errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="mb-7">
        <label htmlFor="message" className="block text-navy font-dm font-medium text-sm mb-1.5">
          Tell Us About Your Space{' '}
          <span className="text-rose-500" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="E.g. 3-bedroom home in Reston, needs deep clean before we move in next Friday..."
          className={`w-full px-4 py-3 rounded-lg border font-dm text-sm text-navy placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none ${
            errors.message
              ? 'border-rose-400 bg-rose-50'
              : 'border-slate-200 bg-white hover:border-slate-300'
          }`}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-rose-500 text-xs font-dm" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full flex items-center justify-center gap-3 bg-teal-dark text-white font-dm font-bold py-4 rounded-xl text-base transition-all duration-300 hover:bg-teal hover:shadow-teal disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        aria-busy={formState === 'submitting'}
      >
        {formState === 'submitting' ? (
          <>
            <svg
              className="animate-spin"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="32"
                strokeDashoffset="12"
                strokeLinecap="round"
              />
            </svg>
            Sending your request...
          </>
        ) : (
          <>
            Send My Request
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
          </>
        )}
      </button>

      <p className="text-center text-navy/60 text-xs font-dm mt-4">
        We typically respond within a few hours during business hours.
      </p>
    </form>
  );
}
