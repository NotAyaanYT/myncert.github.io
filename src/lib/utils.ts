import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function getSubjectIcon(subject: string): string {
  const icons: Record<string, string> = {
    mathematics: 'calculator',
    science: 'flask',
    english: 'book-open',
    hindi: 'book',
    'social-science': 'globe',
    physics: 'atom',
    chemistry: 'beaker',
    biology: 'dna',
    accountancy: 'calculator',
    economics: 'trending-up',
    'business-studies': 'briefcase',
    history: 'landmark',
    geography: 'earth',
    'political-science': 'scale',
  };
  return icons[subject.toLowerCase()] || 'book';
}

export function getSubjectColor(subject: string): string {
  const colors: Record<string, string> = {
    mathematics: '#2563eb',
    science: '#059669',
    english: '#d97706',
    hindi: '#dc2626',
    'social-science': '#7c3aed',
    physics: '#0891b2',
    chemistry: '#65a30d',
    biology: '#16a34a',
    accountancy: '#4f46e5',
    economics: '#ca8a04',
    'business-studies': '#0d9488',
    history: '#b45309',
    geography: '#15803d',
    'political-science': '#1d4ed8',
  };
  return colors[subject.toLowerCase()] || '#6b7280';
}
