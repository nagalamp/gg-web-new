'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Wrench,
    FileText,
    ShieldCheck,
    CheckCircle2,
    Clock,
    ArrowRight,
    ChevronRight,
    Building2,
    UploadCloud,
    Package,
    Settings,
    DollarSign,
    TrendingUp,
    MapPin,
    Calendar,
    AlertCircle
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
interface GarageStep {
    id: string;
    stepNumber: string;
    title: string;
    subtitle: string;
    estimatedTime: string;
    description: string;
    icon: React.ElementType;
    checklist: string[];
}

interface FeatureCard {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

/* ==================== DATA STRUCTURES ==================== */
const GARAGE_STEPS: GarageStep[] = [
    {
        id: 'step-1',
        stepNumber: '01',
        title: 'Workshop Profile Setup',
        subtitle: 'Business Registration',
        estimatedTime: '5 Mins',
        description: 'Provide workshop details, location, operational bay count, specialized vehicle types (EV, Multi-Brand, Premium), and GSTIN.',
        icon: Building2,
        checklist: ['GSTIN & Business Name', 'Workshop Address & GPS Coordinates', 'Bay Capacity & Specialist Roster']
    },
    {
        id: 'step-2',
        stepNumber: '02',
        title: 'Trade & Skill Credentials',
        subtitle: 'Verification Upload',
        estimatedTime: '10 Mins',
        description: 'Upload trade licenses, mechanic certification credentials, bank account cancelled checks, and liability coverage proof.',
        icon: FileText,
        checklist: ['Trade License / Municipal Registration', 'Lead Mechanic Certifications', 'Bank Account Details & Cancelled Cheque']
    },
    {
        id: 'step-3',
        stepNumber: '03',
        title: 'Facility Audit & Quality Check',
        subtitle: 'Physical / Digital Audit',
        estimatedTime: '24 Hours',
        description: 'Complete a brief 15-point facility verification evaluating lift equipment, diagnostic scanner tools, and safety standards.',
        icon: Wrench,
        checklist: ['OBD Diagnostic Scanner Verification', 'Pneumatic Lift & Safety Inspection', 'Customer Waiting Bay Audit']
    },
    {
        id: 'step-4',
        stepNumber: '04',
        title: 'Digital Service Bay Portal',
        subtitle: 'System Onboarding',
        estimatedTime: '15 Mins',
        description: 'Gain access to the GaadiGuru Garage Portal to accept digital job cards, track spare part orders, and issue warranty invoices.',
        icon: Settings,
        checklist: ['Portal Staff Credentials', 'Standard Service Rates Setup', 'Spare Parts Procurement Portal Access']
    },
    {
        id: 'step-5',
        stepNumber: '05',
        title: 'Live Booking Acceptance',
        subtitle: 'Start Operations',
        estimatedTime: 'Instant',
        description: 'Receive verified repair leads from individual car owners, corporate fleets, and emergency roadside breakdown dispatches.',
        icon: ShieldCheck,
        checklist: ['Digital Job Card Ready', 'Parts Supply Desk Connected', 'Daily Automated Payouts Active']
    }
];

const GARAGE_FEATURES: FeatureCard[] = [
    {
        id: 'f1',
        title: 'Digital Job Card Engine',
        description: 'Eliminate manual paperwork with real-time inspection reports, video customer approvals, and automated billing.',
        icon: FileText
    },
    {
        id: 'f2',
        title: 'Guaranteed Fleet Supply',
        description: 'Tap directly into GaadiGuru corporate fleet and ride-hailing vehicle maintenance contracts across Karnataka.',
        icon: TrendingUp
    },
    {
        id: 'f3',
        title: 'OEM/OES Parts Marketplace',
        description: 'Order genuine spare components directly with trade discounts and doorstep delivery within 2 hours.',
        icon: Package
    },
    {
        id: 'f4',
        title: 'Instant Service Wallet',
        description: 'Get automated payments upon digital job card completion and customer sign-off—no delayed credit terms.',
        icon: DollarSign
    }
];

/* ==================== MAIN PAGE COMPONENT ==================== */
export default function GarageOnboardingFlowPage(): React.ReactNode {
    const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
    const activeStep = GARAGE_STEPS[activeStepIndex];

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
                            Verified Workshop Network
                        </span>
                        <h1 className="font-outfit text-4xl sm:text-6xl font-extrabold text-[#0C0C0C] tracking-tight leading-[1.1] mb-6">
                            Garage Partner <span style={{ color: COLORS.primaryDark }}>Onboarding Flow</span>
                        </h1>

                        <p className="text-[#444444] text-base sm:text-lg leading-relaxed font-normal mb-8">
                            Transform your workshop into an authorized GaadiGuru Service Hub. Digitualize job cards, receive verified corporate fleet bookings, and access OEM spare parts procurement.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/partner#apply-form"
                                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#FFD700]/90 transition-colors shadow-xs"
                            >
                                <span>Register Garage</span>
                                <ArrowRight size={14} />
                            </Link>
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#F5F5F5] border border-[#CCCCCC] rounded-md text-xs font-medium text-[#444444]">
                                <Clock size={15} className="text-[#D90E17]" />
                                <span>Verification Time: 24-48 Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== VALUE PROPOSITION CARDS ==================== */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-1 font-outfit">
                        Workshop Advantages
                    </span>
                    <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-[#0C0C0C]">
                        Why Integrate Your Workshop?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {GARAGE_FEATURES.map((feat) => {
                        const IconComp = feat.icon;
                        return (
                            <div
                                key={feat.id}
                                className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-6 flex flex-col justify-between hover:border-[#B6B6B6] transition-all duration-200 shadow-xs"
                            >
                                <div>
                                    <div className="p-3 bg-[#F5F5F5] border border-[#E7E7E7] text-[#D90E17] rounded-md w-fit mb-5">
                                        <IconComp size={22} />
                                    </div>
                                    <h3 className="font-outfit font-extrabold text-lg text-[#0C0C0C] mb-2">
                                        {feat.title}
                                    </h3>
                                    <p className="text-xs text-[#444444] leading-relaxed font-normal">
                                        {feat.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ==================== STEPPER INTERACTION SECTION ==================== */}
            <section className="bg-[#FEFEFE] border-y border-[#CCCCCC] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-1 font-outfit">
                            Step-By-Step Process
                        </span>
                        <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-[#0C0C0C]">
                            5 Steps to Becoming Authorized
                        </h2>
                    </div>

                    {/* Stepper Tabs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
                        {GARAGE_STEPS.map((step, idx) => {
                            const isCurrent = activeStepIndex === idx;
                            const isPassed = activeStepIndex > idx;
                            const StepIcon = step.icon;

                            return (
                                <button
                                    key={step.id}
                                    type="button"
                                    aria-label={`View step ${step.title}`}
                                    onClick={() => setActiveStepIndex(idx)}
                                    className={`p-4 rounded-md border text-left transition-all duration-200 cursor-pointer ${isCurrent
                                            ? 'bg-[#FEFEFE] border-[#0C0C0C] shadow-sm'
                                            : isPassed
                                                ? 'bg-[#F5F5F5] border-[#0C0C0C]/40 hover:border-[#0C0C0C]'
                                                : 'bg-[#F5F5F5] border-[#CCCCCC] opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span
                                            className={`text-[10px] font-bold font-outfit px-2 py-0.5 rounded-md ${isCurrent
                                                    ? 'bg-[#FFD700] text-[#0C0C0C]'
                                                    : isPassed
                                                        ? 'bg-[#0C0C0C] text-[#FEFEFE]'
                                                        : 'bg-[#E7E7E7] text-[#444444]'
                                                }`}
                                        >
                                            Step {step.stepNumber}
                                        </span>
                                        {isPassed ? (
                                            <CheckCircle2 size={16} className="text-[#0C0C0C]" />
                                        ) : (
                                            <StepIcon size={16} className={isCurrent ? 'text-[#D90E17]' : 'text-[#B6B6B6]'} />
                                        )}
                                    </div>
                                    <h3 className="font-outfit font-bold text-xs sm:text-sm text-[#0C0C0C] line-clamp-1">
                                        {step.title}
                                    </h3>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Step Display Panel */}
                    <div className="bg-[#F5F5F5] border border-[#CCCCCC] rounded-md p-6 sm:p-10 shadow-xs">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                            <div className="lg:col-span-7 space-y-5">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="bg-[#D90E17] text-[#FEFEFE] font-outfit font-bold text-xs uppercase px-3 py-1 rounded-md">
                                        Step {activeStep.stepNumber} of 05
                                    </span>
                                    <span className="bg-[#FEFEFE] border border-[#CCCCCC] text-[#0C0C0C] font-outfit font-semibold text-xs px-3 py-1 rounded-md flex items-center gap-1.5">
                                        <Clock size={13} className="text-[#D90E17]" />
                                        Processing Time: {activeStep.estimatedTime}
                                    </span>
                                </div>

                                <h3 className="font-outfit text-2xl sm:text-4xl font-extrabold text-[#0C0C0C]">
                                    {activeStep.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                                    {activeStep.description}
                                </p>

                                <div className="pt-2">
                                    <span className="text-xs font-bold text-[#0C0C0C] uppercase tracking-wider block mb-3 font-outfit">
                                        Required Verification Items
                                    </span>
                                    <div className="grid grid-cols-1 gap-2.5">
                                        {activeStep.checklist.map((item, i) => (
                                            <div
                                                key={i}
                                                className="bg-[#FEFEFE] border border-[#E7E7E7] p-3 rounded-md flex items-center gap-2.5 text-xs text-[#0C0C0C] font-medium"
                                            >
                                                <CheckCircle2 size={16} className="text-[#D90E17] shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center gap-3">
                                    {activeStepIndex > 0 && (
                                        <button
                                            type="button"
                                            onClick={() => setActiveStepIndex((prev) => prev - 1)}
                                            className="bg-[#FEFEFE] border border-[#CCCCCC] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md hover:bg-[#E7E7E7] transition-colors"
                                        >
                                            Previous
                                        </button>
                                    )}
                                    {activeStepIndex < GARAGE_STEPS.length - 1 ? (
                                        <button
                                            type="button"
                                            onClick={() => setActiveStepIndex((prev) => prev + 1)}
                                            className="inline-flex items-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md hover:bg-[#FFD700]/90 transition-colors shadow-xs"
                                        >
                                            <span>Next Phase</span>
                                            <ChevronRight size={16} />
                                        </button>
                                    ) : (
                                        <Link
                                            href="/partner#apply-form"
                                            className="inline-flex items-center gap-2 bg-[#0C0C0C] text-[#FEFEFE] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md hover:bg-[#0C0C0C]/90 transition-colors shadow-xs"
                                        >
                                            <span>Submit Workshop</span>
                                            <ArrowRight size={16} />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <div className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-8 text-center shadow-xs">
                                    {React.createElement(activeStep.icon, {
                                        size: 56,
                                        className: 'text-[#D90E17] mx-auto mb-4'
                                    })}
                                    <h4 className="font-outfit font-extrabold text-xl text-[#0C0C0C] mb-2">
                                        {activeStep.subtitle}
                                    </h4>
                                    <p className="text-xs text-[#444444] mb-6 leading-relaxed">
                                        Once authorized, your workshop will be geo-fenced to receive automated bookings within a 10 km radius.
                                    </p>
                                    <div className="p-4 bg-[#F5F5F5] border border-[#E7E7E7] rounded-md text-left flex items-start gap-3">
                                        <ShieldCheck size={20} className="text-[#0C0C0C] shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-outfit font-bold text-xs text-[#0C0C0C] block">Standardized Quality Assurance</span>
                                            <span className="text-[11px] text-[#444444]">Guaranteed labor pricing and parts quality standards across Karnataka.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* ==================== ENTERPRISE ENTITY BANNER ==================== */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-[#0C0C0C] border border-[#CCCCCC] rounded-md p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
                    <div className="space-y-3 max-w-2xl">
                        <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md border border-white/10 inline-block font-outfit">
                            Partner Hub Administration
                        </span>
                        <h3 className="font-outfit text-2xl sm:text-3xl font-bold tracking-tight text-[#FEFEFE]">
                            NextSynergy Portals Hub Private Limited
                        </h3>
                        <p className="text-xs sm:text-sm text-[#B6B6B6] leading-relaxed">
                            Garage verification audits, parts logistics, and digital invoice settlements are administered via NextSynergy operations teams based in Bengaluru.
                        </p>
                    </div>

                    <Link
                        href="/partner"
                        className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#FFD700]/90 transition-colors shrink-0"
                    >
                        <span>Partner Portal Home</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </section>

        </div>
    );
}