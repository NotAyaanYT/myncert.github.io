'use client';

import { BookOpen, GraduationCap, BookMarked, Users, FileText, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Classes', value: '7', icon: GraduationCap, href: '/admin/classes', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' },
    { label: 'Subjects', value: '14', icon: BookOpen, href: '/admin/subjects', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30' },
    { label: 'Chapters', value: '120+', icon: BookMarked, href: '/admin/chapters', color: 'text-violet-600 bg-violet-50 dark:bg-violet-900/30' },
    { label: 'Exercises', value: '350+', icon: FileText, href: '/admin/exercises', color: 'text-orange-600 bg-orange-50 dark:bg-orange-900/30' },
    { label: 'Questions', value: '2000+', icon: BarChart3, href: '/admin/questions', color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30' },
    { label: 'Users', value: '5', icon: Users, href: '#', color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-900/30' },
  ];

  const quickActions = [
    { label: 'Add New Class', href: '/admin/classes' },
    { label: 'Add New Subject', href: '/admin/subjects' },
    { label: 'Add New Chapter', href: '/admin/chapters' },
    { label: 'Add New Exercise', href: '/admin/exercises' },
    { label: 'Add New Question', href: '/admin/questions' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your NCERT content</p>
          </div>
          <Link href="/" className="text-sm text-blue-600 hover:underline">View Site</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {stats.map((stat) => (
            <Link key={stat.label} href={stat.href} className={`p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow`}>
              <div className={`p-2 rounded-lg w-fit mb-3 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </Link>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickActions.map((action) => (
              <Link key={action.label} href={action.href} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-sm font-medium text-gray-700 dark:text-gray-200">
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
