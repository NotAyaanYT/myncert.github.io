import { MetadataRoute } from 'next';
import { classData } from '@/data/classes';
import { chapterData } from '@/data/chapters';
import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

// Sitemap for NCERT 2026-27 syllabus content
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ncertsolutionshub.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/dmca`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/sitemap`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/notes`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/sample-papers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/mcqs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/previous-year-questions`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
  ];

  const classPages: MetadataRoute.Sitemap = classData.map((cls) => ({
    url: `${baseUrl}/${cls.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const subjectPages: MetadataRoute.Sitemap = classData.flatMap((cls) =>
    cls.subjects.map((subject) => ({
      url: `${baseUrl}/${cls.slug}/${subject.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  const chapterPages: MetadataRoute.Sitemap = [];
  for (const [key, chapters] of Object.entries(chapterData)) {
    const parts = key.split('-');
    const clsNum = parts[1];
    const subjectKey = parts.slice(2).join('-');
    if (clsNum && subjectKey) {
      chapters.forEach((chapter) => {
        chapterPages.push({
          url: `${baseUrl}/class-${clsNum}/${subjectKey}/${chapter.slug}`,
          lastModified: new Date(),
          changeFrequency: 'daily' as const,
          priority: 0.7,
        });
      });
    }
  }

  return [...staticPages, ...classPages, ...subjectPages, ...chapterPages];
}
