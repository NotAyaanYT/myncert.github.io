'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, HelpCircle } from 'lucide-react';
import { SyllabusVersion } from '@/data/classes';

interface McqSubjectClientProps {
  cls: {
    id: string;
    name: string;
    slug: string;
  };
  subject: {
    id: string;
    name: string;
    slug: string;
    versions: Array<{
      version: string;
      year: string;
      bookName: string;
      description: string;
      chaptersKey: string;
    }>;
    defaultVersion: string;
  };
  versionData: {
    version: string;
    year: string;
    bookName: string;
    description: string;
    chaptersKey: string;
  } | undefined;
  chapters: Array<{
    id: string;
    title: string;
    slug: string;
    chapterNumber: number;
    description: string;
  }>;
  selectedVersion: SyllabusVersion;
  CURRENT_ACADEMIC_YEAR: string;
}

export default function McqSubjectClient({
  cls,
  subject,
  versionData,
  chapters,
  selectedVersion,
  CURRENT_ACADEMIC_YEAR,
}: McqSubjectClientProps) {
  const [version, setVersion] = useState<SyllabusVersion>(selectedVersion);

  const availableVersions = subject.versions.map(v => ({
    version: v.version,
    year: v.year,
    bookName: v.bookName,
  }));

  const handleVersionChange = (newVersion: SyllabusVersion) => {
    setVersion(newVersion);
    const params = new URLSearchParams();
    params.set('version', newVersion);
    window.location.search = params.toString();
  };

  return (
    <div className="mb-10 animate-fade-in">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800 mb-4">
        <HelpCircle className="h-3.5 w-3.5" />
        {versionData ? `${versionData.year} - ${versionData.bookName}` : `Updated for NCERT ${CURRENT_ACADEMIC_YEAR}`}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {cls.name} {subject.name} <span className="text-blue-600">MCQs</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Chapter-wise MCQs for {cls.name} {subject.name} ({versionData?.bookName || 'NCERT'} - {versionData?.year || CURRENT_ACADEMIC_YEAR}). Practice and test your understanding of each chapter.
          </p>
        </div>
        {/* Version Selector */}
        {subject.versions.length > 1 && (
          <div className="flex items-center gap-2">
            <label htmlFor="version-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Syllabus Version:
            </label>
            <select
              id="version-select"
              value={version}
              onChange={(e) => handleVersionChange(e.target.value as SyllabusVersion)}
              className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {subject.versions.map(v => (
                <option key={v.version} value={v.version}>
                  {v.year} - {v.bookName}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {chapters.length === 0 ? (
        <div className="text-center py-20">
          <svg className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">Coming Soon</h2>
          <p className="text-gray-400 dark:text-gray-500 mt-2">MCQs are being added for {versionData?.bookName || 'this version'}.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((chapter, index) => (
            <a
              key={chapter.id}
              href={`/${cls.slug}/${subject.slug}/${chapter.slug}?tab=mcqs`}
              className="group p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 transition-all hover:shadow-md animate-slide-up"
              style={{ animationDelay: index * 0.05 + 's' }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg flex-shrink-0">
                  <svg className="h-5 w-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 transition-colors">
                    Chapter {chapter.chapterNumber}: {chapter.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{chapter.description}</p>
                </div>
                <div className="flex items-center text-sm text-teal-600 dark:text-teal-400 font-medium mt-3 ml-10">
                  <span>Practice MCQs</span>
                  <svg className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}