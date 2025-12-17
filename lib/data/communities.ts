export interface Community {
  slug: string;
  name: string;
  description: string;
  about: string;
  image?: string;
}

export const communities: Community[] = [
  {
    slug: 'mill-valley',
    name: 'Mill Valley',
    description: 'A charming town nestled at the base of Mount Tamalpais, known for its vibrant downtown, excellent schools, and natural beauty.',
    about: 'Tucked at the base of majestic Mount Tamalpais, Mill Valley is a nature lover\'s paradise that seamlessly blends outdoor adventure with small-town sophistication. The town\'s redwood-lined streets lead to a walkable downtown filled with locally-owned boutiques, farm-to-table restaurants, and cozy cafes. Residents enjoy world-class hiking and biking trails right in their backyard, including the famous Dipsea Trail. Mill Valley\'s top-rated schools, including Tamalpais High School, make it a premier destination for families. The community hosts beloved annual events like the Mill Valley Film Festival and the Dipsea Race, fostering a tight-knit atmosphere where neighbors become lifelong friends.',
  },
  {
    slug: 'tiburon',
    name: 'Tiburon',
    description: 'An affluent waterfront community with stunning views of San Francisco Bay and the city skyline.',
    about: 'Perched on a sun-drenched peninsula jutting into San Francisco Bay, Tiburon offers some of the most breathtaking views in the Bay Area. This upscale community features stunning waterfront homes, many with private docks, and a charming downtown along Main Street where residents gather at waterfront restaurants to watch sailboats glide by. The town\'s Mediterranean microclimate means more sunshine than neighboring communities. Tiburon\'s excellent schools, including Del Mar Middle School, draw families seeking top-tier education. The Tiburon Ferry provides a scenic 25-minute commute to San Francisco, while nearby Angel Island State Park offers hiking, biking, and rich California history just a short ferry ride away.',
  },
  {
    slug: 'sausalito',
    name: 'Sausalito',
    description: 'A picturesque waterfront town with Mediterranean-style architecture and vibrant art scene.',
    about: 'Often called the "Portofino of the West," Sausalito enchants visitors and residents alike with its hillside homes cascading down to the sparkling bay. This artistic enclave has been home to painters, sculptors, and bohemian dreamers since the 1950s, and that creative spirit lives on in its many galleries and the famous houseboat community at Richardson Bay. The town\'s mild, fog-free weather and stunning views of San Francisco create an almost Mediterranean atmosphere. Bridgeway, the main waterfront street, offers eclectic dining and shopping with million-dollar views. Just across the Golden Gate Bridge from San Francisco, Sausalito combines the convenience of city access with the tranquility of a seaside village.',
  },
  {
    slug: 'larkspur',
    name: 'Larkspur',
    description: 'A family-friendly community with excellent schools, parks, and easy access to San Francisco.',
    about: 'Larkspur perfectly balances small-town charm with modern convenience, making it one of Marin\'s most sought-after family communities. The historic downtown, centered around Magnolia Avenue, features tree-lined streets with Victorian-era buildings housing boutique shops, restaurants, and the beloved Lark Theater. The Larkspur Ferry Terminal provides direct service to San Francisco\'s Ferry Building, offering one of the most scenic commutes in the Bay Area. Families are drawn to the excellent Larkspur-Corte Madera School District and abundant recreational opportunities, including Piper Park and nearby hiking trails. The annual Larkspur Art & Wine Festival and summer concerts in the park create a vibrant community atmosphere.',
  },
  {
    slug: 'corte-madera',
    name: 'Corte Madera',
    description: 'A small, upscale town known for its shopping, dining, and proximity to the bay.',
    about: 'Corte Madera offers the best of both worlds: easy access to premier shopping at The Village and Town Center while maintaining a quiet, residential character in its hillside neighborhoods. This centrally-located town provides excellent freeway access and proximity to the Larkspur Ferry, making commutes a breeze. Families appreciate the highly-rated schools, including Neil Cummins Elementary, and the abundance of parks and playgrounds. The town\'s unique geography, with homes nestled against the slopes of Mount Tamalpais on one side and extending to the bay on the other, provides diverse housing options from cozy cottages to contemporary estates. Ring Mountain Preserve offers stunning hiking with panoramic bay views.',
  },
  {
    slug: 'san-rafael',
    name: 'San Rafael',
    description: 'The county seat of Marin, offering a mix of historic charm and modern amenities.',
    about: 'As Marin County\'s largest city and county seat, San Rafael offers an urban vibrancy rarely found in the county while maintaining distinct neighborhood identities. The historic downtown features the iconic Art Deco Rafael Theater, a thriving farmers\' market, and diverse dining options reflecting the city\'s multicultural character. Neighborhoods range from the grand Victorians of the Dominican area to the hillside homes of Terra Linda and the waterfront living of the Canal district. San Rafael is home to major employers, cultural institutions like the Marin History Museum, and the county\'s civic center designed by Frank Lloyd Wright—a stunning architectural landmark. The city\'s central location provides easy access to all of Marin\'s communities.',
  },
  {
    slug: 'novato',
    name: 'Novato',
    description: 'The largest city in Marin County, offering diverse neighborhoods and excellent value.',
    about: 'Novato, Marin\'s northernmost city, offers remarkable diversity in housing, lifestyle, and landscape. From the rolling hills of horse country in Black Point to the walkable charm of downtown, Novato provides more space and value than southern Marin communities. Families appreciate the excellent schools, numerous parks, and youth sports programs. The historic downtown features locally-owned restaurants, a craft brewery scene, and regular community events. Outdoor enthusiasts enjoy Stafford Lake, Mount Burdell Open Space Preserve, and miles of hiking trails. Novato\'s agricultural heritage remains visible in its horse ranches and the beloved Marin County Fair. Indian Valley provides a college campus atmosphere, while Hamilton is a master-planned community built on the former Air Force base.',
  },
  {
    slug: 'ross',
    name: 'Ross',
    description: 'An exclusive, small community known for its large estates and prestigious schools.',
    about: 'Ross is Marin\'s most exclusive enclave, where historic estates sit on multi-acre lots shaded by towering heritage trees. With a population of just over 2,500, this tiny incorporated town has maintained its rural, residential character for over a century. The prestigious Ross School, a top-rated K-8 institution, is the centerpiece of community life. Grand homes, many dating to the early 1900s, feature architectural styles from Tudor to Mediterranean, set behind private gates on winding lanes. There\'s no commercial district—by design—preserving the tranquil, park-like atmosphere. Ross Common, the small town green, hosts the annual Fourth of July parade, one of the most charming celebrations in the county. Residents enjoy immediate access to hiking on nearby Phoenix Lake and Mount Tamalpais.',
  },
  {
    slug: 'kentfield',
    name: 'Kentfield',
    description: 'A quiet residential area with excellent schools and beautiful homes.',
    about: 'Kentfield is an unincorporated community prized for its exceptional schools, making it a magnet for families seeking the best education Marin has to offer. The Kentfield School District consistently ranks among California\'s top districts, and graduates feed into prestigious Redwood High School. Homes range from charming 1920s cottages to modern estates, many set on generous lots beneath majestic oaks and redwoods. The community\'s central location provides easy access to both Highway 101 and the natural beauty of Mount Tamalpais. College of Marin\'s Kentfield campus adds a vibrant academic presence, with its theater and art programs open to the community. Crown Road and Kent Woodlands offer hillside living with stunning views, while the flats provide walkable access to Bon Air Shopping Center.',
  },
  {
    slug: 'fairfax',
    name: 'Fairfax',
    description: 'A small, eclectic town with a strong sense of community and natural beauty.',
    about: 'Fairfax marches to the beat of its own drum, and residents wouldn\'t have it any other way. This funky, fiercely independent town has been a haven for free spirits, artists, and nature lovers since the 1960s counterculture era. The walkable downtown features eclectic shops, vegetarian-friendly restaurants, live music venues, and the historic Fairfax Theatre. Community spirit runs deep—neighbors know each other, local businesses thrive, and town events like the Fairfax Festival and Thursday farmers\' market bring everyone together. Set in a canyon surrounded by open space, Fairfax provides immediate access to world-class hiking and mountain biking on Mount Tamalpais and in the Marin Watershed lands. Housing ranges from cozy cabins to hillside homes with valley views.',
  },
  {
    slug: 'san-anselmo',
    name: 'San Anselmo',
    description: 'A charming town with a historic downtown, great schools, and family-friendly atmosphere.',
    about: 'San Anselmo is Marin\'s quintessential family town, where tree-lined streets lead to a thriving downtown that feels like stepping back in time. The charming San Anselmo Avenue, known as "Antique Row," features vintage shops, family-owned restaurants, and the beloved Imagination Park—a whimsical playground designed with community input. Excellent schools, including the award-winning Ross Valley School District, draw families seeking quality education in a supportive environment. The town\'s flat downtown gives way to hillside neighborhoods with stunning views, connected by a network of walking paths. Creek Park follows the banks of San Anselmo Creek, providing green space through the heart of town. The community comes together for events like the Country Fair Days and Art & Wine Festival, fostering connections that last generations.',
  },
  {
    slug: 'belvedere',
    name: 'Belvedere',
    description: 'An exclusive island community with stunning waterfront properties and luxury homes.',
    about: 'Belvedere is one of the most prestigious addresses in the Bay Area, an exclusive island community connected to Tiburon by a single road. Every direction offers postcard-perfect views—San Francisco\'s skyline, the Golden Gate Bridge, Angel Island, and the Richmond Bridge. Homes range from elegant Victorians on Belvedere Island\'s historic lagoon to contemporary architectural masterpieces perched on the hillsides of Corinthian Island. The community maintains strict architectural standards, ensuring the neighborhood\'s beauty is preserved for generations. Residents enjoy private beach access, the Belvedere Community Park, and membership opportunities at the prestigious San Francisco Yacht Club. Despite its exclusivity, Belvedere maintains a close-knit feel where neighbors gather for community events and children walk to the excellent Reed Union School District schools.',
  },
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}
