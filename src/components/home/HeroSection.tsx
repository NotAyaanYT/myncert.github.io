'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ChevronRight, GraduationCap, TrendingUp, BookOpen } from 'lucide-react';
import { classes } from '@/lib/constants';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/20 backdrop-blur-sm rounded-full text-green-200 text-sm mb-6">
            <GraduationCap className="h-4 w-4" />
            <span>Based on the Latest NCERT 2026–27 Syllabus</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Free NCERT Solutions
            <br />
            <span className="text-blue-200">for Classes 6&ndash;12</span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get step-by-step solutions for all NCERT textbooks. Expert-crafted, easy to understand, and completely free.
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a class, subject, chapter, or question..."
                className="w-full pl-12 pr-4 py-4 text-base bg-white/95 backdrop-blur-sm border-2 border-transparent focus:border-blue-400 rounded-xl outline-none shadow-lg shadow-black/10 transition-all text-gray-900 placeholder-gray-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-blue-200 text-sm font-medium flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Browse by Class:
            </span>
            {classes.map((cls) => (
              <a
                key={cls.slug}
                href={`/${cls.slug}`}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium transition-all hover:scale-105"
              >
                {cls.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </section>
  );
}
