'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { agentInfo } from '@/lib/data/agent';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [communitiesOpen, setCommunitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      href: '/portfolio',
      label: 'Portfolio',
      dropdown: [
        { href: '/portfolio/active', label: 'Active Listings' },
        { href: '/portfolio/past-transactions', label: 'Past Transactions (Both Buyer + Seller)' },
      ],
    },
    {
      href: '/communities',
      label: 'Communities',
      dropdown: [
        { href: '/communities/mill-valley', label: 'Mill Valley' },
        { href: '/communities/tiburon', label: 'Tiburon' },
        { href: '/communities/sausalito', label: 'Sausalito' },
        { href: '/communities/larkspur', label: 'Larkspur' },
        { href: '/communities/corte-madera', label: 'Corte Madera' },
        { href: '/communities/san-rafael', label: 'San Rafael' },
        { href: '/communities/novato', label: 'Novato' },
        { href: '/communities/ross', label: 'Ross' },
        { href: '/communities/kentfield', label: 'Kentfield' },
        { href: '/communities/fairfax', label: 'Fairfax' },
        { href: '/communities/san-anselmo', label: 'San Anselmo' },
        { href: '/communities/belvedere', label: 'Belvedere' },
      ],
    },
    { href: '/about', label: 'About Me' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/transparent-logo.png"
              alt="Nina Belloni Logo"
              width={60}
              height={60}
              className="h-12 w-auto transition-opacity hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => {
                  if (link.dropdown) {
                    if (link.label === 'Portfolio') setPortfolioOpen(true);
                    if (link.label === 'Communities') setCommunitiesOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (link.label === 'Portfolio') setPortfolioOpen(false);
                  if (link.label === 'Communities') setCommunitiesOpen(false);
                }}
              >
                <Link
                  href={link.href}
                  className={`font-sans text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-900 hover:text-gray-700'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                      (link.label === 'Portfolio' && portfolioOpen) ||
                      (link.label === 'Communities' && communitiesOpen)
                        ? 'opacity-100 visible'
                        : ''
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-white border-t max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-50 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-6 pb-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
