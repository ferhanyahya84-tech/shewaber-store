"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="container flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-widest">
                    SHEWABER
                </Link>

                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                    <Link href="/shop" className="hover:text-gold transition-colors">Shop</Link>
                    <Link href="/about" className="hover:text-gold transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
                </div>

                <div className="flex space-x-6">
                    <button className="hover:text-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                    </button>
                    <Link href="/cart" className="hover:text-gold relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        <span className="absolute -top-2 -right-2 bg-gold text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
