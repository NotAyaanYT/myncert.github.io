import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, HelpCircle } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChaptersForSubject } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  if (!cls || !subject) return {};
  return {
    title: `${cls.name} ${subject.name} MCQs (${CURRENT_ACADEMIC_YEAR}) - Chapter-wise`,
    description: `Get free chapter-wise MCQs for ${cls.name} ${subject.name} based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Practice multiple choice questions with instant answers.`,
  };
}

export default async function McqSubjectPage({ params }: Props) {
  const { classSlug, subjectSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  if (!cls || !subject) notFound();

  const chapters = getChaptersForSubject(classSlug, subjectSlug);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: 'MCQs', href: '/mcqs' },
            { label: cls.name, href: `/mcqs/${cls.slug}` },
            { label: subject.name, href: `/mcqs/${cls.slug}/${subject.slug}` },
          ]}
        />
        <div className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            Updated for NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {cls.name} {subject.name} <span className="text-blue-600">MCQs</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Chapter-wise MCQs for {cls.name} {subject.name}. Practice and test your understanding of each chapter.
          </p>
        </div>

        {chapters.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Coming Soon</h2>
            <p className="text-gray-400 dark:text-gray-500 mt-2">MCQs are being added.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((chapter, index) => (
              <Link
                key={chapter.id}
                href={`/mcqs/${cls.slug}/${subject.slug}/${chapter.slug}`}
                className="group p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 transition-all hover:shadow-md animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 transition-colors">
                      Chapter {chapter.chapterNumber}: {chapter.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{chapter.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-teal-600 dark:text-teal-400 font-medium mt-3 ml-10">
                  <span>Practice MCQs</span>
                  <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
