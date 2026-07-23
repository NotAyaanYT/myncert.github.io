import { Metadata } from 'next';
import { Timer } from 'lucide-react';
import { classData } from '@/data/classes';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureClassCard } from '@/components/ui/FeatureClassCard';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export const metadata: Metadata = {
  title: `NCERT Chapter Tests (${CURRENT_ACADEMIC_YEAR}) - Free Timed Practice Tests`,
  description: `Free chapter-wise timed practice tests for all NCERT subjects from Classes 6 to 12 based on the latest ${CURRENT_ACADEMIC_YEAR} syllabus. Test your knowledge with 20-question tests.`,
  openGraph: {
    title: `NCERT Chapter Tests ${CURRENT_ACADEMIC_YEAR}`,
    description: `Free chapter-wise NCERT timed tests for Classes 6-12. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
  },
};

export default function ChapterTestsLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Chapter Tests', href: '/chapter-tests' }]}
        title="NCERT Chapter Tests"
        titleAccent={`(${CURRENT_ACADEMIC_YEAR})`}
        subtitle="Chapter-wise timed practice tests for all NCERT subjects. Each test has 20 questions with a 45-minute timer. Perfect for exam preparation."
        badge={`Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
        badgeIcon={<Timer className="h-3.5 w-3.5" />}
        gradient="red"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
          {classData.map((cls, index) => (
            <FeatureClassCard
              key={cls.slug}
              name={cls.name}
              slug={cls.slug}
              description={cls.description}
              featurePath="chapter-tests"
              gradient="red"
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
