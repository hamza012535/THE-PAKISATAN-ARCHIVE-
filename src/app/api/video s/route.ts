"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getArticleBySlug, getFamousPersonalities, getRelatedArticles } from "@/lib/content";

export default function PersonPage() {
  const params = useParams();
  const slug = (params.slug as string) || "";
  const person = getFamousPersonalities().find((item) => item.slug === slug);
  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 4);

  if (!person) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-news-dark mb-4">Personality Not Found</h1>
        <Link href="/" className="bg-news-accent text-white px-6 py-3 hover:bg-red-700 transition">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="border-b-2 border-news-dark pb-6 mb-8">
        <Link href="/" className="text-sm text-news-gray hover:text-news-accent transition">Home</Link>
        <span className="mx-2 text-news-gray">/</span>
        <span className="text-sm text-news-gray">Personalities</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="card overflow-hidden">
            {person.image ? (
              <img src={person.image} alt={person.name} className="w-full h-auto block" loading="lazy" />
            ) : (
              <div className="h-80 bg-gradient-to-br from-amber-700 to-yellow-500 flex items-center justify-center text-7xl">
                {person.emoji}
              </div>
            )}
            <div className="p-5">
              <h1 className="text-3xl font-serif font-bold text-news-dark">{person.name}</h1>
              <p className="mt-2 text-news-accent font-semibold">{person.role}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="card p-6">
            <h2 className="text-2xl font-serif font-bold text-news-dark mb-4">Overview</h2>
            {article ? (
              <div className="space-y-4 text-news-gray leading-8 text-base">
                <p>{article.excerpt}</p>
                {article.content &&
                  article.content
                    .split("\n\n")
                    .slice(0, 4)
                    .map((paragraph, idx) => (
                      <p key={idx}>{paragraph.replace(/^###\s*|^##\s*/g, "").trim()}</p>
                    ))}
              </div>
            ) : (
              <p className="text-news-gray">Profile details will be added here in a future update.</p>
            )}
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-8 card p-6">
              <h2 className="text-2xl font-serif font-bold text-news-dark mb-4">Related Topics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedArticles.map((item) => (
                  <Link key={item.slug} href={`/article/${item.slug}`} className="group block border border-news-border p-4 hover:border-news-accent transition">
                    <span className="category-tag text-[10px]">{item.category}</span>
                    <h3 className="mt-2 text-lg font-serif font-bold text-news-dark group-hover:text-news-accent transition">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

" , "path":"src/app/timeline/page.tsx
content":"import Link from \"next/link\";
import { getTimelineEvents } from \"@/lib/content\";

export default function TimelinePage() {
  const timelineEvents = getTimelineEvents();

  return (
    <div className=\"container mx-auto px-4 py-8\">
      <div className=\"border-b-2 border-news-dark pb-5 mb-8\">
        <h1 className=\"text-4xl font-serif font-bold text-news-dark\">Pakistan Timeline</h1>
        <p className=\"text-news-gray mt-2\">Key moments in Pakistan&apos;s political, social, and cultural history.</p>
      </div>

      <div className=\"relative before:absolute before:left-5 before:top-0 before:bottom-0 before:w-px before:bg-news-border lg:before:left-1/2\">
        <div className=\"space-y-8\">
          {timelineEvents.map((event, index) => (
            <div key={`${event.year}-${index}`} className=\"relative flex flex-col lg:flex-row\">
              <div className=\"lg:w-1/2 lg:pr-8 lg:text-right\">
                {index % 2 === 0 && (
                  <div className=\"lg:ml-auto lg:max-w-md\">
                    <EventCard event={event} />
                  </div>
                )}
              </div>

              <div className=\"absolute left-4 top-0 flex h-full items-center lg:left-1/2 lg:-translate-x-1/2\">
                <span className=\"block h-4 w-4 rounded-full border-4 border-white bg-news-accent shadow-md\" />
              </div>

              <div className=\"lg:w-1/2 lg:pl-8\">
                {index % 2 !== 0 && (
                  <div className=\"lg:max-w-md\">
                    <EventCard event={event} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: { year: string; title: string; description: string; link?: string } }) {
  return (
    <div className=\"ml-10 lg:ml-0 card p-5\">
      <div className=\"text-sm font-bold text-news-accent mb-2\">{event.year}</div>
      <h2 className=\"text-xl font-serif font-bold text-news-dark mb-2\">{event.title}</h2>
      <p className=\"text-sm text-news-gray leading-relaxed mb-3\">{event.description}</p>
      {event.link && (
        <Link href={event.link} className=\"text-sm font-semibold text-news-accent hover:underline\">
          Learn more →
        </Link>
      )}
    </div>
  );
}

" , "path":"src/app/about/page.tsx
content":"export default function AboutPage() {
  return (
    <div className=\"container mx-auto px-4 py-8 max-w-4xl\">
      <h1 className=\"text-4xl font-serif font-bold text-news-dark mb-6\">About Pakistan Archive</h1>
      <div className=\"space-y-5 text-news-gray leading-8 text-lg\">
        <p>
          Pakistan Archive is a digital repository documenting the rich heritage, political history, major personalities,
          and cultural traditions of Pakistan.
        </p>
        <p>
          The platform makes the story of Pakistan more accessible through curated articles, biographies, timelines,
          and live news updates.
        </p>
        <p>
          Built with a modern editorial design, the archive aims to preserve Pakistan&apos;s historical memory for students,
          researchers, and curious readers.
        </p>
      </div>
    </div>
  );
}

" , "path":"src/app/contact/page.tsx
content":"export default function ContactPage() {
  return (
    <div className=\"container mx-auto px-4 py-8 max-w-3xl\">
      <h1 className=\"text-4xl font-serif font-bold text-news-dark mb-6\">Contact</h1>
      <div className=\"card p-8\">
        <p className=\"text-news-gray leading-8 text-lg mb-6\">
          We welcome feedback, suggestions, and collaboration requests.
        </p>
        <form className=\"space-y-4\">
          <div>
            <label className=\"block text-sm font-semibold text-news-dark mb-2\">Name</label>
            <input type=\"text\" className=\"w-full border border-news-border p-3 focus:outline-none focus:border-news-accent\" placeholder=\"Your name\" />
          </div>
          <div>
            <label className=\"block text-sm font-semibold text-news-dark mb-2\">Email</label>
            <input type=\"email\" className=\"w-full border border-news-border p-3 focus:outline-none focus:border-news-accent\" placeholder=\"you@example.com\" />
          </div>
          <div>
            <label className=\"block text-sm font-semibold text-news-dark mb-2\">Message</label>
            <textarea rows={5} className=\"w-full border border-news-border p-3 focus:outline-none focus:border-news-accent\" placeholder=\"Write your message here...\" />
          </div>
          <button type=\"submit\" className=\"bg-news-accent text-white px-6 py-3 hover:bg-red-700 transition font-semibold\">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

" , "path":"src/app/privacy/page.tsx
content":"export default function PrivacyPage() {
  return (
    <div className=\"container mx-auto px-4 py-8 max-w-4xl\">
      <h1 className=\"text-4xl font-serif font-bold text-news-dark mb-6\">Privacy Policy</h1>
      <div className=\"space-y-5 text-news-gray leading-8 text-lg\">
        <p>
          Pakistan Archive respects your privacy and does not sell personal information.
        </p>
        <p>
          The site may collect basic analytics to improve performance and user experience.
        </p>
        <p>
          Third-party sources such as Wikipedia and RSS feeds may have their own privacy policies.
        </p>
        <p>
          If you contact us, we only use that information to respond to your inquiry.
        </p>
      </div>
    </div>
  );
}

" , "path":"src/app/api/news/route.ts
content":"import { NextRequest, NextResponse } from \"next/server\";\nimport { getPakistanNewsFromRSS } from \"@/lib/rss-news\";\n\nexport async function GET(request: NextRequest) {\n  try {\n    const { searchParams } = new URL(request.url);\n    const rawPageSize = Number(searchParams.get(\"pageSize\") || \"9\");\n    const pageSize = Number.isFinite(rawPageSize) && rawPageSize > 0 ? Math.min(rawPageSize, 18) : 9;\n\n    const articles = await getPakistanNewsFromRSS(pageSize);\n\n    return NextResponse.json({\n      articles,\n      total: articles.length,\n      source: \"rss\",\n    });\n  } catch {\n    return NextResponse.json(\n      { articles: [], total: 0, error: \"Unable to load news right now.\" },\n      { status: 500 },\n    );\n  }\n}\n\n" , "path":"src/app/api/search/route.ts
content":"import { NextRequest, NextResponse } from \"next/server\";\nimport { searchArticles } from \"@/lib/content\";\nimport { searchWikipedia } from \"@/lib/wikipedia\";\n\nexport async function GET(request: NextRequest) {\n  try {\n    const { searchParams } = new URL(request.url);\n    const query = searchParams.get(\"q\") || \"\";\n    const type = searchParams.get(\"type\") || \"local\";\n\n    if (!query.trim()) {\n      return NextResponse.json({ results: [], total: 0 }, { status: 400 });\n    }\n\n    if (type === \"wikipedia\") {\n      const results = await searchWikipedia(query, 10);\n      return NextResponse.json({ results, total: results.length, source: \"wikipedia\" });\n    }\n\n    const results = searchArticles(query);\n    return NextResponse.json({ results, total: results.length, source: \"local\" });\n  } catch {\n    return NextResponse.json({ results: [], total: 0, error: \"Search failed.\" }, { status: 500 });\n  }\n}\n"}],"message":"feat: complete missing archive pages and API routes for article, category, person, timeline, and search flows","owner":"hamza012535","repo":"THE-PAKISATAN-ARCHIVE-"} ast; يتبع to=functions.push_files  {