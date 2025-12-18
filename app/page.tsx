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

        {/* Name and License - Bottom Left */}
        <div className="absolute bottom-6 left-4 sm:left-6 lg:left-8 z-10">
          <h2 className="font-serif text-lg md:text-xl font-semibold text-white mb-1">
            {agentInfo.name}
          </h2>
          <p className="text-sm md:text-base text-white/90">
            DRE #{agentInfo.dreNumber}
          </p>
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
            <Link
              href="/portfolio/active"
              className="px-8 py-3 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors rounded-sm"
            >
              View Listings
            </Link>
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
                Born and raised in Marin, Nina brings a deep-rooted understanding of the local community,
                neighborhoods, and lifestyle that make this area so special. With a genuine passion for helping
                people find not just a house, but a home, she guides her clients through every step of the real
                estate journey with honesty, care, insight, and a tireless work ethic. Whether you are buying
                your first home, selling a longtime residence, or searching for the perfect investment, she offers
                a thoughtful, personalized approach to helping achieve your goals.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nina has spent the past three years immersed in the real estate world, working closely with a
                top-producing agent. This hands-on experience has given her a deep understanding of the
                business and a true appreciation for the details that make each transaction run smoothly.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With a degree in hospitality and event planning, Nina brings a unique perspective to her work.
                Her background has honed her organizational skills, eye for detail, and ability to anticipate
                client needs, all qualities that translate seamlessly into real estate. She takes pride in creating
                smooth, stress-free experiences and building lasting relationships along the way.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Away from real estate, Nina is happiest surrounded by friends and family, planning her next
                trip, or out on the lake.
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
