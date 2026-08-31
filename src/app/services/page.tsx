'use client';

import React from 'react';
import Link from 'next/link';
import {
    Wrench,
    Car,
    UserCheck,
    LifeBuoy,
    Settings,
    ShieldCheck,
    Sparkles,
    Package,
    Truck,
    Bell,
    Lock,
    ArrowRight,
    Zap,
    FileText
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

interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    icon: React.ElementType;
    status: string;
    description: string;
    features: string[];
}

const SERVICES_SHOWCASE: ServiceItem[] = [
    {
        id: 'ev-charging',
        title: 'EV CHARGE',
        subtitle: 'On-Demand EV Charging',
        category: 'Electric Mobility',
        icon: Zap,
        status: 'In Development',
        description: 'Mobile emergency charging vans and on-demand doorstep EV charging dispatches equipped with fast DC chargers for stranded electric vehicles.',
        features: ['Mobile Fast Charging', 'Doorstep Service', '24/7 SOS Dispatch', 'All Plug Types']
    },
    {
        id: 'maintain',
        title: 'MAINTAIN',
        subtitle: 'Garage & Service',
        category: 'Vehicle Care',
        icon: Wrench,
        status: 'In Development',
        description: 'Comprehensive periodic maintenance, engine diagnostics, bodywork, and digital job cards across certified partner workshops.',
        features: ['Digital Job Cards', '100% Genuine Parts', 'Doorstep Pickup', 'Verified Network']
    },
    {
        id: 'chauffeur',
        title: 'CHAUFFEUR',
        subtitle: 'Driver on Demand',
        category: 'Driver Services',
        icon: UserCheck,
        status: 'In Development',
        description: 'On-demand professional, background-verified chauffeurs to drive your personal private vehicle for outstation or daily commutes.',
        features: ['Police Verified', 'Hourly Plans', 'Live Trip Monitoring', 'Night Drivers']
    },
    {
        id: 'assist',
        title: 'ASSIST',
        subtitle: '24/7 Roadside SOS',
        category: 'Emergency Support',
        icon: LifeBuoy,
        status: 'In Development',
        description: 'Round-the-clock roadside emergency dispatch including flatbed towing, battery jump-starts, tire repair, and emergency fuel.',
        features: ['Rapid Dispatch', 'Flatbed Towing', 'Mobile Mechanic', 'Highway Support']
    },
    {
        id: 'insurance',
        title: 'INSURANCE',
        subtitle: 'Policy & Protection',
        category: 'Vehicle Protection',
        icon: FileText,
        status: 'In Development',
        description: 'Instant motor insurance procurement, zero-deductible policy renewals, cashless claim processing, and roadside protection add-ons[cite: 1].',
        features: ['Instant Policy Renewal', 'Cashless Claims', 'Zero Depreciation', 'Add-on Protection']
    },
    {
        id: 'parts',
        title: 'PARTS',
        subtitle: 'Spare Parts Market',
        category: 'Marketplace',
        icon: Settings,
        status: 'In Development',
        description: 'Direct access to OEM/OES spare parts, tires, batteries, and lubricants with scheduled workshop fitment options[cite: 1].',
        features: ['OEM Components', 'Direct Delivery', 'Fitment Hubs', 'Part Finder']
    },
    {
        id: 'move',
        title: 'MOVE',
        subtitle: 'Urban Mobility',
        category: 'Rides & Transit',
        icon: Car,
        status: 'In Development',
        description: 'On-demand urban commuter transit ranging from cabs and auto-rickshaws to outstation rentals and airport transfers[cite: 1].',
        features: ['Route Planning', 'Verified Drivers', 'Intercity & Local', 'Airport Transfers']
    },
    {
        id: 'deliver',
        title: 'DELIVER',
        subtitle: 'Express Parcel',
        category: 'Hyper-Local',
        icon: Package,
        status: 'In Development',
        description: 'Intra-city hyper-local courier dispatch for documents, packages, and essential goods utilizing our driver network[cite: 1].',
        features: ['Real-time Dispatch', 'Multi-stop Delivery', 'OTP Handover', 'Express Delivery']
    },
    {
        id: 'logistics',
        title: 'LOGISTICS',
        subtitle: 'Goods & Freight',
        category: 'Commercial Cargo',
        icon: Truck,
        status: 'In Development',
        description: 'Mini-trucks, loaders, and commercial freight transport for business logistics, heavy cargo, and goods movement[cite: 1].',
        features: ['3-Wheelers & Mini Trucks', 'High Capacity', 'Local & Cargo', 'Enterprise Billing']
    },
    {
        id: 'own',
        title: 'OWN',
        subtitle: 'Pre-Owned Marketplace',
        category: 'Buy & Sell',
        icon: Sparkles,
        status: 'In Development',
        description: 'Buy and sell certified pre-owned commercial and personal vehicles with detailed inspection reports and transfer assistance[cite: 1].',
        features: ['Multi-Point Inspection', 'RC Transfer', 'Verified History', 'Direct Marketplace']
    },
    {
        id: 'finance',
        title: 'FINANCE',
        subtitle: 'Loans & EMI Plans',
        category: 'Financial Care',
        icon: ShieldCheck,
        status: 'In Development',
        description: 'Simplified vehicle loan pre-approvals, flexible EMI options, driver vehicle purchase financing, and extended warranty options[cite: 1].',
        features: ['Instant Approval', 'Used Vehicle Loans', 'Driver Financing', 'Extended Warranty']
    }
];

export default function ServicePageClient(): React.ReactNode {
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
                        <h1 className="font-outfit text-4xl sm:text-6xl font-extrabold text-[#0C0C0C] tracking-tight leading-[1.1] mb-6">
                            Upcoming <span style={{ color: COLORS.primaryDark }}>GaadiGuru</span> Services
                        </h1>

                        <p className="text-[#444444] text-base sm:text-lg leading-relaxed font-normal">
                            We are engineering a unified mobility platform designed to aggregate all your vehicle maintenance, EV charging, insurance, logistics, and transit requirements under a single digital hub[cite: 1].
                        </p>
                    </div>
                </div>
            </section>

            {/* ==================== SERVICES GRID ==================== */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Section Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#CCCCCC]">
                    <div>
                        <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider block mb-1">
                            Platform Architecture
                        </span>
                        <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-[#0C0C0C]">
                            Planned Capabilities
                        </h2>
                    </div>

                    <div className="bg-[#FEFEFE] border border-[#CCCCCC] px-4 py-2.5 rounded-md text-xs font-medium text-[#444444] flex items-center gap-2.5 self-start sm:self-auto shadow-xs">
                        <Bell size={15} className="text-[#D90E17]" />
                        <span>Direct service booking is currently offline</span>
                    </div>
                </div>

                {/* Showcase Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {SERVICES_SHOWCASE.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="group bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#B6B6B6] hover:shadow-md relative overflow-hidden"
                            >
                                {/* Accent Top Border Indicator */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-[#F5F5F5] group-hover:bg-[#FFD700] transition-colors" />

                                <div>
                                    {/* Icon & Badge Row */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-3 bg-[#FFD700] text-[#0C0C0C] rounded-md shadow-xs transition-transform group-hover:scale-105">
                                            <IconComponent size={24} />
                                        </div>
                                        <span className="text-[10px] font-bold bg-[#F5F5F5] text-[#D90E17] border border-[#CCCCCC] px-2.5 py-1 rounded-md uppercase tracking-wider">
                                            {item.status}
                                        </span>
                                    </div>

                                    {/* Header Title Block */}
                                    <div className="mb-3">
                                        <h3 className="font-outfit font-extrabold text-xl text-[#0C0C0C] tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="font-outfit font-medium text-xs text-[#D90E17] uppercase tracking-wide mt-0.5">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-xs text-[#444444] leading-relaxed mb-6 font-normal">
                                        {item.description}
                                    </p>

                                    {/* Badges / Micro Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-8">
                                        {item.features.map((feat, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-[#F5F5F5] border border-[#E7E7E7] text-[#0C0C0C] text-[11px] px-2.5 py-1 rounded-md font-medium"
                                            >
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Action Strip */}
                                <div className="pt-4 border-t border-[#E7E7E7] flex items-center justify-between">
                                    <span className="text-xs text-[#B6B6B6] font-medium flex items-center gap-1.5">
                                        <Lock size={13} />
                                        <span>Unavailable</span>
                                    </span>

                                    <button
                                        type="button"
                                        disabled
                                        aria-label={`${item.title} currently unavailable`}
                                        className="px-4 py-2 bg-[#F5F5F5] text-[#B6B6B6] font-bold text-xs rounded-md border border-[#CCCCCC] cursor-not-allowed uppercase tracking-wider"
                                    >
                                        Coming Soon
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ==================== SYSTEM BANNER ==================== */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-[#0C0C0C] border border-[#CCCCCC] rounded-md p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">

                    <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#FFD700]/10 rounded-md blur-3xl pointer-events-none" />

                    <div className="space-y-3 max-w-2xl relative z-10">
                        <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md border border-white/10 inline-block">
                            Development Phase
                        </span>
                        <h3 className="font-outfit text-2xl sm:text-3xl font-bold tracking-tight text-[#FEFEFE]">
                            Full Ecosystem Integration Underway
                        </h3>
                        <p className="text-xs sm:text-sm text-[#B6B6B6] leading-relaxed">
                            Our core dispatch, scheduling, and partner onboarding engines are being configured. Interactive booking actions and live tracking interfaces will launch in upcoming releases.
                        </p>
                    </div>

                    <div className="relative z-10 self-stretch sm:self-auto flex">
                        <Link
                            href="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#FFD700]/90 transition-colors"
                        >
                            <span>Back to Home</span>
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}