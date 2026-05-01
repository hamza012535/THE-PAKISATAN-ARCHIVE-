import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="header-border bg-white">
      {/* Top Bar */}
      <div className="bg-news-dark text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span>📅 {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            <Link href="/sitemap" className="hover:text-gray-300">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-news-accent text-white flex items-center justify-center font-bold text-xl">
              🇵🇰
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-news-dark">Pakistan Archive</h1>
              <p className="text-xs text-news-gray">Comprehensive History Database</p>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-md mx-4">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-news-border bg-gray-50">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap gap-6 py-3 text-sm font-semibold">
            <li><Link href="/" className="hover:text-news-accent">Home</Link></li>
            <li><Link href="/category/history" className="hover:text-news-accent">History</Link></li>
            <li><Link href="/category/politics" className="hover:text-news-accent">Politics</Link></li>
            <li><Link href="/category/personalities" className="hover:text-news-accent">Personalities</Link></li>
            <li><Link href="/category/events" className="hover:text-news-accent">Events</Link></li>
            <li><Link href="/category/culture" className="hover:text-news-accent">Culture</Link></li>
            <li><Link href="/category/geography" className="hover:text-news-accent">Geography</Link></li>
            <li><Link href="/timeline" className="hover:text-news-accent">Timeline</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}