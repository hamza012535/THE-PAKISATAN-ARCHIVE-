import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getArticlesByCategory,
  getRelatedArticles,
} from "@/lib/content";
import { getFullArticle } from "@/lib/wikipedia";

// Render on-demand so Wikipedia API is called only when a user visits,
// not for all 263 pages simultaneously at build time.
export const dynamic = "force-dynamic";

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  // Import all articles to pre-generate all slugs
  const { default: allSlugs } = await import("@/lib/content").then((m) => ({
    default: [
      ...m.getArticlesByCategory("history"),
      ...m.getArticlesByCategory("politics"),
      ...m.getArticlesByCategory("personalities"),
      ...m.getArticlesByCategory("events"),
      ...m.getArticlesByCategory("culture"),
      ...m.getArticlesByCategory("geography"),
      ...m.getArticlesByCategory("economy"),
      ...m.getArticlesByCategory("sports"),
      ...m.getArticlesByCategory("arts"),
    ],
  }));
  return allSlugs.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  return {
    title: article
      ? `${article.title} - Pakistan Archive`
      : "Article Not Found",
    description: article?.excerpt || "Article not found in Pakistan Archive",
    openGraph: {
      title: article?.title,
      description: article?.excerpt,
      images: article?.image ? [article.image] : [],
    },
  };
}

// Build a slug-friendly anchor from a section heading
function toAnchor(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Parse Wikipedia plain-text extract into structured sections
function parseExtractSections(
  extract: string,
): { heading: string; paragraphs: string[] }[] {
  const sections: { heading: string; paragraphs: string[] }[] = [];
  const lines = extract.split("\n");

  let currentHeading = "Overview";
  let currentParagraphs: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Wikipedia plain text uses == heading == style headings
    const sectionMatch = trimmed.match(/^==+\s*(.+?)\s*==+$/);
    if (sectionMatch) {
      if (currentParagraphs.length > 0) {
        sections.push({
          heading: currentHeading,
          paragraphs: currentParagraphs,
        });
        currentParagraphs = [];
      }
      currentHeading = sectionMatch[1];
    } else {
      currentParagraphs.push(trimmed);
    }
  }

  if (currentParagraphs.length > 0) {
    sections.push({ heading: currentHeading, paragraphs: currentParagraphs });
  }

  // If no sections were created (flat extract), split on double newlines
  if (sections.length === 0 && extract.trim()) {
    const paragraphs = extract
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean);
    sections.push({ heading: "Overview", paragraphs });
  }

  return sections;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(params.slug, 6);

  // Fetch full Wikipedia content
  const wikiData = await getFullArticle(article.title);

  // Parse the extract into sections
  const sections = wikiData?.extract
    ? parseExtractSections(wikiData.extract)
    : [];

  // Determine the image to show (local article image takes priority, then Wikipedia thumbnail)
  const displayImage = article.image || wikiData?.thumbnail?.source || null;

  // Category slug for breadcrumb
  const categorySlug = article.category
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Breadcrumb */}
      <nav className="text-sm text-news-gray mb-6 flex items-center flex-wrap gap-1">
        <Link href="/" className="hover:text-news-accent transition">
          Home
        </Link>
        <span className="mx-1 text-news-border">›</span>
        <Link
          href={`/category/${categorySlug}`}
          className="hover:text-news-accent transition"
        >
          {article.category}
        </Link>
        <span className="mx-1 text-news-border">›</span>
        <span className="text-news-dark font-medium truncate max-w-xs">
          {article.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* ── Main Content ───────────────────────────────────── */}
        <article className="lg:col-span-3 min-w-0">
          {/* Article Header */}
          <header className="border-b-2 border-news-dark pb-5 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="category-tag">{article.category}</span>
              {article.date && (
                <span className="text-xs text-news-gray">
                  📅 {article.date}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-news-dark leading-tight">
              {article.title}
            </h1>
            {wikiData && (
              <p className="text-xs text-news-gray mt-2 flex items-center gap-1">
                <span className="inline-block w-3 h-3 bg-gray-200 rounded-full" />
                Source: Wikipedia · Last fetched live
              </p>
            )}
          </header>

          {/* Featured Image — floats right on desktop */}
          {displayImage && (
            <div className="mb-6 lg:float-right lg:ml-8 w-full lg:w-80 shrink-0">
              <figure className="border border-news-border bg-white shadow-sm">
                <img
                  src={displayImage}
                  alt={article.title}
                  className="w-full object-cover block no-drag"
                />
                <figcaption className="text-xs text-news-gray px-3 py-2 border-t border-news-border bg-gray-50 italic">
                  {article.title}
                </figcaption>
              </figure>
            </div>
          )}

          {/* Article Content */}
          <div className="article-content bg-white border border-news-border p-6 md:p-8 clear-both">
            {/* Lead excerpt / pull quote */}
            <p className="text-lg font-serif leading-relaxed mb-8 text-news-dark border-l-4 border-news-accent pl-5 bg-amber-50 py-4 pr-4 rounded-r">
              {article.excerpt}
            </p>

            {/* ── Wikipedia content ── */}
            {sections.length > 0 ? (
              <div className="space-y-2">
                {sections.map((section, sIdx) => (
                  <div key={sIdx}>
                    {/* Only show the heading if it's not just "Overview" at position 0,
                        or if there are multiple sections */}
                    {(sIdx > 0 || sections.length > 1) && (
                      <h2 id={toAnchor(section.heading)}>{section.heading}</h2>
                    )}
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              /* Fallback if no Wikipedia content */
              <div>
                <h2 id="overview">Overview</h2>
                <p>
                  This record is part of our ongoing initiative to digitize the
                  comprehensive history and cultural heritage of Pakistan. Our
                  curatorial team is continuously expanding this entry with
                  primary source documentation and peer-reviewed analysis.
                </p>
                <p>
                  The Islamic Republic of Pakistan remains a focal point of
                  South Asian history, bridging ancient civilizations with
                  modern geopolitical dynamics. This entry serves as a critical
                  component of our national heritage collection.
                </p>
                <h2 id="significance">Archival Significance</h2>
                <p>
                  Maintaining accurate records of this topic is vital for
                  preserving the collective memory of the Pakistani nation. It
                  represents a significant milestone in our curated timeline of
                  events.
                </p>

                {/* Wikipedia search fallback link */}
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded">
                  <p className="text-sm text-news-gray mb-2">
                    Extended content for this article is being compiled.
                  </p>
                  <a
                    href={`https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-news-accent hover:underline"
                  >
                    🔍 Search Wikipedia for &ldquo;{article.title}&rdquo; →
                  </a>
                </div>
              </div>
            )}

            {/* Wikipedia attribution + read more */}
            {wikiData?.fullurl && (
              <div className="mt-10 pt-6 border-t border-news-border flex items-center justify-between flex-wrap gap-3">
                <p className="text-xs text-news-gray">
                  Content sourced from Wikipedia under the{" "}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    className="text-news-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CC BY-SA 4.0
                  </a>{" "}
                  licence.
                </p>
                <a
                  href={wikiData.fullurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-news-dark text-white text-sm px-5 py-2 hover:bg-news-accent transition font-semibold"
                >
                  📖 Read full article on Wikipedia →
                </a>
              </div>
            )}

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-10 pt-6 border-t border-news-border">
                <h3 className="font-serif font-bold text-xl mb-4 text-news-dark">
                  Related Articles
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/article/${related.slug}`}
                      className="group flex items-start gap-3 p-4 border border-news-border bg-news-paper hover:bg-white hover:border-news-accent transition"
                    >
                      {related.image && (
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-14 h-14 object-cover flex-shrink-0 border border-news-border"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-news-dark group-hover:text-news-accent transition leading-snug line-clamp-2">
                          {related.title}
                        </p>
                        <p className="text-xs text-news-gray mt-1 line-clamp-2">
                          {related.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* ── Sidebar ────────────────────────────────────────── */}
        <aside className="lg:col-span-1 min-w-0 space-y-5">
          {/* Table of Contents */}
          <div className="toc sticky top-4">
            <h3 className="toc-title font-serif font-bold text-sm uppercase tracking-wider">
              Contents
            </h3>
            <ol className="text-sm space-y-1 list-none pl-0 mt-2">
              {sections.length > 0 ? (
                sections.map((section, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-news-gray text-xs mt-0.5 shrink-0">
                      {idx + 1}
                    </span>
                    <a
                      href={`#${toAnchor(section.heading)}`}
                      className="text-news-accent hover:underline leading-snug"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))
              ) : (
                <>
                  <li>
                    <a
                      href="#overview"
                      className="text-news-accent hover:underline"
                    >
                      1 Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#significance"
                      className="text-news-accent hover:underline"
                    >
                      2 Significance
                    </a>
                  </li>
                </>
              )}
            </ol>
          </div>

          {/* Infobox */}
          <div className="infobox">
            <div className="infobox-title">{article.title}</div>
            {displayImage && (
              <div className="infobox-image">
                <img
                  src={displayImage}
                  alt={article.title}
                  className="max-w-full block no-drag"
                />
              </div>
            )}
            <div className="infobox-row">
              <span className="infobox-label">Category</span>
              <span className="infobox-value text-xs">{article.category}</span>
            </div>
            <div className="infobox-row">
              <span className="infobox-label">Country</span>
              <span className="infobox-value text-xs">Pakistan</span>
            </div>
            <div className="infobox-row">
              <span className="infobox-label">Region</span>
              <span className="infobox-value text-xs">South Asia</span>
            </div>
            {article.date && (
              <div className="infobox-row">
                <span className="infobox-label">Date</span>
                <span className="infobox-value text-xs">{article.date}</span>
              </div>
            )}
            {wikiData?.pageid && (
              <div className="infobox-row">
                <span className="infobox-label">Wiki ID</span>
                <span className="infobox-value text-xs font-mono">
                  {wikiData.pageid}
                </span>
              </div>
            )}
            {wikiData?.fullurl && (
              <div className="px-3 py-3">
                <a
                  href={wikiData.fullurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-xs bg-news-dark text-white px-3 py-2 hover:bg-news-accent transition font-semibold"
                >
                  Read on Wikipedia →
                </a>
              </div>
            )}
          </div>

          {/* Browse Category */}
          <div className="bg-white border border-news-border p-4">
            <h3 className="font-serif font-bold text-sm mb-3 text-news-dark uppercase tracking-wider">
              Browse Category
            </h3>
            <Link
              href={`/category/${categorySlug}`}
              className="block text-center bg-news-accent text-white text-sm px-4 py-2.5 hover:bg-red-800 transition font-semibold"
            >
              All {article.category} Articles →
            </Link>
          </div>

          {/* Quick facts from Wikipedia thumbnail */}
          {wikiData?.thumbnail && !article.image && (
            <div className="bg-white border border-news-border p-4">
              <h3 className="font-serif font-bold text-sm mb-2 text-news-dark uppercase tracking-wider">
                Image Source
              </h3>
              <p className="text-xs text-news-gray">
                Photo courtesy of Wikimedia Commons
              </p>
            </div>
          )}

          {/* Related — same category snippets */}
          {relatedArticles.slice(0, 3).length > 0 && (
            <div className="bg-white border border-news-border p-4">
              <h3 className="font-serif font-bold text-sm mb-3 text-news-dark uppercase tracking-wider">
                More in {article.category}
              </h3>
              <ul className="space-y-3">
                {relatedArticles.slice(0, 3).map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/article/${rel.slug}`}
                      className="text-sm text-news-accent hover:underline font-medium leading-snug block"
                    >
                      → {rel.title}
                    </Link>
                    <p className="text-xs text-news-gray mt-0.5 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
