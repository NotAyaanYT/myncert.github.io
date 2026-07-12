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
            className="flex items-center gap-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span itemProp="name" className="sr-only">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => (
          <li key={item.href} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <ChevronRight className="h-4 w-4 text-gray-400 mx-1 inline" />
            {index === items.length - 1 ? (
              <span itemProp="name" className="text-gray-900 dark:text-white font-medium">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                itemProp="item"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
