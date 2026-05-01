import Link from "next/link";
import { getCategories, getArticlesByCategory } from "@/lib/content";
import ArticleImage from "@/components/ArticleImage";

interface CategoryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const categories = getCategories();
  const category = categories.find((c) => c.slug === params.slug);
  return {
    title: `${category?.name || "Category"} — Pakistan Archive`,
    description: category?.description || "Browse articles in this category",
  };
}

/* Deterministic gradient per article slug (stable across renders) */
const GRADIENTS = [
  "from-emerald-800 to-teal-600",
  "from-blue-900 to-sky-600",
  "from-rose-800 to-pink-600",
  "from-amber-800 to-yellow-500",
  "from-violet-800 to-purple-600",
  "from-indigo-800 to-blue-500",
  "from-green-800 to-lime-600",
  "from-red-900 to-orange-600",
  "from-cyan-800 to-teal-500",
];

function slugToGradient(slug: string): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return GRADIENTS[h % GRADIENTS.length];
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categories = getCategories();
  const category = categories.find((c) => c.slug === params.slug);
  const articles = getArticlesByCategory(params.slug);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-serif font-bold">Category not found</h1>
        <Link
          href="/"
          className="text-news-accent hover:underline mt-4 inline-block"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-news-gray mb-6">
        <Link href="/" className="hover:text-news-accent">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-news-dark">{category.name}</span>
      </nav>

      {/* Category header */}
      <div className="border-b-2 border-news-dark pb-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{category.icon}</span>
          <div>
            <h1 className="text-4xl font-serif font-bold text-news-dark">
              {category.name}
            </h1>
            <p className="text-news-gray mt-1">{category.description}</p>
            <p className="text-sm text-news-gray mt-1">
              {articles.length} articles
            </p>
          </div>
        </div>
      </div>

      {/* ── Main layout: masonry grid + sidebar ── */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* ── Pinterest / Masonry Article Grid ── */}
        <div className="flex-1 min-w-0">
          {articles.length > 0 ? (
            /*
             * CSS columns = true masonry.
             * Each card is break-inside-avoid so it never splits across columns.
             * Images render at their NATURAL height — no fixed h-XX.
             */
            <div className="columns-2 md:columns-3 gap-3">
              {articles.map((article) => {
                const grad = slugToGradient(article.slug);
                return (
                  <div key={article.slug} className="break-inside-avoid mb-3">
                    <Link
                      href={`/article/${article.slug}`}
                      className="block group"
                    >
                      <article className="card overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:border-news-accent">
                        {/* ── Image block: natural height ── */}
                        {article.image ? (
                          <div className="overflow-hidden">
                            <ArticleImage
                              src={article.image}
                              alt={article.title}
                              className="w-full h-auto block group-hover:scale-105 transition-transform duration-500 ease-out"
                              fallbackEmoji={category.icon}
                              fallbackGradient={grad}
                            />
                          </div>
                        ) : (
                          /* No image → colour gradient placeholder */
                          <div
                            className={`w-full bg-gradient-to-br ${grad} flex items-center justify-center`}
                            style={{ aspectRatio: "4/3" }}
                          >
                            <span className="text-5xl opacity-70 select-none drop-shadow">
                              {category.icon}
                            </span>
                          </div>
                        )}

                        {/* ── Card body ── */}
                        <div className="p-3">
                          <span className="category-tag text-[10px]">
                            {article.category}
                          </span>
                          <h2 className="text-sm font-serif font-bold mt-2 mb-1 text-news-dark leading-snug group-hover:text-news-accent transition-colors">
                            {article.title}
                          </h2>
                          <p className="text-news-gray text-xs line-clamp-2 leading-relaxed">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-news-border">
                            {(article as { date?: string }).date ? (
                              <span className="text-[10px] text-news-gray">
                                {(article as { date: string }).date}
                              </span>
                            ) : (
                              <span />
                            )}
                            <span className="text-[10px] font-semibold text-news-accent group-hover:underline">
                              Read →
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-news-border">
              <span className="text-5xl">{category.icon}</span>
              <p className="text-news-gray mt-4">
                No articles in this category yet.
              </p>
              <Link
                href="/"
                className="text-news-accent hover:underline mt-4 inline-block"
              >
                Browse other categories →
              </Link>
            </div>
          )}
        </div>

        {/* ── Sidebar ── */}
        <aside className="w-full lg:w-56 flex-shrink-0">
          <div className="bg-white border border-news-border p-4 sticky top-4">
            <h3 className="font-serif font-bold text-base border-b border-news-border pb-2 mb-3">
              All Categories
            </h3>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className={`flex items-center justify-between p-2 rounded text-sm transition-colors ${
                      cat.slug === params.slug
                        ? "bg-news-accent text-white font-semibold"
                        : "hover:bg-gray-100 text-news-dark"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </span>
                    <span className="text-xs opacity-60">{cat.count}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick stats */}
            <div className="mt-4 pt-4 border-t border-news-border text-xs text-news-gray space-y-1">
              <p>
                <strong>{articles.length}</strong> articles in this category
              </p>
              <p>
                <Link
                  href="/timeline"
                  className="text-news-accent hover:underline"
                >
                  View full timeline →
                </Link>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
