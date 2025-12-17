import Link from 'next/link';
import { Community } from '@/lib/data/communities';

interface CommunityCardProps {
  community: Community;
}

export default function CommunityCard({ community }: CommunityCardProps) {
  return (
    <Link
      href={`/communities/${community.slug}`}
      className="group block p-8 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 rounded-lg"
    >
      <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
        {community.name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {community.description}
      </p>
      <span className="inline-block mt-4 text-sm font-medium text-gray-900 group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
