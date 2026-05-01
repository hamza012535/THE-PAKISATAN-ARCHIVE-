import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-lg mx-auto">
        <div className="text-8xl mb-6">🇵🇰</div>
        <h1 className="text-4xl font-serif font-bold text-news-dark mb-4">
          Page Not Found
        </h1>
        <p className="text-news-gray mb-2">
          The page you are looking for does not exist in our archive.
        </p>
        <p className="text-sm text-news-gray mb-8">
          It may have been moved, have a different URL, or may not yet be in our database.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-news-accent text-white px-6 py-3 hover:bg-red-700 transition font-semibold"
          >
            ← Return to Homepage
          </Link>
          <Link
            href="/search"
            className="border border-news-border px-6 py-3 hover:bg-gray-100 transition"
          >
            🔍 Search Archive
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-news-border">
          <h3 className="font-serif font-semibold mb-4">Browse Categories</h3>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {['history', 'politics', 'personalities', 'events', 'culture', 'sports'].map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat}`}
                className="capitalize text-news-accent hover:underline px-2"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
