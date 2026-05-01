import Link from 'next/link';
import { getCategories } from '@/lib/content';

export const metadata = {
  title: 'About - Pakistan Archive',
  description: 'Learn about Pakistan Archive, a comprehensive free encyclopedia dedicated to preserving and sharing the history, culture, and heritage of Pakistan.',
};

export default function AboutPage() {
  const categories = getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-news-gray mb-6">
        <Link href="/" className="hover:text-news-accent">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-news-dark">About</span>
      </nav>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-3">
          <div className="border-b-2 border-news-dark pb-4 mb-8">
            <h1 className="text-4xl font-serif font-bold text-news-dark">
              About Pakistan Archive
            </h1>
            <p className="text-news-gray italic mt-2">
              Preserving Pakistan's history for future generations
            </p>
          </div>

          <div className="article-content bg-white border border-news-border p-8 space-y-6">
            <h2 id="mission">Our Mission</h2>
            <p>
              Pakistan Archive is a free, open encyclopedia dedicated to preserving and sharing the rich 
              history, culture, politics, and heritage of Pakistan. We believe that access to knowledge 
              about Pakistan's past and present is fundamental to understanding its future.
            </p>
            <p>
              Our mission is to create the most comprehensive, accurate, and accessible repository of 
              information about Pakistan — from the ancient Indus Valley Civilization to contemporary 
              events, from the founding fathers to living legends.
            </p>

            <h2 id="history">Our History</h2>
            <p>
              Pakistan Archive was founded as a community-driven initiative to document and preserve 
              Pakistan's multifaceted history. Drawing inspiration from encyclopedic resources and 
              leveraging modern web technology and Wikipedia's open-access API, we aim to bring 
              this knowledge to readers around the world.
            </p>

            <h2 id="content">Our Content</h2>
            <p>
              We cover a wide range of topics organized into clear categories:
            </p>
            <div className="grid grid-cols-2 gap-3 my-4">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="flex items-center gap-3 p-3 border border-news-border hover:bg-gray-50 transition"
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <div className="font-semibold text-sm text-news-dark">{cat.name}</div>
                    <div className="text-xs text-news-gray">{cat.description}</div>
                  </div>
                </Link>
              ))}
            </div>

            <h2 id="sources">Sources & Attribution</h2>
            <p>
              Our content is sourced from verified historical records, academic publications, and the 
              Wikipedia API (content licensed under CC BY-SA 3.0). We strive for accuracy and neutrality 
              in all our articles. Where live Wikipedia data is displayed, it is attributed accordingly.
            </p>

            <h2 id="contribute">How to Contribute</h2>
            <p>
              Pakistan Archive is a growing resource. We welcome contributions from historians, 
              academics, journalists, and members of the Pakistani diaspora. If you have knowledge 
              to share, corrections to suggest, or articles to propose, please{' '}
              <Link href="/contact" className="text-news-accent hover:underline">contact us</Link>.
            </p>

            <h2 id="disclaimer">Disclaimer</h2>
            <p>
              While we strive for accuracy, Pakistan Archive is continuously evolving. Some content 
              may be incomplete or subject to revision. For academic or professional use, please 
              cross-reference with primary sources. Wikipedia content is used under the Creative 
              Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) license.
            </p>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white border border-news-border p-4 sticky top-4">
            <h3 className="font-serif font-bold border-b border-news-border pb-2 mb-4">Contents</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#mission" className="text-news-accent hover:underline">1 Our Mission</a></li>
              <li><a href="#history" className="text-news-accent hover:underline">2 Our History</a></li>
              <li><a href="#content" className="text-news-accent hover:underline">3 Our Content</a></li>
              <li><a href="#sources" className="text-news-accent hover:underline">4 Sources & Attribution</a></li>
              <li><a href="#contribute" className="text-news-accent hover:underline">5 How to Contribute</a></li>
              <li><a href="#disclaimer" className="text-news-accent hover:underline">6 Disclaimer</a></li>
            </ul>
          </div>

          <div className="bg-news-dark text-white p-4 mt-6">
            <h3 className="font-serif font-bold mb-3">Quick Stats</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Categories</span>
                <strong className="text-white">{categories.length}</strong>
              </li>
              <li className="flex justify-between">
                <span>Total Articles</span>
                <strong className="text-white">1,000+</strong>
              </li>
              <li className="flex justify-between">
                <span>Languages</span>
                <strong className="text-white">English</strong>
              </li>
              <li className="flex justify-between">
                <span>Founded</span>
                <strong className="text-white">2024</strong>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
