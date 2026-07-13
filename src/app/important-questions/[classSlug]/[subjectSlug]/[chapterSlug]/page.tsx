import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug } from '@/data/chapters';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';
import ImportantQuestionsContent from './content';

interface Props {
  params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string }>;
  searchParams: Promise<{ version?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) return {};
  return {
    title: `${cls.name} ${subject.name} Chapter ${chapter.chapterNumber}: ${chapter.title} Important Questions (${CURRENT_ACADEMIC_YEAR})`,
    description: `Practice important questions for ${cls.name} ${subject.name} Chapter ${chapter.chapterNumber} - ${chapter.title} with detailed solutions. Based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus.`,
    openGraph: {
      title: `${chapter.title} - ${cls.name} ${subject.name} Important Questions`,
      description: `Free NCERT important questions for ${chapter.title} with solutions. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
    },
  };
}

export default async function ImportantQuestionsChapterPage({ params, searchParams }: Props) {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) notFound();

  return <ImportantQuestionsContent params={params} searchParams={searchParams} />;
}
