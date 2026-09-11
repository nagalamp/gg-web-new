'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Car,
    FileCheck,
    ShieldCheck,
    Award,
    CheckCircle2,
    Clock,
    ArrowRight,
    ChevronRight,
    UploadCloud,
    Smartphone,
    AlertCircle,
    HelpCircle,
    Building2,
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
interface FlowStep {
    id: string;
    stepNumber: string;
    title: string;
    subtitle: string;
    estimatedTime: string;
    description: string;
    icon: React.ElementType;
    requirements: string[];
}

/* ==================== FLOW DATA ==================== */
const FLOW_STEPS: FlowStep[] = [
    {
        id: 'step-1',
        stepNumber: '01',
        title: 'Basic Registration',
        subtitle: 'Mobile Verification',
        estimatedTime: '2 Mins',
        description: 'Submit your contact details, preferred driving city in Karnataka, and select your vehicle operating model (Cab, Auto, or EV).',
        icon: Smartphone,
        requirements: ['Active Mobile Number', 'Aadhaar Card Number', 'Select City (e.g., Bengaluru)']
    },
    {
        id: 'step-2',
        stepNumber: '02',
        title: 'KYD & Document Upload',
        subtitle: 'Digital Compliance',
        estimatedTime: '5 Mins',
        description: 'Upload high-resolution scans or photos of your essential driving and vehicle credentials for automated background verification.',
        icon: FileCheck,
        requirements: ['Commercial Driving License', 'Vehicle Registration (RC)', 'Commercial Vehicle Insurance', 'Vehicle Permit & FC']
    },
    {
        id: 'step-3',
        stepNumber: '03',
        title: 'Vehicle Inspection',
        subtitle: 'Quality Assurance',
        estimatedTime: '15 Mins',
        description: 'Complete a brief 20-point digital or partner-hub vehicle audit ensuring passenger safety, AC function, and cleanliness standards.',
        icon: Car,
        requirements: ['Functional GPS Telematics', 'Clean Interior & Exterior', 'Working Spare Wheel & Emergency Kit']
    },
    {
        id: 'step-4',
        stepNumber: '04',
        title: 'Orientation & Wallet Setup',
        subtitle: 'Platform Training',
        estimatedTime: '10 Mins',
        description: 'Complete a 15-minute in-app training module covering trip acceptances, SOS features, and link your bank account for 24-hour payouts.',
        icon: Award,
        requirements: ['Bank Account Details / UPI ID', 'In-App Training Completion', 'Accept Partner Code of Conduct']
    },
    {
        id: 'step-5',
        stepNumber: '05',
        title: 'Activation & First Ride',
        subtitle: 'Go Live',
        estimatedTime: 'Instant',
        description: 'Your account is activated! Toggle your status to Online and begin receiving ride requests with 0% platform commission.',
        icon: ShieldCheck,
        requirements: ['Driver App Active', 'Wallet Balance Initialized', 'Ready for Dispatch']
    }
];

export default function DriverOnboardingFlowPage(): React.ReactNode {
    const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
    const activeStep = FLOW_STEPS[activeStepIndex];

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
                            Partner Journey
                        </span>
                        <h1 className="font-outfit text-4xl sm:text-6xl font-extrabold text-[#0C0C0C] tracking-tight leading-[1.1] mb-6">
                            Driver Partner <span style={{ color: COLORS.primaryDark }}>Onboarding Flow</span>
                        </h1>

                        <p className="text-[#444444] text-base sm:text-lg leading-relaxed font-normal mb-8">
                            Join GaadiGuru with zero hassle. Our streamlined 5-step digital onboarding process is designed to get you verified and earning in under 24 hours.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/partner#apply-form"
                                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#FFD700]/90 transition-colors shadow-xs"
                            >
                                <span>Start Application</span>
                                <ArrowRight size={14} />
                            </Link>
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#F5F5F5] border border-[#CCCCCC] rounded-md text-xs font-medium text-[#444444]">
                                <Clock size={15} className="text-[#D90E17]" />
                                <span>Total Onboarding Time: &lt; 24 Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== STEPPER INTERACTION SECTION ==================== */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-1 font-outfit">
                        Process Overview
                    </span>
                    <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-[#0C0C0C]">
                        5 Steps to Start Earning
                    </h2>
                </div>

                {/* Step Tabs Indicator */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
                    {FLOW_STEPS.map((step, idx) => {
                        const isCurrent = activeStepIndex === idx;
                        const isPassed = activeStepIndex > idx;
                        const StepIcon = step.icon;

                        return (
                            <button
                                key={step.id}
                                type="button"
                                aria-label={`View ${step.title}`}
                                onClick={() => setActiveStepIndex(idx)}
                                className={`p-4 rounded-md border text-left transition-all duration-200 cursor-pointer ${isCurrent
                                        ? 'bg-[#FEFEFE] border-[#0C0C0C] shadow-sm'
                                        : isPassed
                                            ? 'bg-[#F5F5F5] border-[#0C0C0C]/40 hover:border-[#0C0C0C]'
                                            : 'bg-[#FEFEFE] border-[#CCCCCC] opacity-70 hover:opacity-100'
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

                {/* Active Step Detailed Card */}
                <div className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-6 sm:p-10 shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        <div className="lg:col-span-7 space-y-5">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="bg-[#D90E17] text-[#FEFEFE] font-outfit font-bold text-xs uppercase px-3 py-1 rounded-md">
                                    Step {activeStep.stepNumber} of 05
                                </span>
                                <span className="bg-[#F5F5F5] border border-[#CCCCCC] text-[#0C0C0C] font-outfit font-semibold text-xs px-3 py-1 rounded-md flex items-center gap-1.5">
                                    <Clock size={13} className="text-[#D90E17]" />
                                    Estimated Time: {activeStep.estimatedTime}
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
                                    Key Deliverables & Checklist
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {activeStep.requirements.map((req, i) => (
                                        <div
                                            key={i}
                                            className="bg-[#F5F5F5] border border-[#E7E7E7] p-3 rounded-md flex items-center gap-2.5 text-xs text-[#0C0C0C] font-medium"
                                        >
                                            <CheckCircle2 size={16} className="text-[#D90E17] shrink-0" />
                                            <span>{req}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 flex items-center gap-3">
                                {activeStepIndex > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => setActiveStepIndex((prev) => prev - 1)}
                                        className="bg-[#F5F5F5] border border-[#CCCCCC] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md hover:bg-[#E7E7E7] transition-colors"
                                    >
                                        Previous Step
                                    </button>
                                )}
                                {activeStepIndex < FLOW_STEPS.length - 1 ? (
                                    <button
                                        type="button"
                                        onClick={() => setActiveStepIndex((prev) => prev + 1)}
                                        className="inline-flex items-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md hover:bg-[#FFD700]/90 transition-colors shadow-xs"
                                    >
                                        <span>Next Step</span>
                                        <ChevronRight size={16} />
                                    </button>
                                ) : (
                                    <Link
                                        href="/partner#apply-form"
                                        className="inline-flex items-center gap-2 bg-[#0C0C0C] text-[#FEFEFE] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md hover:bg-[#0C0C0C]/90 transition-colors shadow-xs"
                                    >
                                        <span>Apply Now</span>
                                        <ArrowRight size={16} />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-[#F5F5F5] border border-[#CCCCCC] rounded-md p-8 text-center">
                                {React.createElement(activeStep.icon, {
                                    size: 56,
                                    className: 'text-[#D90E17] mx-auto mb-4'
                                })}
                                <h4 className="font-outfit font-extrabold text-xl text-[#0C0C0C] mb-2">
                                    {activeStep.subtitle}
                                </h4>
                                <p className="text-xs text-[#444444] mb-6 leading-relaxed">
                                    GaadiGuru automated engines cross-check driver submissions with Karnataka transport registries for instant verification.
                                </p>
                                <div className="p-4 bg-[#FEFEFE] border border-[#E7E7E7] rounded-md text-left flex items-start gap-3">
                                    <ShieldCheck size={20} className="text-[#0C0C0C] shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-outfit font-bold text-xs text-[#0C0C0C] block">Regulatory Compliant</span>
                                        <span className="text-[11px] text-[#444444]">Adheres strictly to Karnataka On-Demand Transportation Rules.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            {/* ==================== ENTERPRISE ENTITY BANNER ==================== */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-[#0C0C0C] border border-[#CCCCCC] rounded-md p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
                    <div className="space-y-3 max-w-2xl">
                        <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md border border-white/10 inline-block font-outfit">
                            Corporate Headquarters
                        </span>
                        <h3 className="font-outfit text-2xl sm:text-3xl font-bold tracking-tight text-[#FEFEFE]">
                            NextSynergy Portals Hub Private Limited
                        </h3>
                        <p className="text-xs sm:text-sm text-[#B6B6B6] leading-relaxed">
                            Driver partner onboarding operations and background checks are managed from our central operations hub in Bengaluru, Karnataka.
                        </p>
                    </div>

                    <Link
                        href="/partner"
                        className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#FFD700]/90 transition-colors shrink-0"
                    >
                        <span>Back to Partner Portal</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </section>

        </div>
    );
}