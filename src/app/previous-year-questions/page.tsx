import { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { classData } from '@/data/classes';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureClassCard } from '@/components/ui/FeatureClassCard';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export const metadata: Metadata = {
  title: `CBSE Previous Year Questions (${CURRENT_ACADEMIC_YEAR}) - Chapter-wise PYQs`,
  description: `Free chapter-wise CBSE previous year questions for Classes 6 to 12 based on the latest ${CURRENT_ACADEMIC_YEAR} syllabus. Practice PYQs with solutions.`,
  openGraph: {
    title: `CBSE Previous Year Questions ${CURRENT_ACADEMIC_YEAR}`,
    description: `Free chapter-wise CBSE PYQs for Classes 6-12 with solutions. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
  },
};

export default function PyqLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Previous Year Questions', href: '/previous-year-questions' }]}
        title="CBSE Previous Year Questions"
        titleAccent={`(${CURRENT_ACADEMIC_YEAR})`}
        subtitle="Chapter-wise CBSE previous year questions with detailed solutions. Practice questions from past board exams to understand the pattern and difficulty level."
        badge={`Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
        badgeIcon={<FileText className="h-3.5 w-3.5" />}
        gradient="rose"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 page-enter">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
          {classData.map((cls, index) => (
            <FeatureClassCard
              key={cls.slug}
              name={cls.name}
              slug={cls.slug}
              description={cls.description}
              featurePath="previous-year-questions"
              gradient="rose"
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
