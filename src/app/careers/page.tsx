'use client';

import React, { useState } from 'react';
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
    Clock,
    X,
    BookOpen,
    Megaphone,
    ChevronRight,
} from 'lucide-react';

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

interface JobPosition {
    id: string;
    title: string;
    department: string;
    location: string;
    duration: string;
    type: string;
    icon: React.ElementType;
    about: string;
    overview: string;
    responsibilities: string[];
    requirements: string[];
    gains: string[];
}

const OPEN_POSITIONS: JobPosition[] = [
    {
        id: 'marketing-intern',
        title: 'Marketing Intern',
        department: 'Growth & Strategy',
        location: 'Bengaluru / Remote / Hybrid',
        duration: '3–6 Months',
        type: 'Internship',
        icon: Megaphone,
        about: 'GaadiGuru is a mobility-focused startup working to simplify and improve local transportation through technology. We are building solutions that connect people and make everyday travel more convenient.',
        overview: 'We are looking for an enthusiastic and creative Marketing Intern to join our growing team. This is an opportunity to work closely with an early-stage startup and contribute directly to brand awareness, customer growth, and marketing initiatives.',
        responsibilities: [
            'Assist in planning and executing marketing campaigns.',
            'Support social media and digital marketing activities.',
            'Conduct market, customer, and competitor research.',
            'Identify opportunities to promote GaadiGuru and increase brand awareness.',
            'Help create campaigns for customer and driver acquisition.',
            'Assist with partnerships, community outreach, and promotional activities.',
            'Track campaign performance and share insights with the team.',
            'Bring new and creative ideas to help grow the brand.',
        ],
        requirements: [
            'Currently pursuing or recently completed a degree in Marketing, Business, Management, or a related field.',
            'Good communication and interpersonal skills.',
            'Interest in startups, technology, mobility, and digital marketing.',
            'Basic understanding of social media platforms and digital marketing.',
            'Creative, proactive, and willing to learn.',
            'Ability to work independently and as part of a small team.',
        ],
        gains: [
            'Hands-on experience working with an early-stage startup.',
            'Opportunity to contribute directly to real marketing and growth initiatives.',
            'Exposure to startup strategy, branding, and customer acquisition.',
            'Mentorship and learning opportunities.',
            'Potential opportunity for a full-time role based on performance.',
        ],
    },
    {
        id: 'content-writer-intern',
        title: 'Content Writer Intern',
        department: 'Brand & Content',
        location: 'Bengaluru / Remote / Hybrid',
        duration: '3–6 Months',
        type: 'Internship',
        icon: BookOpen,
        about: 'GaadiGuru is a mobility-focused startup building technology-driven solutions to make local transportation simpler, smarter, and more accessible.',
        overview: 'We are looking for a creative and motivated Content Writer Intern to help shape the voice of GaadiGuru. You will create engaging content for social media, blogs, marketing campaigns, and other digital platforms.',
        responsibilities: [
            'Write engaging content for social media platforms.',
            'Create captions, posts, promotional content, and campaign copy.',
            'Research topics related to transportation, mobility, technology, and local news.',
            'Write blogs, articles, announcements, and website content.',
            'Help develop creative content ideas and storytelling strategies.',
            'Work closely with the marketing and design teams.',
            'Maintain a consistent brand voice across different platforms.',
            'Assist in creating content in English and Kannada, where applicable.',
        ],
        requirements: [
            'Strong writing and communication skills.',
            'Good command of English; knowledge of Kannada is an added advantage.',
            'Ability to research topics and create clear, engaging content.',
            'Basic understanding of social media and digital content trends.',
            'Creative mindset and attention to detail.',
            'Interest in startups, technology, transportation, or digital media.',
            'Students or recent graduates in Journalism, Communications, Marketing, English, or related fields are preferred.',
        ],
        gains: [
            'Build a strong portfolio with real startup content.',
            'Gain hands-on experience in content creation and digital marketing.',
            'Work closely with an early-stage startup and contribute to its brand growth.',
            'Learn about content strategy, social media, and startup marketing.',
            'Potential opportunity for a full-time role based on performance.',
        ],
    },
];

// ==========================================
// MAIN CAREERS PAGE COMPONENT
// ==========================================

export default function CareersPage(): React.ReactNode {
    const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

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

                {/* Active Openings Section */}
                <section id="openings" className="space-y-8 scroll-mt-10">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D90E17] uppercase tracking-wider">
                                <Sparkles size={14} aria-hidden="true" />
                                <span>Active Hiring</span>
                            </div>
                            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-[#0C0C0C]">Open Positions</h2>
                            <p className="text-sm sm:text-base text-[#444444]">
                                Kickstart your career with high-impact internship opportunities at GaadiGuru.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {OPEN_POSITIONS.map((job) => {
                            const IconComponent = job.icon;
                            return (
                                <div
                                    key={job.id}
                                    className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#D90E17] transition-all"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="p-3 bg-[#FFD700] text-[#0C0C0C] rounded-md">
                                                <IconComponent size={26} aria-hidden="true" />
                                            </div>
                                            <span className="px-3 py-1 rounded-md bg-[#F5F5F5] border border-[#E7E7E7] text-xs font-semibold text-[#0C0C0C]">
                                                {job.type}
                                            </span>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-xs font-medium text-[#D90E17] uppercase tracking-wider">{job.department}</p>
                                            <h3 className="font-outfit text-2xl font-bold text-[#0C0C0C]">{job.title}</h3>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-xs font-medium text-[#444444] pt-1">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={15} className="text-[#D90E17]" aria-hidden="true" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={15} className="text-[#D90E17]" aria-hidden="true" />
                                                <span>{job.duration}</span>
                                            </div>
                                        </div>

                                        <p className="text-xs sm:text-sm text-[#444444] leading-relaxed line-clamp-3">
                                            {job.overview}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-[#E7E7E7] flex items-center justify-between">
                                        <button
                                            onClick={() => setSelectedJob(job)}
                                            className="w-full px-5 py-2.5 rounded-md bg-[#FFD700] hover:bg-[#D90E17] text-[#0C0C0C] hover:text-[#FEFEFE] font-semibold text-sm transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#0C0C0C]"
                                        >
                                            <span>View Details</span>
                                            <ChevronRight size={16} aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
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

                {/* Send Resume Section */}
                <section className="space-y-8">
                    <div className="bg-[#FEFEFE] rounded-md border border-[#CCCCCC] p-8 sm:p-12 shadow-sm space-y-6 max-w-4xl mx-auto text-center">
                        <div className="mx-auto w-14 h-14 rounded-md bg-[#FFD700] text-[#0C0C0C] flex items-center justify-center shadow-sm">
                            <Mail size={30} aria-hidden="true" />
                        </div>

                        <div className="space-y-3 max-w-xl mx-auto">
                            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-[#0C0C0C]">
                                Interested in Joining Us?
                            </h3>
                            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                                Send your resumes to{' '}
                                <span className="font-bold text-[#D90E17]">
                                    careers@gaadiguru.com
                                </span>{' '}
                                and we will get back to you!
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            {/* JOB DETAILS MODAL */}
            {selectedJob && (
                <div
                    className="fixed inset-0 z-50 bg-[#0C0C0C]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div className="bg-[#FEFEFE] rounded-md border border-[#CCCCCC] w-full max-w-3xl my-8 p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto space-y-6">

                        {/* Modal Header */}
                        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E7E7E7]">
                            <div>
                                <span className="text-xs font-semibold text-[#D90E17] uppercase tracking-wider">
                                    {selectedJob.department} • {selectedJob.type}
                                </span>
                                <h2 id="modal-title" className="font-outfit text-2xl sm:text-3xl font-bold text-[#0C0C0C]">
                                    {selectedJob.title}
                                </h2>
                                <div className="flex flex-wrap gap-4 text-xs font-medium text-[#444444] pt-2">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={14} className="text-[#D90E17]" aria-hidden="true" />
                                        {selectedJob.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} className="text-[#D90E17]" aria-hidden="true" />
                                        {selectedJob.duration}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="p-2 rounded-md hover:bg-[#F5F5F5] text-[#0C0C0C] transition-colors"
                                aria-label="Close Job Details Modal"
                            >
                                <X size={20} aria-hidden="true" />
                            </button>
                        </div>

                        {/* Modal Content / Job Breakdown */}
                        <div className="space-y-6 text-sm text-[#0C0C0C]">
                            <div className="space-y-2">
                                <h3 className="font-outfit font-bold text-base text-[#0C0C0C]">About GaadiGuru</h3>
                                <p className="text-[#444444] leading-relaxed">{selectedJob.about}</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-outfit font-bold text-base text-[#0C0C0C]">Role Overview</h3>
                                <p className="text-[#444444] leading-relaxed">{selectedJob.overview}</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-outfit font-bold text-base text-[#0C0C0C]">Key Responsibilities</h3>
                                <ul className="space-y-1.5 list-disc list-inside text-[#444444]">
                                    {selectedJob.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="leading-relaxed">{resp}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-outfit font-bold text-base text-[#0C0C0C]">Requirements</h3>
                                <ul className="space-y-1.5 list-disc list-inside text-[#444444]">
                                    {selectedJob.requirements.map((req, idx) => (
                                        <li key={idx} className="leading-relaxed">{req}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-outfit font-bold text-base text-[#0C0C0C]">What You&apos;ll Gain</h3>
                                <ul className="space-y-1.5 list-disc list-inside text-[#444444]">
                                    {selectedJob.gains.map((gain, idx) => (
                                        <li key={idx} className="leading-relaxed">{gain}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Direct Contact Footer */}
                            <div className="pt-6 border-t border-[#E7E7E7]">
                                <div className="bg-[#F5F5F5] p-6 rounded-md border border-[#E7E7E7] text-center space-y-2">
                                    <h3 className="font-outfit font-bold text-lg text-[#0C0C0C]">
                                        How to Apply
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                                        To apply for the <span className="font-semibold text-[#0C0C0C]">{selectedJob.title}</span> position, please send your resume and cover letter to{' '}
                                        <span className="font-bold text-[#D90E17]">
                                            careers@gaadiguru.com
                                        </span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}