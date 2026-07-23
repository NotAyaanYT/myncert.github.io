import { type ReactNode } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import type { BreadcrumbItem } from '@/types';
import { Sparkles, GraduationCap, BookOpen, Star, ArrowRight } from 'lucide-react';

interface PageHeaderProps {
  /** Breadcrumb navigation items */
  breadcrumbs: BreadcrumbItem[];
  /** Main page title */
  title: string;
  /** Optional gradient span text (highlighted part of title) */
  titleAccent?: string;
  /** Subtitle text */
  subtitle?: string;
  /** Optional badge text to show */
  badge?: string;
  /** Badge icon override (default: Sparkles) */
  badgeIcon?: ReactNode;
  /** Gradient direction class */
  gradient?: string;
  /** Extra content to show below subtitle (e.g. search, CTAs) */
  children?: ReactNode;
}

const gradientMap: Record<string, { bg: string; orbs: string[] }> = {
  blue: {
    bg: 'from-indigo-950 via-blue-950 to-slate-950',
    orbs: [
      'bg-blue-500/15',
      'bg-indigo-500/15',
      'bg-purple-500/15',
      'bg-blue-300/10',
    ],
  },
  indigo: {
    bg: 'from-violet-950 via-indigo-950 to-blue-950',
    orbs: ['bg-violet-500/15', 'bg-indigo-500/15', 'bg-blue-500/15', 'bg-purple-400/10'],
  },
  purple: {
    bg: 'from-fuchsia-950 via-purple-950 to-pink-950',
    orbs: ['bg-fuchsia-500/15', 'bg-purple-500/15', 'bg-pink-500/15', 'bg-violet-400/10'],
  },
  rose: {
    bg: 'from-rose-950 via-pink-950 to-purple-950',
    orbs: ['bg-rose-500/15', 'bg-pink-500/15', 'bg-purple-500/15', 'bg-fuchsia-400/10'],
  },
  green: {
    bg: 'from-emerald-950 via-green-950 to-teal-950',
    orbs: ['bg-emerald-500/15', 'bg-green-500/15', 'bg-teal-500/15', 'bg-lime-400/10'],
  },
  orange: {
    bg: 'from-orange-950 via-amber-950 to-yellow-950',
    orbs: ['bg-orange-500/15', 'bg-amber-500/15', 'bg-yellow-500/15', 'bg-red-400/10'],
  },
};

export function PageHeader({
  breadcrumbs,
  title,
  titleAccent,
  subtitle,
  badge,
  badgeIcon,
  gradient = 'blue',
  children,
}: PageHeaderProps) {
  const colors = gradientMap[gradient] || gradientMap.blue;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${colors.bg} animate-mesh`}>
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full opacity-30 blur-3xl animate-float-slow" style={{ animationDelay: '0s' }}>
        <div className={`w-full h-full ${colors.orbs[0]}`} />
      </div>
      <div className="absolute top-[10%] right-[-15%] w-[50%] h-[50%] rounded-full opacity-25 blur-3xl animate-float" style={{ animationDelay: '1s' }}>
        <div className={`w-full h-full ${colors.orbs[1]}`} />
      </div>
      <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[45%] rounded-full opacity-20 blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}>
        <div className={`w-full h-full ${colors.orbs[2]}`} />
      </div>
      <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '3s' }}>
        <div className={`w-full h-full ${colors.orbs[3]}`} />
      </div>

      {/* Floating decorative icons */}
      <div className="absolute top-[15%] right-[8%] text-white/5 animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
        <BookOpen className="h-16 w-16" />
      </div>
      <div className="absolute bottom-[20%] left-[5%] text-white/5 animate-float-slow hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <GraduationCap className="h-12 w-12" />
      </div>
      <div className="absolute top-[50%] right-[15%] text-white/5 animate-float hidden lg:block" style={{ animationDelay: '2.5s' }}>
        <Star className="h-10 w-10" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pb-20">
        <Breadcrumb items={breadcrumbs} />

        <div className="mt-6 max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20 mb-4 animate-fade-in">
              {badgeIcon || <Sparkles className="h-3.5 w-3.5" />}
              {badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight animate-slide-up">
            {title}{' '}
            {titleAccent && (
              <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                {titleAccent}
              </span>
            )}
          </h1>

          {subtitle && (
            <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {subtitle}
            </p>
          )}

          {children && (
            <div className="mt-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
