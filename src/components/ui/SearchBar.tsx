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
  const [selectedIndex, setSelectedIndex] = useState(-1);
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

  useEffect(() => {
    // Reset selected index when results change
    setSelectedIndex(-1);
  }, [results]);

  const handleSelect = (result: SearchResult) => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setIsExpanded(false);
    router.push(result.url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
        setQuery('');
        setResults([]);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleSelect(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
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
            'p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-all hover:shadow-sm',
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
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-sm -z-10" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500 dark:text-blue-400 pointer-events-none" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => query && setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search classes, subjects, chapters..."
            className="w-full pl-9 pr-8 py-2 text-sm bg-white/80 dark:bg-gray-800/80 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-500 rounded-lg outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 backdrop-blur-sm shadow-sm"
            aria-label="Search NCERT solutions"
            aria-expanded={isOpen}
            aria-autocomplete="list"
            aria-controls="search-results"
            role="combobox"
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setResults([]); setSelectedIndex(-1); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded"
              aria-label="Clear search"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin text-blue-500" /> : <X className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>

      {isOpen && results.length > 0 && (
        <div
          id="search-results"
          className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/80 dark:border-gray-700/80 overflow-hidden animate-scale-in"
          role="listbox"
          aria-label="Search results"
        >
          <div className="p-2 max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <button
                key={result.id}
                onClick={() => handleSelect(result)}
                onMouseEnter={() => setSelectedIndex(index)}
                role="option"
                aria-selected={selectedIndex === index}
                className={cn(
                  'w-full text-left px-3 py-2.5 rounded-lg transition-all',
                  selectedIndex === index
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 shadow-sm'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                )}
              >
                <div className="text-sm font-medium text-gray-900 dark:text-white">{result.title}</div>
                <div className={cn(
                  'text-xs mt-0.5 flex items-center gap-1',
                  selectedIndex === index
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400'
                )}>
                  {result.breadcrumb.length > 0 && (
                    <>
                      {result.breadcrumb.map((crumb, i) => (
                        <span key={i} className="flex items-center gap-1">
                          {i > 0 && <span className="text-gray-300 dark:text-gray-600">/</span>}
                          {crumb}
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>
          {results.length >= 5 && (
            <div className="px-3 py-2 border-t border-gray-100 dark:border-gray-700/50 text-xs text-gray-400 text-center flex items-center justify-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-[10px] font-mono">↑↓</kbd>
              <span>Navigate</span>
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-[10px] font-mono">Enter</kbd>
              <span>Select</span>
            </div>
          )}
        </div>
      )}

      {isOpen && query && !isLoading && results.length === 0 && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/80 dark:border-gray-700/80 p-5 text-center animate-scale-in">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 mb-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">No results found for &quot;{query}&quot;</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Try different keywords or browse by class</p>
        </div>
      )}
    </div>
  );
}
