import { SiteConfig, NavItem, FAQItem } from '@/types';

export const CURRENT_ACADEMIC_YEAR = '2026-27';
export const NCERT_VERSION = 'NCERT 2026-27';

export const siteConfig: SiteConfig = {
  name: `NCERT Solutions Hub (${NCERT_VERSION})`,
  description: `Free NCERT Solutions for Classes 6 to 12 based on the official NCERT ${CURRENT_ACADEMIC_YEAR} syllabus. Get step-by-step solutions for all subjects including Mathematics, Science, English, Hindi, and Social Science.`,
  url: 'https://ncertsolutionshub.com',
  ogImage: '/images/og-image.jpg',
  author: 'NCERT Solutions Hub Team',
  links: {
    twitter: 'https://twitter.com/ncertsolutionshub',
    github: 'https://github.com/ncertsolutionshub',
  },
};

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'NCERT Solutions', href: '/#solutions' },
  { label: 'Classes', href: '/#classes' },
  {
    label: 'Study Material',
    href: '#',
    children: [
      { label: 'NCERT Notes', href: '/notes' },
      { label: 'Revision Notes', href: '/revision-notes' },
      { label: 'Important Questions', href: '/important-questions' },
      { label: 'MCQs', href: '/mcqs' },
      { label: 'Worksheets', href: '/worksheets' },
      { label: 'Formula Sheets', href: '/formula-sheets' },
      { label: 'Sample Papers', href: '/sample-papers' },
      { label: 'Previous Year Questions', href: '/previous-year-questions' },
    ],
  },
  { label: 'Chapter Tests', href: '/chapter-tests' },
  { label: 'Doubt Section', href: '/doubt' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavItems: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'DMCA Policy', href: '/dmca' },
  { label: 'Sitemap', href: '/sitemap' },
];

export const classes = [
  { id: '1', name: 'Class 6', slug: 'class-6', grade: 6, description: 'NCERT Solutions for Class 6 (Ganita Prakash, Curiosity)', image: '/images/class-6.svg', color: 'from-blue-500 to-blue-600' },
  { id: '2', name: 'Class 7', slug: 'class-7', grade: 7, description: 'NCERT Solutions for Class 7 (Ganita Prakash, Curiosity)', image: '/images/class-7.svg', color: 'from-indigo-500 to-indigo-600' },
  { id: '3', name: 'Class 8', slug: 'class-8', grade: 8, description: 'NCERT Solutions for Class 8 (Ganita Prakash, Curiosity)', image: '/images/class-8.svg', color: 'from-violet-500 to-violet-600' },
  { id: '4', name: 'Class 9', slug: 'class-9', grade: 9, description: 'NCERT Solutions for Class 9 (Ganita Manjari, new syllabus)', image: '/images/class-9.svg', color: 'from-purple-500 to-purple-600' },
  { id: '5', name: 'Class 10', slug: 'class-10', grade: 10, description: 'NCERT Solutions for Class 10 (2026-27 edition)', image: '/images/class-10.svg', color: 'from-pink-500 to-pink-600' },
  { id: '6', name: 'Class 11', slug: 'class-11', grade: 11, description: 'NCERT Solutions for Class 11 (2026-27 edition)', image: '/images/class-11.svg', color: 'from-rose-500 to-rose-600' },
  { id: '7', name: 'Class 12', slug: 'class-12', grade: 12, description: 'NCERT Solutions for Class 12 (2026-27 edition)', image: '/images/class-12.svg', color: 'from-orange-500 to-orange-600' },
];

export const subjects = [
  { id: '1', name: 'Mathematics', slug: 'mathematics', icon: 'calculator', color: '#2563eb' },
  { id: '2', name: 'Science', slug: 'science', icon: 'flask', color: '#059669' },
  { id: '3', name: 'English', slug: 'english', icon: 'book-open', color: '#d97706' },
  { id: '4', name: 'Hindi', slug: 'hindi', icon: 'book', color: '#dc2626' },
  { id: '5', name: 'Social Science', slug: 'social-science', icon: 'globe', color: '#7c3aed' },
  { id: '6', name: 'Physics', slug: 'physics', icon: 'atom', color: '#0891b2' },
  { id: '7', name: 'Chemistry', slug: 'chemistry', icon: 'beaker', color: '#65a30d' },
  { id: '8', name: 'Biology', slug: 'biology', icon: 'dna', color: '#16a34a' },
  { id: '9', name: 'Accountancy', slug: 'accountancy', icon: 'calculator', color: '#4f46e5' },
  { id: '10', name: 'Economics', slug: 'economics', icon: 'trending-up', color: '#ca8a04' },
  { id: '11', name: 'Business Studies', slug: 'business-studies', icon: 'briefcase', color: '#0d9488' },
  { id: '12', name: 'History', slug: 'history', icon: 'landmark', color: '#b45309' },
  { id: '13', name: 'Geography', slug: 'geography', icon: 'earth', color: '#15803d' },
  { id: '14', name: 'Political Science', slug: 'political-science', icon: 'scale', color: '#1d4ed8' },
];

export const faqItems: FAQItem[] = [
  {
    question: 'What are NCERT Solutions?',
    answer: `NCERT Solutions are detailed, step-by-step answers to all questions in NCERT textbooks aligned with the ${CURRENT_ACADEMIC_YEAR} syllabus. They help students understand concepts thoroughly and prepare for exams effectively.`,
  },
  {
    question: 'Are your solutions updated for the NCERT 2026-27 syllabus?',
    answer: 'Yes! All our solutions are 100% aligned with the latest NCERT 2026-27 syllabus and the new textbooks (Ganita Prakash, Ganita Manjari, Curiosity, and Exploring Society: India and Beyond). We have removed all content from previous editions.',
  },
  {
    question: 'Are these solutions free?',
    answer: 'Yes, all NCERT Solutions on our website are completely free. We believe in providing quality education to every student without any cost.',
  },
  {
    question: 'Which classes do you cover?',
    answer: 'We provide NCERT Solutions for Classes 6 to 12 covering all major subjects including Mathematics, Science, English, Hindi, and Social Science based on the latest NCERT 2026-27 curriculum.',
  },
  {
    question: 'My Class 9 Maths chapters look different. Why?',
    answer: 'For the 2026-27 session, NCERT has released a completely new Class 9 Mathematics textbook called "Ganita Manjari" aligned with NCF 2023. The chapters have been restructured — for example, Coordinate Geometry is now Chapter 1, and new topics like Sequences & Progressions have been added.',
  },
  {
    question: 'Can I download the solutions?',
    answer: 'Yes, you can easily copy, print, or bookmark our solutions for offline access. We also provide a print-friendly version of each solution.',
  },
  {
    question: 'Are the solutions accurate?',
    answer: 'Our solutions are prepared by subject matter experts and reviewed thoroughly to ensure accuracy. We follow CBSE marking schemes and NCERT 2026-27 guidelines.',
  },
];

export const whyChooseUs = [
  {
    title: 'Latest 2026-27 Syllabus',
    description: 'All solutions are 100% aligned with the official NCERT 2026-27 curriculum and new textbooks.',
    icon: 'graduation-cap',
  },
  {
    title: 'Free Access',
    description: 'All NCERT solutions are completely free with no hidden charges or subscription fees.',
    icon: 'star',
  },
  {
    title: 'Expert Solutions',
    description: 'Solutions prepared by experienced teachers following CBSE marking scheme.',
    icon: 'refresh-cw',
  },
  {
    title: 'Easy Navigation',
    description: 'Well-organized content with smart search and smooth navigation by class, subject, and chapter.',
    icon: 'compass',
  },
  {
    title: 'Step-by-Step Solutions',
    description: 'Detailed step-by-step explanations for better understanding of every concept.',
    icon: 'list-ordered',
  },
  {
    title: 'Mobile Friendly',
    description: 'Fully responsive design that works perfectly on all devices.',
    icon: 'smartphone',
  },
];

export const popularSubjects = [
  { name: 'Mathematics (Ganita Manjari/Prakash)', slug: 'mathematics', classes: '6-12', students: '500K+' },
  { name: 'Science (Curiosity)', slug: 'science', classes: '6-10', students: '450K+' },
  { name: 'English (Poorvi)', slug: 'english', classes: '6-12', students: '300K+' },
  { name: 'Social Science (Exploring Society)', slug: 'social-science', classes: '6-10', students: '250K+' },
  { name: 'Physics', slug: 'physics', classes: '11-12', students: '200K+' },
  { name: 'Chemistry', slug: 'chemistry', classes: '11-12', students: '180K+' },
];
