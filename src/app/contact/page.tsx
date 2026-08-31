'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';

interface ContactFormData {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const INQUIRY_TYPES = [
    'General Enquiry',
    'Fleet & Vehicle Aggregation',
    'Enterprise & Corporate Booking',
    'Driver-Partner Onboarding',
    'Support & Safety Incident',
];

export default function ContactPage(): React.ReactNode {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState<ContactFormData>({
        fullName: '',
        email: '',
        phone: '',
        subject: INQUIRY_TYPES[0],
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-[#F5F5F5] font-lexend text-[#0C0C0C] py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Header Section */}
                <div className="max-w-3xl space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#FEFEFE] border border-[#CCCCCC] px-3.5 py-1.5 rounded-md shadow-xs">
                        <span className="w-2 h-2 rounded-md bg-[#D90E17]" aria-hidden="true" />
                        <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#D90E17] uppercase">
                            24/7 Support & Partnerships
                        </span>
                    </div>

                    <h1 className="font-outfit text-4xl sm:text-5xl font-bold tracking-tight text-[#0C0C0C]">
                        Get in Touch with <span className="text-[#D90E17]">GaadiGuru</span>
                    </h1>

                    <p className="text-[#444444] text-base sm:text-lg leading-relaxed">
                        Have questions about urban rentals, fleet aggregation, enterprise mobility, or driver-partner opportunities? Reach out to our team via email.
                    </p>
                </div>

                {/* Contact Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Contact Cards & Operating Details */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-4">
                            {/* Email Card */}
                            <div className="flex items-start gap-4 p-5 rounded-md bg-[#FEFEFE] border border-[#CCCCCC] shadow-xs hover:border-[#B6B6B6] transition-colors">
                                <div className="p-3 bg-[#FFD700]/30 rounded-md text-[#0C0C0C] shrink-0">
                                    <Mail size={22} aria-hidden="true" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs font-semibold text-[#444444] uppercase tracking-wider block">
                                        Email Support
                                    </span>
                                    <a
                                        href="mailto:contact@gaadiguru.com"
                                        className="text-base sm:text-lg font-outfit font-bold text-[#0C0C0C] hover:text-[#D90E17] transition-colors block"
                                    >
                                        contact@gaadiguru.com
                                    </a>
                                    <p className="text-xs text-[#444444]">Guaranteed response within 2 business hours</p>
                                </div>
                            </div>
                        </div>

                        {/* SLA / Support Banner */}
                        <div className="p-5 rounded-md bg-[#FEFEFE] border border-[#E7E7E7] space-y-3">
                            <div className="flex items-center gap-2 text-xs font-bold text-[#0C0C0C]">
                                <Clock size={16} className="text-[#D90E17]" aria-hidden="true" />
                                <span>Operating Timings</span>
                            </div>
                            <div className="text-xs text-[#444444] space-y-1">
                                <p>• <strong>Ride & Emergency Desk:</strong> 24 hours / 7 days</p>
                                <p>• <strong>Partner Onboarding & Office:</strong> Mon - Sat, 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7 bg-[#FEFEFE] p-6 sm:p-8 rounded-md border border-[#CCCCCC] shadow-xs">
                        {submitted ? (
                            <div className="text-center py-12 space-y-6">
                                <div className="w-16 h-16 bg-[#FFD700] text-[#0C0C0C] rounded-md flex items-center justify-center mx-auto shadow-xs">
                                    <CheckCircle2 size={36} aria-hidden="true" />
                                </div>
                                <div className="space-y-2 max-w-md mx-auto">
                                    <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[#0C0C0C]">
                                        Message Received!
                                    </h2>
                                    <p className="text-sm text-[#444444] leading-relaxed">
                                        Thank you, <span className="font-semibold text-[#0C0C0C]">{formData.fullName}</span>. Our support team has logged your inquiry regarding <span className="font-semibold text-[#0C0C0C]">"{formData.subject}"</span> and will reply to <span className="font-semibold text-[#0C0C0C]">{formData.email}</span> shortly.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({
                                            fullName: '',
                                            email: '',
                                            phone: '',
                                            subject: INQUIRY_TYPES[0],
                                            message: '',
                                        });
                                    }}
                                    className="px-6 py-2.5 rounded-md bg-[#F5F5F5] hover:bg-[#E7E7E7] text-[#0C0C0C] border border-[#CCCCCC] font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0C0C0C]"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="border-b border-[#E7E7E7] pb-3 mb-4">
                                    <h2 className="font-outfit text-xl sm:text-2xl font-bold text-[#0C0C0C] flex items-center gap-2">
                                        <MessageSquare size={20} className="text-[#D90E17]" aria-hidden="true" />
                                        Send Us a Direct Message
                                    </h2>
                                    <p className="text-xs text-[#444444] mt-1">
                                        Fill out the form below and an appropriate team manager will reach out.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="fullName" className="text-xs font-semibold text-[#0C0C0C] block">
                                            Full Name <span className="text-[#D90E17]">*</span>
                                        </label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            required
                                            type="text"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="e.g. John Doe"
                                            className="w-full px-3.5 py-2.5 rounded-md bg-[#FEFEFE] border border-[#CCCCCC] text-[#0C0C0C] focus:border-[#D90E17] focus:outline-none text-sm transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-semibold text-[#0C0C0C] block">
                                            Email Address <span className="text-[#D90E17]">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full px-3.5 py-2.5 rounded-md bg-[#FEFEFE] border border-[#CCCCCC] text-[#0C0C0C] focus:border-[#D90E17] focus:outline-none text-sm transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="phone" className="text-xs font-semibold text-[#0C0C0C] block">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full px-3.5 py-2.5 rounded-md bg-[#FEFEFE] border border-[#CCCCCC] text-[#0C0C0C] focus:border-[#D90E17] focus:outline-none text-sm transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="subject" className="text-xs font-semibold text-[#0C0C0C] block">
                                            Inquiry Category <span className="text-[#D90E17]">*</span>
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-md bg-[#FEFEFE] border border-[#CCCCCC] text-[#0C0C0C] focus:border-[#D90E17] focus:outline-none text-sm transition-colors"
                                        >
                                            {INQUIRY_TYPES.map((type, idx) => (
                                                <option key={idx} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-semibold text-[#0C0C0C] block">
                                        Message <span className="text-[#D90E17]">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Provide detailed requirements or questions regarding GaadiGuru..."
                                        className="w-full px-3.5 py-2.5 rounded-md bg-[#FEFEFE] border border-[#CCCCCC] text-[#0C0C0C] focus:border-[#D90E17] focus:outline-none text-sm transition-colors"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-md bg-[#FFD700] hover:bg-[#D90E17] text-[#0C0C0C] hover:text-[#FEFEFE] font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0C0C0C]"
                                >
                                    <span>Submit Inquiry</span>
                                    <Send size={16} aria-hidden="true" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}