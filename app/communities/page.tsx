import CommunityCard from '@/components/CommunityCard';
import { communities } from '@/lib/data/communities';

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
            Communities
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the beautiful towns and neighborhoods of Marin County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </div>
    </div>
  );
}
