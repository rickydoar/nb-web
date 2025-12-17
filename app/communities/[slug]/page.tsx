import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCommunityBySlug, communities } from '@/lib/data/communities';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/data/properties';

export async function generateStaticParams() {
  return communities.map((community) => ({
    slug: community.slug,
  }));
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    notFound();
  }

  // Filter properties that might be in this community (for demo, we'll show all)
  const communityProperties = properties.slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/communities"
            className="text-gray-600 hover:text-gray-900 mb-4 inline-block"
          >
            ← Back to Communities
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
            {community.name}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            {community.description}
          </p>
        </div>

        {/* Community Highlights */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-8">
            About {community.name}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              {community.name} is one of Marin County&apos;s most desirable
              communities, offering residents a unique blend of natural beauty,
              excellent amenities, and a strong sense of community. Whether
              you&apos;re looking for a family home, a luxury estate, or an
              investment property, {community.name} has something to offer every
              buyer.
            </p>
          </div>
        </div>

        {/* Properties in this Community */}
        {communityProperties.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-8">
              Properties in {community.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
          <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
            Interested in {community.name}?
          </h2>
          <p className="text-gray-600 mb-6">
            Let&apos;s discuss your real estate goals in this beautiful community.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
