import React from 'react';
import Link from 'next/link';

import { Car, Home, Search } from 'lucide-react';

export default function NotFound(): React.ReactNode {
    return (
        <div className="min-h-screen flex flex-col bg-[#F5F5F5]">


            <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl w-full text-center space-y-8 bg-[#FEFEFE] border border-[#CCCCCC] p-8 sm:p-12 rounded-md shadow-sm">

                    {/* Visual Indicator */}
                    <div className="relative inline-flex items-center justify-center">
                        <span className="font-outfit font-extrabold text-8xl sm:text-9xl text-[#B6B6B6] opacity-30 select-none">
                            404
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-[#FFD700] border-2 border-[#0C0C0C] rounded-md flex items-center justify-center shadow-md">
                                <Car className="w-8 h-8 text-[#0C0C0C]" />
                            </div>
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="space-y-3">
                        <h1 className="font-outfit font-bold text-3xl sm:text-4xl text-[#0C0C0C]">
                            Looks Like You've Gone <span className="text-[#D90E17]">Off Route</span>
                        </h1>
                        <p className="font-lexend text-base text-[#444444] max-w-md mx-auto">
                            The page or vehicle specs you are looking for don't exist or have been moved to another location.
                        </p>
                    </div>

                    {/* Navigation Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0C0C0C] font-lexend font-semibold px-6 py-3 rounded-md hover:bg-[#E7040E] hover:text-[#FEFEFE] transition-colors duration-200"
                        >
                            <Home className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <Link
                            href="/search"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] border border-[#CCCCCC] text-[#0C0C0C] font-lexend font-semibold px-6 py-3 rounded-md hover:border-[#B6B6B6] hover:bg-[#F5F5F5] transition-colors duration-200"
                        >
                            <Search className="w-4 h-4" />
                            Search Vehicles
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}