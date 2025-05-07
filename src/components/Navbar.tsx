'use client';

import Link from 'next/link';
import { useState } from 'react';

// Constants
const NAV_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

// SVG Components
const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="5" height="20" fill="white" />
    <rect x="12" y="6" width="5" height="20" fill="white" />
    <rect x="21" y="6" width="5" height="20" fill="white" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

// Main Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl mx-auto rounded-2xl z-50 backdrop-blur-xl bg-white/5 border border-white/10 shadow-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Link */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10 text-white/90"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <HamburgerIcon />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </nav>
  );
};

// Reusable Nav Link Component
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-white/90 hover:text-white transition-colors font-medium text-sm tracking-wide relative group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
  </Link>
);

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden pb-4 bg-black/30 backdrop-blur-xl border-t border-white/10 animate-fade-in">
      <div className="flex flex-col space-y-3 px-4 pt-4">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-white/90 hover:text-white transition-colors font-medium text-base py-2 px-4 rounded-lg hover:bg-white/5"
            onClick={onClose}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;