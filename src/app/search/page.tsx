'use client';

import { Suspense, useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, Loader2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import type { SearchResult } from '@/types';

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const performSearch = useCallback(async (q: string) => {
    if (q.length < 2) { setResults([]); return; }
    setIsLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data);
    } catch { setResults([]); }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    const timeout = window.setTimeout(() => {
      setQuery(q);
      performSearch(q);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [searchParams, performSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      performSearch(query.trim());
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
          Search <span className="text-blue-600">NCERT Solutions</span>
        </h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search classes, subjects, chapters, exercises..." className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 rounded-xl outline-none transition-colors text-gray-900 dark:text-white text-base" />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">Search</button>
          </div>
        </form>
        {isLoading && <div className="flex items-center justify-center py-20"><Loader2 className="h-8 w-8 text-blue-600 animate-spin" /></div>}
        {!isLoading && results.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{results.length} results found</p>
            {results.map((result) => (
              <Link key={result.id} href={result.url} className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-gray-200 dark:border-gray-700">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{result.type}</div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">{result.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{result.description}</p>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">{result.breadcrumb.join(' > ')}</div>
              </Link>
            ))}
          </div>
        )}
        {!isLoading && query && results.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400">No results found</h2>
            <p className="text-gray-400 dark:text-gray-500 mt-2">Try different keywords or browse by class.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 text-blue-600 animate-spin" /></div>}>
      <SearchContent />
    </Suspense>
  );
}
