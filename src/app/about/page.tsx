'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ShieldCheck,
    Zap,
    Users,
    Target,
    Compass,
    MapPin,
    ArrowRight,
    CheckCircle2,
    Layers,
    Clock,
    ChevronRight,
    Globe,
    TrendingUp,
    Sparkles
} from 'lucide-react';

/* ==================== COLOR TOKENS ==================== */
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

/* ==================== TYPES & INTERFACES ==================== */
interface CoreValue {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

interface RoadmapPhase {
    phase: string;
    badge: string;
    status: 'completed' | 'in-progress' | 'upcoming';
    title: string;
    description: string;
    icon: React.ElementType;
    deliverables: string[];
}

/* ==================== DATA STRUCTURES ==================== */
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

const ROADMAP_PHASES: RoadmapPhase[] = [
    {
        phase: '01',
        badge: 'Phase 01',
        status: 'completed',
        title: 'Platform Architecture & Core Engine',
        description: 'Architecting scalable microservices, driver dispatch protocols, and custom cross-platform mobile frameworks.',
        icon: Layers,
        deliverables: ['Microservices Core API', 'React Native / Expo App', 'Driver Dispatch Engine V1']
    },
    {
        phase: '02',
        badge: 'Phase 02',
        status: 'in-progress',
        title: 'Bengaluru Pilot & Partner Onboarding',
        description: 'Launching initial ride-hailing operations, roadside assist networks, and verified workshop integrations in Karnataka.',
        icon: MapPin,
        deliverables: ['Bengaluru Regional Launch', '500+ Verified Workshops', 'On-Demand Emergency SOS']
    },
    {
        phase: '03',
        badge: 'Phase 03',
        status: 'upcoming',
        title: 'EV Infrastructure & Logistics Expansion',
        description: 'Deploying mobile emergency fast-charging dispatch units and expanding intra-city commercial logistics.',
        icon: Zap,
        deliverables: ['Mobile Fast-Charging Units', 'B2B Fleet Transport Stack', 'Intra-City Commercial Logistics']
    },
    {
        phase: '04',
        badge: 'Phase 04',
        status: 'upcoming',
        title: 'National Mobility Ecosystem',
        description: 'Scaling pre-owned vehicle marketplaces, auto financing, spare parts procurement, and multi-city transit.',
        icon: Globe,
        deliverables: ['Pre-Owned Vehicle Desk', 'Auto Financing Integration', 'Multi-City Urban Transit']
    }
];

/* ==================== MAIN PAGE COMPONENT ==================== */
export default function AboutPage(): React.ReactNode {
    const [activeTab, setActiveTab] = useState<number>(1);

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

            {/* ==================== ROADMAP & TIMELINE ==================== */}
            <section className="bg-[#FEFEFE] border-y border-[#CCCCCC] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#CCCCCC]">
                        <div>
                            <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-1 font-outfit">
                                Execution Plan
                            </span>
                            <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-[#0C0C0C]">
                                Platform Rollout Roadmap
                            </h2>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-medium text-[#444444]">
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-md bg-[#FFD700]" />
                                <span>In Progress</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-md bg-[#0C0C0C]" />
                                <span>Completed</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-md bg-[#CCCCCC]" />
                                <span>Upcoming</span>
                            </div>
                        </div>
                    </div>

                    {/* Stepper Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {ROADMAP_PHASES.map((item, idx) => {
                            const isCompleted = item.status === 'completed';
                            const isInProgress = item.status === 'in-progress';
                            const isSelected = activeTab === idx;

                            return (
                                <button
                                    key={item.phase}
                                    type="button"
                                    aria-label={`View ${item.title}`}
                                    onClick={() => setActiveTab(idx)}
                                    className={`text-left p-4 rounded-md border transition-all duration-200 cursor-pointer ${isSelected
                                            ? 'bg-[#FEFEFE] border-[#0C0C0C] shadow-sm'
                                            : 'bg-[#F5F5F5] border-[#CCCCCC] hover:border-[#B6B6B6]'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span
                                            className={`text-xs font-bold font-outfit px-2.5 py-0.5 rounded-md ${isInProgress
                                                    ? 'bg-[#FFD700] text-[#0C0C0C]'
                                                    : isCompleted
                                                        ? 'bg-[#0C0C0C] text-[#FEFEFE]'
                                                        : 'bg-[#E7E7E7] text-[#444444]'
                                                }`}
                                        >
                                            {item.badge}
                                        </span>
                                        {isCompleted ? (
                                            <CheckCircle2 size={16} className="text-[#0C0C0C]" />
                                        ) : isInProgress ? (
                                            <Clock size={16} className="text-[#D90E17]" />
                                        ) : (
                                            <span className="text-xs text-[#B6B6B6] font-mono">0{idx + 1}</span>
                                        )}
                                    </div>
                                    <h3 className="font-outfit font-bold text-sm text-[#0C0C0C] line-clamp-1">
                                        {item.title}
                                    </h3>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Milestone Display */}
                    <div className="bg-[#F5F5F5] border border-[#CCCCCC] rounded-md p-6 sm:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#FFD700] text-[#0C0C0C] font-outfit font-bold text-xs uppercase px-3 py-1 rounded-md">
                                        {ROADMAP_PHASES[activeTab].badge}
                                    </span>
                                    <span className="text-xs font-semibold text-[#D90E17] uppercase tracking-wider font-outfit">
                                        Status: {ROADMAP_PHASES[activeTab].status.replace('-', ' ')}
                                    </span>
                                </div>

                                <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0C0C0C]">
                                    {ROADMAP_PHASES[activeTab].title}
                                </h3>

                                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                                    {ROADMAP_PHASES[activeTab].description}
                                </p>

                                <div className="pt-2">
                                    <span className="text-xs font-bold text-[#0C0C0C] uppercase tracking-wider block mb-3 font-outfit">
                                        Key Deliverables
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                        {ROADMAP_PHASES[activeTab].deliverables.map((deliv, i) => (
                                            <div
                                                key={i}
                                                className="bg-[#FEFEFE] border border-[#E7E7E7] p-2.5 rounded-md flex items-center gap-2 text-xs text-[#0C0C0C] font-medium"
                                            >
                                                <ChevronRight size={14} className="text-[#D90E17] shrink-0" />
                                                <span className="truncate">{deliv}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 flex justify-center">
                                <div className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-6 w-full max-w-sm text-center shadow-xs">
                                    {React.createElement(ROADMAP_PHASES[activeTab].icon, {
                                        size: 48,
                                        className: 'text-[#D90E17] mx-auto mb-4'
                                    })}
                                    <p className="font-outfit font-bold text-lg text-[#0C0C0C] mb-1">
                                        GaadiGuru Core Engine
                                    </p>
                                    <p className="text-xs text-[#444444] mb-6">
                                        Deploying automated workflows for driver dispatch, vehicle servicing, and fleet management.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab((prev) => (prev + 1) % ROADMAP_PHASES.length)}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider py-3 rounded-md hover:bg-[#FFD700]/90 transition-colors"
                                    >
                                        <span>Next Milestone</span>
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ==================== ENTERPRISE ENTITY BANNER ==================== */}
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