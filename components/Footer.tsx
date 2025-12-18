'use client';

import Link from 'next/link';
import { agentInfo } from '@/lib/data/agent';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              {agentInfo.name.toUpperCase()} | {agentInfo.company.toUpperCase()}
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-1">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-gray-700">
                    EMAIL
                  </span>
                </div>
                <a
                  href={`mailto:${agentInfo.email}`}
                  className="text-sm text-gray-900 underline hover:text-gray-700"
                >
                  {agentInfo.email}
                </a>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-gray-700">
                    PHONE NUMBER
                  </span>
                </div>
                <a
                  href={`tel:${agentInfo.phone}`}
                  className="text-sm text-gray-900 underline hover:text-gray-700"
                >
                  {agentInfo.phone}
                </a>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-gray-700">
                    ADDRESS
                  </span>
                </div>
                <p className="text-sm text-gray-900">{agentInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              NAVIGATION
            </h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Portfolio
              </Link>
              <Link
                href="/communities"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Communities
              </Link>
              <Link
                href="/about"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                About Me
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-gray-700 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter Column */}
          <div>
            <div className="flex items-center mb-1">
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-semibold text-gray-700">
                SIGN UP FOR EXCLUSIVE NEWS
              </span>
            </div>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-gray-600 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 text-sm"
                  required
                />
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="consent" className="text-xs text-gray-600">
                  By providing {agentInfo.name} your contact information, you
                  acknowledge and agree to our{' '}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>{' '}
                  and consent to receiving marketing communications, including
                  through automated calls, texts, and emails, some of which may
                  use artificial or prerecorded voices. This consent isn&apos;t
                  necessary for purchasing any products or services and you may
                  opt out at any time. To opt out from texts, you can reply,
                  &apos;stop&apos; at any time. To opt out from emails, you can click on
                  the unsubscribe link in the emails. Message and data rates may
                  apply.
                </label>
              </div>
              <button
                type="submit"
                className="px-6 py-2 border border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p>
            {agentInfo.name} © {new Date().getFullYear()} | DRE #{' '}
            {agentInfo.dreNumber} |{' '}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
