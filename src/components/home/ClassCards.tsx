'use client';

import Link from 'next/link';
import { ArrowRight, GraduationCap, BookOpen, Sparkles } from 'lucide-react';
import { classes } from '@/lib/constants';
import { cn } from '@/lib/utils';

const classColors: Record<string, string> = {
  'class-6': 'from-blue-500 to-indigo-600',
  'class-7': 'from-indigo-500 to-purple-600',
  'class-8': 'from-purple-500 to-pink-500',
  'class-9': 'from-pink-500 to-rose-500',
  'class-10': 'from-blue-600 to-violet-600',
  'class-11': 'from-violet-500 to-fuchsia-500',
  'class-12': 'from-fuchsia-500 to-rose-600',
};

export function ClassCards() {
  return (
    <section id="classes" className="relative py-20 sm:py-28 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800 mb-4">
            <Sparkles className="h-4 w-4" />
            Choose Your Grade
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Browse by <span className="text-blue-600 dark:text-blue-400">Class</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Select your class to access all NCERT solutions for your grade
          </p>
        </div>

        {/* Class cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {classes.map((cls, index) => (
            <Link
              key={cls.slug}
              href={`/${cls.slug}`}
              className={cn(
                'group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg',
                `animate-fade-in`,
              )}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Card background with gradient */}
              <div className={cn(
                'absolute inset-0 bg-gradient-to-br opacity-90 group-hover:opacity-100 transition-opacity',
                classColors[cls.slug] || 'from-blue-500 to-indigo-600'
              )} />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:12px_12px]" />

              {/* Content */}
              <div className="relative flex flex-col items-center text-center text-white">
                {/* Class number */}
                <div className="w-14 h-14 mb-4 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                  {cls.name.replace('Class ', '')}
                </div>

                <h3 className="text-lg font-bold mb-1.5 tracking-tight">{cls.name}</h3>
                <p className="text-sm text-white/70 mb-4 line-clamp-2 leading-snug">{cls.description}</p>

                <div className="flex items-center gap-1 text-sm text-white/80 group-hover:text-white font-medium transition-colors mt-auto">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
