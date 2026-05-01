"use client";

import { useEffect, useState } from "react";

interface RSSArticle {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  source: string;
  imageUrl?: string;
}

export default function NewsSection() {
  const [articles, setArticles] = useState<RSSArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/news?pageSize=9");
      const data = await res.json();
      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
      } else {
        setError("Could not load live news right now. Please try refreshing.");
      }
    } catch {
      setError("Unable to load news at this time.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      return new Date(dateStr).toLocaleDateString("en-PK", {
        month: "short",
        day: "numeric",
      });
    } catch {
      return "";
    }
  };

  if (loading) {
    return (
      <section className="mb-12">
        <div className="flex items-center justify-between border-b border-news-border pb-2 mb-6">
          <h2 className="text-2xl font-serif font-bold">
            Latest Pakistan News
          </h2>
          <span className="text-xs text-news-gray animate-pulse">
            Loading RSS feeds...
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card overflow-hidden animate-pulse">
              <div className="h-36 bg-gray-200" />
              <div className="p-4 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-1/3" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold border-b border-news-border pb-2 mb-6">
          Latest Pakistan News
        </h2>
        <div className="bg-gray-50 border border-news-border p-6 text-center">
          <div className="text-3xl mb-2">&#128240;</div>
          <p className="text-news-gray text-sm">{error}</p>
          <button
            onClick={fetchNews}
            className="mt-3 text-xs text-news-accent hover:underline font-semibold"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between border-b border-news-border pb-2 mb-6">
        <h2 className="text-2xl font-serif font-bold">Latest Pakistan News</h2>
        <div className="flex items-center gap-3">
          <span className="text-xs text-news-gray bg-green-50 border border-green-200 text-green-700 px-2 py-1 rounded">
            Free RSS
          </span>
          <button
            onClick={fetchNews}
            className="text-xs text-news-accent hover:underline font-semibold"
          >
            &#8635; Refresh
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.slice(0, 9).map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <article className="card overflow-hidden h-full hover:border-news-accent transition-colors">
              {article.imageUrl ? (
                <div className="h-36 overflow-hidden relative bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              ) : (
                <div className="h-36 bg-gradient-to-br from-green-900 via-green-700 to-green-800 flex items-center justify-center text-5xl">
                  &#127477;&#127472;
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="category-tag">{article.source}</span>
                  {article.pubDate && (
                    <span className="text-xs text-news-gray">
                      {formatDate(article.pubDate)}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-serif font-bold text-news-dark line-clamp-2 leading-snug mb-2 group-hover:text-news-accent transition-colors">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-xs text-news-gray line-clamp-2 leading-relaxed">
                    {article.description}
                  </p>
                )}
                <span className="mt-2 block text-xs text-news-accent font-semibold group-hover:underline">
                  Read full story &#8594;
                </span>
              </div>
            </article>
          </a>
        ))}
      </div>
      <p className="text-xs text-news-gray text-center mt-4">
        News sourced from Dawn, ARY, Express Tribune, Geo &amp; The News via
        free RSS feeds. No API key required.
      </p>
    </section>
  );
}
