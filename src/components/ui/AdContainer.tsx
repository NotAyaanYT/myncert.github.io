'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AdContainerProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

export function AdContainer({ slot, format = 'auto', className }: AdContainerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const adsbygoogle = (window as unknown as Record<string, unknown>).adsbygoogle;
      if (adsbygoogle && Array.isArray(adsbygoogle)) {
        adsbygoogle.push({});
      }
    } catch {
      // Silently fail
    }
  }, []);

  return (
    <div className={cn('my-6 flex justify-center', className)}>
      <div className="ad-container min-h-[90px] w-full max-w-[728px]" ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
