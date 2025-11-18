import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-linear-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-lg text-gray-300 py-12 border-t border-gray-700/50">
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="space-y-4">
                        <h3 className="text-amber-400 text-[clamp(1.25rem,3vw,1.5rem)] font-bold">ZestyBite</h3>
                        <p className="text-gray-400 text-[clamp(0.875rem,2vw,1rem)] leading-relaxed">Delivering happiness, one meal at a time.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold text-[clamp(1rem,2vw,1.125rem)]">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/" className="hover:text-amber-400 transition-colors duration-200 text-[clamp(0.875rem,1.5vw,1rem)]">Home</Link></li>
                            <li><Link to="#" className="hover:text-amber-400 transition-colors duration-200 text-[clamp(0.875rem,1.5vw,1rem)]">Menu</Link></li>
                            <li><Link to="/about" className="hover:text-amber-400 transition-colors duration-200 text-[clamp(0.875rem,1.5vw,1rem)]">About</Link></li>
                            <li><Link to="#" className="hover:text-amber-400 transition-colors duration-200 text-[clamp(0.875rem,1.5vw,1rem)]">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold text-[clamp(1rem,2vw,1.125rem)]">Contact Info</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-amber-400" />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)]">+91 234 567 890</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-amber-400" />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)]">info@zestybite.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin size={18} className="text-amber-400" />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)]">Mumbai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
                    <p className="text-gray-500 text-[clamp(0.75rem,1.5vw,0.875rem)]">&copy; 2025 ZestyBite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
