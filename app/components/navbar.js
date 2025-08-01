"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { motion, animatepresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/30 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/Nexsys.PNG"
                alt="NexSys Logo"
                width={32}
                height={32}
                className="hidden md:block"
              />
              <span className="text-2xl font-bold text-white transition-all duration-200 group-hover:text-blue-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300 after:bg-blue-400">
                NexSys
              </span>
            </Link>
          </div>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-gray-100 transition-all duration-200 hover:text-blue-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-blue-400"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-100 transition-all duration-200 hover:text-blue-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-blue-400"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-100 transition-all duration-200 hover:text-blue-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-blue-400"
            >
              Contact
            </Link>
          </nav>

          {/* mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-300 transition-transform duration-300 rotate-180"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-300 transition-transform duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile hamburger menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[rgb(4,3,22)]/95 backdrop-blur-md shadow-2xl border-t border-gray-700/50">
            <Link
              href="#about"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-100 hover:text-blue-300 hover:bg-white/10 transition-all duration-200 transform hover:translate-x-1"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-100 hover:text-blue-300 hover:bg-white/10 transition-all duration-200 transform hover:translate-x-1"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-100 hover:text-blue-300 hover:bg-white/10 transition-all duration-200 transform hover:translate-x-1"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
