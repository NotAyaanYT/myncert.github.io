import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, Timer } from 'lucide-react';
import { classData, getClassBySlug, getSubjectBySlug } from '@/data/classes';
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
    title: `${cls.name} ${subject.name} Chapter Tests (${CURRENT_ACADEMIC_YEAR}) - Free Timed Practice`,
    description: `Take free chapter-wise timed tests for ${cls.name} ${subject.name} based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. 20 questions, 45-minute timer.`,
  };
}

export default async function ChapterTestsSubjectPage({ params }: Props) {
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
            { label: 'Chapter Tests', href: '/chapter-tests' },
            { label: cls.name, href: `/chapter-tests/${cls.slug}` },
            { label: subject.name, href: `/chapter-tests/${cls.slug}/${subject.slug}` },
          ]}
        />
        <div className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <Timer className="h-3.5 w-3.5" />
            Updated for NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {cls.name} {subject.name} <span className="text-blue-600">Chapter Tests</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Chapter-wise timed practice tests for {cls.name} {subject.name}. Each test has 20 questions with a 45-minute countdown timer.
          </p>
        </div>

        {chapters.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Coming Soon</h2>
            <p className="text-gray-400 dark:text-gray-500 mt-2">Chapter tests are being added.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((chapter, index) => (
              <Link
                key={chapter.id}
                href={`/chapter-tests/${cls.slug}/${subject.slug}/${chapter.slug}`}
                className="group p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 transition-all hover:shadow-md animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-50 dark:bg-red-900/30 rounded-lg flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">
                      Chapter {chapter.chapterNumber}: {chapter.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{chapter.description}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-red-600 dark:text-red-400 font-medium mt-3 ml-10">
                  <span>Start Test</span>
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
