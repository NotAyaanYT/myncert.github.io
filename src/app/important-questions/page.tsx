import { Metadata } from 'next';
import { Star } from 'lucide-react';
import { classData } from '@/data/classes';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureClassCard } from '@/components/ui/FeatureClassCard';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export const metadata: Metadata = {
  title: `NCERT Important Questions (${CURRENT_ACADEMIC_YEAR}) - Chapter-wise with Solutions`,
  description: `Free chapter-wise important questions for NCERT Classes 6 to 12 with detailed solutions based on the latest ${CURRENT_ACADEMIC_YEAR} syllabus. Perfect for exam preparation.`,
  openGraph: {
    title: `NCERT Important Questions ${CURRENT_ACADEMIC_YEAR}`,
    description: `Chapter-wise important questions with solutions for Classes 6-12. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
  },
};

export default function ImportantQuestionsLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Important Questions', href: '/important-questions' }]}
        title="NCERT Important Questions"
        titleAccent={`(${CURRENT_ACADEMIC_YEAR})`}
        subtitle="Chapter-wise important questions with detailed solutions for all NCERT subjects. Carefully selected to help you prepare effectively for your exams."
        badge={`Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
        badgeIcon={<Star className="h-3.5 w-3.5" />}
        gradient="purple"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
          {classData.map((cls, index) => (
            <FeatureClassCard
              key={cls.slug}
              name={cls.name}
              slug={cls.slug}
              description={cls.description}
              featurePath="important-questions"
              gradient="purple"
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
