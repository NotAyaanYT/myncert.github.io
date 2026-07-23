import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import type { ReactNode } from 'react';

interface FeatureClassCardProps {
  /** Class name (e.g. "Class 6") */
  name: string;
  /** URL slug (e.g. "class-6") */
  slug: string;
  /** Short description */
  description: string;
  /** Feature type for URL path (e.g. "notes", "mcqs") */
  featurePath: string;
  /** Gradient color class (e.g. "from-blue-500 to-blue-600") */
  gradient: string;
  /** Optional icon override */
  icon?: ReactNode;
  /** Hover gradient class */
  hoverGradient?: string;
  /** Animation delay in seconds */
  delay?: number;
}

const gradientMap: Record<string, { gradient: string; hover: string; iconBg: string }> = {
  blue: {
    gradient: 'from-blue-500 to-indigo-600',
    hover: 'group-hover:from-blue-600 group-hover:to-indigo-700',
    iconBg: 'bg-blue-500/10',
  },
  indigo: {
    gradient: 'from-indigo-500 to-purple-600',
    hover: 'group-hover:from-indigo-600 group-hover:to-purple-700',
    iconBg: 'bg-indigo-500/10',
  },
  purple: {
    gradient: 'from-purple-500 to-pink-600',
    hover: 'group-hover:from-purple-600 group-hover:to-pink-700',
    iconBg: 'bg-purple-500/10',
  },
  teal: {
    gradient: 'from-teal-500 to-emerald-600',
    hover: 'group-hover:from-teal-600 group-hover:to-emerald-700',
    iconBg: 'bg-teal-500/10',
  },
  coral: {
    gradient: 'from-orange-500 to-rose-600',
    hover: 'group-hover:from-orange-600 group-hover:to-rose-700',
    iconBg: 'bg-orange-500/10',
  },
  rose: {
    gradient: 'from-rose-500 to-pink-600',
    hover: 'group-hover:from-rose-600 group-hover:to-pink-700',
    iconBg: 'bg-rose-500/10',
  },
  green: {
    gradient: 'from-green-500 to-emerald-600',
    hover: 'group-hover:from-green-600 group-hover:to-emerald-700',
    iconBg: 'bg-green-500/10',
  },
  orange: {
    gradient: 'from-orange-500 to-amber-600',
    hover: 'group-hover:from-orange-600 group-hover:to-amber-700',
    iconBg: 'bg-orange-500/10',
  },
  red: {
    gradient: 'from-red-500 to-rose-600',
    hover: 'group-hover:from-red-600 group-hover:to-rose-700',
    iconBg: 'bg-red-500/10',
  },
  violet: {
    gradient: 'from-violet-500 to-purple-600',
    hover: 'group-hover:from-violet-600 group-hover:to-purple-700',
    iconBg: 'bg-violet-500/10',
  },
  slate: {
    gradient: 'from-slate-600 to-gray-700',
    hover: 'group-hover:from-slate-700 group-hover:to-gray-800',
    iconBg: 'bg-slate-500/10',
  },
};

export function getFeatureGradient(color: string) {
  return gradientMap[color] || gradientMap.blue;
}

export function FeatureClassCard({
  name,
  slug,
  description,
  featurePath,
  gradient,
  icon,
  delay = 0,
}: FeatureClassCardProps) {
  const colors = gradientMap[gradient] || gradientMap.blue;

  return (
    <Link
      href={`/${featurePath}/${slug}`}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Gradient accent bar */}
      <div className={`h-1.5 bg-gradient-to-r ${colors.gradient} transition-all duration-500 ${colors.hover}`} />

      <div className="p-6">
        {/* Decorative circle */}
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className={`w-full h-full bg-gradient-to-br ${colors.gradient}`} />
        </div>

        {/* Class number icon */}
        <div className="relative">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.iconBg} mb-4 transition-all duration-500 group-hover:scale-110`}>
            {icon || <BookOpen className="h-6 w-6 text-gray-700 dark:text-gray-300" />}
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
            {name}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
            {description}
          </p>

          <div className="flex items-center gap-1.5 text-sm font-medium">
            <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
              Browse Now
            </span>
            <ArrowRight className={`h-4 w-4 text-transparent bg-gradient-to-r ${colors.gradient} bg-clip-text transition-transform group-hover:translate-x-1`} />
          </div>
        </div>
      </div>

      {/* Shimmer hover effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </Link>
  );
}
