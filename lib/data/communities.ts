export interface Community {
  slug: string;
  name: string;
  description: string;
  image?: string;
}

export const communities: Community[] = [
  {
    slug: 'mill-valley',
    name: 'Mill Valley',
    description: 'A charming town nestled at the base of Mount Tamalpais, known for its vibrant downtown, excellent schools, and natural beauty.',
  },
  {
    slug: 'tiburon',
    name: 'Tiburon',
    description: 'An affluent waterfront community with stunning views of San Francisco Bay and the city skyline.',
  },
  {
    slug: 'sausalito',
    name: 'Sausalito',
    description: 'A picturesque waterfront town with Mediterranean-style architecture and vibrant art scene.',
  },
  {
    slug: 'larkspur',
    name: 'Larkspur',
    description: 'A family-friendly community with excellent schools, parks, and easy access to San Francisco.',
  },
  {
    slug: 'corte-madera',
    name: 'Corte Madera',
    description: 'A small, upscale town known for its shopping, dining, and proximity to the bay.',
  },
  {
    slug: 'san-rafael',
    name: 'San Rafael',
    description: 'The county seat of Marin, offering a mix of historic charm and modern amenities.',
  },
  {
    slug: 'novato',
    name: 'Novato',
    description: 'The largest city in Marin County, offering diverse neighborhoods and excellent value.',
  },
  {
    slug: 'ross',
    name: 'Ross',
    description: 'An exclusive, small community known for its large estates and prestigious schools.',
  },
  {
    slug: 'kentfield',
    name: 'Kentfield',
    description: 'A quiet residential area with excellent schools and beautiful homes.',
  },
  {
    slug: 'fairfax',
    name: 'Fairfax',
    description: 'A small, eclectic town with a strong sense of community and natural beauty.',
  },
  {
    slug: 'san-anselmo',
    name: 'San Anselmo',
    description: 'A charming town with a historic downtown, great schools, and family-friendly atmosphere.',
  },
  {
    slug: 'belvedere',
    name: 'Belvedere',
    description: 'An exclusive island community with stunning waterfront properties and luxury homes.',
  },
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}
