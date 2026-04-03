import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import BookCTA from '@/components/BookCTA';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'A & J First Class Cleaning | Northern Virginia House & Business Cleaning',
  description:
    'Professional residential, commercial, and post-construction cleaning services across Northern Virginia. Detailed, custom cleaning tailored to your home or business. Call 571-383-5946 today.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <BookCTA />
    </>
  );
}
