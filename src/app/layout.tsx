import type { Metadata } from 'next';
import { Outfit, Lexend } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PageTransitionProvider } from '@/components/providers/PageTransitionProvider';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lexend',
  display: 'swap',
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
        <main className="flex flex-1 flex-col">
          <PageTransitionProvider>{children}</PageTransitionProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}