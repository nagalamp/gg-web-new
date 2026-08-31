'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Briefcase,
    MapPin,
    Zap,
    HeartHandshake,
    TrendingUp,
    Users,
    ArrowRight,
    Building,
    Mail,
    Sparkles,
    CheckCircle,
} from 'lucide-react';

// ==========================================
// MAIN CAREERS PAGE COMPONENT
// ==========================================

export default function CareersPage(): React.ReactNode {
    const [generalAppSubmitted, setGeneralAppSubmitted] = useState<boolean>(false);
    const [applicantName, setApplicantName] = useState('');
    const [applicantEmail, setApplicantEmail] = useState('');
    const [applicantRole, setApplicantRole] = useState('');
    const [resumeUrl, setResumeUrl] = useState('');

    const handleGeneralSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (applicantName && applicantEmail) {
            setGeneralAppSubmitted(true);
            setTimeout(() => {
                setGeneralAppSubmitted(false);
                setApplicantName('');
                setApplicantEmail('');
                setApplicantRole('');
                setResumeUrl('');
            }, 3000);
        }
    };

    return (
        <main className="min-h-screen bg-[#F5F5F5] font-lexend text-[#0C0C0C] py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Hero Section */}
                <section className="space-y-6 max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-[#FEFEFE] border border-[#CCCCCC] px-3.5 py-1.5 rounded-md shadow-sm">
                        <Briefcase className="w-4 h-4 text-[#D90E17]" aria-hidden="true" />
                        <span className="text-xs sm:text-sm font-semibold text-[#0C0C0C]">
                            Join NextSynergy Portals Hub
                        </span>
                    </div>
                    <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0C0C0C]">
                        Build the Future of <span className="text-[#D90E17]">Mobility in India</span>
                    </h1>
                    <p className="text-[#444444] text-base sm:text-lg leading-relaxed">
                        We are building GaadiGuru—a unified mobility ecosystem covering ride-hailing, EV fleet management, and logistics. Join our mission to redefine transport accessibility and safety.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="#openings"
                            className="px-6 py-3 rounded-md bg-[#FFD700] hover:bg-[#D90E17] text-[#0C0C0C] hover:text-[#FEFEFE] font-semibold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] inline-flex items-center gap-2"
                        >
                            <span>Explore Opportunities</span>
                            <ArrowRight size={16} aria-hidden="true" />
                        </a>
                    </div>
                </section>

                {/* Culture & Benefits Grid */}
                <section className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="font-outfit text-3xl font-bold text-[#0C0C0C]">Why Work With Us?</h2>
                        <p className="text-sm sm:text-base text-[#444444]">
                            Empowering engineers, operators, and designers to solve real-world urban transit challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-[#FEFEFE] p-6 rounded-md border border-[#E7E7E7] shadow-sm space-y-4">
                            <div className="p-3 bg-[#FFD700] text-[#0C0C0C] rounded-md inline-block">
                                <Zap size={24} aria-hidden="true" />
                            </div>
                            <h3 className="font-outfit font-bold text-xl text-[#0C0C0C]">Rapid Innovation</h3>
                            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                                Work directly with modern stacks (Next.js, Expo, React Native, Python REST APIs) to ship feature updates rapidly.
                            </p>
                        </div>

                        <div className="bg-[#FEFEFE] p-6 rounded-md border border-[#E7E7E7] shadow-sm space-y-4">
                            <div className="p-3 bg-[#FFD700] text-[#0C0C0C] rounded-md inline-block">
                                <HeartHandshake size={24} aria-hidden="true" />
                            </div>
                            <h3 className="font-outfit font-bold text-xl text-[#0C0C0C]">Driver-First Culture</h3>
                            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                                We design tools that empower thousands of driver partners with fair fares, safety support, and zero extra commissions.
                            </p>
                        </div>

                        <div className="bg-[#FEFEFE] p-6 rounded-md border border-[#E7E7E7] shadow-sm space-y-4">
                            <div className="p-3 bg-[#FFD700] text-[#0C0C0C] rounded-md inline-block">
                                <TrendingUp size={24} aria-hidden="true" />
                            </div>
                            <h3 className="font-outfit font-bold text-xl text-[#0C0C0C]">Ownership & Equity</h3>
                            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                                Take full responsibility for your domains with transparent career growth trajectories and performance incentives.
                            </p>
                        </div>

                        <div className="bg-[#FEFEFE] p-6 rounded-md border border-[#E7E7E7] shadow-sm space-y-4">
                            <div className="p-3 bg-[#FFD700] text-[#0C0C0C] rounded-md inline-block">
                                <Users size={24} aria-hidden="true" />
                            </div>
                            <h3 className="font-outfit font-bold text-xl text-[#0C0C0C]">Hybrid Flexibility</h3>
                            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                                Collaborate in our Bengaluru headquarters or work remotely with flexible schedules tailored for optimal output.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Office & Team Banner */}
                <section className="bg-[#FEFEFE] rounded-md border border-[#CCCCCC] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-3">
                            <span className="text-xs font-semibold text-[#D90E17] uppercase tracking-wider">
                                Headquarters
                            </span>
                            <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[#0C0C0C]">
                                Based in the Heart of Bengaluru&apos;s Tech Hub
                            </h2>
                            <p className="text-[#444444] text-sm sm:text-base leading-relaxed">
                                Operating under NextSynergy Portals Hub Private Limited, our central operations manage mobility technology, fleet integrations, and customer trust standards across Karnataka.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xs sm:text-sm text-[#0C0C0C] font-semibold">
                            <div className="flex items-center gap-2">
                                <Building className="text-[#D90E17]" size={18} aria-hidden="true" />
                                <span>NextSynergy Portals Hub Pvt Ltd</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="text-[#D90E17]" size={18} aria-hidden="true" />
                                <span>Bengaluru, Karnataka</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative aspect-[4/3] bg-[#F5F5F5] rounded-md overflow-hidden border border-[#E7E7E7]">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                            alt="GaadiGuru Team Collaborating"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Current Openings - Empty State Banner */}
                <section id="openings" className="space-y-8 scroll-mt-10">
                    <div className="space-y-2">
                        <h2 className="font-outfit text-3xl font-bold text-[#0C0C0C]">Current Openings</h2>
                        <p className="text-sm sm:text-base text-[#444444]">
                            Join our core team in building the next generation of mobility infrastructure.
                        </p>
                    </div>

                    {/* Empty State Callout Container */}
                    <div className="bg-[#FEFEFE] rounded-md border border-[#CCCCCC] p-8 sm:p-12 text-center shadow-sm space-y-6 max-w-4xl mx-auto">
                        <div className="mx-auto w-14 h-14 rounded-md bg-[#FFD700] text-[#0C0C0C] flex items-center justify-center shadow-sm">
                            <Sparkles size={30} aria-hidden="true" />
                        </div>

                        <div className="space-y-3 max-w-xl mx-auto">
                            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-[#0C0C0C]">
                                We Are Currently Preparing New Roles!
                            </h3>
                            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                                We don&apos;t have any active job listings at this exact moment, but we are always eager to connect with extraordinary talent in engineering, product design, operations, and marketing.
                            </p>
                        </div>

                        <div className="pt-2 max-w-2xl mx-auto border-t border-[#E7E7E7]">
                            {generalAppSubmitted ? (
                                <div className="py-6 space-y-2 text-center">
                                    <CheckCircle size={32} className="mx-auto text-[#D90E17]" aria-hidden="true" />
                                    <h4 className="font-outfit font-bold text-lg text-[#0C0C0C]">Profile Submitted!</h4>
                                    <p className="text-xs sm:text-sm text-[#444444]">
                                        Thanks for reaching out! We&apos;ve stored your details and will get in touch as soon as a relevant opening arises.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleGeneralSubmit} className="space-y-4 text-left pt-4">
                                    <p className="text-xs font-semibold text-[#0C0C0C] text-center uppercase tracking-wider">
                                        Send Us an Open Application
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-[#0C0C0C] block">Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={applicantName}
                                                onChange={(e) => setApplicantName(e.target.value)}
                                                placeholder="e.g. Ananya Rao"
                                                className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F5F5] border border-[#E7E7E7] text-sm text-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] focus:bg-[#FEFEFE]"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-[#0C0C0C] block">Email Address *</label>
                                            <input
                                                type="email"
                                                required
                                                value={applicantEmail}
                                                onChange={(e) => setApplicantEmail(e.target.value)}
                                                placeholder="e.g. ananya@example.com"
                                                className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F5F5] border border-[#E7E7E7] text-sm text-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] focus:bg-[#FEFEFE]"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-[#0C0C0C] block">Target Role / Domain</label>
                                            <input
                                                type="text"
                                                value={applicantRole}
                                                onChange={(e) => setApplicantRole(e.target.value)}
                                                placeholder="e.g. Full-Stack / Operations Lead"
                                                className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F5F5] border border-[#E7E7E7] text-sm text-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] focus:bg-[#FEFEFE]"
                                            />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-[#0C0C0C] block">LinkedIn / Portfolio Link</label>
                                            <input
                                                type="url"
                                                value={resumeUrl}
                                                onChange={(e) => setResumeUrl(e.target.value)}
                                                placeholder="https://linkedin.com/in/username"
                                                className="w-full px-3.5 py-2.5 rounded-md bg-[#F5F5F5] border border-[#E7E7E7] text-sm text-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] focus:bg-[#FEFEFE]"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-2 text-center">
                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto px-8 py-3 rounded-md bg-[#FFD700] hover:bg-[#D90E17] text-[#0C0C0C] hover:text-[#FEFEFE] font-semibold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] inline-flex items-center justify-center gap-2"
                                        >
                                            <Mail size={16} aria-hidden="true" />
                                            <span>Submit Talent Profile</span>
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}