"use client";

import { useEffect, useState } from "react";

interface CuratedTopic {
  id: string;
  title: string;
  description: string;
  searchQuery: string;
  emoji: string;
  category: string;
}

interface VideoSectionProps {
  title?: string;
  category?: string;
}

export default function VideoSection({
  title = "Watch on YouTube",
  category,
}: VideoSectionProps) {
  const [topics, setTopics] = useState<CuratedTopic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const params = new URLSearchParams();
        if (category) params.set("category", category);
        const res = await fetch("/api/videos?" + params.toString());
        const data = await res.json();
        setTopics(data.topics || []);
      } catch {
        setTopics([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, [category]);

  const openYouTubeSearch = (searchQuery: string) => {
    const url =
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(searchQuery);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold border-b border-news-border pb-2 mb-6">
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card p-5 animate-pulse">
              <div className="text-4xl mb-3 w-10 h-10 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-full" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!topics.length) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between border-b border-news-border pb-2 mb-6">
        <h2 className="text-2xl font-serif font-bold">{title}</h2>
        <span className="text-xs text-news-gray bg-red-50 border border-red-200 text-news-accent px-2 py-1 rounded">
          &#9654; Opens on YouTube
        </span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => openYouTubeSearch(topic.searchQuery)}
            className="card p-5 text-left hover:border-news-accent hover:bg-red-50 transition-all group cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">{topic.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-news-accent bg-red-50 border border-red-100 px-1.5 py-0.5 rounded">
                    {topic.category}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-news-dark text-sm leading-snug mb-1 group-hover:text-news-accent transition-colors">
                  {topic.title}
                </h3>
                <p className="text-xs text-news-gray leading-relaxed line-clamp-2">
                  {topic.description}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs text-news-accent font-semibold">
              <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs">
                &#9654;
              </span>
              Search on YouTube
            </div>
          </button>
        ))}
      </div>
      <p className="text-xs text-news-gray text-center mt-4">
        Clicking opens a curated YouTube search — always finding the latest
        available content. No API key needed.
      </p>
    </section>
  );
}
