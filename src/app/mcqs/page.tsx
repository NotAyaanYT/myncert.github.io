import { Metadata } from 'next';
import { HelpCircle } from 'lucide-react';
import { classData } from '@/data/classes';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureClassCard } from '@/components/ui/FeatureClassCard';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export const metadata: Metadata = {
  title: `NCERT MCQs (${CURRENT_ACADEMIC_YEAR}) - Chapter-wise Multiple Choice Questions`,
  description: `Free chapter-wise NCERT MCQs for Classes 6 to 12 based on the latest ${CURRENT_ACADEMIC_YEAR} syllabus. Practice multiple choice questions with instant answers and explanations.`,
  openGraph: {
    title: `NCERT MCQs ${CURRENT_ACADEMIC_YEAR}`,
    description: `Free chapter-wise NCERT MCQs for Classes 6-12. Practice and test your knowledge. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
  },
};

export default function McqLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'MCQs', href: '/mcqs' }]}
        title="NCERT Multiple Choice Questions"
        titleAccent={`(${CURRENT_ACADEMIC_YEAR})`}
        subtitle="Chapter-wise multiple choice questions for all NCERT subjects based on the latest syllabus. Test your knowledge with interactive MCQs."
        badge={`Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
        badgeIcon={<HelpCircle className="h-3.5 w-3.5" />}
        gradient="teal"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
          {classData.map((cls, index) => (
            <FeatureClassCard
              key={cls.slug}
              name={cls.name}
              slug={cls.slug}
              description={cls.description}
              featurePath="mcqs"
              gradient="teal"
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
