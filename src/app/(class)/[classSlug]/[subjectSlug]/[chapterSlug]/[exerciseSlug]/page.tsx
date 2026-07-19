import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, FileQuestion, BadgeCheck } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug, getExerciseBySlug } from '@/data/chapters';
import { questionData } from '@/data/questions';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { AdContainer } from '@/components/ui/AdContainer';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string; exerciseSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug, chapterSlug, exerciseSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  const exercise = getExerciseBySlug(classSlug, subjectSlug, chapterSlug, exerciseSlug);
  if (!cls || !subject || !chapter || !exercise) return {};
  const key = `${classSlug}-${subjectSlug}-${chapterSlug}-${exerciseSlug}`;
  const questions = questionData[key] || [];
  const questionCount = questions.length;
  return {
    title: questionCount > 0
      ? `NCERT Solutions for ${cls.name} ${subject.name} ${exercise.title} - Chapter ${chapter.chapterNumber}`
      : `${cls.name} ${subject.name} ${exercise.title} - NCERT Solutions (Coming Soon)`,
    description: questionCount > 0
      ? `Get free NCERT Solutions for ${cls.name} ${subject.name} ${exercise.title} of Chapter ${chapter.chapterNumber}: ${chapter.title}. Step-by-step solutions for all ${questionCount} questions.`
      : `Free NCERT Solutions for ${cls.name} ${subject.name} ${exercise.title} of Chapter ${chapter.chapterNumber}: ${chapter.title}. Detailed solutions are being added — check back soon!`,
  };
}

export default async function ExercisePage({ params }: Props) {
  const { classSlug, subjectSlug, chapterSlug, exerciseSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  const exercise = getExerciseBySlug(classSlug, subjectSlug, chapterSlug, exerciseSlug);
  if (!cls || !subject || !chapter || !exercise) notFound();

  const url = `/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}`;
  const title = `${cls.name} ${subject.name} ${exercise.title}`;
  const key = `${classSlug}-${subjectSlug}-${chapterSlug}-${exerciseSlug}`;
  const questions = questionData[key] || [];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Breadcrumb
          items={[
            { label: cls.name, href: `/${cls.slug}` },
            { label: subject.name, href: `/${cls.slug}/${subject.slug}` },
            { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/${cls.slug}/${subject.slug}/${chapter.slug}` },
            { label: exercise.title, href: url },
          ]}
        />

        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800">
              <BadgeCheck className="h-3.5 w-3.5" />
              Updated for NCERT 2026–27
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {subject.name} - {exercise.title}
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                Chapter {chapter.chapterNumber}: {chapter.title} | {cls.name}
              </p>
            </div>
            <ShareButtons url={url} title={title} />
          </div>
        </div>

        <AdContainer slot="1234567890" format="horizontal" />

        {questions.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-900/20 ring-1 ring-amber-200 dark:ring-amber-800">
              <BookOpen className="h-10 w-10 text-amber-500 dark:text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Solutions Coming Soon
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
              We&apos;re currently adding accurate NCERT solutions for this exercise. Check back soon for step-by-step answers to all questions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`/${cls.slug}/${subject.slug}/${chapter.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Chapter
              </Link>
              <Link
                href={`/${cls.slug}/${subject.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
                Browse All Exercises
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-8 mt-8">
            {questions.map((question, index) => (
              <div
                key={question.id}
                id={`q${question.questionNumber}`}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-up scroll-mt-24"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                      <FileQuestion className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                          <Link
                            href={`/${classSlug}/${subjectSlug}/${chapterSlug}/${exerciseSlug}/${question.questionNumber}`}
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            Question {question.questionNumber}
                          </Link>
                        </h2>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          question.difficulty === 'easy' ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                          question.difficulty === 'medium' ? 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                          'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                        }`}>
                          {question.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                        {question.content}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-green-700 dark:text-green-400 mb-3">
                        Solution
                      </h3>
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        {question.solution.split('\n').map((line, i) => (
                          <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-1">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Answered
                    </span>
                    {question.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/${classSlug}/${subjectSlug}/${chapterSlug}/${exerciseSlug}/${question.questionNumber}`}
                      className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Full Solution
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <AdContainer slot="1234567891" format="horizontal" />

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            href={`/${cls.slug}/${subject.slug}/${chapter.slug}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Chapter
          </Link>
          <Link
            href={`/${cls.slug}/${subject.slug}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            All Chapters
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
