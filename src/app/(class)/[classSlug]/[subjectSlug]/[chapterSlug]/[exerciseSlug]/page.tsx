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
import { renderMarkdown } from '@/lib/markdown';

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

  // Pre-render content and solution as HTML using markdown
  const renderedQuestions = await Promise.all(
    questions.map(async (q) => ({
      ...q,
      renderedContent: await renderMarkdown(q.content),
      renderedSolution: await renderMarkdown(q.solution),
    }))
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Gradient header */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-[0.06]" />
        <div className="absolute top-0 -right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <Breadcrumb
            items={[
              { label: cls.name, href: `/${cls.slug}` },
              { label: subject.name, href: `/${cls.slug}/${subject.slug}` },
              { label: `Ch ${chapter.chapterNumber}: ${chapter.title}`, href: `/${cls.slug}/${subject.slug}/${chapter.slug}` },
              { label: exercise.title, href: url },
            ]}
            className="mb-6 [&_a]:text-blue-200 [&_a:hover]:text-white [&_span]:text-white/80 [&_svg]:text-blue-300"
          />

          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full border border-white/10 mb-4">
              <BadgeCheck className="h-3.5 w-3.5" />
              Updated for NCERT 2026–27
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {subject.name} - {exercise.title}
                </h1>
                <p className="text-base text-blue-100/70 mt-1">
                  Chapter {chapter.chapterNumber}: {chapter.title} | {cls.name}
                </p>
              </div>
              <ShareButtons url={url} title={title} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <AdContainer slot="1234567890" format="horizontal" />

        {questions.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
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
          <div className="space-y-6 mt-6">
            {renderedQuestions.map((question, index) => (
              <div
                key={question.id}
                id={`q${question.questionNumber}`}
                className="group bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-0.5 animate-slide-up scroll-mt-24"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Question section */}
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md shadow-blue-500/20 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <FileQuestion className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                          <Link
                            href={`/${classSlug}/${subjectSlug}/${chapterSlug}/${exerciseSlug}/${question.questionNumber}`}
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            Question {question.questionNumber}
                          </Link>
                        </h2>
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                          question.difficulty === 'easy' ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800' :
                          question.difficulty === 'medium' ? 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800' :
                          'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800'
                        }`}>
                          {question.difficulty}
                        </span>
                      </div>
                      <div
                        className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: question.renderedContent }}
                      />
                    </div>
                  </div>
                </div>

                {/* Solution section */}
                <div className="border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-green-50/50 to-transparent dark:from-green-900/5 dark:to-transparent p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-md shadow-green-500/20 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                        Solution
                        {question.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-normal text-gray-500 dark:text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </h3>
                      <div
                        className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: question.renderedSolution }}
                      />
                    </div>
                  </div>
                </div>

                {/* Question footer */}
                <div className="border-t border-gray-200 dark:border-gray-700 px-5 md:px-6 py-3 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/30">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                      Answered
                    </span>
                  </div>
                  <Link
                    href={`/${classSlug}/${subjectSlug}/${chapterSlug}/${exerciseSlug}/${question.questionNumber}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 active:scale-95"
                  >
                    View Full Solution
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <AdContainer slot="1234567891" format="horizontal" />

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            href={`/${cls.slug}/${subject.slug}/${chapter.slug}`}
            className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Chapter
          </Link>
          <Link
            href={`/${cls.slug}/${subject.slug}`}
            className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            All Chapters
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
