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
      {/* Gradient header */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-[0.06]" />
        <div className="absolute top-0 -right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <Breadcrumb
            items={[
              { label: cls.name, href: `/${cls.slug}` },
              { label: subject.name, href: `/${cls.slug}/${subject.slug}` },
              { label: `Chapter ${chapter.chapterNumber}: ${chapter.title}`, href: `/${cls.slug}/${subject.slug}/${chapter.slug}` },
            ]}
            className="mb-6 [&_a]:text-blue-200 [&_a:hover]:text-white [&_span]:text-white/80 [&_svg]:text-blue-300"
          />
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full border border-white/10 mb-4">
              <BadgeCheck className="h-3.5 w-3.5" />
              Updated for NCERT {CURRENT_ACADEMIC_YEAR}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Chapter {chapter.chapterNumber}:{' '}
              <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                {chapter.title}
              </span>
            </h1>
            <p className="text-lg text-blue-100/80 max-w-3xl leading-relaxed">
              {cls.name} {subject.name} - Complete NCERT solutions for Chapter {chapter.chapterNumber} based on the NCERT {CURRENT_ACADEMIC_YEAR} syllabus.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
      </div>

      {/* Exercises section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {exercises.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Exercises Coming Soon</h2>
            <p className="text-gray-400 dark:text-gray-500 mt-2">Exercise solutions are being added for this chapter.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Exercises
              </h2>
              <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                {exercises.length} exercises
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {exercises.map((exercise, index) => (
                <Link
                  key={exercise.id}
                  href={`/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}`}
                  className="group relative p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exercise.title}
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 mt-3 ml-10">
                    <span>View Questions</span>
                    <ArrowRight className="h-3 w-3 ml-1.5 transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
