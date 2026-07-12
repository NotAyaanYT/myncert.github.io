import { BadgeCheck } from 'lucide-react';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export function UpdateBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800">
      <BadgeCheck className="h-3.5 w-3.5" />
      Updated for NCERT {CURRENT_ACADEMIC_YEAR}
    </div>
  );
}
