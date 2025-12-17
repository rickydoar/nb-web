import Link from 'next/link';
import Image from 'next/image';

export default function BuySellCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buy Card */}
          <Link
            href="/portfolio/active"
            className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-900/40 group-hover:from-gray-900/70 group-hover:to-gray-900/50 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white transform group-hover:scale-105 transition-transform duration-300">
                Buy
              </h2>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg mb-4">
                Find your dream home in Marin County
              </p>
              <span className="text-white text-sm font-medium underline group-hover:no-underline transition-all">
                Explore listings →
              </span>
            </div>
          </Link>

          {/* Sell Card */}
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-900/40 group-hover:from-gray-900/70 group-hover:to-gray-900/50 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white transform group-hover:scale-105 transition-transform duration-300">
                Sell
              </h2>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg mb-4">
                Get expert guidance for your property sale
              </p>
              <span className="text-white text-sm font-medium underline group-hover:no-underline transition-all">
                Get started →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
