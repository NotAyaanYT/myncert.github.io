'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search, GraduationCap, BookOpen, ArrowRight, Sparkles,
  Calculator, FlaskConical, BookText, Globe, CheckCircle2, TrendingUp, Star
} from 'lucide-react';
import { classes } from '@/lib/constants';

const subjectCards = [
  { icon: Calculator, label: 'Mathematics', sub: 'Ganita Prakash · 14 chapters', color: 'from-blue-500 to-blue-600', chip: '1500+ solutions' },
  { icon: FlaskConical, label: 'Science', sub: 'Curiosity', color: 'from-indigo-500 to-purple-600', chip: 'Step-by-step' },
  { icon: BookText, label: 'English', sub: 'Poorvi', color: 'from-amber-500 to-orange-500', chip: 'Free forever' },
  { icon: Globe, label: 'Social Science', sub: 'Exploring Society', color: 'from-purple-500 to-pink-500', chip: 'Expert verified' },
];

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
    <section className="relative overflow-hidden bg-background">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg" />
      {/* Dot texture */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      {/* Soft orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ── Left: Copy ── */}
          <div className="lg:col-span-7 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200/60 dark:border-white/10 shadow-sm mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Latest NCERT 2026&ndash;27 Syllabus
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-6">
              Learn Smarter with{' '}
              <span className="brand-gradient-text">Free NCERT</span>
              <br className="hidden sm:block" /> Solutions
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed">
              Step-by-step solutions for Classes 6&ndash;12, aligned to the latest syllabus.
              Clear, expert-verified, and <span className="text-blue-600 dark:text-blue-400 font-semibold">100% free</span> for every student.
            </p>

            {/* Search */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto lg:mx-0 mb-8">
              <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-blue-900/5 ring-1 ring-gray-200 dark:ring-gray-800 overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500/60">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search class, subject or chapter..."
                  className="w-full pl-14 pr-36 py-4 text-base bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.03] active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </span>
                </button>
              </div>
            </form>

            {/* Class chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-9">
              <span className="text-gray-400 dark:text-gray-500 text-sm font-medium flex items-center gap-1.5 mr-1">
                <GraduationCap className="h-4 w-4" />
                Browse:
              </span>
              {classes.map((cls) => (
                <a
                  key={cls.slug}
                  href={`/${cls.slug}`}
                  className="px-3.5 py-1.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-blue-300 dark:hover:ring-blue-700"
                >
                  {cls.name}
                </a>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-7 border-t border-gray-200/70 dark:border-gray-800">
              {[
                { icon: BookOpen, label: '1500+ Solutions' },
                { icon: TrendingUp, label: '100K+ Students' },
                { icon: CheckCircle2, label: 'Expert Verified' },
                { icon: Star, label: '100% Free' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Icon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Floating study cards ── */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative h-[520px]">
              {/* Main card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] rounded-3xl bg-white dark:bg-gray-900 shadow-2xl shadow-blue-900/10 ring-1 ring-gray-200/70 dark:ring-gray-800 p-6 animate-float">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-gray-900 dark:text-white text-sm">NCERT Hub</p>
                      <p className="text-xs text-gray-400">Today&apos;s Study Plan</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-full">2026-27</span>
                </div>

                <div className="space-y-3">
                  {subjectCards.map(({ icon: Icon, label, sub, color, chip }) => (
                    <div key={label} className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 ring-1 ring-gray-100 dark:ring-gray-800">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{label}</p>
                        <p className="text-xs text-gray-400 truncate">{sub}</p>
                      </div>
                      <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-900 px-2 py-1 rounded-full ring-1 ring-blue-100 dark:ring-blue-900 whitespace-nowrap">
                        {chip}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="mt-5 w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25">
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Floating badge - top right */}
              <div className="absolute top-2 right-0 w-40 rounded-2xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-gray-200/70 dark:ring-gray-800 p-4 animate-float" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <Star className="h-4 w-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">4.9/5</p>
                    <p className="text-[10px] text-gray-400">Student rating</p>
                  </div>
                </div>
              </div>

              {/* Floating mini - bottom left */}
              <div className="absolute bottom-0 left-0 w-44 rounded-2xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-gray-200/70 dark:ring-gray-800 p-4 animate-float" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">7 Classes</p>
                    <p className="text-[10px] text-gray-400">6th &ndash; 12th</p>
                  </div>
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute inset-0 -z-10 rounded-full border-2 border-dashed border-blue-200/60 dark:border-blue-900/40 animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
