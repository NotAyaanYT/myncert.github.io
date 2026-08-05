'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { classes } from '@/lib/constants';
import { cn } from '@/lib/utils';

const classColors: Record<string, { bar: string; glow: string; text: string }> = {
  'class-6': { bar: 'from-blue-500 to-blue-600', glow: 'group-hover:shadow-blue-500/20', text: 'text-blue-600 dark:text-blue-400' },
  'class-7': { bar: 'from-indigo-500 to-purple-600', glow: 'group-hover:shadow-indigo-500/20', text: 'text-indigo-600 dark:text-indigo-400' },
  'class-8': { bar: 'from-purple-500 to-pink-500', glow: 'group-hover:shadow-purple-500/20', text: 'text-purple-600 dark:text-purple-400' },
  'class-9': { bar: 'from-pink-500 to-rose-500', glow: 'group-hover:shadow-pink-500/20', text: 'text-pink-600 dark:text-pink-400' },
  'class-10': { bar: 'from-blue-600 to-violet-600', glow: 'group-hover:shadow-blue-600/20', text: 'text-blue-600 dark:text-blue-400' },
  'class-11': { bar: 'from-violet-500 to-fuchsia-500', glow: 'group-hover:shadow-violet-500/20', text: 'text-violet-600 dark:text-violet-400' },
  'class-12': { bar: 'from-fuchsia-500 to-rose-600', glow: 'group-hover:shadow-fuchsia-500/20', text: 'text-fuchsia-600 dark:text-fuchsia-400' },
};

export function ClassCards() {
  return (
    <section id="classes" className="relative py-20 sm:py-28 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-400/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800 mb-4">
            <Sparkles className="h-4 w-4" />
            Choose Your Grade
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Browse by <span className="brand-gradient-text">Class</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Select your class to access all NCERT solutions for your grade
          </p>
        </div>

        {/* Class cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {classes.map((cls, index) => {
            const colors = classColors[cls.slug] || classColors['class-6'];
            return (
              <Link
                key={cls.slug}
                href={`/${cls.slug}`}
                className={cn(
                  'group relative p-6 rounded-2xl bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm ring-1 ring-gray-200/70 dark:ring-gray-800 hover:shadow-xl',
                  colors.glow,
                  `animate-fade-in`,
                )}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Top accent bar */}
                <div className={cn('absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r', colors.bar)} />

                {/* Decorative number watermark */}
                <div className="absolute -right-3 -bottom-4 text-7xl font-extrabold text-gray-100 dark:text-gray-800/60 select-none pointer-events-none">
                  {cls.name.replace('Class ', '')}
                </div>

                {/* Content */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Class number badge */}
                  <div className={cn(
                    'w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br flex items-center justify-center text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3',
                    colors.bar
                  )}>
                    {cls.name.replace('Class ', '')}
                  </div>

                  <h3 className="font-display text-lg font-bold mb-1.5 tracking-tight text-gray-900 dark:text-white">
                    {cls.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-snug">
                    {cls.description}
                  </p>

                  <div className={cn('flex items-center gap-1 text-sm font-semibold transition-colors mt-auto', colors.text)}>
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
