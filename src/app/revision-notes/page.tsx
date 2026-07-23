import { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { classData } from '@/data/classes';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureClassCard } from '@/components/ui/FeatureClassCard';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export const metadata: Metadata = {
  title: `NCERT Revision Notes (${CURRENT_ACADEMIC_YEAR}) - Free Chapter-wise Notes`,
  description: `Comprehensive chapter-wise revision notes for all NCERT subjects from Classes 6 to 12 based on the latest ${CURRENT_ACADEMIC_YEAR} syllabus. Download free PDF revision notes.`,
  openGraph: {
    title: `NCERT Revision Notes ${CURRENT_ACADEMIC_YEAR}`,
    description: `Free chapter-wise NCERT revision notes for Classes 6-12. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
  },
};

export default function RevisionNotesLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Revision Notes', href: '/revision-notes' }]}
        title="NCERT Revision Notes"
        titleAccent={`(${CURRENT_ACADEMIC_YEAR})`}
        subtitle="Comprehensive chapter-wise revision notes for all NCERT subjects based on the latest syllabus. Perfect for quick revision before exams."
        badge={`Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
        badgeIcon={<FileText className="h-3.5 w-3.5" />}
        gradient="indigo"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
          {classData.map((cls, index) => (
            <FeatureClassCard
              key={cls.slug}
              name={cls.name}
              slug={cls.slug}
              description={cls.description}
              featurePath="revision-notes"
              gradient="indigo"
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
