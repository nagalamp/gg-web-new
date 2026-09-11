'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  Star,
  MapPin,
} from 'lucide-react';

/* ==================== TYPES & CONFIGURATIONS ==================== */
const COLORS = {
  primary: '#FFD700',
  primaryDark: '#D90E17',
  secondaryDark: '#E7040E',
  background: '#F5F5F5',
  surface: '#FEFEFE',
  surfaceElevated: '#FFFFFF',
  textPrimary: '#0C0C0C',
  textMuted: '#444444',
  textLight: '#B6B6B6',
  borderDefault: '#CCCCCC',
  borderMuted: '#E7E7E7',
  borderStrong: '#B6B6B6',
} as const;

const STATS = [
  { value: '11-in-1', label: 'Mobility Verticals' },
  { value: '0%', label: 'Commission Model' },
  { value: '20 Min', label: 'Avg SOS Response' },
  { value: '100%', label: 'Verified Partners' },
] as const;

/* ==================== HERO SECTION COMPONENT ==================== */
export function HeroSection(): React.ReactNode {
  return (
    <section className="relative w-full min-h-[85vh] bg-[#F5F5F5] border-b border-[#CCCCCC] flex items-center justify-center overflow-hidden font-lexend text-[#0C0C0C]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="GaadiGuru Hero Mobility Overview"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-black/50 to-black/70 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-20">
        <span className="inline-flex items-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-outfit font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-md uppercase tracking-widest mb-6">
          <Sparkles size={14} className="text-[#0C0C0C]" />
          ಗಾಡಿಗುರು • GaadiGuru Ecosystem
        </span>
        <h1 className="font-outfit text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-md leading-[1.15]">
          Mobility Doesn't End <br className="hidden sm:inline" />
          When A <span className="text-[#FFD700]">Ride Ends.</span>
        </h1>
        <p className="mt-6 text-sm sm:text-base lg:text-lg text-[#B6B6B6] max-w-2xl font-normal leading-relaxed">
          From rides and roadside assistance to multi-brand servicing, spare parts, and vehicle loans all synchronized under one intelligent ecosystem.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#access"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FFD700] hover:bg-[#D90E17] text-[#0C0C0C] hover:text-white font-outfit font-extrabold text-sm rounded-md transition-all duration-200"
          >
            <span>Request Priority Access</span>
            <ArrowRight size={16} />
          </a>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FEFEFE]/10 hover:bg-[#FEFEFE]/20 text-white font-outfit font-bold text-sm rounded-md border border-white/20 backdrop-blur-md transition-all duration-200"
          >
            Explore Verticals
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ==================== STATS BAR COMPONENT ==================== */
export function StatsBar(): React.ReactNode {
  return (
    <section className="w-full bg-[#FEFEFE] border-b border-[#CCCCCC] py-8 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="p-4 bg-[#F5F5F5] rounded-md border border-[#E7E7E7]">
              <p className="text-2xl sm:text-4xl font-extrabold text-[#D90E17]">{stat.value}</p>
              <p className="text-xs sm:text-sm font-semibold text-[#444444] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== WHY GAADIGURU SECTION ==================== */
export function WhyGaadiGuruSection(): React.ReactNode {
  return (
    <section id="why-us" className="w-full py-16 bg-[#FEFEFE] border-b border-[#CCCCCC] font-lexend text-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="inline-block text-xs font-bold text-[#D90E17] font-outfit uppercase tracking-wider bg-[#D90E17]/10 px-3 py-1 rounded-md border border-[#D90E17]/20 mb-3">
              Fair & Transparent
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#0C0C0C] leading-tight mb-4">
              Built for Drivers, Mechanics, and Everyday <span className="text-[#D90E17]">Commuters.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#444444] mb-6 leading-relaxed">
              Traditional aggregators take high commissions and fragment services. GaadiGuru connects riders directly with drivers, workshops, and rescue teams under a unified model.
            </p>

            <div className="space-y-3">
              {[
                'Zero Commission Driver Direct Model',
                '24/7 Guaranteed Emergency Roadside Dispatch',
                'Verified Multi-Brand Garages & Transparent Pricing',
                'Single App for Urban Rides, Freight, and Servicing',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 p-3 bg-[#F5F5F5] rounded-md border border-[#E7E7E7]">
                  <CheckCircle2 size={18} className="text-[#D90E17] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#0C0C0C] font-outfit">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-[#F5F5F5] rounded-md border border-[#CCCCCC]">
              <ShieldCheck size={28} className="text-[#D90E17] mb-3" />
              <h3 className="font-outfit font-extrabold text-lg text-[#0C0C0C]">100% Safety Verified</h3>
              <p className="text-xs text-[#444444] mt-2 leading-relaxed">
                Background-checked drivers, certified workshop partners, and real-time live trip tracking.
              </p>
            </div>
            <div className="p-6 bg-[#F5F5F5] rounded-md border border-[#CCCCCC]">
              <Clock size={28} className="text-[#D90E17] mb-3" />
              <h3 className="font-outfit font-extrabold text-lg text-[#0C0C0C]">20-Min SOS Network</h3>
              <p className="text-xs text-[#444444] mt-2 leading-relaxed">
                Rapid response roadside support for breakdowns, flat tires, and battery jumpstarts.
              </p>
            </div>
            <div className="p-6 bg-[#F5F5F5] rounded-md border border-[#CCCCCC] sm:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={18} className="text-[#D90E17]" />
                <h3 className="font-outfit font-extrabold text-lg text-[#0C0C0C]">Starting in Bengaluru</h3>
              </div>
              <p className="text-xs text-[#444444] leading-relaxed">
                Launching operations locally across Bengaluru with complete compliance under Karnataka On-Demand Transportation Technology Aggregators Rules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== EARLY ACCESS SECTION ==================== */
export function EarlyAccessSection(): React.ReactNode {
  const [role, setRole] = useState<'rider' | 'driver' | 'garage'>('rider');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact.trim().length > 0) {
      setSubmitted(true);
      setContact('');
    }
  };

  return (
    <section id="access" className="w-full py-16 bg-[#F5F5F5] border-b border-[#CCCCCC] font-lexend text-[#0C0C0C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 bg-[#FFD700] text-[#0C0C0C] font-outfit font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider mb-4">
          <Star size={12} className="fill-[#0C0C0C]" /> Early Access
        </span>
        <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#0C0C0C]">
          Get Early Access To <span className="text-[#D90E17]">GaadiGuru</span>
        </h2>
        <p className="mt-2 text-sm text-[#444444] max-w-xl mx-auto">
          Be among the first to experience zero-commission mobility, instant repairs, and 24/7 roadside assistance.
        </p>

        <div className="mt-8 bg-[#FEFEFE] border border-[#CCCCCC] p-6 sm:p-8 rounded-md shadow-sm text-left">
          <div className="flex items-center justify-between border-b border-[#E7E7E7] pb-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider font-outfit text-[#0C0C0C]">Select Role</span>
            <div className="flex gap-1 bg-[#F5F5F5] p-1 rounded-md border border-[#E7E7E7]">
              {(['rider', 'driver', 'garage'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`text-xs font-bold font-outfit px-3 py-1 rounded-md capitalize transition-all ${role === r ? 'bg-[#0C0C0C] text-[#FFD700]' : 'text-[#444444] hover:text-[#0C0C0C]'
                    }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="flex items-center gap-3 bg-[#F5F5F5] p-4 rounded-md border border-[#CCCCCC]">
              <CheckCircle2 className="w-6 h-6 text-[#D90E17] shrink-0" />
              <div>
                <p className="text-sm font-bold font-outfit text-[#0C0C0C]">Priority Access Requested!</p>
                <p className="text-xs text-[#444444]">
                  We will notify you on your mobile number or email as soon as early access opens in your area.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={
                  role === 'rider'
                    ? 'Enter mobile number or email...'
                    : role === 'driver'
                      ? 'Enter phone number to drive & earn...'
                      : 'Enter garage or workshop name...'
                }
                aria-label="Contact detail for priority access"
                className="flex-1 px-4 py-3 bg-[#F5F5F5] text-[#0C0C0C] placeholder-[#B6B6B6] text-xs font-lexend rounded-md border border-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#D90E17]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#FFD700] hover:bg-[#D90E17] text-[#0C0C0C] hover:text-white font-outfit font-extrabold text-xs uppercase tracking-wider rounded-md transition-all shadow-sm shrink-0"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ==================== MAIN PAGE COMPOSITION ==================== */
export default function LandingPage(): React.ReactNode {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#0C0C0C] font-lexend">
      <HeroSection />
      <StatsBar />
      <WhyGaadiGuruSection />
      <EarlyAccessSection />
    </main>
  );
}