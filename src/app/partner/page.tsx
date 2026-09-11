'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Car,
    Wrench,
    Building2,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    TrendingUp,
    Clock,
    Coins,
    FileCheck,
    Users,
    Smartphone,
    ChevronRight,
    Sparkles,
    HelpCircle,
    Briefcase
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
type PartnerType = 'driver' | 'garage' | 'fleet';

interface BenefitItem {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

interface StepItem {
    number: string;
    title: string;
    description: string;
}

/* ==================== DATA STRUCTURES ==================== */
const PARTNER_TYPES: { id: PartnerType; label: string; icon: React.ElementType; badge: string }[] = [
    { id: 'driver', label: 'Driver Partner', icon: Car, badge: 'Individual Cabs & Auto' },
    { id: 'garage', label: 'Verified Garage', icon: Wrench, badge: 'Workshops & Detailers' },
    { id: 'fleet', label: 'Fleet Operator', icon: Building2, badge: 'Multi-Vehicle Businesses' },
];

const BENEFITS: Record<PartnerType, BenefitItem[]> = {
    driver: [
        {
            id: 'd1',
            title: 'Zero Commission Trips',
            description: 'Keep up to 100% of your fare earnings with our flat subscription model.',
            icon: Coins,
        },
        {
            id: 'd2',
            title: 'Daily Automated Payouts',
            description: 'Direct bank transfers every 24 hours with zero processing fees.',
            icon: TrendingUp,
        },
        {
            id: 'd3',
            title: 'Flexible On-Demand Hours',
            description: 'Drive whenever you choose—full time, part time, or weekend shifts.',
            icon: Clock,
        },
        {
            id: 'd4',
            title: 'Driver Safety Coverage',
            description: 'Comprehensive accidental insurance cover included on every trip.',
            icon: ShieldCheck,
        },
    ],
    garage: [
        {
            id: 'g1',
            title: 'Steady Customer Flow',
            description: 'Receive verified digital job cards from local commuters and fleet managers.',
            icon: Users,
        },
        {
            id: 'g2',
            title: 'Spare Parts Network',
            description: 'Access wholesale OEM/OES auto components directly via our procurement portal.',
            icon: FileCheck,
        },
        {
            id: 'g3',
            title: 'Digital Garage Suite',
            description: 'Manage bookings, mechanics, and customer invoicing from one dashboard.',
            icon: Smartphone,
        },
        {
            id: 'g4',
            title: 'Guaranteed Payments',
            description: 'Standardized job rates with automatic wallet settlements upon job approval.',
            icon: Coins,
        },
    ],
    fleet: [
        {
            id: 'f1',
            title: 'Centralized Telematics',
            description: 'Monitor real-time vehicle GPS, driver performance, and battery health.',
            icon: Smartphone,
        },
        {
            id: 'f2',
            title: 'Corporate Contracts',
            description: 'Deploy your vehicles for enterprise employee transport and B2B logistics.',
            icon: Briefcase,
        },
        {
            id: 'f3',
            title: 'Maintenance Discounts',
            description: 'Enjoy preferential rates across GaadiGuru verified workshop networks.',
            icon: Wrench,
        },
        {
            id: 'f4',
            title: 'Dedicated Fleet Lead',
            description: 'Priority 24/7 account manager support for dispatch and compliance.',
            icon: ShieldCheck,
        },
    ],
};

const ONBOARDING_STEPS: StepItem[] = [
    {
        number: '01',
        title: 'Submit Application',
        description: 'Fill out your basic details, service region, and operational capabilities.',
    },
    {
        number: '02',
        title: 'Document Verification',
        description: 'Upload valid ID, business registration, permits, or driving licenses.',
    },
    {
        number: '03',
        title: 'System Activation',
        description: 'Complete a brief 15-minute digital orientation to access your partner portal.',
    },
    {
        number: '04',
        title: 'Start Earning',
        description: 'Accept customer bookings, receive job cards, and manage payouts instantly.',
    },
];

/* ==================== MAIN PAGE COMPONENT ==================== */
export default function PartnerOnboardingPage(): React.ReactNode {
    const [selectedType, setSelectedType] = useState<PartnerType>('driver');
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        city: 'Bengaluru',
        vehicleOrBusiness: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="w-full bg-[#F5F5F5] text-[#0C0C0C] font-lexend selection:bg-[#FFD700] selection:text-[#0C0C0C] min-h-screen">

            {/* ==================== HERO SECTION ==================== */}
            <section className="relative w-full bg-[#FEFEFE] border-b border-[#CCCCCC] pt-16 pb-20 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(${COLORS.textPrimary} 1px, transparent 1px)`,
                        backgroundSize: '24px 24px',
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-3 font-outfit">
                            Partner Network
                        </span>
                        <h1 className="font-outfit text-4xl sm:text-6xl font-extrabold text-[#0C0C0C] tracking-tight leading-[1.1] mb-6">
                            Grow Your Business With <span style={{ color: COLORS.primaryDark }}>GaadiGuru</span>
                        </h1>

                        <p className="text-[#444444] text-base sm:text-lg leading-relaxed font-normal mb-8">
                            Join Karnataka’s unified mobility platform. Whether you operate a single vehicle, manage an auto workshop, or own an enterprise fleet, GaadiGuru connects you directly with demand.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="#apply-form"
                                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#FFD700]/90 transition-colors shadow-xs"
                            >
                                <span>Register Now</span>
                                <ArrowRight size={14} />
                            </a>
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#F5F5F5] border border-[#CCCCCC] rounded-md text-xs font-medium text-[#444444]">
                                <ShieldCheck size={15} className="text-[#D90E17]" />
                                <span>100% Verified Business Ecosystem</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== PARTNER SELECTOR & BENEFITS ==================== */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-1 font-outfit">
                        Tailored Partnerships
                    </span>
                    <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-[#0C0C0C]">
                        Select Your Partnership Model
                    </h2>
                </div>

                {/* Category Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    {PARTNER_TYPES.map((type) => {
                        const IconComp = type.icon;
                        const isSelected = selectedType === type.id;

                        return (
                            <button
                                key={type.id}
                                type="button"
                                aria-label={`Select ${type.label}`}
                                onClick={() => setSelectedType(type.id)}
                                className={`p-5 rounded-md border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${isSelected
                                        ? 'bg-[#FEFEFE] border-[#0C0C0C] shadow-sm'
                                        : 'bg-[#F5F5F5] border-[#CCCCCC] hover:border-[#B6B6B6]'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div
                                        className={`p-3 rounded-md border ${isSelected
                                                ? 'bg-[#FFD700] border-[#FFD700] text-[#0C0C0C]'
                                                : 'bg-[#FEFEFE] border-[#E7E7E7] text-[#D90E17]'
                                            }`}
                                    >
                                        <IconComp size={22} />
                                    </div>
                                    <span className="text-[10px] font-bold font-outfit uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F5F5F5] border border-[#E7E7E7] text-[#444444]">
                                        {type.badge}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-outfit font-extrabold text-base text-[#0C0C0C]">
                                        {type.label}
                                    </h3>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BENEFITS[selectedType].map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-6 flex flex-col justify-between hover:border-[#B6B6B6] transition-all duration-200 shadow-xs"
                            >
                                <div>
                                    <div className="p-3 bg-[#F5F5F5] border border-[#E7E7E7] text-[#D90E17] rounded-md w-fit mb-5">
                                        <IconComponent size={22} />
                                    </div>
                                    <h3 className="font-outfit font-extrabold text-lg text-[#0C0C0C] mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-[#444444] leading-relaxed font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ==================== ONBOARDING STEPS ==================== */}
            <section className="bg-[#FEFEFE] border-y border-[#CCCCCC] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#CCCCCC]">
                        <div>
                            <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-1 font-outfit">
                                Simple Process
                            </span>
                            <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-[#0C0C0C]">
                                How Onboarding Works
                            </h2>
                        </div>
                        <p className="text-xs text-[#444444] max-w-md">
                            Get verified and active on the GaadiGuru network in less than 24 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ONBOARDING_STEPS.map((step) => (
                            <div
                                key={step.number}
                                className="bg-[#F5F5F5] border border-[#CCCCCC] rounded-md p-6 flex flex-col justify-between relative"
                            >
                                <div>
                                    <span className="font-outfit font-extrabold text-2xl text-[#D90E17] block mb-3">
                                        {step.number}
                                    </span>
                                    <h3 className="font-outfit font-bold text-base text-[#0C0C0C] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs text-[#444444] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== ONBOARDING APPLICATION FORM ==================== */}
            <section id="apply-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    <div className="lg:col-span-5 space-y-6">
                        <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block font-outfit">
                            Get Started
                        </span>
                        <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#0C0C0C] tracking-tight">
                            Apply to Become a Partner Today
                        </h2>
                        <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                            Submit your details to receive an instant verification link and onboarding package. Our partner operations team will guide you through setup.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-4 flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-[#D90E17] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-outfit font-bold text-xs text-[#0C0C0C]">Fast Track Verification</h4>
                                    <p className="text-[11px] text-[#444444]">Karnataka State Transport regulatory compliant onboarding.</p>
                                </div>
                            </div>

                            <div className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-4 flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-[#D90E17] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-outfit font-bold text-xs text-[#0C0C0C]">Dedicated Partner Support</h4>
                                    <p className="text-[11px] text-[#444444]">Phone and in-person assistance at our Bengaluru hub.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-6 sm:p-10 shadow-xs">
                            {submitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="p-4 bg-[#FFD700] text-[#0C0C0C] rounded-md w-fit mx-auto">
                                        <CheckCircle2 size={36} />
                                    </div>
                                    <h3 className="font-outfit text-2xl font-extrabold text-[#0C0C0C]">
                                        Application Submitted!
                                    </h3>
                                    <p className="text-xs text-[#444444] max-w-md mx-auto">
                                        Thank you for applying. Our partner onboarding specialist will reach out to <strong>{formData.phone}</strong> within 2 hours.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 bg-[#0C0C0C] text-[#FEFEFE] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md"
                                    >
                                        Submit Another Application
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#0C0C0C] uppercase tracking-wider block font-outfit">
                                            Select Role
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {PARTNER_TYPES.map((t) => (
                                                <button
                                                    key={t.id}
                                                    type="button"
                                                    onClick={() => setSelectedType(t.id)}
                                                    className={`py-2.5 px-3 rounded-md text-xs font-bold font-outfit border cursor-pointer transition-colors ${selectedType === t.id
                                                            ? 'bg-[#0C0C0C] text-[#FEFEFE] border-[#0C0C0C]'
                                                            : 'bg-[#F5F5F5] text-[#444444] border-[#CCCCCC]'
                                                        }`}
                                                >
                                                    {t.label.split(' ')[0]}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#0C0C0C] block font-outfit">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Ramesh Kumar"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="w-full bg-[#F5F5F5] border border-[#CCCCCC] rounded-md px-3.5 py-2.5 text-xs text-[#0C0C0C] focus:outline-none focus:border-[#0C0C0C]"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#0C0C0C] block font-outfit">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-[#F5F5F5] border border-[#CCCCCC] rounded-md px-3.5 py-2.5 text-xs text-[#0C0C0C] focus:outline-none focus:border-[#0C0C0C]"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#0C0C0C] block font-outfit">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="name@domain.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-[#F5F5F5] border border-[#CCCCCC] rounded-md px-3.5 py-2.5 text-xs text-[#0C0C0C] focus:outline-none focus:border-[#0C0C0C]"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#0C0C0C] block font-outfit">Operating City</label>
                                            <select
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                className="w-full bg-[#F5F5F5] border border-[#CCCCCC] rounded-md px-3.5 py-2.5 text-xs text-[#0C0C0C] focus:outline-none focus:border-[#0C0C0C]"
                                            >
                                                <option value="Bengaluru">Bengaluru</option>
                                                <option value="Mysuru">Mysuru</option>
                                                <option value="Mangaluru">Mangaluru</option>
                                                <option value="Hubballi">Hubballi</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#0C0C0C] block font-outfit">
                                            {selectedType === 'driver' ? 'Vehicle Type / Model' : 'Business / Workshop Name'}
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder={selectedType === 'driver' ? 'e.g. Maruti Dzire EV / Auto' : 'e.g. Apex Auto Care'}
                                            value={formData.vehicleOrBusiness}
                                            onChange={(e) => setFormData({ ...formData, vehicleOrBusiness: e.target.value })}
                                            className="w-full bg-[#F5F5F5] border border-[#CCCCCC] rounded-md px-3.5 py-2.5 text-xs text-[#0C0C0C] focus:outline-none focus:border-[#0C0C0C]"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider py-3.5 rounded-md hover:bg-[#FFD700]/90 transition-colors mt-2 shadow-xs"
                                    >
                                        Submit Application
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </section>

            {/* ==================== ENTERPRISE ENTITY FOOTER BANNER ==================== */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-[#0C0C0C] border border-[#CCCCCC] rounded-md p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-md inline-block mb-2 font-outfit">
                            Enterprise Network
                        </span>
                        <h3 className="font-outfit text-xl font-bold text-[#FEFEFE]">
                            NextSynergy Portals Hub Private Limited
                        </h3>
                        <p className="text-xs text-[#B6B6B6]">
                            GaadiGuru partner applications are processed in compliance with Karnataka Transport Authority regulations.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 bg-[#FEFEFE] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md hover:bg-[#F5F5F5] transition-colors shrink-0"
                    >
                        <span>Explore Services</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </section>

        </div>
    );
}