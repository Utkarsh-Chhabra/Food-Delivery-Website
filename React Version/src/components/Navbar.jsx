import { User, Menu, Search, Utensils, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom'

function parseUser(raw) {
    if (!raw) return null;
    try {
        const parsed = JSON.parse(raw);
        if (parsed && (parsed.email || parsed.name)) return parsed;
    } catch (e) {
        console.log("Error during login", e);
        alert("Error during login", e);
    }
    return null;
}

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        try {
            const raw = localStorage.getItem('user');
            const parsed = parseUser(raw);
            setUser(parsed);
        } catch {
            setUser(null);
        }
    }, [location]);

    const handleLogout = () => {
        try {
            localStorage.removeItem('user');
        } catch {
            // pass
        }
        setUser(null);
        navigate('/');
    };

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
                        {user ? (
                            <button onClick={handleLogout} className="text-amber-400 focus:outline-none">{user.name}</button>
                        ) : (
                            <Link to="/login" className="text-grey-300 hover:text-amber-400"><User /></Link>
                        )}
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
                        <a href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-white lg:text-base block">
                            Contact
                        </a>
                        <a href="#about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-white lg:text-base block">
                            About
                        </a>
                        <div className="flex gap-4 items-center">
                            <a href="#search" className="text-grey-300 hover:text-amber-400"><Search /></a>
                            {user ? (
                                <button onClick={() => { setMobileMenuOpen(false); handleLogout(); }} className="text-amber-400">{user.name}</button>
                            ) : (
                                <a href="/login" className="text-grey-300 hover:text-amber-400"><User /></a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
