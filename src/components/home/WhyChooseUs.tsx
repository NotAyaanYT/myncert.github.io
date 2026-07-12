'use client';

import { GraduationCap, Star, RefreshCw, Compass, ListOrdered, Smartphone } from 'lucide-react';
import { whyChooseUs } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  'graduation-cap': <GraduationCap className="h-6 w-6" />,
  'star': <Star className="h-6 w-6" />,
  'refresh-cw': <RefreshCw className="h-6 w-6" />,
  'compass': <Compass className="h-6 w-6" />,
  'list-ordered': <ListOrdered className="h-6 w-6" />,
  'smartphone': <Smartphone className="h-6 w-6" />,
};

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-blue-600">NCERT Solutions Hub</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide the best learning experience for students across India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                'text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-700',
                `animate-fade-in stagger-${index + 1}`
              )}
            >
              <div className="inline-flex p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 mb-4">
                {iconMap[item.icon] || <Star className="h-6 w-6" />}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
