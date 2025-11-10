import { User, Menu, Search, Utensils, X, Contact } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-600/40 backdrop:blur-sm border-b border-amber-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div className="text-amber-400">
                            <Utensils strokeWidth={3} size={25} />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Zesty</span>
                            <span className="text-amber-400">Bite</span>
                        </span>
                    </div>


                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <Link to="/" className="text-gray-300 hover:text-amber-400 lg:text-base">Home</Link>
                        <a href="#pricing" className="text-gray-300 hover:text-amber-400 lg:text-base">Contact</a>
                        <a href="#testimonials" className="text-gray-300 hover:text-amber-400 lg:text-base">About</a>
                    </div>
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#search" className="text-grey-300 hover:text-amber-400"><Search /></a>
                        <Link to="/login" className="text-grey-300 hover:text-amber-400"><User /></Link>
                    </div>
                    <button className="md:hidden items-center p-2 text-gray-300 hover:text-white cursor-pointer" onClick={() => setMobileMenuOpen((prev) => !prev)}>
                        {mobileMenuIsOpen ? (<X className="w-5 h-5 sm:w-6 sm:h-6 " />) : (<Menu className="w-5 h-5 sm:w-6 sm:h-6 " />)}
                    </button>
                </div>
            </div>
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-slate-400/9 backdrop:blur-lg border-t border-amber-400 transition-all slide-in-from-top animate-in duration-900 p-3">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <Link to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-white lg:text-base block">
                            Home
                        </Link>
                        <a href="#pricing"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-white lg:text-base block">
                            Contact
                        </a>
                        <a href="#testimonials"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-white lg:text-base block">
                            About
                        </a>
                        <div className="flex gap-4">
                            <a href="#search" className="text-grey-300 hover:text-amber-400"><Search /></a>
                            <a href="#contact" className="text-grey-300 hover:text-amber-400"><Contact /></a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

