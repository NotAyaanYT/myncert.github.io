import { Metadata } from 'next';
import { Calculator } from 'lucide-react';
import { classData } from '@/data/classes';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureClassCard } from '@/components/ui/FeatureClassCard';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export const metadata: Metadata = {
  title: `NCERT Formula Sheets (${CURRENT_ACADEMIC_YEAR}) - Free Formula Sheets`,
  description: `Free chapter-wise formula sheets for NCERT Maths, Physics, and Chemistry for Classes 6 to 12 based on the latest ${CURRENT_ACADEMIC_YEAR} syllabus. Downloadable formula reference.`,
  openGraph: {
    title: `NCERT Formula Sheets ${CURRENT_ACADEMIC_YEAR}`,
    description: `Free chapter-wise NCERT formula sheets for Maths, Physics, Chemistry. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
  },
};

export default function FormulaSheetsLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Formula Sheets', href: '/formula-sheets' }]}
        title="NCERT Formula Sheets"
        titleAccent={`(${CURRENT_ACADEMIC_YEAR})`}
        subtitle="Chapter-wise formula sheets for NCERT Mathematics, Physics, and Chemistry based on the latest syllabus. Quick reference for all important formulas."
        badge={`Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
        badgeIcon={<Calculator className="h-3.5 w-3.5" />}
        gradient="orange"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
          {classData.map((cls, index) => (
            <FeatureClassCard
              key={cls.slug}
              name={cls.name}
              slug={cls.slug}
              description={cls.description}
              featurePath="formula-sheets"
              gradient="orange"
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
