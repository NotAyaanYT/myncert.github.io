import { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { classData } from '@/data/classes';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureClassCard } from '@/components/ui/FeatureClassCard';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

export const metadata: Metadata = {
  title: `NCERT Sample Papers (${CURRENT_ACADEMIC_YEAR}) - Free CBSE Sample Question Papers`,
  description: `Download free CBSE sample papers for all NCERT Classes 6 to 12 based on the latest ${CURRENT_ACADEMIC_YEAR} syllabus. Practice with official sample question papers.`,
  openGraph: {
    title: `CBSE Sample Papers ${CURRENT_ACADEMIC_YEAR}`,
    description: `Free CBSE sample question papers for Classes 6-12. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
  },
};

export default function SamplePapersLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[{ label: 'Sample Papers', href: '/sample-papers' }]}
        title="CBSE Sample Papers"
        titleAccent={`(${CURRENT_ACADEMIC_YEAR})`}
        subtitle="Free CBSE sample question papers for all classes and subjects based on the latest syllabus. Practice with official pattern papers."
        badge={`Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
        badgeIcon={<FileText className="h-3.5 w-3.5" />}
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
              featurePath="sample-papers"
              gradient="amber"
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
