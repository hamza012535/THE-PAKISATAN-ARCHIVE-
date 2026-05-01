import Link from 'next/link';
import { getCategories } from '@/lib/content';

export const metadata = {
  title: 'Sitemap - Pakistan Archive',
  description: 'Complete sitemap of Pakistan Archive. Browse all categories, articles, persons, and pages.',
};

const personSlugs = [
  { slug: 'muhammad-ali-jinnah', name: 'Muhammad Ali Jinnah' },
  { slug: 'allama-iqbal', name: 'Allama Iqbal' },
  { slug: 'benazir-bhutto', name: 'Benazir Bhutto' },
  { slug: 'imran-khan', name: 'Imran Khan' },
  { slug: 'abdul-sattar-edhi', name: 'Abdul Sattar Edhi' },
  { slug: 'malala-yousafzai', name: 'Malala Yousafzai' },
];

const articleSlugs = [
  { slug: 'history-of-pakistan', title: 'History of Pakistan' },
  { slug: 'partition-of-india', title: 'Partition of India' },
  { slug: 'muhammad-ali-jinnah', title: 'Muhammad Ali Jinnah' },
  { slug: 'pakistan-india-war-1971', title: 'Indo-Pakistani War of 1971' },
  { slug: 'allama-iqbal', title: 'Allama Iqbal' },
  { slug: 'constitution-of-pakistan', title: 'Constitution of Pakistan' },
  { slug: 'ancient-pakistan', title: 'Ancient Pakistan' },
  { slug: 'mughal-empire', title: 'Mughal Empire in South Asia' },
  { slug: 'british-raj', title: 'British Raj' },
  { slug: 'pakistani-general-elections', title: 'General Elections of Pakistan' },
  { slug: 'pakistan-peoples-party', title: 'Pakistan Peoples Party' },
  { slug: 'pakistani-military-coups', title: 'Military Coups in Pakistan' },
];

export default function SitemapPage() {
  const categories = getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-news-gray mb-6">
        <Link href="/" className="hover:text-news-accent">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-news-dark">Sitemap</span>
      </nav>

      <div className="border-b-2 border-news-dark pb-4 mb-8">
        <h1 className="text-4xl font-serif font-bold text-news-dark">Sitemap</h1>
        <p className="text-news-gray mt-2 italic">
          Complete index of all pages in Pakistan Archive
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Pages */}
        <section>
          <h2 className="font-serif font-bold text-xl border-b border-news-border pb-2 mb-4 text-news-dark">
            📋 Main Pages
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/', label: 'Homepage' },
              { href: '/timeline', label: 'Historical Timeline' },
              { href: '/search', label: 'Search' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
              { href: '/sitemap', label: 'Sitemap' },
            ].map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="text-news-accent hover:underline">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Categories */}
        <section>
          <h2 className="font-serif font-bold text-xl border-b border-news-border pb-2 mb-4 text-news-dark">
            📂 Categories
          </h2>
          <ul className="space-y-2 text-sm">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/category/${cat.slug}`} className="text-news-accent hover:underline flex gap-2 items-center">
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className="text-news-gray text-xs">({cat.count})</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Famous Persons */}
        <section>
          <h2 className="font-serif font-bold text-xl border-b border-news-border pb-2 mb-4 text-news-dark">
            👤 Personalities
          </h2>
          <ul className="space-y-2 text-sm">
            {personSlugs.map((person) => (
              <li key={person.slug}>
                <Link href={`/person/${person.slug}`} className="text-news-accent hover:underline">
                  {person.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Articles */}
        <section className="md:col-span-2 lg:col-span-3">
          <h2 className="font-serif font-bold text-xl border-b border-news-border pb-2 mb-4 text-news-dark">
            📰 Articles
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {articleSlugs.map((article) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className="text-news-accent hover:underline truncate"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-gray-50 border border-news-border text-sm text-news-gray">
        <p>
          This sitemap was last updated on {new Date().toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
          })}. 
          Pakistan Archive is a growing resource — new articles and pages are added regularly.
        </p>
      </div>
    </div>
  );
}
