"use client";
import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="navbar fixed top-0 w-full z-50 text-white">
      <div className="flex justify-between items-center px-8 py-6">
        {/* Left side (Brand Name) */}
        <div className="nav-left">
          <h1 className="text-2xl font-bold uppercase">NexSys</h1>
        </div>

        {/* Desktop Navigation Links (hidden on mobile) */}
        {!isMobile && (
          <nav className="nav-right hidden md:flex gap-8">
            <Link href="#about" className="nav-link hover:text-blue-400">
              About
            </Link>
            <Link href="#projects" className="nav-link hover:text-blue-400">
              Projects
            </Link>
            <Link href="#contact" className="nav-link hover:text-blue-400">
              Contact
            </Link>
          </nav>
        )}

        {/* Hamburger Menu (shown on mobile) */}
        {isMobile && (
          <div className="hamburger-menu">
            <div
              className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            {isMenuOpen && (
              <ul className="menu-links absolute top-16 right-0 bg-black/80 text-white shadow-md p-4 rounded-md">
                <li className="mb-2">
                  <Link href="#about" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#projects" onClick={toggleMenu}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
