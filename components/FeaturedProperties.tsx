'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/lib/data/properties';
import PropertyCard from './PropertyCard';

export default function FeaturedProperties() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our portfolio of exceptional homes across Marin County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block text-gray-900 font-medium hover:underline"
          >
            View all properties →
          </Link>
        </div>
      </div>
    </section>
  );
}
