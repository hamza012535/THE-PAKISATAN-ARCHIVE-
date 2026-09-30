'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getRelatedArticles, Article } from '@/lib/content';
import ArticleImage from '@/components/ArticleImage';

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 3);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-news-dark mb-4">Article Not Found</h1>
          <p className="text-news-gray mb-6">We couldn't find the article you're looking for.</p>
          <Link href="/" className="bg-news-accent text-white px-6 py-3 hover:bg-red-700 transition">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-3 text-sm text-news-gray border-b border-news-border">
        <Link href="/" className="hover:text-news-accent transition">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${article.category.toLowerCase()}`} className="hover:text-news-accent transition">
          {article.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-news-dark font-semibold">{article.title}</span>
      </div>

      {/* Article Header */}
      <div className="border-b-2 border-news-dark bg-gradient-to-b from-white to-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="category-tag text-sm mb-3 inline-block">{article.category}</span>
            <h1 className="text-5xl font-serif font-bold text-news-dark mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-news-gray font-serif italic mb-4">{article.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-news-gray">
              {article.author && <span>By {article.author}</span>}
              {article.date && <span>Published: {article.date}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {article.image && (
        <div className="w-full max-h-96 overflow-hidden bg-gray-100">
          <ArticleImage
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-news-dark leading-relaxed">
              {article.content ? (
                article.content.split('\n\n').map((paragraph, idx) => (
                  <div key={idx} className="mb-6">
                    {paragraph.startsWith('###') ? (
                      <h3 className="text-2xl font-serif font-bold mt-8 mb-4 text-news-dark">
                        {paragraph.replace(/^###\s*/, '').trim()}
                      </h3>
                    ) : paragraph.startsWith('##') ? (
                      <h2 className="text-3xl font-serif font-bold mt-12 mb-6 text-news-dark border-b-2 border-news-accent pb-3">
                        {paragraph.replace(/^##\s*/, '').trim()}
                      </h2>
                    ) : (
                      <p className="text-base leading-8">{paragraph}</p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-lg leading-8">{article.excerpt}</p>
              )}
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-news-border">
              <h3 className="font-serif font-bold text-lg mb-4 text-news-dark">Share This Article</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm font-semibold"
                >
                  𝕏 Tweet
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition text-sm font-semibold"
                >
                  f Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-semibold"
                >
                  in LinkedIn
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '')}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition text-sm font-semibold"
                >
                  🔗 Copy Link
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Info Box */}
            <div className="bg-gray-50 border border-news-border p-6 mb-6 rounded">
              <h3 className="font-serif font-bold text-lg text-news-dark mb-4">📌 Key Information</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-news-dark">Category</dt>
                  <dd className="text-news-gray">{article.category}</dd>
                </div>
                {article.author && (
                  <div>
                    <dt className="font-semibold text-news-dark">Author</dt>
                    <dd className="text-news-gray">{article.author}</dd>
                  </div>
                )}
                {article.date && (
                  <div>
                    <dt className="font-semibold text-news-dark">Published</dt>
                    <dd className="text-news-gray">{article.date}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-white border border-news-border p-6 rounded">
                <h3 className="font-serif font-bold text-lg text-news-dark mb-4">📚 Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/article/${related.slug}`}
                      className="block group"
                    >
                      <h4 className="font-semibold text-sm text-news-dark group-hover:text-news-accent transition line-clamp-2">
                        {related.title}
                      </h4>
                      <p className="text-xs text-news-gray mt-1 line-clamp-2">{related.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
