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
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/80 backdrop-blur-lg border-b border-amber-400/50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
                    <div className="flex items-center space-x-2 group cursor-pointer">
                        <div className="text-amber-400 group-hover:scale-110 transition-transform duration-200">
                            <Utensils strokeWidth={3} size={28} />
                        </div>
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                            <span className="text-white">Zesty</span>
                            <span className="text-amber-400">Bite</span>
                        </span>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                        <Link to="/" className="text-gray-300 hover:text-amber-400 lg:text-lg font-medium transition-colors duration-200 relative group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-200"></span>
                        </Link>
                        <a href="#pricing" className="text-gray-300 hover:text-amber-400 lg:text-lg font-medium transition-colors duration-200 relative group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-200"></span>
                        </a>
                        <Link to="/about" className="text-gray-300 hover:text-amber-400 lg:text-lg font-medium transition-colors duration-200 relative group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-200"></span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <button className="text-gray-300 hover:text-amber-400 transition-colors duration-200 p-2 rounded-full hover:bg-amber-400/10">
                            <Search size={20} />
                        </button>
                        {user ? (
                            <button onClick={handleLogout} className="text-amber-400 hover:text-amber-300 font-medium transition-colors duration-200 px-4 py-2 rounded-full hover:bg-amber-400/10">
                                {user.name}
                            </button>
                        ) : (
                            <Link to="/login" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 p-2 rounded-full hover:bg-amber-400/10">
                                <User size={20} />
                            </Link>
                        )}
                    </div>
                    <button className="md:hidden items-center p-2 text-gray-300 hover:text-white hover:bg-amber-400/10 rounded-full transition-colors duration-200 cursor-pointer" onClick={() => setMobileMenuOpen((prev) => !prev)}>
                        {mobileMenuIsOpen ? (<X className="w-6 h-6" />) : (<Menu className="w-6 h-6" />)}
                    </button>
                </div>
            </div>
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-amber-400/50 transition-all duration-300 p-4">
                    <div className="px-2 py-4 space-y-4">
                        <Link to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-amber-400 text-lg font-medium block py-2 px-4 rounded-lg hover:bg-amber-400/10 transition-colors duration-200">
                            Home
                        </Link>
                        <a href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-amber-400 text-lg font-medium block py-2 px-4 rounded-lg hover:bg-amber-400/10 transition-colors duration-200">
                            Contact
                        </a>
                        <Link to="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-amber-400 text-lg font-medium block py-2 px-4 rounded-lg hover:bg-amber-400/10 transition-colors duration-200">
                            About
                        </Link>
                        <div className="flex gap-4 items-center pt-4 border-t border-gray-700">
                            <button className="text-gray-300 hover:text-amber-400 p-2 rounded-full hover:bg-amber-400/10 transition-colors duration-200">
                                <Search size={20} />
                            </button>
                            {user ? (
                                <button onClick={() => { setMobileMenuOpen(false); handleLogout(); }} className="text-amber-400 hover:text-amber-300 font-medium px-4 py-2 rounded-full hover:bg-amber-400/10 transition-colors duration-200">
                                    {user.name}
                                </button>
                            ) : (
                                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-amber-400 p-2 rounded-full hover:bg-amber-400/10 transition-colors duration-200">
                                    <User size={20} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
