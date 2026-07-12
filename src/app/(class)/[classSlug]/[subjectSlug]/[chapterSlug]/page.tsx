import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, BadgeCheck } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug, getExercisesForChapter } from '@/data/chapters';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) return {};
  return {
    title: `NCERT Solutions for ${cls.name} ${subject.name} Chapter ${chapter.chapterNumber} - ${chapter.title}`,
    description: `Get free NCERT Solutions for ${cls.name} ${subject.name} Chapter ${chapter.chapterNumber}: ${chapter.title}. Step-by-step exercise solutions.`,
  };
}

export default async function ChapterPage({ params }: Props) {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) notFound();

  const exercises = getExercisesForChapter(classSlug, subjectSlug, chapterSlug);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: cls.name, href: `/${cls.slug}` },
            { label: subject.name, href: `/${cls.slug}/${subject.slug}` },
            { label: `Chapter ${chapter.chapterNumber}: ${chapter.title}`, href: `/${cls.slug}/${subject.slug}/${chapter.slug}` },
          ]}
        />
        <div className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
            <BadgeCheck className="h-3.5 w-3.5" />
            Updated for NCERT {CURRENT_ACADEMIC_YEAR}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Chapter {chapter.chapterNumber}: <span className="text-blue-600">{chapter.title}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            {cls.name} {subject.name} - Complete NCERT solutions for Chapter {chapter.chapterNumber} based on the NCERT {CURRENT_ACADEMIC_YEAR} syllabus.
          </p>
        </div>

        {exercises.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Exercises Coming Soon</h2>
            <p className="text-gray-400 dark:text-gray-500 mt-2">Exercise solutions are being added for this chapter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercises.map((exercise, index) => (
              <Link
                key={exercise.id}
                href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}`}
                className="group p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-md animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {exercise.title}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium mt-3 ml-10">
                  <span>View Questions</span>
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
