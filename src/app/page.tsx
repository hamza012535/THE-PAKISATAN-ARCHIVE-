import Link from "next/link";
import {
  getFeaturedArticles,
  getCategories,
  getTimelineEvents,
  getFamousPersonalities,
  getPersonalityCategories,
  getFamousPersonalitiesByCategory,
  getDidYouKnowFacts,
} from "@/lib/content";
import NewsSection from "@/components/NewsSection";
import VideoSection from "@/components/VideoSection";
import ArticleImage from "@/components/ArticleImage";

export default function Home() {
  const featuredArticles = getFeaturedArticles();
  const categories = getCategories();
  const timelineEvents = getTimelineEvents();
  const personalityCategories = getPersonalityCategories();
  const personalitiesByCategory = getFamousPersonalitiesByCategory();
  const didYouKnow = getDidYouKnowFacts();

  const highlightEvents = timelineEvents.filter((e) =>
    ["1947", "1971", "1940", "1992", "1998", "2024"].includes(e.year),
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="text-center border-b-2 border-news-dark pb-8 mb-8">
          <div className="text-6xl mb-4">🇵🇰</div>
          <h1 className="text-6xl font-serif font-bold text-news-dark mb-4 tracking-tight">
            The National Pakistan Archive
          </h1>
          <p className="text-2xl text-news-gray font-serif italic">
            Preserving the Legacy, Culture & Sovereign Heritage of a Nation
          </p>
          <p className="mt-6 text-news-gray max-w-3xl mx-auto text-lg leading-relaxed">
            Welcome to the definitive digital repository of Pakistani history.
            Our mission is to curate, preserve, and present the multi-millennial
            narrative of this land—from the urban sophistication of the Indus
            Valley to the modern geopolitical resurgence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/timeline"
              id="hero-timeline-btn"
              className="bg-news-accent text-white px-6 py-3 hover:bg-red-700 transition font-semibold"
            >
              📅 Explore Timeline
            </Link>
            <Link
              href="/search"
              id="hero-search-btn"
              className="border-2 border-news-dark text-news-dark px-6 py-3 hover:bg-news-dark hover:text-white transition font-semibold"
            >
              🔍 Search Archive
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold border-b border-news-border pb-2 mb-6">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="block"
            >
              <div className="card p-4 text-center hover:bg-gray-50 hover:border-news-accent transition-all">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-news-dark text-xs leading-tight">
                  {category.name}
                </h3>
                <p className="text-xs text-news-gray mt-1">{category.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles — Pinterest masonry */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold border-b border-news-border pb-2 mb-6">
          Featured Articles
        </h2>
        {/* CSS columns = true masonry: cards stack in columns, images show at natural height */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {featuredArticles.map((article) => (
            <div key={article.slug} className="break-inside-avoid mb-3">
              <Link href={`/article/${article.slug}`} className="block group">
                <article className="card overflow-hidden hover:shadow-xl hover:border-news-accent transition-all duration-300">
                  {article.image ? (
                    <div className="overflow-hidden">
                      <ArticleImage
                        src={article.image}
                        alt={article.title}
                        className="w-full h-auto block group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center text-4xl"
                      style={{ aspectRatio: "4/3" }}
                    >
                      🇵🇰
                    </div>
                  )}
                  <div className="p-3">
                    <span className="category-tag text-[10px]">
                      {article.category}
                    </span>
                    <h3 className="text-sm font-serif font-bold mt-2 mb-1 text-news-dark leading-snug group-hover:text-news-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-news-gray text-xs line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="mt-2 block text-[10px] font-semibold text-news-accent group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Timeline Preview */}
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-serif font-bold border-b border-news-border pb-2 mb-6">
            Historical Milestones
          </h2>
          <div className="bg-white border border-news-border p-6">
            <div className="space-y-4">
              {highlightEvents.map((item, index) => (
                <Link
                  key={index}
                  href={item.link || "/timeline"}
                  className="flex items-start gap-4 group hover:bg-gray-50 -mx-2 px-2 py-1 rounded transition"
                >
                  <span className="font-bold text-white bg-news-accent min-w-[60px] text-center px-2 py-1 text-sm flex-shrink-0 group-hover:bg-red-700 transition">
                    {item.year}
                  </span>
                  <div>
                    <div className="font-semibold text-news-dark text-sm group-hover:text-news-accent transition">
                      {item.title}
                    </div>
                    <div className="text-news-gray text-xs mt-0.5">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/timeline"
                className="inline-block bg-news-accent text-white px-6 py-2 hover:bg-red-700 transition"
              >
                View Full Timeline ({getTimelineEvents().length} events)
              </Link>
            </div>
          </div>
        </section>

        {/* Did You Know */}
        <section>
          <h2 className="text-2xl font-serif font-bold border-b border-news-border pb-2 mb-6">
            Did You Know?
          </h2>
          <div className="space-y-3">
            {didYouKnow.map((fact, index) => (
              <div
                key={index}
                className="bg-white border border-news-border p-4"
              >
                <span className="text-news-accent font-bold mr-2">✦</span>
                <span className="text-sm text-news-gray leading-relaxed">
                  {fact}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Famous Personalities — Categorized portrait grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold border-b border-news-border pb-2 mb-6">
          Famous Personalities
        </h2>
        {personalityCategories.map((cat) => {
          const persons = personalitiesByCategory[cat.slug];
          if (!persons || persons.length === 0) return null;
          return (
            <div key={cat.slug} className="mb-8">
              <h3 className="text-lg font-semibold text-news-dark mb-4 flex items-center gap-2">
                <span>{cat.icon}</span>
                {cat.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {persons.map((person) => (
                  <Link key={person.slug} href={`/person/${person.slug}`} className="block group">
                    <div className="card overflow-hidden hover:shadow-lg hover:border-news-accent transition-all duration-300 select-none">
                      {/* Portrait image — square, full-width, no cropping */}
                      <div className="w-full overflow-hidden bg-stone-100">
                        {person.image ? (
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-auto block grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 transition-transform"
                            loading="lazy"
                            draggable={false}
                          />
                        ) : (
                          <div
                            className="w-full bg-gradient-to-br from-amber-700 to-yellow-500 flex items-center justify-center text-4xl"
                            style={{ aspectRatio: "1/1" }}
                          >
                            {person.emoji}
                          </div>
                        )}
                      </div>
                      {/* Name + role */}
                      <div className="p-2 text-center">
                        <h4 className="font-serif font-bold text-[11px] text-news-dark leading-tight group-hover:text-news-accent transition-colors">
                          {person.name}
                        </h4>
                        <p className="text-[10px] text-news-gray mt-0.5 leading-tight">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Live Pakistan News */}
      <NewsSection />

      {/* Pakistan History Videos */}
      <VideoSection title="Watch Pakistan History & Culture on YouTube" />

      {/* Search CTA */}
      <section className="bg-news-dark text-white p-8 text-center">
        <div className="text-4xl mb-4">🔍</div>
        <h2 className="text-2xl font-serif font-bold mb-4">
          Search Our Archive
        </h2>
        <p className="mb-6 text-gray-300 max-w-lg mx-auto">
          Find any person, event, or topic in our local database and Wikipedia's
          comprehensive Pakistan articles
        </p>
        <Link
          href="/search"
          id="cta-search-btn"
          className="inline-block bg-news-accent text-white px-8 py-3 hover:bg-red-700 transition text-lg font-semibold"
        >
          Search Now →
        </Link>
      </section>
    </div>
  );
}
