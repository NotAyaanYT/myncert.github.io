'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BookOpen, LayoutDashboard, GraduationCap, BookMarked, FileText, BarChart3, LogOut, ArrowLeft } from 'lucide-react';

const sidebarItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Classes', href: '/admin/classes', icon: GraduationCap },
  { label: 'Subjects', href: '/admin/subjects', icon: BookOpen },
  { label: 'Chapters', href: '/admin/chapters', icon: BookMarked },
  { label: 'Exercises', href: '/admin/exercises', icon: FileText },
  { label: 'Questions', href: '/admin/questions', icon: BarChart3 },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/admin/login') return <>{children}</>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <aside className="hidden lg:flex w-64 flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">Admin Panel</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back to Site
          </Link>
          <button onClick={() => router.push('/admin/login')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
