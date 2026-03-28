import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gray-900/95 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">MyPortfolio</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-blue-400 transition-colors">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 text-white transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          <li>
            <a
              href="#home"
              onClick={closeMenu}
              className="block hover:text-blue-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="block hover:text-blue-400 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={closeMenu}
              className="block hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              onClick={closeMenu}
              className="block hover:text-blue-400 transition-colors"
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}