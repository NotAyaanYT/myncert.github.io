'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, GraduationCap, TrendingUp, BookOpen, Star, ArrowDown, Sparkles } from 'lucide-react';
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
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900 animate-mesh" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-5s' }} />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-[10%] text-white/10 animate-float-slow hidden md:block">
        <BookOpen className="h-16 w-16" />
      </div>
      <div className="absolute bottom-40 right-[8%] text-white/10 animate-float hidden md:block" style={{ animationDelay: '-4s' }}>
        <Star className="h-12 w-12" />
      </div>
      <div className="absolute top-1/2 right-[15%] text-white/5 animate-float-slow hidden lg:block" style={{ animationDelay: '-2s' }}>
        <GraduationCap className="h-20 w-20" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 text-center">
        <div className="animate-fade-in">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-white/90 text-sm mb-6 border border-white/10 shadow-lg">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span>Based on the Latest NCERT 2026&ndash;27 Syllabus</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Free NCERT Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              for Classes 6&ndash;12
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get step-by-step solutions for all NCERT textbooks. Expert-crafted, 
            easy to understand, and <span className="text-white font-semibold">completely free</span>.
          </p>

          {/* Search form with glassmorphism */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative flex items-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/10 ring-1 ring-white/20 overflow-hidden transition-all duration-300 group-focus-within:ring-blue-400/50">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a class, subject, chapter, or question..."
                  className="w-full pl-14 pr-36 py-4.5 text-base bg-transparent outline-none text-gray-900 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </span>
                </button>
              </div>
            </div>
          </form>

          {/* Class chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-blue-200/70 text-sm font-medium flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4" />
              Browse by Class:
            </span>
            {classes.map((cls, index) => (
              <a
                key={cls.slug}
                href={`/${cls.slug}`}
                className="group relative px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white/90 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 border border-white/10 hover:border-white/20"
                style={{ animationDelay: `${0.3 + index * 0.08}s` }}
              >
                <span className="relative z-10">{cls.name}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-white/40" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </section>
  );
}
