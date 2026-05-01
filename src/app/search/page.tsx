'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState, Suspense } from 'react';
import { searchArticles, Article } from '@/lib/content';
import { searchWikipedia, WikipediaSearchResult } from '@/lib/wikipedia';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<(Article | WikipediaSearchResult)[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState<'local' | 'wikipedia'>('local');

  useEffect(() => {
    if (query) {
      setLoading(true);
      
      if (searchType === 'local') {
        const localResults = searchArticles(query);
        setResults(localResults);
        setLoading(false);
      } else {
        searchWikipedia(query, 20).then((wikiResults) => {
          setResults(wikiResults);
          setLoading(false);
        });
      }
    }
  }, [query, searchType]);

  if (!query) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-6">Search Pakistan Archive</h1>
        <p className="text-news-gray">Please enter a search term above.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="border-b-2 border-news-dark pb-4 mb-6">
        <h1 className="text-3xl font-serif font-bold text-news-dark">
          Search Results for "{query}"
        </h1>
        <p className="text-news-gray mt-2">
          {loading ? 'Searching...' : `Found ${results.length} results`}
        </p>
        
        {/* Search Type Toggle */}
        <div className="mt-4 flex gap-4">
          <button
            onClick={() => setSearchType('local')}
            className={`px-6 py-2 font-semibold transition-all ${
              searchType === 'local'
                ? 'bg-news-dark text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Local Database
          </button>
          <button
            onClick={() => setSearchType('wikipedia')}
            className={`px-6 py-2 font-semibold transition-all ${
              searchType === 'wikipedia'
                ? 'bg-news-dark text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Extended Digital Library
          </button>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-news-accent border-t-transparent"></div>
          <p className="mt-4 text-news-gray">Searching...</p>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="card p-6">
              {'pageid' in result && result.pageid > 0 ? (
                <div className="block">
                  <h2 className="text-xl font-serif font-bold text-news-dark">
                    {result.title}
                  </h2>
                  <p className="text-news-gray mt-2" dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                </div>
              ) : (
                <Link href={`/article/${(result as Article).slug}`} className="block">
                  <h2 className="text-xl font-serif font-bold text-news-dark">
                    {(result as Article).title}
                  </h2>
                  <p className="text-news-gray mt-2">{(result as Article).excerpt}</p>
                  <span className="category-tag mt-2 inline-block">{(result as Article).category}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white border border-news-border">
          <p className="text-news-gray">No results found for "{query}"</p>
          <p className="text-sm text-news-gray mt-2">Try different keywords or use Wikipedia search</p>
        </div>
      )}

      {/* Search Tips */}
      <div className="mt-8 p-6 bg-gray-100 border border-news-border">
        <h3 className="font-serif font-bold mb-3">Search Tips</h3>
        <ul className="text-sm text-news-gray space-y-1">
          <li>• Try searching for specific names like "Jinnah" or "Bhutto"</li>
          <li>• Use the Extended Digital Library for broader research coverage</li>
          <li>• Search for events like "Indo-Pak War" or "Partition"</li>
        </ul>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-news-accent border-t-transparent"></div>
          <p className="mt-4 text-news-gray">Loading...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}