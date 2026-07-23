'use client';

import { BookOpen, GraduationCap, BookMarked, Users, FileText, BarChart3, ArrowUpRight, Plus, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Classes', value: '7', icon: GraduationCap, href: '/admin/classes', gradient: 'from-blue-500 to-blue-600', bgLight: 'bg-blue-50 dark:bg-blue-900/30' },
    { label: 'Subjects', value: '14', icon: BookOpen, href: '/admin/subjects', gradient: 'from-emerald-500 to-emerald-600', bgLight: 'bg-emerald-50 dark:bg-emerald-900/30' },
    { label: 'Chapters', value: '120+', icon: BookMarked, href: '/admin/chapters', gradient: 'from-violet-500 to-violet-600', bgLight: 'bg-violet-50 dark:bg-violet-900/30' },
    { label: 'Exercises', value: '350+', icon: FileText, href: '/admin/exercises', gradient: 'from-orange-500 to-orange-600', bgLight: 'bg-orange-50 dark:bg-orange-900/30' },
    { label: 'Questions', value: '2000+', icon: BarChart3, href: '/admin/questions', gradient: 'from-rose-500 to-rose-600', bgLight: 'bg-rose-50 dark:bg-rose-900/30' },
    { label: 'Users', value: '5', icon: Users, href: '#', gradient: 'from-cyan-500 to-cyan-600', bgLight: 'bg-cyan-50 dark:bg-cyan-900/30' },
  ];

  const quickActions = [
    { label: 'Add New Class', href: '/admin/classes', icon: GraduationCap },
    { label: 'Add New Subject', href: '/admin/subjects', icon: BookOpen },
    { label: 'Add New Chapter', href: '/admin/chapters', icon: BookMarked },
    { label: 'Add New Exercise', href: '/admin/exercises', icon: FileText },
    { label: 'Add New Question', href: '/admin/questions', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400 ml-3.5">Manage your NCERT content</p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all hover:shadow-sm group"
          >
            View Site
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {stats.map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent bar on hover */}
              <span className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className={`p-2 rounded-lg w-fit mb-3 ${stat.bgLight} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-5 w-5 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:translate-x-0.5 transition-transform">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700/50 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className="group flex items-center gap-3 p-3.5 bg-gray-50/80 dark:bg-gray-700/50 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transition-all border border-transparent hover:border-blue-100 dark:hover:border-blue-800/30"
                >
                  <div className="p-1.5 rounded-lg bg-white dark:bg-gray-800 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {action.label}
                    </span>
                  </div>
                  <Plus className="h-3.5 w-3.5 ml-auto text-gray-300 dark:text-gray-600 group-hover:text-blue-500 group-hover:rotate-90 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
