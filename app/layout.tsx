import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'A & J First Class Cleaning | Northern Virginia',
    template: '%s | A & J First Class Cleaning',
  },
  description:
    'Professional residential, commercial, and post-construction cleaning services across Northern Virginia. Detailed, custom cleaning tailored to your needs. Call 571-383-5946.',
  keywords: [
    'house cleaning Northern Virginia',
    'cleaning service Herndon VA',
    'post-construction cleanup NoVA',
    'residential cleaning near me',
    'commercial cleaning Northern Virginia',
    'deep cleaning service VA',
    'move in move out cleaning Northern Virginia',
    'office cleaning NoVA',
  ],
  authors: [{ name: 'A & J First Class Cleaning' }],
  creator: 'A & J First Class Cleaning',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'A & J First Class Cleaning',
    title: 'A & J First Class Cleaning | Northern Virginia',
    description:
      'Detailed, custom cleaning services across Northern Virginia. Residential, commercial, and post-construction.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A & J First Class Cleaning | Northern Virginia',
    description:
      'Detailed, custom cleaning services across Northern Virginia. Residential, commercial, and post-construction.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-dm bg-site-bg text-navy antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
