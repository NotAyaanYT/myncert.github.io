import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookOpen, MessageSquare } from 'lucide-react';
import { classData, getClassBySlug } from '@/data/classes';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug } = await params;
  const cls = getClassBySlug(classSlug);
  if (!cls) return {};
  return {
    title: `Doubt Section - ${cls.name} NCERT (${CURRENT_ACADEMIC_YEAR})`,
    description: `Ask and answer NCERT doubts for ${cls.name} based on the official NCERT ${CURRENT_ACADEMIC_YEAR} syllabus.`,
  };
}

export function generateStaticParams() {
  return classData.map((cls) => ({ classSlug: cls.slug }));
}

export default async function DoubtClassPage({ params }: Props) {
  const { classSlug } = await params;
  const cls = getClassBySlug(classSlug);
  if (!cls) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'Doubt Section', href: '/doubt' },
            { label: cls.name, href: `/doubt/${cls.slug}` },
          ]}
        />
        <div className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <MessageSquare className="h-3.5 w-3.5" />
            Updated for NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-600">{cls.name}</span> Doubt Section
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Browse doubts by subject for {cls.name}. Ask questions and help fellow students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cls.subjects.map((subject, index) => (
            <Link
              key={subject.id}
              href={`/doubt/${cls.slug}/${subject.slug}`}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-md animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{subject.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subject.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
