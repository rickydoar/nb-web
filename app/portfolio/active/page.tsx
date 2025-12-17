import PropertyCard from '@/components/PropertyCard';
import { activeListings } from '@/lib/data/properties';

export default function ActiveListingsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
            Active Listings
          </h1>
          <p className="text-gray-600 text-lg">
            Currently available properties for sale
          </p>
        </div>

        {activeListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeListings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg mb-4">
              No active listings at this time.
            </p>
            <p className="text-gray-500">
              Check back soon or contact us for upcoming properties.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
