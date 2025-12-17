import Image from 'next/image';
import Link from 'next/link';
import { agentInfo } from '@/lib/data/agent';
import BuySellCards from '@/components/BuySellCards';
import FeaturedProperties from '@/components/FeaturedProperties';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image - Golden Gate Bridge */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gg bridge photo.jpeg"
            alt="Marin County - Golden Gate Bridge"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
            Welcome Home
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your trusted real estate partner in Marin County
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ninabelloni.com/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Marin%20County%2C%20CA&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-US&ss_description=Marin%20County%2C%20CA&ss_email_freq=40&ss_send_zero_result=1&bounds_north=38.8157695277121&bounds_east=-122.05984965225001&bounds_south=37.31297310571092&bounds_west=-123.42215433975001&center_lat=38.083403&center_lon=-122.7633036&center_lat_pan=38.0682300569306&center_lon_pan=-122.74100199600001&geotype=AdminDivision2&user_lat=38.083403&user_lon=-122.7633036&pgsize=20&startidx=0&zoom=9&sort_by=1&company_uuid=4221721&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=2ef5a310-9e45-494d-874b-33da57cab703&ptype=1%2C2%2C9&searchType=criteria&omit_hidden=true&ex_pend=true&currency=USD"
              className="px-8 py-3 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors rounded-sm"
            >
              Home Search
            </a>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-medium hover:bg-white/10 transition-colors rounded-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Buy/Sell Section */}
      <BuySellCards />

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                About Nina Belloni
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With deep roots in Marin County and a passion for helping
                clients find their perfect home, Nina brings expertise,
                dedication, and personalized service to every transaction.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you&apos;re buying your first home, selling a property, or
                investing in real estate, Nina&apos;s local knowledge and
                professional approach ensure exceptional results.
              </p>
              <Link
                href="/about"
                className="inline-block text-gray-900 font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/nina-belloni.jpg"
                alt="Nina Belloni - Real Estate Professional"
                fill
                className="object-cover rounded-lg"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
