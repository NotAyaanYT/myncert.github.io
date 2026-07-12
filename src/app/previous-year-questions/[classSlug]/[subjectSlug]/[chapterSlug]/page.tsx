import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getClassBySlug, getSubjectBySlug } from '@/data/classes';
import { getChapterBySlug } from '@/data/chapters';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';
import { PyqContent } from './content';

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
    title: `${cls.name} ${subject.name} Chapter ${chapter.chapterNumber}: ${chapter.title} PYQs (${CURRENT_ACADEMIC_YEAR})`,
    description: `Practice CBSE previous year questions for ${cls.name} ${subject.name} Chapter ${chapter.chapterNumber} - ${chapter.title} with detailed solutions. Based on NCERT ${CURRENT_ACADEMIC_YEAR} syllabus.`,
    openGraph: {
      title: `${chapter.title} - ${cls.name} ${subject.name} Previous Year Questions`,
      description: `Free CBSE PYQs for ${chapter.title} with solutions. Updated for ${CURRENT_ACADEMIC_YEAR}.`,
    },
  };
}

export default async function PyqChapterPage({ params }: Props) {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  const cls = getClassBySlug(classSlug);
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  const chapter = getChapterBySlug(classSlug, subjectSlug, chapterSlug);
  if (!cls || !subject || !chapter) notFound();

  return <PyqContent cls={cls} subject={subject} chapter={chapter} />;
}
