'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Mail, MapPin, Phone } from 'lucide-react';
import { footerNavItems } from '@/lib/constants';

export function Footer() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');
  if (isAdmin) return null;

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                NCERT<span className="text-blue-600">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Free NCERT Solutions for Classes 6 to 12. Quality education accessible to every student.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Study Resources</h3>
            <ul className="space-y-2">
              {[
                { label: 'NCERT Solutions', href: '/#solutions' },
                { label: 'NCERT Notes', href: '/notes' },
                { label: 'Sample Papers', href: '/sample-papers' },
                { label: 'MCQs', href: '/mcqs' },
                { label: 'Previous Year Papers', href: '/previous-year-questions' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">contact@ncertsolutionshub.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} NCERT Solutions Hub. All rights reserved. | 
            <Link href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 ml-1">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms-and-conditions" className="hover:text-blue-600 dark:hover:text-blue-400">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
