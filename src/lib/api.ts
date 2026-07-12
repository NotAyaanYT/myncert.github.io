import { Class, Subject, Chapter, Exercise, Question, SearchResult } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}/api${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.statusText}`);
  }

  return res.json();
}

export async function getClasses(): Promise<Class[]> {
  return fetchAPI<Class[]>('/classes');
}

export async function getClassBySlug(slug: string): Promise<Class> {
  return fetchAPI<Class>(`/classes/${slug}`);
}

export async function getSubjects(classSlug?: string): Promise<Subject[]> {
  const query = classSlug ? `?classSlug=${classSlug}` : '';
  return fetchAPI<Subject[]>(`/subjects${query}`);
}

export async function getSubjectBySlug(classSlug: string, subjectSlug: string): Promise<Subject> {
  return fetchAPI<Subject>(`/subjects/${classSlug}/${subjectSlug}`);
}

export async function getChapters(classSlug: string, subjectSlug: string): Promise<Chapter[]> {
  return fetchAPI<Chapter[]>(`/chapters/${classSlug}/${subjectSlug}`);
}

export async function getChapterBySlug(classSlug: string, subjectSlug: string, chapterSlug: string): Promise<Chapter> {
  return fetchAPI<Chapter>(`/chapters/${classSlug}/${subjectSlug}/${chapterSlug}`);
}

export async function getExercises(classSlug: string, subjectSlug: string, chapterSlug: string): Promise<Exercise[]> {
  return fetchAPI<Exercise[]>(`/exercises/${classSlug}/${subjectSlug}/${chapterSlug}`);
}

export async function getExerciseBySlug(classSlug: string, subjectSlug: string, chapterSlug: string, exerciseSlug: string): Promise<Exercise> {
  return fetchAPI<Exercise>(`/exercises/${classSlug}/${subjectSlug}/${chapterSlug}/${exerciseSlug}`);
}

export async function getQuestions(classSlug: string, subjectSlug: string, chapterSlug: string, exerciseSlug: string): Promise<Question[]> {
  return fetchAPI<Question[]>(`/questions/${classSlug}/${subjectSlug}/${chapterSlug}/${exerciseSlug}`);
}

export async function getQuestionBySlug(classSlug: string, subjectSlug: string, chapterSlug: string, exerciseSlug: string, questionSlug: string): Promise<Question> {
  return fetchAPI<Question>(`/questions/${classSlug}/${subjectSlug}/${chapterSlug}/${exerciseSlug}/${questionSlug}`);
}

export async function searchContent(query: string): Promise<SearchResult[]> {
  return fetchAPI<SearchResult[]>(`/search?q=${encodeURIComponent(query)}`);
}

export async function getTrendingSolutions(): Promise<Question[]> {
  return fetchAPI<Question[]>('/questions/trending');
}

export async function getRecentlyAdded(): Promise<Question[]> {
  return fetchAPI<Question[]>('/questions/recent');
}

export async function getBookmarks(userId: string): Promise<string[]> {
  return fetchAPI<string[]>(`/bookmarks/${userId}`);
}

export async function addBookmark(userId: string, questionId: string): Promise<void> {
  return fetchAPI<void>('/bookmarks', {
    method: 'POST',
    body: JSON.stringify({ userId, questionId }),
  });
}

export async function removeBookmark(userId: string, questionId: string): Promise<void> {
  return fetchAPI<void>('/bookmarks', {
    method: 'DELETE',
    body: JSON.stringify({ userId, questionId }),
  });
}

export async function submitContactForm(data: { name: string; email: string; subject: string; message: string }): Promise<void> {
  return fetchAPI<void>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
