import { Metadata } from 'next';
import { FileSpreadsheet } from 'lucide-react';
import { classData } from '@/data/classes';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureClassCard } from '@/components/ui/FeatureClassCard';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export const metadata: Metadata = {
  title: `NCERT Worksheets (${CURRENT_ACADEMIC_YEAR}) - Free Printable Practice Worksheets`,
  description: `Free chapter-wise NCERT practice worksheets for Classes 6 to 12 based on the latest ${CURRENT_ACADEMIC_YEAR} syllabus. Interactive worksheets with answer keys.`,
  openGraph: {
    title: `NCERT Worksheets ${CURRENT_ACADEMIC_YEAR}`,
    description: `Free chapter-wise NCERT worksheets for Classes 6-12. Practice with interactive questions. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
  },
};

export default function WorksheetsLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Worksheets', href: '/worksheets' }]}
        title="NCERT Practice Worksheets"
        titleAccent={`(${CURRENT_ACADEMIC_YEAR})`}
        subtitle="Chapter-wise interactive practice worksheets for all NCERT subjects based on the latest syllabus. Solve questions and check your answers instantly."
        badge={`Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
        badgeIcon={<FileSpreadsheet className="h-3.5 w-3.5" />}
        gradient="amber"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
          {classData.map((cls, index) => (
            <FeatureClassCard
              key={cls.slug}
              name={cls.name}
              slug={cls.slug}
              description={cls.description}
              featurePath="worksheets"
              gradient="amber"
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
