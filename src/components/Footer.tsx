import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-news-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Pakistan Archive</h3>
            <p className="text-gray-400 text-sm">
              A comprehensive archive of Pakistan's history, political events, 
              famous personalities, and cultural heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/category/history" className="hover:text-white">History</Link></li>
              <li><Link href="/category/politics" className="hover:text-white">Politics</Link></li>
              <li><Link href="/category/personalities" className="hover:text-white">Personalities</Link></li>
              <li><Link href="/category/events" className="hover:text-white">Events</Link></li>
              <li><Link href="/timeline" className="hover:text-white">Timeline</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/category/culture" className="hover:text-white">Culture</Link></li>
              <li><Link href="/category/geography" className="hover:text-white">Geography</Link></li>
              <li><Link href="/category/economy" className="hover:text-white">Economy</Link></li>
              <li><Link href="/category/sports" className="hover:text-white">Sports</Link></li>
              <li><Link href="/category/arts" className="hover:text-white">Arts & Entertainment</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/sitemap" className="hover:text-white">Sitemap</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Pakistan Archive. All rights reserved.</p>
          <p className="mt-2">
            Content sourced from Wikipedia under CC BY-SA 3.0 license.
          </p>
        </div>
      </div>
    </footer>
  );
}