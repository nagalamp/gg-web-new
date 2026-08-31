'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Star,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Car,
  Sparkles,
  Zap,
  ChevronRight,
} from 'lucide-react';

export const SERVICES_LIST: string[] = [
  'EV CHARGE • On-Demand EV Charging',
  'MAINTAIN • Garage & Service',
  'CHAUFFEUR • Driver on Demand',
  'ASSIST • 24/7 Roadside SOS',
  'INSURANCE • Policy & Protection',
  'PARTS • Spare Parts Market',
  'MOVE • Urban Mobility',
  'DELIVER • Express Parcel',
  'LOGISTICS • Goods & Freight',
  'OWN • Pre-Owned Marketplace',
  'FINANCE • Loans & EMI Plans',
];

// STRICT BRAND COLOR TOKENS
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

export default function HeroSection(): React.ReactNode {
  const [contactInput, setContactInput] = useState<string>('');
  const [userRole, setUserRole] = useState<'rider' | 'driver' | 'garage'>('rider');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  // Extend with the first item to create a seamless infinite loop
  const extendedServices = [...SERVICES_LIST, SERVICES_LIST[0]];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactInput.trim().length > 0) {
      setIsSubscribed(true);
      setContactInput('');
    }
  };

  return (
    <section className="relative w-full bg-[#F5F5F5] border-b border-[#CCCCCC] overflow-hidden py-12 lg:py-24 font-lexend text-[#0C0C0C]">
      {/* Keyframe Styles for 11-Item Vertical Rotating Words */}
      <style jsx global>{`
        @keyframes verticalServiceRotate {
          0%, 7% {
            transform: translateY(0%);
          }
          9.09%, 16.09% {
            transform: translateY(-8.333%);
          }
          18.18%, 25.18% {
            transform: translateY(-16.666%);
          }
          27.27%, 34.27% {
            transform: translateY(-25%);
          }
          36.36%, 43.36% {
            transform: translateY(-33.333%);
          }
          45.45%, 52.45% {
            transform: translateY(-41.666%);
          }
          54.54%, 61.54% {
            transform: translateY(-50%);
          }
          63.63%, 70.63% {
            transform: translateY(-58.333%);
          }
          72.72%, 79.72% {
            transform: translateY(-66.666%);
          }
          81.81%, 88.81% {
            transform: translateY(-75%);
          }
          90.90%, 97.90% {
            transform: translateY(-83.333%);
          }
          100% {
            transform: translateY(-91.666%);
          }
        }

        .animate-vertical-rotate {
          animation: verticalServiceRotate 24s cubic-bezier(0.85, 0, 0.15, 1) infinite;
        }
      `}</style>

      {/* Decorative Brand Glow & Grid Layers */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#0C0C0C 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#FFD700]/15 rounded-md blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#D90E17]/10 rounded-md blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-lexend">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Core Brand Messaging & Priority Access Form */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Regional Slogan Tag & Kannada Identity Badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D90E17]/10 border border-[#D90E17]/20 rounded-md text-xs font-bold text-[#D90E17] font-outfit uppercase tracking-wider">
                <Sparkles size={13} className="text-[#D90E17]" aria-hidden="true" />
                Your Smarter Move
              </span>
              <span className="text-xs font-bold font-outfit text-[#0C0C0C] bg-[#FFD700] px-3 py-1 rounded-md shadow-xs border border-black/10">
                ಗಾಡಿಗುರು
              </span>
            </div>

            {/* Core Display Title */}
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C0C0C] tracking-tight leading-[1.12] mb-5">
              Mobility Doesn't End <br className="hidden sm:inline" />
              When A <span style={{ color: COLORS.primaryDark }}>Ride Ends.</span>
            </h1>

            {/* Continuous Loop Vertical Rotating Text */}
            <div className="mb-6 py-1 flex items-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold font-outfit text-[#0C0C0C] flex items-center space-x-2">
                <span>Book your</span>
                <div className="h-10 sm:h-11 overflow-hidden inline-block relative border-b-2 border-[#FFD700] bg-[#FEFEFE] px-2.5 rounded-md border border-[#E7E7E7]">
                  <div className="flex flex-col transition-transform duration-500 animate-vertical-rotate">
                    {extendedServices.map((service, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <span
                          key={`${service}-${index}`}
                          className={`h-10 sm:h-11 flex items-center font-outfit font-semibold whitespace-nowrap text-sm sm:text-base ${isEven ? 'text-[#D90E17]' : 'text-[#0C0C0C]'
                            }`}
                        >
                          {service}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-[#444444] text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-2xl font-lexend">
              From daily rides and personal chauffeur services to workshop maintenance, spare parts, and 24/7 roadside emergency assistance—all integrated into one intelligent platform.
            </p>

            {/* Priority Access Subscription Container */}
            <div className="w-full max-w-xl bg-[#FEFEFE] border border-[#CCCCCC] p-5 sm:p-6 rounded-md shadow-xl mb-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-[#E7E7E7] pb-3">
                <span className="text-xs font-bold text-[#0C0C0C] uppercase tracking-wider flex items-center gap-1.5 font-outfit">
                  <Star size={14} className="text-[#D90E17] fill-[#D90E17]" aria-hidden="true" />
                  Get Priority Launch Access
                </span>

                {/* Persona Switcher Buttons */}
                <div className="flex gap-1.5 bg-[#F5F5F5] p-1 rounded-md border border-[#E7E7E7]">
                  {(['rider', 'driver', 'garage'] as const).map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setUserRole(role)}
                      className={`text-[11px] font-bold px-3 py-1 rounded-md capitalize transition-all duration-200 cursor-pointer font-outfit ${userRole === role
                        ? 'bg-[#0C0C0C] text-[#FFD700] shadow-xs'
                        : 'text-[#444444] hover:text-[#0C0C0C] hover:bg-white/60'
                        }`}
                      aria-label={`Select ${role} role registration`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {isSubscribed ? (
                <div className="flex items-center gap-3.5 bg-[#F5F5F5] text-[#0C0C0C] p-4 rounded-md border border-[#CCCCCC]">
                  <CheckCircle2 className="w-6 h-6 text-[#D90E17] flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold font-outfit">You are on the Priority Access List!</p>
                    <p className="text-[11px] text-[#444444] font-lexend mt-0.5">
                      We will reach out as soon as early access unlocks for your area.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="text"
                    required
                    value={contactInput}
                    onChange={(e) => setContactInput(e.target.value)}
                    placeholder={
                      userRole === 'rider'
                        ? 'Enter mobile number or email...'
                        : userRole === 'driver'
                          ? 'Enter mobile number to drive & earn...'
                          : 'Enter garage name or phone...'
                    }
                    aria-label="Contact information for priority registration"
                    className="flex-1 px-4 py-3 bg-[#F5F5F5] text-[#0C0C0C] placeholder-[#B6B6B6] text-xs font-lexend rounded-md border border-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#D90E17] focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFD700] hover:bg-[#D90E17] text-[#0C0C0C] hover:text-white font-bold text-xs font-outfit rounded-md transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700] flex-shrink-0 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Request Access</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <div className="flex items-center gap-3 text-xs text-[#0C0C0C] font-semibold font-outfit bg-[#FEFEFE] p-3.5 rounded-md border border-[#E7E7E7] shadow-2xs hover:border-[#CCCCCC] transition-colors">
                <div className="p-1.5 bg-[#D90E17]/10 rounded-md text-[#D90E17]">
                  <Car size={16} aria-hidden="true" />
                </div>
                <span>11 Ecosystem Verticals</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#0C0C0C] font-semibold font-outfit bg-[#FEFEFE] p-3.5 rounded-md border border-[#E7E7E7] shadow-2xs hover:border-[#CCCCCC] transition-colors">
                <div className="p-1.5 bg-[#D90E17]/10 rounded-md text-[#D90E17]">
                  <ShieldCheck size={16} aria-hidden="true" />
                </div>
                <span>Multi-Stream Driver Income</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#0C0C0C] font-semibold font-outfit bg-[#FEFEFE] p-3.5 rounded-md border border-[#E7E7E7] shadow-2xs hover:border-[#CCCCCC] transition-colors">
                <div className="p-1.5 bg-[#D90E17]/10 rounded-md text-[#D90E17]">
                  <Clock size={16} aria-hidden="true" />
                </div>
                <span>24/7 Roadside SOS Network</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Showcase Image Showcase */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">

            {/* Feature Graphic Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-md overflow-hidden border-2 border-[#CCCCCC] bg-[#0C0C0C] shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
                alt="GaadiGuru unified automotive mobility ecosystem"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Vignette Shading Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-black/30 pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 bg-[#FEFEFE]/95 backdrop-blur-md border border-[#CCCCCC] p-3 rounded-md shadow-lg flex items-center gap-3">
                <div className="p-2 bg-[#FFD700] rounded-md text-[#0C0C0C] font-bold">
                  <Zap size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#444444] tracking-wider font-outfit">
                    Aggregator Platform
                  </p>
                  <p className="text-xs font-bold text-[#0C0C0C] font-outfit">
                    Bengaluru Central Hub
                  </p>
                </div>
              </div>

              {/* Bottom Floating Feature Card */}
              <div className="absolute bottom-4 right-4 left-4 sm:left-auto bg-[#0C0C0C]/90 backdrop-blur-md border border-white/20 p-4.5 rounded-md shadow-2xl text-white max-w-sm">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-[10px] font-bold bg-[#D90E17] text-white px-2 py-0.5 rounded-md uppercase tracking-wider font-outfit">
                    Platform Beta
                  </span>
                  <span className="text-[11px] text-[#FFD700] font-bold font-outfit flex items-center gap-1">
                    Verified Partners <ChevronRight size={12} aria-hidden="true" />
                  </span>
                </div>
                <p className="text-xs font-bold font-outfit text-white">
                  On-Demand Chauffeurs & Digital Garages
                </p>
                <p className="text-[11px] text-[#B6B6B6] mt-1 font-lexend leading-normal">
                  Hire verified drivers for private cars or schedule workshop service in one click.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}