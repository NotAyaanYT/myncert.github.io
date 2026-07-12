'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SearchResult } from '@/types';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const searchAPI = useCallback(async (q: string) => {
    if (q.length < 2) {
      setResults([]);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data);
    } catch {
      setResults([]);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => searchAPI(query), 300);
    return () => clearTimeout(timer);
  }, [query, searchAPI]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        if (!query) setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    setQuery('');
    setIsOpen(false);
    setIsExpanded(false);
    router.push(result.url);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <div className={cn(
        'flex items-center transition-all duration-300',
        isExpanded ? 'w-64 sm:w-80' : 'w-9'
      )}>
        <button
          onClick={() => {
            setIsExpanded(true);
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
          className={cn(
            'p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors',
            isExpanded && 'hidden'
          )}
          aria-label="Open search"
        >
          <Search className="h-5 w-5" />
        </button>
        <div className={cn(
          'relative w-full',
          !isExpanded && 'hidden'
        )}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => query && setIsOpen(true)}
            placeholder="Search classes, subjects, chapters..."
            className="w-full pl-9 pr-8 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500 rounded-lg outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-500"
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setResults([]); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-scale-in">
          <div className="p-2 max-h-96 overflow-y-auto">
            {results.map((result) => (
              <button
                key={result.id}
                onClick={() => handleSelect(result)}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="text-sm font-medium text-gray-900 dark:text-white">{result.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{result.breadcrumb.join(' > ')}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && query && !isLoading && results.length === 0 && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 text-center text-sm text-gray-500 dark:text-gray-400 animate-scale-in">
          No results found for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
