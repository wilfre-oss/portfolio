'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold">
              William Fredlund
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="px-3 py-2 text-sm font-medium hover:text-gray-500 dark:hover:text-gray-400">
              Home
            </Link>
            <Link href="#about" className="px-3 py-2 text-sm font-medium hover:text-gray-500 dark:hover:text-gray-400">
              About
            </Link>
            <Link href="#projects" className="px-3 py-2 text-sm font-medium hover:text-gray-500 dark:hover:text-gray-400">
              Projects
            </Link>
            <Link href="#education" className="px-3 py-2 text-sm font-medium hover:text-gray-500 dark:hover:text-gray-400">
              Education
            </Link>
            <Link href="#skills" className="px-3 py-2 text-sm font-medium hover:text-gray-500 dark:hover:text-gray-400">
              Skills
            </Link>
            <Link href="#contact" className="px-3 py-2 text-sm font-medium hover:text-gray-500 dark:hover:text-gray-400">
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              Home
            </Link>
            <Link href="#about" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              About
            </Link>
            <Link href="#projects" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              Projects
            </Link>
            <Link href="#education" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              Education
            </Link>
            <Link href="#skills" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              Skills
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 