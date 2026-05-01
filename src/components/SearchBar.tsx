'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Pakistan Archive..."
        className="w-full px-4 py-2 border border-news-border rounded-sm focus:outline-none focus:border-news-accent"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-news-gray hover:text-news-accent"
      >
        🔍
      </button>
    </form>
  );
}