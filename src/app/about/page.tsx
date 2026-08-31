'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ShieldCheck,
    Zap,
    Users,
    Target,
    Compass,
    TrendingUp,
    MapPin,
    ArrowRight,
    CheckCircle2,
    Layers,
    Sparkles,
    Mail
} from 'lucide-react';

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

/* 
// Custom Social SVG components for high-reliability rendering
const LinkedinIcon = ({ size = 15, className = "" }: { size?: number; className?: string }): React.ReactNode => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const TwitterIcon = ({ size = 15, className = "" }: { size?: number; className?: string }): React.ReactNode => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);
*/

interface CoreValue {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

interface Milestone {
    year: string;
    title: string;
    description: string;
}

/*
interface Founder {
    id: string;
    name: string;
    role: string;
    badge: string;
    bio: string;
    visionQuote: string;
    imageUrl: string;
    email: string;
    socials: {
        linkedin?: string;
        twitter?: string;
    };
}
*/

const CORE_VALUES: CoreValue[] = [
    {
        id: 'integration',
        title: 'Unified Ecosystem',
        description: 'Aggregating ride-hailing, EV charging, garage maintenance, logistics, and fleet operations under one single architecture.',
        icon: Layers
    },
    {
        id: 'reliability',
        title: 'Safety & Trust',
        description: 'Rigorous driver background checks, verified garage networks, real-time trip telematics, and transparent pricing.',
        icon: ShieldCheck
    },
    {
        id: 'speed',
        title: 'Hyper-Local Velocity',
        description: 'Optimized dispatch engines designed for rapid response across city transit, doorstep servicing, and emergency roadside SOS.',
        icon: Zap
    },
    {
        id: 'empowerment',
        title: 'Partner Empowerment',
        description: 'Fair commission structures, financial tools, and growth pathways for fleet owners, independent drivers, and mechanics.',
        icon: Users
    }
];

const MILESTONES: Milestone[] = [
    {
        year: 'Phase 01',
        title: 'Platform Architecture & Core Engine',
        description: 'Architecting scalable microservices, driver dispatch protocols, and custom cross-platform mobile frameworks.'
    },
    {
        year: 'Phase 02',
        title: 'Bengaluru Pilot & Partner Onboarding',
        description: 'Launching initial ride-hailing operations, roadside assist networks, and verified workshop integrations in Karnataka.'
    },
    {
        year: 'Phase 03',
        title: 'EV Infrastructure & Logistics Expansion',
        description: 'Deploying mobile emergency fast-charging dispatch units and expanding intra-city commercial logistics.'
    },
    {
        year: 'Phase 04',
        title: 'National Mobility Ecosystem',
        description: 'Scaling pre-owned vehicle marketplaces, auto financing, spare parts procurement, and multi-city transit.'
    }
];

/*
const FOUNDERS: Founder[] = [
    {
        id: 'founder-1',
        name: 'Vikramaditya Rao',
        role: 'Co-Founder & Chief Executive Officer',
        badge: 'Vision & Business Strategy',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
        bio: 'Ex-Logistics Executive with 12+ years scaling mobility platforms across South Asia. Pioneer in hyper-local fleet management and connected vehicular systems.',
        visionQuote: 'Our goal with GaadiGuru is to eliminate fragmentations across maintenance, logistics, and driver availability through one reliable digital stack.',
        email: 'vikram@gaadiguru.com',
        socials: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        }
    },
    {
        id: 'founder-2',
        name: 'Ananya Sharma',
        role: 'Co-Founder & Chief Technology Officer',
        badge: 'Product & Engineering',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
        bio: 'Former Tech Lead at leading EV OEMs. Specialist in distributed systems, real-time dispatching algorithms, and cloud-native auto diagnostics.',
        visionQuote: 'Engineering transparency into vehicle care and freight dispatch requires real-time telemetry and seamless digital workflow integrations.',
        email: 'ananya@gaadiguru.com',
        socials: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        }
    },
    {
        id: 'founder-3',
        name: 'Karan Deshmukh',
        role: 'Co-Founder & Chief Operating Officer',
        badge: 'Operations & Network',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
        bio: 'Built multi-city partner garage networks from scratch. Focused on workshop digitized job cards, service SLA enforcement, and driver onboarding.',
        visionQuote: 'Empowering local mechanics and drivers with modern software unlocks sustainable profitability across the entire automotive ecosystem.',
        email: 'karan@gaadiguru.com',
        socials: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        }
    }
];

function FounderCard({ founder }: { founder: Founder }): React.ReactNode {
    const [imgSrc, setImgSrc] = useState(founder.imageUrl);

    return (
        <div className="group bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-6 flex flex-col justify-between transition-all duration-200 hover:border-[#B6B6B6] hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#F5F5F5] group-hover:bg-[#FFD700] transition-colors" />

            <div>
                <div className="relative w-full h-64 mb-6 rounded-md overflow-hidden bg-[#F5F5F5] border border-[#E7E7E7]">
                    <Image
                        src={imgSrc}
                        alt={`${founder.name} - ${founder.role}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        onError={() => {
                            setImgSrc('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800');
                        }}
                    />

                    <div className="absolute top-3 right-3 bg-[#FEFEFE]/90 backdrop-blur-md border border-[#CCCCCC] px-2.5 py-1 rounded-md text-[10px] font-bold text-[#0C0C0C] uppercase tracking-wider shadow-xs font-outfit">
                        {founder.badge}
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-outfit font-extrabold text-xl text-[#0C0C0C] tracking-tight group-hover:text-[#D90E17] transition-colors">
                        {founder.name}
                    </h3>
                    <p className="font-outfit font-medium text-xs text-[#D90E17] uppercase tracking-wide mt-1">
                        {founder.role}
                    </p>
                </div>

                <p className="text-xs text-[#444444] leading-relaxed mb-4 font-normal">
                    {founder.bio}
                </p>

                <div className="bg-[#F5F5F5] border-l-2 border-[#D90E17] p-3 rounded-md mb-6">
                    <p className="text-xs text-[#0C0C0C] italic font-medium leading-relaxed">
                        &ldquo;{founder.visionQuote}&rdquo;
                    </p>
                </div>
            </div>

            <div className="pt-4 border-t border-[#E7E7E7] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {founder.socials.linkedin && (
                        <a
                            href={founder.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${founder.name} LinkedIn Profile`}
                            className="p-2 bg-[#F5F5F5] border border-[#CCCCCC] text-[#0C0C0C] rounded-md hover:bg-[#FFD700] hover:border-[#FFD700] transition-colors"
                        >
                            <LinkedinIcon size={14} />
                        </a>
                    )}
                    {founder.socials.twitter && (
                        <a
                            href={founder.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${founder.name} Twitter Profile`}
                            className="p-2 bg-[#F5F5F5] border border-[#CCCCCC] text-[#0C0C0C] rounded-md hover:bg-[#FFD700] hover:border-[#FFD700] transition-colors"
                        >
                            <TwitterIcon size={14} />
                        </a>
                    )}
                    <a
                        href={`mailto:${founder.email}`}
                        aria-label={`Send email to ${founder.name}`}
                        className="p-2 bg-[#F5F5F5] border border-[#CCCCCC] text-[#0C0C0C] rounded-md hover:bg-[#FFD700] hover:border-[#FFD700] transition-colors"
                    >
                        <Mail size={14} />
                    </a>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#444444]">
                    <ShieldCheck size={13} className="text-[#D90E17]" />
                    <span>Verified Founder</span>
                </div>
            </div>
        </div>
    );
}
*/

export default function AboutPageClient(): React.ReactNode {
    return (
        <div className="w-full bg-[#F5F5F5] text-[#0C0C0C] font-lexend selection:bg-[#FFD700] selection:text-[#0C0C0C] min-h-screen">

            {/* ==================== HERO SECTION ==================== */}
            <section className="relative w-full bg-[#FEFEFE] border-b border-[#CCCCCC] pt-16 pb-20 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(${COLORS.textPrimary} 1px, transparent 1px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-3 font-outfit">
                            About GaadiGuru
                        </span>
                        <h1 className="font-outfit text-4xl sm:text-6xl font-extrabold text-[#0C0C0C] tracking-tight leading-[1.1] mb-6">
                            Architecting the Future of <span style={{ color: COLORS.primaryDark }}>Unified Mobility</span>
                        </h1>

                        <p className="text-[#444444] text-base sm:text-lg leading-relaxed font-normal mb-8">
                            GaadiGuru is engineered to remove fragmentation from urban transit and automotive care. We bridge commuters, EV owners, fleet operators, certified garages, and driver networks into a singular, intelligent digital ecosystem.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#FFD700]/90 transition-colors shadow-xs"
                            >
                                <span>Explore Capabilities</span>
                                <ArrowRight size={14} />
                            </Link>
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#F5F5F5] border border-[#CCCCCC] rounded-md text-xs font-medium text-[#444444]">
                                <MapPin size={15} className="text-[#D90E17]" />
                                <span>Headquartered in Bengaluru, KA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== MISSION & VISION ==================== */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Mission Card */}
                    <div className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-xs">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#D90E17]" />
                        <div>
                            <div className="p-3 bg-[#F5F5F5] border border-[#E7E7E7] text-[#D90E17] rounded-md w-fit mb-6">
                                <Target size={26} />
                            </div>
                            <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0C0C0C] mb-4">
                                Our Mission
                            </h2>
                            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed font-normal">
                                To provide individuals and enterprise businesses with frictionless access to verified transit, on-demand maintenance, EV fast charging, and commercial logistics through a transparent, high-efficiency platform.
                            </p>
                        </div>
                        <ul className="mt-8 pt-6 border-t border-[#E7E7E7] space-y-2.5">
                            <li className="flex items-center gap-2.5 text-xs text-[#0C0C0C] font-medium">
                                <CheckCircle2 size={15} className="text-[#D90E17]" />
                                <span>Single interface for all vehicle life-cycle needs</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-xs text-[#0C0C0C] font-medium">
                                <CheckCircle2 size={15} className="text-[#D90E17]" />
                                <span>Standardized pricing and digital job tracking</span>
                            </li>
                        </ul>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-xs">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD700]" />
                        <div>
                            <div className="p-3 bg-[#FFD700] text-[#0C0C0C] rounded-md w-fit mb-6">
                                <Compass size={26} />
                            </div>
                            <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0C0C0C] mb-4">
                                Our Vision
                            </h2>
                            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed font-normal">
                                To build India’s most comprehensive mobility operating system that powers urban transportation, accelerates electric vehicle adoption, and empowers transport partners with modern digital tooling.
                            </p>
                        </div>
                        <ul className="mt-8 pt-6 border-t border-[#E7E7E7] space-y-2.5">
                            <li className="flex items-center gap-2.5 text-xs text-[#0C0C0C] font-medium">
                                <CheckCircle2 size={15} className="text-[#D90E17]" />
                                <span>Integrated EV charging & emergency SOS network</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-xs text-[#0C0C0C] font-medium">
                                <CheckCircle2 size={15} className="text-[#D90E17]" />
                                <span>Data-driven vehicle maintenance & resale marketplace</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* ==================== CORE VALUES ==================== */}
            <section className="bg-[#FEFEFE] border-y border-[#CCCCCC] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#CCCCCC]">
                        <div>
                            <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-1 font-outfit">
                                Operational DNA
                            </span>
                            <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-[#0C0C0C]">
                                Built On Core Principles
                            </h2>
                        </div>
                        <p className="text-xs text-[#444444] max-w-md">
                            Engineered from the ground up to ensure quality control, rider safety, and driver partner profitability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CORE_VALUES.map((val) => {
                            const IconComp = val.icon;
                            return (
                                <div
                                    key={val.id}
                                    className="bg-[#F5F5F5] border border-[#CCCCCC] rounded-md p-6 flex flex-col justify-between hover:border-[#B6B6B6] transition-all duration-200"
                                >
                                    <div>
                                        <div className="p-3 bg-[#FEFEFE] border border-[#E7E7E7] text-[#0C0C0C] rounded-md w-fit mb-5 shadow-xs">
                                            <IconComp size={22} className="text-[#D90E17]" />
                                        </div>
                                        <h3 className="font-outfit font-extrabold text-lg text-[#0C0C0C] mb-2">
                                            {val.title}
                                        </h3>
                                        <p className="text-xs text-[#444444] leading-relaxed font-normal">
                                            {val.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ==================== FOUNDERS SECTION (COMMENTED OUT) ==================== */}
            {/* 
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#CCCCCC]">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#FEFEFE] border border-[#CCCCCC] px-3 py-1.5 rounded-md mb-3 shadow-xs">
                            <Sparkles size={14} className="text-[#D90E17]" />
                            <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider font-outfit">
                                Platform Leadership
                            </span>
                        </div>
                        <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-[#0C0C0C]">
                            Meet Our <span style={{ color: COLORS.primaryDark }}>Founders</span>
                        </h2>
                    </div>
                    <p className="text-xs text-[#444444] max-w-md leading-relaxed font-normal">
                        Engineers, mobility operators, and automotive domain leaders bringing transparency and speed to Karnataka’s unified transport ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FOUNDERS.map((founder) => (
                        <FounderCard key={founder.id} founder={founder} />
                    ))}
                </div>
            </section>
            */}

            {/* ==================== ROADMAP & TIMELINE ==================== */}
            <section className="bg-[#FEFEFE] border-y border-[#CCCCCC] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 pb-6 border-b border-[#CCCCCC]">
                        <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-1 font-outfit">
                            Execution Plan
                        </span>
                        <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-[#0C0C0C]">
                            Platform Rollout Roadmap
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {MILESTONES.map((ms, index) => (
                            <div
                                key={index}
                                className="bg-[#F5F5F5] border border-[#CCCCCC] rounded-md p-6 flex flex-col justify-between relative"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold text-[#0C0C0C] bg-[#FFD700] px-2.5 py-1 rounded-md uppercase tracking-wider font-outfit">
                                            {ms.year}
                                        </span>
                                        <TrendingUp size={16} className="text-[#B6B6B6]" />
                                    </div>
                                    <h3 className="font-outfit font-bold text-base text-[#0C0C0C] mb-2">
                                        {ms.title}
                                    </h3>
                                    <p className="text-xs text-[#444444] leading-relaxed font-normal">
                                        {ms.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== COMPANY INFO BANNER ==================== */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-[#0C0C0C] border border-[#CCCCCC] rounded-md p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">

                    <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#FFD700]/10 rounded-md blur-3xl pointer-events-none" />

                    <div className="space-y-3 max-w-2xl relative z-10">
                        <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md border border-white/10 inline-block font-outfit">
                            Enterprise Entity
                        </span>
                        <h3 className="font-outfit text-2xl sm:text-3xl font-bold tracking-tight text-[#FEFEFE]">
                            NextSynergy Portals Hub Private Limited
                        </h3>
                        <p className="text-xs sm:text-sm text-[#B6B6B6] leading-relaxed">
                            GaadiGuru operates as a flagship platform brand under NextSynergy Portals Hub Private Limited, compliant with Karnataka State Transport Authority regulatory frameworks.
                        </p>
                    </div>

                    <div className="relative z-10 self-stretch sm:self-auto flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/services"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#FFD700]/90 transition-colors"
                        >
                            <span>View Services</span>
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}