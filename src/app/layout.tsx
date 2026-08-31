import type { Metadata } from 'next';
import { Outfit, Lexend } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-outfit',
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'GaadiGuru | Unified Mobility & Vehicle Aggregator',
  description: 'Explore, compare, and book mobility solutions across India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en" className={`${outfit.variable} ${lexend.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#F5F5F5] font-lexend text-[#0C0C0C] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}