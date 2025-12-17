import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl md:text-8xl font-semibold text-gray-900 mb-4">
          404
        </h1>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
