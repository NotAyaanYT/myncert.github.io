import { permanentRedirect } from 'next/navigation';

export default async function WorksheetsRedirect({
  params,
}: {
  params: Promise<{ classSlug: string; subjectSlug: string; chapterSlug: string }>;
}) {
  const { classSlug, subjectSlug, chapterSlug } = await params;
  permanentRedirect(`/${classSlug}/${subjectSlug}/${chapterSlug}?tab=worksheets`);
}
