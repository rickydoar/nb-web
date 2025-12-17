import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/data/properties';

export default function PortfolioPage() {
  const activeCount = properties.filter((p) => p.status === 'active').length;
  const soldCount = properties.filter((p) => p.status === 'sold').length;

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
            Portfolio
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our collection of properties across Marin County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link
            href="/portfolio/active"
            className="group p-8 bg-white border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 rounded-lg"
          >
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700">
              Active Listings
            </h2>
            <p className="text-gray-600 mb-4">
              Currently available properties for sale
            </p>
            <p className="text-2xl font-semibold text-gray-900 mb-2">
              {activeCount}
            </p>
            <p className="text-sm text-gray-500">Properties</p>
            <span className="inline-block mt-4 text-sm font-medium text-gray-900 group-hover:underline">
              View all →
            </span>
          </Link>

          <Link
            href="/portfolio/past-transactions"
            className="group p-8 bg-white border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 rounded-lg"
          >
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700">
              Past Transactions
            </h2>
            <p className="text-gray-600 mb-4">
              Successfully closed sales (Buyer & Seller representation)
            </p>
            <p className="text-2xl font-semibold text-gray-900 mb-2">
              {soldCount}
            </p>
            <p className="text-sm text-gray-500">Properties</p>
            <span className="inline-block mt-4 text-sm font-medium text-gray-900 group-hover:underline">
              View all →
            </span>
          </Link>
        </div>

        {/* Recent Properties Preview */}
        <div>
          <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-8">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
