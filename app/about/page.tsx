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
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Professional Background
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nina Belloni is a dedicated real estate professional serving Marin
              County with Coldwell Banker. With a deep understanding of the
              local market and a passion for helping clients achieve their real
              estate goals, Nina brings expertise, integrity, and personalized
              service to every transaction.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you&apos;re buying your first home, selling a property, or
              investing in real estate, Nina&apos;s local knowledge and professional
              approach ensure exceptional results. Her commitment to excellence
              and client satisfaction has earned her a reputation as a trusted
              advisor in the Marin County real estate community.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Why Work With Nina
            </h2>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="text-gray-900 font-medium mr-3">•</span>
                <span className="text-gray-600">
                  <strong className="text-gray-900">Local Expertise:</strong> Deep
                  knowledge of Marin County&apos;s diverse communities and neighborhoods
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-900 font-medium mr-3">•</span>
                <span className="text-gray-600">
                  <strong className="text-gray-900">Personalized Service:</strong>{' '}
                  Tailored approach to meet your unique needs and goals
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-900 font-medium mr-3">•</span>
                <span className="text-gray-600">
                  <strong className="text-gray-900">Professional Network:</strong>{' '}
                  Strong relationships with lenders, inspectors, and other
                  professionals
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-900 font-medium mr-3">•</span>
                <span className="text-gray-600">
                  <strong className="text-gray-900">Proven Results:</strong>{' '}
                  Track record of successful transactions for both buyers and
                  sellers
                </span>
              </li>
            </ul>
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
