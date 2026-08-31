'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    Menu,
    X,
    Sparkles,
    Rocket,
    ChevronRight,
    Search,
    MapPin
} from 'lucide-react';

// GaadiGuru Design System Color Tokens
const COLORS = {
    primary: '#FFD700',
    primaryDark: '#D90E17',
    secondaryDark: '#E7040E',
    background: '#F5F5F5',
    surface: '#FEFEFE',
    textPrimary: '#0C0C0C',
    textMuted: '#444444',
    textLight: '#B6B6B6',
    borderDefault: '#CCCCCC',
    borderMuted: '#E7E7E7',
    borderStrong: '#B6B6B6',
} as const;

interface NavLink {
    label: string;
    href: string;
    badge?: string;
}

interface SocialLink {
    label: string;
    href: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
}

const LinkedinIcon = ({ size = 18, className = '' }: { size?: number; className?: string }): React.ReactNode => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const InstagramIcon = ({ size = 18, className = '' }: { size?: number; className?: string }): React.ReactNode => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const FacebookIcon = ({ size = 18, className = '' }: { size?: number; className?: string }): React.ReactNode => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

// Navigation links list (Removed 'DO' route)
const NAV_LINKS: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', badge: 'New' },
    { label: 'News', href: '/news' },
    { label: 'Work With Us', href: '/careers' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

// Updated social links with exact URLs
const SOCIAL_LINKS: SocialLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gaadigurumobility', icon: LinkedinIcon },
    { label: 'Instagram', href: 'https://www.instagram.com/gaadiguru.rides/', icon: InstagramIcon },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100009114045419', icon: FacebookIcon },
];

/**
 * Launch-Ready Creative Header Component - GaadiGuru Mobility Platform
 * Features updated social profile links, Launch Ticker Banner, Location Pill,
 * Quick Search/Filter, and strict `rounded-md` corner radius compliance across all elements.
 */
export default function Header(): React.ReactNode {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string): boolean => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname ? pathname.startsWith(href) : false;
    };

    return (
        <div className="sticky top-0 z-50 w-full font-lexend">

            {/* Launch Ticker / Teaser Bar */}
            <div className="bg-[#0C0C0C] text-[#FEFEFE] text-xs py-2 px-4 border-b border-[#D90E17]/30">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2 truncate">
                        <span className="flex items-center justify-center bg-[#D90E17] text-[#FFFFFF] font-bold px-2 py-0.5 rounded-md text-[10px] tracking-wider uppercase animate-pulse">
                            Launch VIP Access
                        </span>
                        <span className="hidden sm:inline-block text-[#E7E7E7] font-medium truncate">
                            GaadiGuru Web & Mobile Apps are launching soon across 50+ Cities!
                        </span>
                        <span className="sm:hidden text-[#E7E7E7] font-medium truncate">
                            GaadiGuru App Launching Soon!
                        </span>
                    </div>

                    <div className="flex items-center space-x-4 flex-shrink-0">
                        <Link
                            href="/launch-pass"
                            className="inline-flex items-center space-x-1 text-[#FFD700] hover:text-[#FFFFFF] font-semibold transition-colors rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
                        >
                            <Sparkles size={13} className="text-[#FFD700]" />
                            <span>Claim Priority Pass</span>
                            <ChevronRight size={13} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header Container */}
            <header className={`bg-[#FFD700] border-b border-[#0C0C0C]/10 transition-all duration-300 ${isScrolled ? 'shadow-md py-0' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20 sm:h-24">

                        {/* Brand Logo & Live City Indicator */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/"
                                className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] rounded-md p-1 transition-opacity hover:opacity-90"
                                aria-label="GaadiGuru Home"
                            >
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 drop-shadow-sm">
                                    <Image
                                        src="/logo.png"
                                        alt="GaadiGuru Logo"
                                        fill
                                        sizes="80px"
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </Link>

                            {/* Location Badge */}
                            <div className="hidden xl:flex items-center space-x-1.5 bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 px-2.5 py-1.5 rounded-md text-xs font-medium text-[#0C0C0C]">
                                <MapPin size={14} className="text-[#D90E17]" />
                                <span>Bengaluru</span>
                                <span className="w-1.5 h-1.5 rounded-md bg-[#D90E17] animate-ping" />
                            </div>
                        </div>

                        {/* Desktop Navigation Menu */}
                        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-sm font-medium">
                            {NAV_LINKS.map((link) => {
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-3 py-2 rounded-md font-medium text-sm no-underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] ${active
                                            ? 'bg-[#0C0C0C] text-[#FFD700] font-semibold shadow-sm'
                                            : 'text-[#0C0C0C] hover:bg-[#0C0C0C]/10 hover:text-[#D90E17]'
                                            }`}
                                    >
                                        <span>{link.label}</span>
                                        {link.badge && !active && (
                                            <span className="absolute -top-1.5 -right-1 bg-[#D90E17] text-[#FFFFFF] text-[9px] font-bold px-1.5 py-0.2 rounded-md shadow-xs">
                                                {link.badge}
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Desktop Quick Search & CTAs */}
                        <div className="hidden lg:flex items-center space-x-4">

                            {/* Quick Spec Filter Trigger */}
                            <button
                                type="button"
                                className="p-2 text-[#0C0C0C] hover:bg-[#0C0C0C]/10 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0C0C0C]"
                                aria-label="Search Rides or Vehicles"
                            >

                            </button>

                            {/* Social Links Separator Group */}
                            <div className="flex items-center space-x-1.5 border-r border-l border-[#0C0C0C]/15 px-3">
                                {SOCIAL_LINKS.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Follow GaadiGuru on ${social.label}`}
                                            className="p-1.5 text-[#0C0C0C] hover:text-[#D90E17] hover:bg-[#0C0C0C]/10 rounded-md no-underline transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0C0C0C]"
                                        >
                                            <Icon size={17} />
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Main Launch CTA Button */}
                            <Link
                                href="/services"
                                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-[#0C0C0C] hover:bg-[#D90E17] text-[#FFFFFF] font-semibold text-sm no-underline transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#0C0C0C]"
                            >
                                <Rocket size={16} className="text-[#FFD700]" />
                                <span>Get Early Access</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <div className="lg:hidden flex items-center space-x-2">
                            <Link
                                href="/services"
                                className="p-2 bg-[#0C0C0C] text-[#FFD700] rounded-md font-semibold text-xs flex items-center space-x-1"
                            >
                                <Rocket size={14} />
                                <span>Launch</span>
                            </Link>

                            <button
                                type="button"
                                onClick={() => setIsMenuOpen((prev) => !prev)}
                                className="p-2 rounded-md text-[#0C0C0C] hover:bg-[#0C0C0C]/10 focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] transition-colors"
                                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Navigation Drawer */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-[#FFD700] border-b border-[#0C0C0C]/10 px-4 pt-3 pb-6 space-y-2 shadow-xl">

                        {/* Mobile Location Selector */}
                        <div className="flex items-center justify-between bg-[#0C0C0C]/5 p-2.5 rounded-md border border-[#0C0C0C]/10 mb-3">
                            <div className="flex items-center space-x-2 text-xs font-semibold text-[#0C0C0C]">
                                <MapPin size={16} className="text-[#D90E17]" />
                                <span>Active City: Bengaluru</span>
                            </div>
                            <span className="text-[10px] font-bold bg-[#D90E17] text-[#FFFFFF] px-2 py-0.5 rounded-md">
                                LIVE
                            </span>
                        </div>

                        {/* Navigation Links */}
                        {NAV_LINKS.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`flex items-center justify-between py-3 px-4 text-base font-medium rounded-md no-underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0C0C0C] ${active
                                        ? 'bg-[#0C0C0C] text-[#FFD700] font-semibold shadow-sm'
                                        : 'text-[#0C0C0C] hover:bg-[#0C0C0C]/10 hover:text-[#D90E17]'
                                        }`}
                                >
                                    <span className="flex items-center space-x-2">
                                        <span>{link.label}</span>
                                        {link.badge && (
                                            <span className="bg-[#D90E17] text-[#FFFFFF] text-[10px] font-bold px-2 py-0.5 rounded-md">
                                                {link.badge}
                                            </span>
                                        )}
                                    </span>
                                    {active && <span className="w-2 h-2 rounded-md bg-[#FFD700]" />}
                                </Link>
                            );
                        })}

                        {/* Mobile Social Links */}
                        <div className="pt-4 flex items-center justify-center space-x-6 border-t border-[#0C0C0C]/10 mt-3">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow GaadiGuru on ${social.label}`}
                                        className="p-2.5 text-[#0C0C0C] hover:text-[#D90E17] bg-[#0C0C0C]/10 rounded-md no-underline transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0C0C0C]"
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Mobile CTAs */}
                        <div className="pt-3 space-y-2">
                            <Link
                                href="/services"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-center space-x-2 w-full py-3 rounded-md bg-[#0C0C0C] text-[#FFFFFF] font-semibold no-underline hover:bg-[#D90E17] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0C0C0C]"
                            >
                                <Rocket size={18} className="text-[#FFD700]" />
                                <span>Get Launch VIP Access</span>
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}