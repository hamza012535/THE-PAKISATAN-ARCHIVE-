import Link from "next/link";
import { getTimelineEvents } from "@/lib/content";

export const metadata = {
  title: "Timeline of Pakistan History - Pakistan Archive",
  description:
    "A comprehensive chronological timeline of major events in Pakistan history — from the Indus Valley Civilization to present day.",
};

const eraColors: Record<string, string> = {
  Ancient: "bg-amber-700",
  Medieval: "bg-orange-700",
  Colonial: "bg-stone-600",
  Independence: "bg-green-700",
  "Post-Independence": "bg-blue-700",
  Modern: "bg-news-accent",
};

function getEra(year: string): string {
  if (year.includes("BC") || year.includes("bc")) return "Ancient";
  const y = parseInt(year);
  if (isNaN(y)) return "Ancient";
  if (y < 1700) return "Medieval";
  if (y < 1947) return "Colonial";
  if (y < 1960) return "Independence";
  if (y < 2000) return "Post-Independence";
  return "Modern";
}

export default function TimelinePage() {
  const events = getTimelineEvents();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-news-gray mb-6">
        <Link href="/" className="hover:text-news-accent">
          Home
        </Link>
        <span className="mx-2">›</span>
        <span className="text-news-dark">Timeline</span>
      </nav>

      {/* Header */}
      <div className="border-b-2 border-news-dark pb-6 mb-8">
        <h1 className="text-4xl font-serif font-bold text-news-dark">
          Timeline of Pakistan History
        </h1>
        <p className="text-news-gray mt-2 max-w-2xl">
          A chronological journey through {events.length} pivotal moments — from
          ancient civilizations to the present day. Click any event to read the
          full article.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          {Object.entries(eraColors).map(([era, color]) => (
            <span
              key={era}
              className={`${color} text-white px-3 py-1 font-semibold`}
            >
              {era}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-0.5 bg-news-border hidden sm:block" />

          <div className="space-y-5">
            {events.map((event, index) => {
              const era = getEra(event.year);
              const color = eraColors[era] || "bg-news-accent";
              const href = event.link || "/category/history";

              return (
                <Link
                  key={index}
                  href={href}
                  className="relative flex gap-6 group block"
                >
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-24 hidden sm:flex items-start">
                    <div
                      className={`${color} text-white w-full rounded text-center font-bold text-xs py-2 px-1 z-10 relative
                        group-hover:scale-105 group-hover:shadow-md transition-all duration-150`}
                    >
                      {event.year}
                    </div>
                  </div>

                  {/* Dot on spine */}
                  <div
                    className="absolute left-[5.1rem] top-3 w-3 h-3 rounded-full border-2 border-white hidden sm:block
                    bg-news-border group-hover:bg-news-accent transition-colors z-20"
                  />

                  {/* Event card */}
                  <div className="flex-grow card p-5 hover:border-news-accent hover:shadow-md transition-all duration-150">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        {/* Mobile year badge */}
                        <span
                          className={`sm:hidden inline-block ${color} text-white text-xs px-2 py-0.5 mb-2 font-semibold`}
                        >
                          {event.year}
                        </span>
                        <h2 className="text-base font-serif font-bold text-news-dark group-hover:text-news-accent transition-colors leading-snug">
                          {event.title}
                        </h2>
                        <p className="text-news-gray mt-1 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                      <span className="text-news-accent text-lg flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity font-bold mt-0.5">
                        →
                      </span>
                    </div>

                    {/* Era tag */}
                    <div className="mt-2">
                      <span
                        className={`text-xs ${color} text-white px-2 py-0.5`}
                      >
                        {era} Era
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          href="/category/history"
          className="px-6 py-3 bg-news-accent text-white hover:bg-red-700 transition font-semibold"
        >
          📜 Browse History Articles
        </Link>
        <Link
          href="/category/events"
          className="px-6 py-3 border-2 border-news-dark text-news-dark hover:bg-news-dark hover:text-white transition font-semibold"
        >
          📅 Browse Events
        </Link>
        <Link
          href="/search?q=Pakistan+history"
          className="px-6 py-3 border border-news-border hover:bg-gray-100 transition"
        >
          🔍 Search Archive
        </Link>
      </div>

      <p className="text-center text-xs text-news-gray mt-8">
        {events.length} events from 2500 BCE to 2024 · Click any event to read
        the full article
      </p>
    </div>
  );
}
