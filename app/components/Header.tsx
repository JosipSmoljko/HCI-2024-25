"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white">
   
      <div className="bg-blue-900 text-3xl font-bold py-2 text-center">
        Pet Store
      </div>

    
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-6">
          <Link
            className="rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/shop"
          >
            SHOP
          </Link>
          <Link
            className="rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/dogs"
          >
            DOGS
          </Link>
          <Link
            className="rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/cats"
          >
            CATS
          </Link>
          <Link
            className="rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/fishes"
          >
            FISHES
          </Link>
          <Link
            className="rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/reptiles"
          >
            REPTILES
          </Link>
          <Link
            className="rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/birds"
          >
            BIRDS
          </Link>
        </nav>

        <div className="text-orange-500 hidden md:block">
          Your Cart <span className="font-bold">0.00€</span>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-blue-900 text-white space-y-2 py-4 px-6">
          <Link
            className="block rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="block rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/shop"
          >
            SHOP
          </Link>
          <Link
            className="block rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/dogs"
          >
            DOGS
          </Link>
          <Link
            className="block rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/cats"
          >
            CATS
          </Link>
          <Link
            className="block rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/fishes"
          >
            FISHES
          </Link>
          <Link
            className="block rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/reptiles"
          >
            REPTILES
          </Link>
          <Link
            className="block rounded-xl px-5 py-3 hover:bg-orange-100 hover:text-blue-700"
            href="/birds"
          >
            BIRDS
          </Link>
          <div className="text-orange-500 mt-4">
            Your Cart <span className="font-bold">0.00€</span>
          </div>
        </nav>
      )}
    </header>
  );
}
