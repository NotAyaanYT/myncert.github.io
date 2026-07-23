'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BreadcrumbItem } from '@/types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-6', className)}>
      <ol className="flex items-center flex-wrap gap-1 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link
            href="/"
            className="flex items-center gap-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all rounded-lg px-2 py-1 -ml-2 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 group"
          >
            <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
            <span itemProp="name" className="sr-only">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
              <ChevronRight className="h-3.5 w-3.5 text-gray-300 dark:text-gray-600 mx-1 shrink-0" />
              {isLast ? (
                <span
                  itemProp="name"
                  className="text-gray-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-[300px]"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  itemProp="item"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all rounded-lg px-2 py-1 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 truncate max-w-[150px] sm:max-w-[250px]"
                  title={item.label}
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
