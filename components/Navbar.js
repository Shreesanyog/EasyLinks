"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to handle hamburger menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state for the hamburger menu
  };

  return (
    <nav className="h-16 bg-white flex justify-between px-3 items-center text-black">
      {/* Logo */}
      <div className="logo font-bold text-4xl">
        <Link href="/">EasyLinks</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center gap-2 md:gap-4 items-center">
        <Link href="/"><li className="hover:underline">Home</li></Link>
        
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-slate-700 text-zinc-50 rounded-lg shadow-lg p-3 py-2 font-bold hover:bg-slate-900">URL Shortener</button>
          </Link>
        </li>
      </ul>

      {/* Mobile Navigation (Hamburger Dropdown) */}
      <ul className={`md:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link href="/"><li className="hover:underline">Home</li></Link>
        <Link href="/contact"><li className="hover:underline">Contact Us</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-slate-700 text-zinc-50 rounded-lg shadow-lg p-3 py-2 font-bold hover:bg-slate-900">URL Shortener</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
