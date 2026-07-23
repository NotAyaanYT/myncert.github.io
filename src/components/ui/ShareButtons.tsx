'use client';

import { Share2, Globe, MessageCircle, Link as LinkIcon, Check, Printer, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      icon: Globe,
      activeBg: 'hover:bg-[#1877F2] hover:text-white',
    },
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      icon: MessageCircle,
      activeBg: 'hover:bg-[#1DA1F2] hover:text-white',
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
      icon: Send,
      activeBg: 'hover:bg-[#25D366] hover:text-white',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const printPage = () => window.print();

  return (
    <div className={cn('flex flex-wrap items-center gap-1.5', className)}>
      <span className="text-xs text-gray-400 dark:text-gray-500 mr-1 flex items-center gap-1">
        <Share2 className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Share</span>
      </span>
      <span className="w-px h-4 bg-gray-200 dark:bg-gray-700 mx-1" />
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'p-2 rounded-lg text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/30',
            'hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group',
            link.activeBg
          )}
          aria-label={`Share on ${link.name}`}
          title={link.name}
        >
          <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-lg text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
        aria-label="Copy link"
        title={copied ? 'Copied!' : 'Copy link'}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
        ) : (
          <LinkIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
        )}
      </button>
      <button
        onClick={printPage}
        className="p-2 rounded-lg text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
        aria-label="Print this page"
        title="Print"
      >
        <Printer className="h-4 w-4 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
