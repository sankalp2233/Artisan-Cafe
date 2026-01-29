'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Menu', path: '/menu' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white/95 backdrop-blur-sm shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-cafe-accent to-cafe-gold rounded-full flex items-center justify-center">
                            <span className="text-white font-display font-bold text-xl">A</span>
                        </div>
                        <span className="font-display font-bold text-2xl text-cafe-brown-800">
                            Artisan Cafe
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`font-medium transition-colors duration-300 ${pathname === link.path
                                        ? 'text-cafe-accent'
                                        : 'text-cafe-brown-700 hover:text-cafe-accent'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact#reservation" className="btn-primary !py-2 !px-6">
                            Book a Table
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-cafe-brown-100 transition-colors duration-300"
                    >
                        <svg
                            className="w-6 h-6 text-cafe-brown-800"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 animate-fade-in">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-4 rounded-lg mb-1 font-medium transition-colors duration-300 ${pathname === link.path
                                        ? 'bg-cafe-accent text-white'
                                        : 'text-cafe-brown-700 hover:bg-cafe-brown-100'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact#reservation"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center btn-primary mt-4"
                        >
                            Book a Table
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
