import Image from 'next/image';
import Link from 'next/link';
import { agentInfo } from '@/lib/data/agent';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
            About Nina Belloni
          </h1>
          <div className="relative aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden mb-8">
            <Image
              src="/images/nina-belloni.jpg"
              alt="Nina Belloni - Real Estate Professional"
              fill
              className="object-cover rounded-lg"
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
            />
          </div>
        </div>

        {/* Bio Content */}
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              Born and raised in Marin, Nina brings a deep-rooted understanding of the local community,
              neighborhoods, and lifestyle that make this area so special. With a genuine passion for helping
              people find not just a house, but a home, she guides her clients through every step of the real
              estate journey with honesty, care, insight, and a tireless work ethic. Whether you are buying
              your first home, selling a longtime residence, or searching for the perfect investment, she offers
              a thoughtful, personalized approach to helping achieve your goals.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nina has spent the past three years immersed in the real estate world, working closely with a
              top-producing agent. This hands-on experience has given her a deep understanding of the
              business and a true appreciation for the details that make each transaction run smoothly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              With a degree in hospitality and event planning, Nina brings a unique perspective to her work.
              Her background has honed her organizational skills, eye for detail, and ability to anticipate
              client needs, all qualities that translate seamlessly into real estate. She takes pride in creating
              smooth, stress-free experiences and building lasting relationships along the way.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Away from real estate, Nina is happiest surrounded by friends and family, planning her next
              trip, or out on the lake.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
              License Information
            </h2>
            <p className="text-gray-600">
              <strong className="text-gray-900">DRE License #:</strong>{' '}
              {agentInfo.dreNumber}
            </p>
            <p className="text-gray-600">
              <strong className="text-gray-900">Company:</strong>{' '}
              {agentInfo.company}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gray-50 rounded-lg text-center">
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-600 mb-6">
              Ready to start your real estate journey? Get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </Link>
              <Link
                href="/portfolio"
                className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
