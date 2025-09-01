"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SHOP", href: "/shop" },
    { name: "DOGS", href: "/dogs" },
    { name: "CATS", href: "/cats" },
    { name: "FISHES", href: "/fishes" },
    { name: "REPTILES", href: "/reptiles" },
    { name: "BIRDS", href: "/birds" },
  ];

  return (
    <header className="bg-blue-900 text-white">
      {/* Title */}
      <div className="text-3xl font-bold py-2 text-center border-b border-blue-800">
        Pet Store
      </div>

      {/* Desktop + Mobile container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-center md:space-x-10 py-4 px-6 relative">
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700 ${
                pathname === link.href ? "bg-orange-500 text-white" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden absolute right-6 top-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>

        {/* Cart */}
        <div className="absolute right-6 md:static text-orange-500 mt-2 md:mt-0">
          Your Cart <span className="font-bold">0.00€</span>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-900 text-white flex flex-col items-center space-y-2 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700 ${
                pathname === link.href ? "bg-orange-500 text-white" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
