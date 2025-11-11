import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-section bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-6 grid gap-6 lg:grid-cols-3">
                <div>
                    <h3 className="text-white text-xl font-bold">ZestyBite</h3>
                    <p className="text-gray-400">Delivering happiness, one meal at a time.</p>
                </div>
                <div>
                    <h4 className="text-white font-semibold">Quick Links</h4>
                    <ul className="mt-2 text-gray-400">
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold">Contact Info</h4>
                    <ul className="mt-2 text-gray-400">
                        <li>+91 234 567 890</li>
                        <li>info@zestybite.com</li>
                        <li>Mumbai, India</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-6 text-center text-gray-500">&copy; 2025 ZestyBite. All rights reserved.</div>
        </footer>
    );
}
