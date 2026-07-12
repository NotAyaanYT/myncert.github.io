export interface Class {
  id: string;
  name: string;
  slug: string;
  grade: number;
  description: string;
  image: string;
  subjects: Subject[];
  createdAt: string;
  updatedAt: string;
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  classId: string;
  className: string;
  description: string;
  icon: string;
  color: string;
  chapters: Chapter[];
  createdAt: string;
  updatedAt: string;
}

export interface Chapter {
  id: string;
  title: string;
  slug: string;
  chapterNumber: number;
  subjectId: string;
  subjectName: string;
  classId: string;
  className: string;
  description: string;
  exercises: Exercise[];
  createdAt: string;
  updatedAt: string;
}

export interface Exercise {
  id: string;
  title: string;
  slug: string;
  exerciseNumber: number;
  chapterId: string;
  chapterTitle: string;
  subjectId: string;
  subjectName: string;
  classId: string;
  className: string;
  questions: Question[];
  createdAt: string;
  updatedAt: string;
}

export interface Question {
  id: string;
  questionNumber: number;
  title: string;
  content: string;
  solution: string;
  diagram?: string;
  exerciseId: string;
  exerciseTitle: string;
  chapterId: string;
  chapterTitle: string;
  subjectId: string;
  subjectName: string;
  classId: string;
  className: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  views: number;
  bookmarks: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
  avatar?: string;
  createdAt: string;
}

export interface Bookmark {
  id: string;
  userId: string;
  questionId: string;
  createdAt: string;
}

export interface SearchResult {
  id: string;
  type: 'class' | 'subject' | 'chapter' | 'exercise' | 'question';
  title: string;
  description: string;
  url: string;
  breadcrumb: string[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AdPlacement {
  id: string;
  location: 'below-hero' | 'between-content' | 'sidebar' | 'after-questions' | 'footer';
  slot: string;
  format: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive: boolean;
}
