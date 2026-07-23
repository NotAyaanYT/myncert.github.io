'use client';

import { Suspense, useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search as SearchIcon, Loader2, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';
import type { SearchResult } from '@/types';
import { PageHeader } from '@/components/ui/PageHeader';

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
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Search', href: '/search' }]}
        title="Search"
        titleAccent="NCERT Solutions"
        subtitle="Find the NCERT solutions, notes, MCQs, and more across all classes and subjects."
        badge="Quick Search"
        badgeIcon={<Sparkles className="h-3.5 w-3.5" />}
        gradient="blue"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-20 group-hover:opacity-40 blur transition-all duration-500" />
            <div className="relative flex items-center bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search classes, subjects, chapters, exercises..."
                className="w-full pl-12 pr-32 py-4 bg-transparent rounded-xl outline-none text-gray-900 dark:text-white text-base"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-200 dark:shadow-blue-900/30"
              >
                <SearchIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </form>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="h-10 w-10 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Searching...</p>
            </div>
          </div>
        )}

        {!isLoading && results.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-6">
              <div className="section-heading-decoration" />
              <p className="text-sm text-gray-500 dark:text-gray-400">{results.length} results found</p>
            </div>
            {results.map((result) => (
              <Link
                key={result.id}
                href={result.url}
                className="group block p-5 bg-white dark:bg-gray-800/50 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-gray-200 dark:border-gray-700/50"
              >
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
                  {result.type}
                </div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {result.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5 line-clamp-2">{result.description}</p>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-400 dark:text-gray-500">
                  {result.breadcrumb.map((crumb, i) => (
                    <span key={i} className="flex items-center gap-1">
                      {i > 0 && <span className="text-gray-300 dark:text-gray-600">/</span>}
                      {crumb}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}

        {!isLoading && query && results.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
              <BookOpen className="h-10 w-10 text-gray-400 dark:text-gray-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No results found</h2>
            <p className="text-gray-500 dark:text-gray-400">Try different keywords or browse by class.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><Loader2 className="h-8 w-8 text-blue-600 animate-spin" /></div>}>
      <SearchContent />
    </Suspense>
  );
}
