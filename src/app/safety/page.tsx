'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ShieldCheck,
    PhoneCall,
    UserCheck,
    Eye,
    MapPin,
    Clock,
    AlertTriangle,
    CheckCircle2,
    Lock,
    FileCheck,
    Car,
    ChevronRight,
    Headphones,
} from 'lucide-react';

// ==========================================
// TYPES & DATA DEFINITIONS
// ==========================================

interface SafetyFeature {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    badge?: string;
}

interface SafetyStat {
    value: string;
    label: string;
    subtext: string;
}

const SAFETY_STATS: SafetyStat[] = [
    { value: '100%', label: 'Background Verified', subtext: 'Police-cleared & biometric verified drivers' },
    { value: '24/7', label: 'Live GPS Tracking', subtext: 'Monitored continuously by Safety Control Hub' },
    { value: '< 30s', label: 'Emergency Response', subtext: 'Average SOS alert reaction time' },
    { value: '0', label: 'Tolerance Policy', subtext: 'Zero-tolerance for safety protocol violations' },
];

const PASSENGER_SAFETY_FEATURES: SafetyFeature[] = [
    {
        id: '1',
        title: 'In-App SOS Emergency Button',
        description: 'Instantly alerts our 24/7 Safety Command Center and broadcasts your real-time vehicle coordinates to local police authorities and emergency contacts.',
        icon: PhoneCall,
        badge: 'Core Shield',
    },
    {
        id: '2',
        title: 'Live Trip Sharing & Geofencing',
        description: 'Share your live route status with loved ones. Automatic route deviation alerts trigger if the vehicle strays off the designated navigation path.',
        icon: MapPin,
    },
    {
        id: '3',
        title: 'Biometric Driver Verification',
        description: 'Real-time facial verification ensures the assigned verified driver is behind the wheel before starting every single trip.',
        icon: UserCheck,
        badge: 'Mandatory Check',
    },
    {
        id: '4',
        title: 'Number Masking & Data Privacy',
        description: 'Rider phone numbers are fully encrypted and masked during all driver communications to maintain absolute personal contact privacy.',
        icon: Lock,
    },
    {
        id: '5',
        title: 'AI Fatigue & Speed Monitoring',
        description: 'In-vehicle telematics continuously check vehicle speed limits, aggressive braking, and night-shift driver drowsiness levels.',
        icon: Eye,
    },
    {
        id: '6',
        title: 'Rigorous 18-Point Vehicle Audits',
        description: 'Every vehicle in the GaadiGuru ecosystem undergoes mandatory bi-weekly checks for tire tread, brake systems, seatbelts, and air bags.',
        icon: Car,
    },
];

const COMPLIANCE_ITEMS = [
    'Karnataka On-Demand Transportation Technology Aggregators Rules compliance',
    'Central Motor Vehicles Act & AIS-140 GPS telematics integration',
    'Mandatory dual-dashcam options for outstation and night trips',
    'Driver background checks verified via criminal record databases',
];

// ==========================================
// MAIN SAFETY PAGE COMPONENT
// ==========================================

export default function SafetyPage(): React.ReactNode {
    const [sosActive, setSosActive] = useState(false);

    return (
        <main className="min-h-screen bg-[#F5F5F5] font-lexend text-[#0C0C0C] py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Page Header */}
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-[#FEFEFE] border border-[#CCCCCC] px-3.5 py-1.5 rounded-md shadow-sm">
                        <ShieldCheck className="w-4 h-4 text-[#D90E17]" aria-hidden="true" />
                        <span className="text-xs sm:text-sm font-semibold text-[#0C0C0C]">
                            GaadiGuru Shield Standard
                        </span>
                    </div>
                    <h1 className="font-outfit text-4xl sm:text-5xl font-bold tracking-tight text-[#0C0C0C]">
                        Your Journey, Protected by <span className="text-[#D90E17]">Uncompromised Safety</span>
                    </h1>
                    <p className="text-[#444444] text-base sm:text-lg leading-relaxed">
                        From verified drivers and 24/7 telematics tracking to active emergency support, safety is embedded into every kilometer of the GaadiGuru mobility ecosystem.
                    </p>
                </div>

                {/* Emergency Assistance Banner */}
                <section className="bg-[#0C0C0C] text-[#FEFEFE] rounded-md p-6 sm:p-8 border-l-8 border-[#D90E17] shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <div className="flex items-center gap-2 text-[#FFD700] text-xs font-semibold uppercase tracking-wider">
                            <AlertTriangle size={16} aria-hidden="true" />
                            <span>24/7 Incident Control Center</span>
                        </div>
                        <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[#FEFEFE]">
                            Need Immediate Emergency Support?
                        </h2>
                        <p className="text-[#B6B6B6] text-sm leading-relaxed">
                            If you are currently on an active trip and feel unsafe or experience an incident, trigger the in-app SOS or dial our dedicated safety hotline immediately.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                        <button
                            type="button"
                            onClick={() => setSosActive(!sosActive)}
                            className="px-6 py-3 rounded-md bg-[#D90E17] hover:bg-[#E7040E] text-[#FEFEFE] font-semibold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700] flex items-center justify-center gap-2"
                            aria-label="Simulate SOS Emergency Trigger"
                        >
                            <PhoneCall size={18} aria-hidden="true" />
                            <span>{sosActive ? 'SOS Protocol Activated' : 'Test Safety SOS'}</span>
                        </button>
                        <a
                            href="tel:18000000000"
                            className="px-6 py-3 rounded-md bg-[#FFD700] hover:bg-[#FEFEFE] text-[#0C0C0C] font-semibold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700] flex items-center justify-center gap-2 text-center"
                            aria-label="Call Emergency Control Room"
                        >
                            <Headphones size={18} aria-hidden="true" />
                            <span>Call Helpline</span>
                        </a>
                    </div>
                </section>

                {sosActive && (
                    <div className="p-4 bg-[#D90E17]/10 border border-[#D90E17] rounded-md text-[#0C0C0C] flex items-start gap-3 animate-fade-in">
                        <AlertTriangle className="text-[#D90E17] shrink-0 mt-0.5" size={20} aria-hidden="true" />
                        <div className="text-sm">
                            <span className="font-bold text-[#D90E17]">Safety System Active: </span>
                            In a real emergency, tapping SOS dispatches live location details to the nearest emergency response team and notifies your emergency contacts instantly.
                        </div>
                    </div>
                )}

                {/* Safety Metrics Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SAFETY_STATS.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#FEFEFE] p-6 rounded-md border border-[#CCCCCC] shadow-sm flex flex-col justify-between space-y-2"
                        >
                            <span className="font-outfit text-3xl sm:text-4xl font-bold text-[#D90E17]">
                                {stat.value}
                            </span>
                            <div>
                                <h3 className="font-outfit font-semibold text-base text-[#0C0C0C]">
                                    {stat.label}
                                </h3>
                                <p className="text-xs text-[#444444] mt-1 leading-normal">
                                    {stat.subtext}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Core Safety Pillars */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[#0C0C0C]">
                            Comprehensive Protection Features
                        </h2>
                        <p className="text-sm sm:text-base text-[#444444]">
                            Multi-layered safety controls designed for riders, driver partners, and fleet vehicles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PASSENGER_SAFETY_FEATURES.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={feature.id}
                                    className="bg-[#FEFEFE] rounded-md border border-[#E7E7E7] hover:border-[#CCCCCC] p-6 shadow-sm flex flex-col justify-between space-y-4 transition-all"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="p-3 bg-[#FFD700] text-[#0C0C0C] rounded-md shadow-sm">
                                                <Icon size={24} aria-hidden="true" />
                                            </div>
                                            {feature.badge && (
                                                <span className="px-2.5 py-1 bg-[#F5F5F5] border border-[#E7E7E7] text-[#D90E17] font-semibold text-xs rounded-md">
                                                    {feature.badge}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="font-outfit font-bold text-xl text-[#0C0C0C]">
                                            {feature.title}
                                        </h3>

                                        <p className="text-[#444444] text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Regulatory & Verification Compliance */}
                <section className="bg-[#FEFEFE] rounded-md border border-[#CCCCCC] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-3">
                            <span className="text-xs font-semibold text-[#D90E17] uppercase tracking-wider">
                                Government Compliance & Verification
                            </span>
                            <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[#0C0C0C]">
                                Strict Adherence to Regional Transport Regulations
                            </h2>
                            <p className="text-[#444444] text-sm sm:text-base leading-relaxed">
                                GaadiGuru operates under full compliance with municipal and state aggregator framework mandates, maintaining transparent records for every vehicle enrolled in our network.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {COMPLIANCE_ITEMS.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-[#D90E17] shrink-0 mt-0.5" aria-hidden="true" />
                                    <span className="text-xs sm:text-sm font-medium text-[#0C0C0C]">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Link
                                href="/news"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C0C0C] hover:text-[#D90E17] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] rounded-md p-1"
                            >
                                <span>Read our official safety policy announcements</span>
                                <ChevronRight size={16} aria-hidden="true" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-[#F5F5F5] rounded-md overflow-hidden border border-[#E7E7E7]">
                        <Image
                            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop"
                            alt="GaadiGuru Vehicle Inspection and Verification"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Driver Partner Safety Section */}
                <section className="bg-[#F5F5F5] rounded-md border border-[#E7E7E7] p-6 sm:p-10 space-y-6">
                    <div className="max-w-3xl space-y-3">
                        <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[#0C0C0C]">
                            Protecting Our Driver Partners
                        </h2>
                        <p className="text-[#444444] text-sm sm:text-base leading-relaxed">
                            Safety is a two-way street. We provide our driver partners with round-the-clock support, mandatory rest periods to prevent driving fatigue, and zero-tolerance protection against passenger misconduct.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-[#FEFEFE] p-5 rounded-md border border-[#CCCCCC] shadow-sm space-y-2">
                            <Clock className="w-5 h-5 text-[#D90E17]" aria-hidden="true" />
                            <h3 className="font-outfit font-bold text-base text-[#0C0C0C]">Mandatory Break Caps</h3>
                            <p className="text-xs text-[#444444]">Automated offline enforcement after 10 continuous driving hours.</p>
                        </div>

                        <div className="bg-[#FEFEFE] p-5 rounded-md border border-[#CCCCCC] shadow-sm space-y-2">
                            <FileCheck className="w-5 h-5 text-[#D90E17]" aria-hidden="true" />
                            <h3 className="font-outfit font-bold text-base text-[#0C0C0C]">24/7 Roadside Assistance</h3>
                            <p className="text-xs text-[#444444]">Dedicated fleet breakdown and towing support across major routes.</p>
                        </div>

                        <div className="bg-[#FEFEFE] p-5 rounded-md border border-[#CCCCCC] shadow-sm space-y-2">
                            <ShieldCheck className="w-5 h-5 text-[#D90E17]" aria-hidden="true" />
                            <h3 className="font-outfit font-bold text-base text-[#0C0C0C]">Fair Rating Appeal</h3>
                            <p className="text-xs text-[#444444]">Protection against unfair ratings resulting from traffic or weather delays.</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}