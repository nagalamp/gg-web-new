'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Newspaper,
    Calendar,
    Clock,
    Search,
    ArrowRight,
    Bell,
    Layers,
    Sparkles,
    Inbox
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

interface NewsArticle {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: 'Platform Update' | 'Industry News' | 'Feature Spotlight' | 'Press Release';
    publishedAt: string;
    readTime: string;
    isFeatured?: boolean;
}

// Set to empty to display the empty state section
const NEWS_ARTICLES: NewsArticle[] = [];

const CATEGORIES = ['All', 'Platform Update', 'Feature Spotlight', 'Industry News', 'Press Release'] as const;

export default function NewsPageClient(): React.ReactNode {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [subscribed, setSubscribed] = useState<boolean>(false);
    const [emailInput, setEmailInput] = useState<string>('');

    const featuredArticle = NEWS_ARTICLES.find((article) => article.isFeatured);

    const filteredArticles = NEWS_ARTICLES.filter((article) => {
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
        const matchesSearch =
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailInput.trim()) {
            setSubscribed(true);
            setEmailInput('');
        }
    };

    return (
        <div className="w-full bg-[#F5F5F5] text-[#0C0C0C] font-lexend selection:bg-[#FFD700] selection:text-[#0C0C0C] min-h-screen">

            {/* HERO SECTION */}
            <section className="relative w-full bg-[#FEFEFE] border-b border-[#CCCCCC] pt-14 pb-16 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(${COLORS.textPrimary} 1px, transparent 1px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-[#F5F5F5] border border-[#CCCCCC] px-3 py-1.5 rounded-md mb-6">
                            <Newspaper size={14} className="text-[#D90E17]" />
                            <span className="text-xs font-semibold text-[#444444] uppercase tracking-wider">
                                Official Press & Insights
                            </span>
                        </div>

                        <h1 className="font-outfit text-4xl sm:text-6xl font-extrabold text-[#0C0C0C] tracking-tight leading-[1.1] mb-6">
                            GaadiGuru <span style={{ color: COLORS.primaryDark }}>Newsroom</span>
                        </h1>

                        <p className="text-[#444444] text-base sm:text-lg leading-relaxed font-normal">
                            Stay updated with product rollouts, architectural deep-dives, industry developments, and official updates directly from the GaadiGuru engineering and product teams.
                        </p>
                    </div>
                </div>
            </section>

            {/* MAIN NEWS CONTENT AREA */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* CONTROLS BAR: SEARCH AND FILTER PITCH */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#CCCCCC]">

                    {/* Categories Tab Row */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-colors border ${selectedCategory === cat
                                    ? 'bg-[#0C0C0C] text-[#FFD700] border-[#0C0C0C]'
                                    : 'bg-[#FEFEFE] text-[#444444] border-[#CCCCCC] hover:border-[#B6B6B6]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Box */}
                    <div className="relative min-w-[260px]">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B6B6B6]" />
                        <input
                            type="text"
                            placeholder="Search updates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#FEFEFE] border border-[#CCCCCC] text-[#0C0C0C] text-xs rounded-md pl-9 pr-4 py-2.5 focus:outline-none focus:border-[#0C0C0C] transition-colors placeholder:text-[#B6B6B6]"
                        />
                    </div>
                </div>

                {/* FEATURED POST BANNER (If available) */}
                {featuredArticle && searchQuery === '' && selectedCategory === 'All' && (
                    <div className="mb-14">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles size={16} className="text-[#D90E17]" />
                            <span className="text-xs font-bold text-[#D90E17] uppercase tracking-wider">
                                Featured Highlight
                            </span>
                        </div>

                        <div className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-6 sm:p-10 relative overflow-hidden group hover:border-[#B6B6B6] transition-all duration-200">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD700]" />

                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                <div className="space-y-4 max-w-3xl">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="bg-[#F5F5F5] text-[#D90E17] border border-[#CCCCCC] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                            {featuredArticle.category}
                                        </span>
                                        <span className="text-xs text-[#B6B6B6] flex items-center gap-1 font-medium">
                                            <Calendar size={12} />
                                            {featuredArticle.publishedAt}
                                        </span>
                                        <span className="text-xs text-[#B6B6B6] flex items-center gap-1 font-medium">
                                            <Clock size={12} />
                                            {featuredArticle.readTime}
                                        </span>
                                    </div>

                                    <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0C0C0C] tracking-tight group-hover:text-[#D90E17] transition-colors">
                                        {featuredArticle.title}
                                    </h2>

                                    <p className="text-xs sm:text-sm text-[#444444] leading-relaxed font-normal">
                                        {featuredArticle.excerpt}
                                    </p>
                                </div>

                                <div className="shrink-0">
                                    <Link
                                        href={`/news/${featuredArticle.slug}`}
                                        className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md hover:bg-[#FFD700]/90 transition-colors shadow-xs"
                                    >
                                        <span>Read Full Article</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ARTICLES GRID / EMPTY STATE */}
                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredArticles.map((article) => (
                            <article
                                key={article.id}
                                className="group bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-6 flex flex-col justify-between hover:border-[#B6B6B6] hover:shadow-md transition-all duration-200"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <span className="bg-[#F5F5F5] text-[#0C0C0C] border border-[#E7E7E7] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                            {article.category}
                                        </span>
                                        <span className="text-[11px] text-[#B6B6B6] font-medium flex items-center gap-1">
                                            <Clock size={12} />
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <h3 className="font-outfit font-bold text-lg text-[#0C0C0C] leading-snug mb-3 group-hover:text-[#D90E17] transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-xs text-[#444444] leading-relaxed mb-6 font-normal line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-[#E7E7E7] flex items-center justify-between">
                                    <span className="text-[11px] text-[#B6B6B6] font-medium flex items-center gap-1">
                                        <Calendar size={12} />
                                        {article.publishedAt}
                                    </span>

                                    <Link
                                        href={`/news/${article.slug}`}
                                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0C0C0C] group-hover:text-[#D90E17] transition-colors"
                                    >
                                        <span>Read</span>
                                        <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="bg-[#FEFEFE] border border-[#CCCCCC] rounded-md p-10 sm:p-16 text-center my-6 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD700]" />
                        <div className="w-16 h-16 bg-[#F5F5F5] border border-[#CCCCCC] text-[#D90E17] rounded-md flex items-center justify-center mx-auto mb-5 shadow-xs">
                            <Inbox size={32} />
                        </div>

                        <span className="text-[11px] font-bold text-[#D90E17] uppercase tracking-wider block mb-2 font-outfit">
                            Newsroom Desk
                        </span>

                        <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0C0C0C] mb-3">
                            No News Articles Yet
                        </h3>

                        <p className="text-xs sm:text-sm text-[#444444] max-w-md mx-auto leading-relaxed mb-8">
                            We are preparing exciting updates regarding platform rollouts, technology architecture, and strategic mobility partnerships. Check back soon for official announcements!
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md hover:bg-[#FFD700]/90 transition-colors shadow-xs"
                            >
                                <Layers size={14} />
                                <span>Explore Services</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#F5F5F5] text-[#0C0C0C] border border-[#CCCCCC] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md hover:bg-[#E7E7E7] transition-colors"
                            >
                                <span>Contact Team</span>
                            </Link>
                        </div>
                    </div>
                )}
            </section>

            {/* NEWSLETTER SUBSCRIBE FOOTER */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-[#0C0C0C] border border-[#CCCCCC] rounded-md p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
                    <div className="space-y-3 max-w-xl relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                            <Bell size={13} className="text-[#FFD700]" />
                            <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider font-outfit">
                                Stay In The Loop
                            </span>
                        </div>
                        <h3 className="font-outfit text-2xl sm:text-3xl font-bold tracking-tight text-[#FEFEFE]">
                            Subscribe to Press Releases
                        </h3>
                        <p className="text-xs sm:text-sm text-[#B6B6B6] leading-relaxed">
                            Get official announcements, technology updates, and roadmap breakthroughs delivered directly to your inbox.
                        </p>
                    </div>

                    {subscribed ? (
                        <div className="bg-[#FEFEFE] text-[#0C0C0C] px-6 py-4 rounded-md border border-[#FFD700] flex items-center gap-3 relative z-10">
                            <Sparkles size={18} className="text-[#D90E17]" />
                            <span className="text-xs font-semibold">
                                Thank you for subscribing to GaadiGuru updates!
                            </span>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubscribe}
                            className="w-full md:w-auto flex flex-col sm:flex-row gap-2 relative z-10"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                className="bg-[#FEFEFE] text-[#0C0C0C] text-xs px-4 py-3 rounded-md focus:outline-none min-w-[260px] placeholder:text-[#B6B6B6]"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#FFD700] text-[#0C0C0C] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md hover:bg-[#FFD700]/90 transition-colors whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>
            </section>

        </div>
    );
}