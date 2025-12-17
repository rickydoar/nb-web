import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/lib/data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={`/portfolio/${property.id}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.address}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {property.status === 'sold' && (
          <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 text-xs font-medium">
            Sold
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
          {property.address}
        </h3>
        {property.price && (
          <p className="text-lg font-medium text-gray-700 mb-2">
            {property.price}
          </p>
        )}
        {property.transactionType && (
          <p className="text-sm text-gray-500">
            Represented as{' '}
            <span className="font-medium">
              {property.transactionType === 'buyer' ? 'Buyer' : 'Seller'}
            </span>
          </p>
        )}
        {(property.bedrooms || property.bathrooms || property.sqft) && (
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            {property.bedrooms && (
              <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            )}
            {property.bathrooms && (
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            )}
            {property.sqft && <span>{property.sqft.toLocaleString()} sqft</span>}
          </div>
        )}
      </div>
    </Link>
  );
}
