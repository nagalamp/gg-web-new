import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(): React.ReactNode {
    return (
        <footer className="bg-[#0C0C0C] text-[#FEFEFE] border-t border-[#444444]/40 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="space-y-4">
                    <Link href="/" className="inline-block">
                        <Image src="/logo.png" alt="GaadiGuru" width={40} height={40} className="object-contain" />
                    </Link>
                    <p className="text-xs text-[#B6B6B6] leading-relaxed">
                        Unified mobility engine enabling seamless intercity commutes, rentals, and rides.
                    </p>
                </div>

                <div>
                    <h4 className="font-heading font-semibold text-[#FFD700] text-sm mb-3">Navigation</h4>
                    <ul className="space-y-2 text-xs text-[#B6B6B6]">
                        <li><Link href="/" className="hover:text-[#FEFEFE]">Home</Link></li>
                        <li><Link href="/services" className="hover:text-[#FEFEFE]">Services</Link></li>
                        <li><Link href="/about" className="hover:text-[#FEFEFE]">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-[#FEFEFE]">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-semibold text-[#FFD700] text-sm mb-3">Legal</h4>
                    <ul className="space-y-2 text-xs text-[#B6B6B6]">
                        <li><Link href="#" className="hover:text-[#FEFEFE]">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-[#FEFEFE]">Terms of Service</Link></li>
                        <li><Link href="#" className="hover:text-[#FEFEFE]">Safety Standards</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-semibold text-[#FFD700] text-sm mb-3">Contact</h4>
                    <p className="text-xs text-[#B6B6B6]">Bengaluru, Karnataka, India</p>
                    <p className="text-xs text-[#B6B6B6] mt-1">support@gaadiguru.com</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 border-t border-[#444444]/40 text-center text-xs text-[#B6B6B6]">
                © {new Date().getFullYear()} GaadiGuru. All rights reserved.
            </div>
        </footer>
    );
}