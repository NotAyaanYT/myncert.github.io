import { CURRENT_ACADEMIC_YEAR } from '@/lib/constants';

// Version types for NCERT syllabus
export type SyllabusVersion = '2026-27' | 'previous';

export interface SubjectVersion {
  version: SyllabusVersion;
  year: string;
  bookName: string;
  description: string;
  chaptersKey: string; // Key used in chapterData
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  description: string;
  versions: SubjectVersion[];
  defaultVersion: SyllabusVersion;
}

export interface ClassData {
  id: string;
  name: string;
  slug: string;
  grade: number;
  description: string;
  image: string;
  subjects: Subject[];
}

// Subject versions with book names for each academic year
const subjectVersions: Record<string, SubjectVersion[]> = {
  // Class 6
  'maths-6': [
    { version: '2026-27', year: '2026-27', bookName: 'Ganita Prakash', description: `NCERT Class 6 Maths Solutions (Ganita Prakash) - 2026-27`, chaptersKey: 'class-6-mathematics' },
    { version: 'previous', year: '2023-24', bookName: 'Mathematics', description: `NCERT Class 6 Maths Solutions (Mathematics) - 2023-24`, chaptersKey: 'class-6-mathematics-previous' },
  ],
  'science-6': [
    { version: '2026-27', year: '2026-27', bookName: 'Curiosity', description: `NCERT Class 6 Science Solutions (Curiosity) - 2026-27`, chaptersKey: 'class-6-science' },
    { version: 'previous', year: '2023-24', bookName: 'Science', description: `NCERT Class 6 Science Solutions (Science) - 2023-24`, chaptersKey: 'class-6-science-previous' },
  ],
  'english-6': [
    { version: '2026-27', year: '2026-27', bookName: 'Poorvi', description: `NCERT Class 6 English Solutions (Poorvi) - 2026-27`, chaptersKey: 'class-6-english' },
    { version: 'previous', year: '2023-24', bookName: 'Honeysuckle / A Pact with the Sun', description: `NCERT Class 6 English Solutions (Honeysuckle) - 2023-24`, chaptersKey: 'class-6-english-previous' },
  ],
  'hindi-6': [
    { version: '2026-27', year: '2026-27', bookName: 'Malhar', description: `NCERT Class 6 Hindi Solutions (Malhar) - 2026-27`, chaptersKey: 'class-6-hindi' },
    { version: 'previous', year: '2023-24', bookName: 'Vasant / Durva', description: `NCERT Class 6 Hindi Solutions (Vasant) - 2023-24`, chaptersKey: 'class-6-hindi-previous' },
  ],
  'ss-6': [
    { version: '2026-27', year: '2026-27', bookName: 'Exploring Society: India and Beyond', description: `NCERT Class 6 Social Science Solutions (Exploring Society) - 2026-27`, chaptersKey: 'class-6-social-science' },
    { version: 'previous', year: '2023-24', bookName: 'Our Pasts / Social and Political Life / The Earth Our Habitat', description: `NCERT Class 6 Social Science Solutions (Previous) - 2023-24`, chaptersKey: 'class-6-social-science-previous' },
  ],
  // Class 7
  'maths-7': [
    { version: '2026-27', year: '2026-27', bookName: 'Ganita Prakash', description: `NCERT Class 7 Maths Solutions (Ganita Prakash) - 2026-27`, chaptersKey: 'class-7-mathematics' },
    { version: 'previous', year: '2023-24', bookName: 'Mathematics', description: `NCERT Class 7 Maths Solutions (Mathematics) - 2023-24`, chaptersKey: 'class-7-mathematics-previous' },
  ],
  'science-7': [
    { version: '2026-27', year: '2026-27', bookName: 'Curiosity', description: `NCERT Class 7 Science Solutions (Curiosity) - 2026-27`, chaptersKey: 'class-7-science' },
    { version: 'previous', year: '2023-24', bookName: 'Science', description: `NCERT Class 7 Science Solutions (Science) - 2023-24`, chaptersKey: 'class-7-science-previous' },
  ],
  'english-7': [
    { version: '2026-27', year: '2026-27', bookName: 'Poorvi', description: `NCERT Class 7 English Solutions (Poorvi) - 2026-27`, chaptersKey: 'class-7-english' },
    { version: 'previous', year: '2023-24', bookName: 'Honeycomb / An Alien Hand', description: `NCERT Class 7 English Solutions (Honeycomb) - 2023-24`, chaptersKey: 'class-7-english-previous' },
  ],
  'hindi-7': [
    { version: '2026-27', year: '2026-27', bookName: 'Malhar', description: `NCERT Class 7 Hindi Solutions (Malhar) - 2026-27`, chaptersKey: 'class-7-hindi' },
    { version: 'previous', year: '2023-24', bookName: 'Vasant / Durva', description: `NCERT Class 7 Hindi Solutions (Vasant) - 2023-24`, chaptersKey: 'class-7-hindi-previous' },
  ],
  'ss-7': [
    { version: '2026-27', year: '2026-27', bookName: 'Exploring Society: India and Beyond', description: `NCERT Class 7 Social Science Solutions (Exploring Society) - 2026-27`, chaptersKey: 'class-7-social-science' },
    { version: 'previous', year: '2023-24', bookName: 'Our Pasts II / Social and Political Life II / Our Environment', description: `NCERT Class 7 Social Science Solutions (Previous) - 2023-24`, chaptersKey: 'class-7-social-science-previous' },
  ],
  // Class 8
  'maths-8': [
    { version: '2026-27', year: '2026-27', bookName: 'Ganita Prakash', description: `NCERT Class 8 Maths Solutions (Ganita Prakash) - 2026-27`, chaptersKey: 'class-8-mathematics' },
    { version: 'previous', year: '2023-24', bookName: 'Mathematics', description: `NCERT Class 8 Maths Solutions (Mathematics) - 2023-24`, chaptersKey: 'class-8-mathematics-previous' },
  ],
  'science-8': [
    { version: '2026-27', year: '2026-27', bookName: 'Curiosity', description: `NCERT Class 8 Science Solutions (Curiosity) - 2026-27`, chaptersKey: 'class-8-science' },
    { version: 'previous', year: '2023-24', bookName: 'Science', description: `NCERT Class 8 Science Solutions (Science) - 2023-24`, chaptersKey: 'class-8-science-previous' },
  ],
  'english-8': [
    { version: '2026-27', year: '2026-27', bookName: 'Poorvi', description: `NCERT Class 8 English Solutions (Poorvi) - 2026-27`, chaptersKey: 'class-8-english' },
    { version: 'previous', year: '2023-24', bookName: 'Honeydew / It So Happened', description: `NCERT Class 8 English Solutions (Honeydew) - 2023-24`, chaptersKey: 'class-8-english-previous' },
  ],
  'hindi-8': [
    { version: '2026-27', year: '2026-27', bookName: 'Malhar', description: `NCERT Class 8 Hindi Solutions (Malhar) - 2026-27`, chaptersKey: 'class-8-hindi' },
    { version: 'previous', year: '2023-24', bookName: 'Vasant / Durva', description: `NCERT Class 8 Hindi Solutions (Vasant) - 2023-24`, chaptersKey: 'class-8-hindi-previous' },
  ],
  'ss-8': [
    { version: '2026-27', year: '2026-27', bookName: 'Exploring Society: India and Beyond', description: `NCERT Class 8 Social Science Solutions (Exploring Society) - 2026-27`, chaptersKey: 'class-8-social-science' },
    { version: 'previous', year: '2023-24', bookName: 'Our Pasts III / Social and Political Life III / Resources and Development', description: `NCERT Class 8 Social Science Solutions (Previous) - 2023-24`, chaptersKey: 'class-8-social-science-previous' },
  ],
  // Class 9
  'maths-9': [
    { version: '2026-27', year: '2026-27', bookName: 'Ganita Manjari', description: `NCERT Class 9 Maths Solutions (Ganita Manjari) - 2026-27`, chaptersKey: 'class-9-mathematics' },
    { version: 'previous', year: '2023-24', bookName: 'Mathematics', description: `NCERT Class 9 Maths Solutions (Mathematics) - 2023-24`, chaptersKey: 'class-9-mathematics-previous' },
  ],
  'science-9': [
    { version: '2026-27', year: '2026-27', bookName: 'Science', description: `NCERT Class 9 Science Solutions - 2026-27`, chaptersKey: 'class-9-science' },
    { version: 'previous', year: '2023-24', bookName: 'Science', description: `NCERT Class 9 Science Solutions (Previous) - 2023-24`, chaptersKey: 'class-9-science-previous' },
  ],
  'english-9': [
    { version: '2026-27', year: '2026-27', bookName: 'Beehive / Moments', description: `NCERT Class 9 English Solutions - 2026-27`, chaptersKey: 'class-9-english' },
    { version: 'previous', year: '2023-24', bookName: 'Beehive / Moments', description: `NCERT Class 9 English Solutions (Previous) - 2023-24`, chaptersKey: 'class-9-english-previous' },
  ],
  'hindi-9': [
    { version: '2026-27', year: '2026-27', bookName: 'Kshitij / Kritika', description: `NCERT Class 9 Hindi Solutions - 2026-27`, chaptersKey: 'class-9-hindi' },
    { version: 'previous', year: '2023-24', bookName: 'Kshitij / Kritika', description: `NCERT Class 9 Hindi Solutions (Previous) - 2023-24`, chaptersKey: 'class-9-hindi-previous' },
  ],
  'ss-9': [
    { version: '2026-27', year: '2026-27', bookName: 'India and the Contemporary World I / Democratic Politics I / Contemporary India I / Economics', description: `NCERT Class 9 Social Science Solutions - 2026-27`, chaptersKey: 'class-9-social-science' },
    { version: 'previous', year: '2023-24', bookName: 'India and the Contemporary World I / Democratic Politics I / Contemporary India I / Economics', description: `NCERT Class 9 Social Science Solutions (Previous) - 2023-24`, chaptersKey: 'class-9-social-science-previous' },
  ],
  // Class 10
  'maths-10': [
    { version: '2026-27', year: '2026-27', bookName: 'Mathematics', description: `NCERT Class 10 Maths Solutions - 2026-27`, chaptersKey: 'class-10-mathematics' },
    { version: 'previous', year: '2023-24', bookName: 'Mathematics', description: `NCERT Class 10 Maths Solutions (Previous) - 2023-24`, chaptersKey: 'class-10-mathematics-previous' },
  ],
  'science-10': [
    { version: '2026-27', year: '2026-27', bookName: 'Science', description: `NCERT Class 10 Science Solutions - 2026-27`, chaptersKey: 'class-10-science' },
    { version: 'previous', year: '2023-24', bookName: 'Science', description: `NCERT Class 10 Science Solutions (Previous) - 2023-24`, chaptersKey: 'class-10-science-previous' },
  ],
  'english-10': [
    { version: '2026-27', year: '2026-27', bookName: 'First Flight / Footprints without Feet', description: `NCERT Class 10 English Solutions - 2026-27`, chaptersKey: 'class-10-english' },
    { version: 'previous', year: '2023-24', bookName: 'First Flight / Footprints without Feet', description: `NCERT Class 10 English Solutions (Previous) - 2023-24`, chaptersKey: 'class-10-english-previous' },
  ],
  'hindi-10': [
    { version: '2026-27', year: '2026-27', bookName: 'Kshitij / Kritika', description: `NCERT Class 10 Hindi Solutions - 2026-27`, chaptersKey: 'class-10-hindi' },
    { version: 'previous', year: '2023-24', bookName: 'Kshitij / Kritika', description: `NCERT Class 10 Hindi Solutions (Previous) - 2023-24`, chaptersKey: 'class-10-hindi-previous' },
  ],
  'ss-10': [
    { version: '2026-27', year: '2026-27', bookName: 'India and the Contemporary World II / Democratic Politics II / Contemporary India II / Understanding Economic Development', description: `NCERT Class 10 Social Science Solutions - 2026-27`, chaptersKey: 'class-10-social-science' },
    { version: 'previous', year: '2023-24', bookName: 'India and the Contemporary World II / Democratic Politics II / Contemporary India II / Understanding Economic Development', description: `NCERT Class 10 Social Science Solutions (Previous) - 2023-24`, chaptersKey: 'class-10-social-science-previous' },
  ],
  // Classes 11-12 (single version for now)
  'maths-11': [{ version: '2026-27', year: '2026-27', bookName: 'Mathematics Part I & II', description: `NCERT Class 11 Maths Solutions - 2026-27`, chaptersKey: 'class-11-mathematics' }],
  'physics-11': [{ version: '2026-27', year: '2026-27', bookName: 'Physics Part I & II', description: `NCERT Class 11 Physics Solutions - 2026-27`, chaptersKey: 'class-11-physics' }],
  'chemistry-11': [{ version: '2026-27', year: '2026-27', bookName: 'Chemistry Part I & II', description: `NCERT Class 11 Chemistry Solutions - 2026-27`, chaptersKey: 'class-11-chemistry' }],
  'biology-11': [{ version: '2026-27', year: '2026-27', bookName: 'Biology', description: `NCERT Class 11 Biology Solutions - 2026-27`, chaptersKey: 'class-11-biology' }],
  'english-11': [{ version: '2026-27', year: '2026-27', bookName: 'Hornbill / Snapshots', description: `NCERT Class 11 English Solutions - 2026-27`, chaptersKey: 'class-11-english' }],
  'maths-12': [{ version: '2026-27', year: '2026-27', bookName: 'Mathematics Part I & II', description: `NCERT Class 12 Maths Solutions - 2026-27`, chaptersKey: 'class-12-mathematics' }],
  'physics-12': [{ version: '2026-27', year: '2026-27', bookName: 'Physics Part I & II', description: `NCERT Class 12 Physics Solutions - 2026-27`, chaptersKey: 'class-12-physics' }],
  'chemistry-12': [{ version: '2026-27', year: '2026-27', bookName: 'Chemistry Part I & II', description: `NCERT Class 12 Chemistry Solutions - 2026-27`, chaptersKey: 'class-12-chemistry' }],
  'biology-12': [{ version: '2026-27', year: '2026-27', bookName: 'Biology', description: `NCERT Class 12 Biology Solutions - 2026-27`, chaptersKey: 'class-12-biology' }],
  'english-12': [{ version: '2026-27', year: '2026-27', bookName: 'Flamingo / Vistas', description: `NCERT Class 12 English Solutions - 2026-27`, chaptersKey: 'class-12-english' }],
  'accountancy-12': [{ version: '2026-27', year: '2026-27', bookName: 'Accountancy Part I & II', description: `NCERT Class 12 Accountancy Solutions - 2026-27`, chaptersKey: 'class-12-accountancy' }],
  'economics-12': [{ version: '2026-27', year: '2026-27', bookName: 'Indian Economic Development / Macro Economics', description: `NCERT Class 12 Economics Solutions - 2026-27`, chaptersKey: 'class-12-economics' }],
  'bs-12': [{ version: '2026-27', year: '2026-27', bookName: 'Business Studies Part I & II', description: `NCERT Class 12 Business Studies Solutions - 2026-27`, chaptersKey: 'class-12-business-studies' }],
};

function createSubject(id: string, name: string, slug: string): Subject {
  const versions = subjectVersions[id] || [{ version: '2026-27', year: '2026-27', bookName: name, description: `NCERT ${name} Solutions - 2026-27`, chaptersKey: `class-${id.split('-')[1]}-${slug}` }];
  return {
    id,
    name,
    slug,
    description: `NCERT ${name} Solutions for ${id.replace('-', ' ')}`,
    versions,
    defaultVersion: '2026-27',
  };
}

export const classData: ClassData[] = [
  {
    id: 'class-6',
    name: 'Class 6',
    slug: 'class-6',
    grade: 6,
    description: `NCERT Solutions for Class 6 (${CURRENT_ACADEMIC_YEAR}) - Multiple syllabus versions available`,
    image: '/images/class-6.svg',
    subjects: [
      createSubject('maths-6', 'Mathematics', 'mathematics'),
      createSubject('science-6', 'Science', 'science'),
      createSubject('english-6', 'English', 'english'),
      createSubject('hindi-6', 'Hindi', 'hindi'),
      createSubject('ss-6', 'Social Science', 'social-science'),
    ],
  },
  {
    id: 'class-7',
    name: 'Class 7',
    slug: 'class-7',
    grade: 7,
    description: `NCERT Solutions for Class 7 (${CURRENT_ACADEMIC_YEAR}) - Multiple syllabus versions available`,
    image: '/images/class-7.svg',
    subjects: [
      createSubject('maths-7', 'Mathematics', 'mathematics'),
      createSubject('science-7', 'Science', 'science'),
      createSubject('english-7', 'English', 'english'),
      createSubject('hindi-7', 'Hindi', 'hindi'),
      createSubject('ss-7', 'Social Science', 'social-science'),
    ],
  },
  {
    id: 'class-8',
    name: 'Class 8',
    slug: 'class-8',
    grade: 8,
    description: `NCERT Solutions for Class 8 (${CURRENT_ACADEMIC_YEAR}) - Multiple syllabus versions available`,
    image: '/images/class-8.svg',
    subjects: [
      createSubject('maths-8', 'Mathematics', 'mathematics'),
      createSubject('science-8', 'Science', 'science'),
      createSubject('english-8', 'English', 'english'),
      createSubject('hindi-8', 'Hindi', 'hindi'),
      createSubject('ss-8', 'Social Science', 'social-science'),
    ],
  },
  {
    id: 'class-9',
    name: 'Class 9',
    slug: 'class-9',
    grade: 9,
    description: `NCERT Solutions for Class 9 (${CURRENT_ACADEMIC_YEAR}) - Multiple syllabus versions available`,
    image: '/images/class-9.svg',
    subjects: [
      createSubject('maths-9', 'Mathematics', 'mathematics'),
      createSubject('science-9', 'Science', 'science'),
      createSubject('english-9', 'English', 'english'),
      createSubject('hindi-9', 'Hindi', 'hindi'),
      createSubject('ss-9', 'Social Science', 'social-science'),
    ],
  },
  {
    id: 'class-10',
    name: 'Class 10',
    slug: 'class-10',
    grade: 10,
    description: `NCERT Solutions for Class 10 (${CURRENT_ACADEMIC_YEAR}) - Multiple syllabus versions available`,
    image: '/images/class-10.svg',
    subjects: [
      createSubject('maths-10', 'Mathematics', 'mathematics'),
      createSubject('science-10', 'Science', 'science'),
      createSubject('english-10', 'English', 'english'),
      createSubject('hindi-10', 'Hindi', 'hindi'),
      createSubject('ss-10', 'Social Science', 'social-science'),
    ],
  },
  {
    id: 'class-11',
    name: 'Class 11',
    slug: 'class-11',
    grade: 11,
    description: `NCERT Solutions for Class 11 (${CURRENT_ACADEMIC_YEAR})`,
    image: '/images/class-11.svg',
    subjects: [
      createSubject('maths-11', 'Mathematics', 'mathematics'),
      createSubject('physics-11', 'Physics', 'physics'),
      createSubject('chemistry-11', 'Chemistry', 'chemistry'),
      createSubject('biology-11', 'Biology', 'biology'),
      createSubject('english-11', 'English', 'english'),
    ],
  },
  {
    id: 'class-12',
    name: 'Class 12',
    slug: 'class-12',
    grade: 12,
    description: `NCERT Solutions for Class 12 (${CURRENT_ACADEMIC_YEAR})`,
    image: '/images/class-12.svg',
    subjects: [
      createSubject('maths-12', 'Mathematics', 'mathematics'),
      createSubject('physics-12', 'Physics', 'physics'),
      createSubject('chemistry-12', 'Chemistry', 'chemistry'),
      createSubject('biology-12', 'Biology', 'biology'),
      createSubject('english-12', 'English', 'english'),
      createSubject('accountancy-12', 'Accountancy', 'accountancy'),
      createSubject('economics-12', 'Economics', 'economics'),
      createSubject('bs-12', 'Business Studies', 'business-studies'),
    ],
  },
];

export const getClassBySlug = (slug: string) => classData.find(c => c.slug === slug);
export const getSubjectBySlug = (classSlug: string, subjectSlug: string) => {
  const cls = getClassBySlug(classSlug);
  return cls?.subjects.find(s => s.slug === subjectSlug);
};

export const getSubjectVersion = (classSlug: string, subjectSlug: string, version: SyllabusVersion = '2026-27'): SubjectVersion | undefined => {
  const subject = getSubjectBySlug(classSlug, subjectSlug);
  return subject?.versions.find(v => v.version === version) || subject?.versions[0];
};

export const getChaptersKey = (classSlug: string, subjectSlug: string, version: SyllabusVersion = '2026-27'): string | undefined => {
  const versionData = getSubjectVersion(classSlug, subjectSlug, version);
  return versionData?.chaptersKey;
};
