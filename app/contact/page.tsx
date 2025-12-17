'use client';

import { useState } from 'react';
import { agentInfo } from '@/lib/data/agent';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg">
            Let&apos;s discuss your real estate needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${agentInfo.email}`}
                  className="text-gray-900 hover:text-gray-700 underline"
                >
                  {agentInfo.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </h3>
                <a
                  href={`tel:${agentInfo.phone}`}
                  className="text-gray-900 hover:text-gray-700 underline"
                >
                  {agentInfo.phone}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Office Address
                </h3>
                <p className="text-gray-900">{agentInfo.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  License
                </h3>
                <p className="text-gray-900">DRE #{agentInfo.dreNumber}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="p-8 bg-gray-50 rounded-lg">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-600 mb-4">
                  Your message has been sent. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      message: '',
                      interest: '',
                      consent: false,
                    });
                  }}
                  className="text-gray-900 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="buying">Buying</option>
                    <option value="selling">Selling</option>
                    <option value="both">Buying & Selling</option>
                    <option value="investing">Investing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    By providing {agentInfo.name} your contact information, you
                    acknowledge and agree to our{' '}
                    <a href="/privacy" className="underline">
                      Privacy Policy
                    </a>{' '}
                    and consent to receiving marketing communications, including
                    through automated calls, texts, and emails, some of which may
                    use artificial or prerecorded voices. This consent isn&apos;t
                    necessary for purchasing any products or services and you may
                    opt out at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
