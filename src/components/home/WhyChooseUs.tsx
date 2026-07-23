'use client';

import { GraduationCap, Star, RefreshCw, Compass, ListOrdered, Smartphone, Sparkles } from 'lucide-react';
import { whyChooseUs } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, { icon: React.ReactNode; gradient: string }> = {
  'graduation-cap': { icon: <GraduationCap className="h-6 w-6" />, gradient: 'from-blue-500 to-cyan-500' },
  'star': { icon: <Star className="h-6 w-6" />, gradient: 'from-amber-500 to-yellow-500' },
  'refresh-cw': { icon: <RefreshCw className="h-6 w-6" />, gradient: 'from-green-500 to-emerald-500' },
  'compass': { icon: <Compass className="h-6 w-6" />, gradient: 'from-purple-500 to-pink-500' },
  'list-ordered': { icon: <ListOrdered className="h-6 w-6" />, gradient: 'from-orange-500 to-red-500' },
  'smartphone': { icon: <Smartphone className="h-6 w-6" />, gradient: 'from-indigo-500 to-violet-500' },
};

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800 mb-4">
            <Sparkles className="h-4 w-4" />
            Why Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              NCERT Solutions Hub
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide the best learning experience for students across India
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const mapped = iconMap[item.icon] || { icon: <Star className="h-6 w-6" />, gradient: 'from-blue-500 to-indigo-500' };

            return (
              <div
                key={item.title}
                className={cn(
                  'group relative p-7 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1',
                  `animate-fade-in`
                )}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Gradient bar on left */}
                <div className={cn(
                  'absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b opacity-60 group-hover:opacity-100 transition-opacity duration-500',
                  mapped.gradient
                )} />

                <div className="relative pl-4">
                  {/* Icon with gradient */}
                  <div className={cn(
                    'inline-flex p-3 rounded-xl bg-gradient-to-br shadow-md mb-4 transition-transform duration-300 group-hover:scale-110',
                    mapped.gradient
                  )}>
                    <div className="text-white">
                      {mapped.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div className={cn(
                  'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
                  'bg-gradient-to-br from-transparent via-blue-50/30 to-transparent dark:via-blue-900/10'
                )} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
