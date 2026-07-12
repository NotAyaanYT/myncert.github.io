import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, FileText } from 'lucide-react';
import { classData, getClassBySlug } from '@/data/classes';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string }>;
}

export async function generateStaticParams() {
  return classData.map((c) => ({ classSlug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug } = await params;
  const cls = getClassBySlug(classSlug);
  if (!cls) return {};
  return {
    title: `CBSE Sample Papers for ${cls.name} (${CURRENT_ACADEMIC_YEAR}) - All Subjects`,
    description: `Download free CBSE sample papers for ${cls.name} based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Practice with latest sample question papers.`,
  };
}

export default async function SamplePapersClassPage({ params }: Props) {
  const { classSlug } = await params;
  const cls = getClassBySlug(classSlug);
  if (!cls) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Sample Papers', href: '/sample-papers' },
            { label: cls.name, href: `/sample-papers/${cls.slug}` },
          ]}
        />
        <div className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <FileText className="h-3.5 w-3.5" />
            Updated for NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {cls.name} <span className="text-blue-600">Sample Papers</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            CBSE sample papers for {cls.name} covering all subjects based on the latest board exam pattern.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cls.subjects.map((subject, index) => (
            <Link
              key={subject.id}
              href={`/sample-papers/${cls.slug}/${subject.slug}`}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600 transition-all hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-xl w-fit mb-4">
                <BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors">
                {subject.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{subject.description}</p>
              <div className="flex items-center text-sm text-amber-600 dark:text-amber-400 font-medium">
                <span>View Sample Papers</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
