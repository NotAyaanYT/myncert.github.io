import { NextRequest, NextResponse } from 'next/server';
import { classData } from '@/data/classes';
import { chapterData, exerciseData } from '@/data/chapters';
import { questionData } from '@/data/questions';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')?.toLowerCase().trim() || '';
  const type = request.nextUrl.searchParams.get('type') || 'all';

  if (query.length < 2) {
    return NextResponse.json([]);
  }

  const results: Array<{
    id: string;
    type: 'class' | 'subject' | 'chapter' | 'exercise' | 'question';
    title: string;
    description: string;
    url: string;
    breadcrumb: string[];
  }> = [];

  // Parse query for question number search patterns like "ex 1.1 q 3" or "1.1"
  const exercisePattern = query.match(/(?:ex\s*)?(\d+)\.(\d+)(?:\s*(?:q|ques|question)\s*(\d+))?/i);
  const exerciseMatch = exercisePattern ? { chapterNum: exercisePattern[1], exerciseNum: exercisePattern[2], questionNum: exercisePattern[3] } : null;

  for (const cls of classData) {
    if (cls.name.toLowerCase().includes(query) || cls.slug.includes(query)) {
      results.push({ id: cls.id, type: 'class', title: cls.name, description: cls.description, url: `/${cls.slug}`, breadcrumb: [cls.name] });
    }

    for (const subject of cls.subjects) {
      const match = subject.name.toLowerCase().includes(query) || subject.slug.includes(query);
      if (match) {
        results.push({
          id: subject.id,
          type: 'subject',
          title: `${cls.name} - ${subject.name}`,
          description: subject.description,
          url: `/${cls.slug}/${subject.slug}`,
          breadcrumb: [cls.name, subject.name],
        });
      }

      const key = `${cls.slug}-${subject.slug}`;
      const chapters = chapterData[key] || [];
      for (const chapter of chapters) {
        const chMatch = chapter.title.toLowerCase().includes(query) || chapter.slug.includes(query) || `chapter ${chapter.chapterNumber}`.includes(query);
        if (chMatch) {
          results.push({
            id: chapter.id,
            type: 'chapter',
            title: `Chapter ${chapter.chapterNumber}: ${chapter.title}`,
            description: `${cls.name} ${subject.name} - ${chapter.description}`,
            url: `/${cls.slug}/${subject.slug}/${chapter.slug}`,
            breadcrumb: [cls.name, subject.name, `Ch ${chapter.chapterNumber}`],
          });
        }

        const exKey = `${cls.slug}-${subject.slug}-${chapter.slug}`;
        const exercises = exerciseData[exKey] || [];
        for (const exercise of exercises) {
          const exMatch = exercise.title.toLowerCase().includes(query) || exercise.slug.includes(query);

          // Also match by exercise number pattern
          const patternMatch = exerciseMatch &&
            parseInt(exerciseMatch.chapterNum) === chapter.chapterNumber &&
            exercise.title.toLowerCase().includes(`${exerciseMatch.exerciseNum}`);

          if (exMatch || patternMatch) {
            results.push({
              id: exercise.id,
              type: 'exercise',
              title: `${chapter.title} - ${exercise.title}`,
              description: `${cls.name} ${subject.name}`,
              url: `/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}`,
              breadcrumb: [cls.name, subject.name, `Ch ${chapter.chapterNumber}`, exercise.title],
            });
          }

          // Search within questions
          const questions = questionData[exKey + '-' + exercise.slug] || [];
          for (const question of questions) {
            const qMatch = question.content.toLowerCase().includes(query) ||
              `question ${question.questionNumber}` === query ||
              `q ${question.questionNumber}` === query ||
              `${question.questionNumber}` === query;

            // Match by specific question number if exercise was matched
            const questionNumberMatch = patternMatch && exerciseMatch?.questionNum &&
              question.questionNumber === parseInt(exerciseMatch.questionNum);

            if (qMatch || questionNumberMatch) {
              results.push({
                id: question.id,
                type: 'question',
                title: `${exercise.title} - Question ${question.questionNumber}`,
                description: `${chapter.title} - ${cls.name} ${subject.name}`,
                url: `/${cls.slug}/${subject.slug}/${chapter.slug}/${exercise.slug}#q${question.questionNumber}`,
                breadcrumb: [cls.name, subject.name, `Ch ${chapter.chapterNumber}`, exercise.title, `Q${question.questionNumber}`],
              });
            }
          }
        }
      }
    }
  }

  return NextResponse.json(results.slice(0, 25));
}
