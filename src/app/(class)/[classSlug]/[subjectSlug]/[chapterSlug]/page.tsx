import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookOpen, BadgeCheck, Library } from 'lucide-react';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug, getExercisesForChapter } from '@/data/chapters';
import { PageHeader } from '@/components/ui/PageHeader';
import { ChapterHubClient } from '@/components/chapter/ChapterHubClient';
import { CURRENT_ACADEMIC_YEAR, siteConfig } from '@/lib/constants';

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
    description: `Get free NCERT Solutions for ${cls.name} ${subject.name} Chapter ${chapter.chapterNumber}: ${chapter.title}. Step-by-step exercise solutions, notes, MCQs, worksheets, and more.`,
  };
}

export default async function ChapterPage({ params }: Props) {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) notFound();

  const exercises = getExercisesForChapter(classSlug, subjectSlug, chapterSlug);
  const canonicalUrl = `${siteConfig.url}/${cls.slug}/${subject.slug}/${chapter.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        breadcrumbs={[
          { label: cls.name, href: `/${cls.slug}` },
          { label: subject.name, href: `/${cls.slug}/${subject.slug}` },
          { label: `Chapter ${chapter.chapterNumber}: ${chapter.title}`, href: `/${cls.slug}/${subject.slug}/${chapter.slug}` },
        ]}
        title={`Chapter ${chapter.chapterNumber}`}
        titleAccent={chapter.title}
        subtitle={`${cls.name} ${subject.name} - Complete study material for Chapter ${chapter.chapterNumber} based on the NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Includes solutions, notes, MCQs, worksheets, and more.`}
        badge={`NCERT ${CURRENT_ACADEMIC_YEAR}`}
        badgeIcon={<BadgeCheck className="h-3.5 w-3.5" />}
        gradient="blue"
      >
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full border border-white/10">
            <Library className="h-3.5 w-3.5" />
            Study Hub
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full border border-white/10">
            <BookOpen className="h-3.5 w-3.5" />
            {exercises.length} Exercises
          </div>
        </div>
      </PageHeader>

      <ChapterHubClient
        cls={cls}
        subject={subject}
        chapter={chapter}
        exercises={exercises}
        canonicalUrl={canonicalUrl}
      />
    </div>
  );
}
