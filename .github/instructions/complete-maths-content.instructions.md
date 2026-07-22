---
description: "Complete NCERT Mathematics Content Generation — generates all missing question data for Classes 6-12 mathematics. Apply when: generating bulk question content, filling exercise gaps, completing NCERT solutions."
applyTo: "src/data/questions.ts"
---

# Complete ALL NCERT Maths Content — 3-Hour Plan

## Overview

This instructions file defines how to generate **all missing question data** for mathematics across Classes 6–12 in **under 3 hours**. The data goes into `src/data/questions.ts`.

## Current State (Audit)

| Class | Chapters | Exercises | Questions Status |
|-------|----------|-----------|-----------------|
| Class 6 Maths (Ganita Prakash) | 10 | ~21 | **NONE** — needs full generation |
| Class 7 Maths (Ganita Prakash) | 15 | ~30 | **NONE** — needs full generation |
| Class 8 Maths (Ganita Prakash) | 14 | ~30 | **NONE** — needs full generation |
| Class 9 Maths (Ganita Manjari) | 8 | ~30 | Ch 1-5 **DONE** (~80 qs), Ch 6-8 **NEEDED** |
| Class 10 Maths | 14 | ~30 | **MOSTLY DONE** (~180 qs across all 14 chapters) |
| Class 11 Maths | 14 | ~30 | **NONE** — needs full generation |
| Class 12 Maths | 13 | ~30 | **NONE** — needs full generation |

**Total gap**: ~6 classes × ~28 exercises × ~6 questions = ~1,000+ questions needed

---

## Priority Order (HIGH → LOW)

### Phase 1 — Fill Class 9 gaps (30 min)
**Why**: Class 9 already has Ch 1-5 done; complete the remaining chapters for a full class.

Do in order:
1. `class-9-mathematics-measuring-space-perimeter-and-area` (Ch 6) — Exercise 6.1, 6.2, 6.3, End-of-Chapter
2. `class-9-mathematics-the-mathematics-of-maybe-introduction-to-probability` (Ch 7) — Exercise 7.1, 7.2, 7.3, 7.4, End-of-Chapter
3. `class-9-mathematics-predicting-what-comes-next-exploring-sequences-and-progressions` (Ch 8) — Exercise 8.1, 8.2, 8.3, End-of-Chapter

### Phase 2 — Class 10 missing chapters (20 min)
**Why**: Class 10 is mostly done; fill any remaining gaps.

Check and fill:
- Ch 5 (Arithmetic Progressions) — Ex 5.3, 5.4? (only 5.1, 5.2 exist)
- Ch 6 (Triangles) — Ex 6.4? (only 6.1, 6.2, 6.3 exist)
- Ch 7 (Coordinate Geometry) — Ex 7.3? (only 7.1, 7.2 exist)
- Ch 8 (Trigonometry) — Ex 8.4? (only 8.1, 8.2, 8.3 exist)
- Any missing end-of-chapter exercises
- Surface Areas & Volumes Ch 12 — Ex 12.3? (only 12.1, 12.2 exist)
- Statistics Ch 13 — Ex 13.4? (only 13.1, 13.2, 13.3 exist)

### Phase 3 — Class 6 Maths (full generation) (30 min)
**Why**: Easiest content (Class 6 level), fast to generate, quick wins.

Chapters (10):
1. Patterns in Mathematics (Ex 1.1, 1.2)
2. Lines and Angles (Ex 2.1, 2.2)
3. Number Play (Ex 3.1, 3.2)
4. Data Handling and Presentation (Ex 4.1, 4.2)
5. Prime Time (Ex 5.1, 5.2, 5.3)
6. Perimeter and Area (Ex 6.1, 6.2)
7. Fractions (Ex 7.1, 7.2, 7.3)
8. Playing with Constructions (Ex 8.1, 8.2)
9. Symmetry (Ex 9.1, 9.2)
10. The Other Side of Zero (Ex 10.1, 10.2)

### Phase 4 — Class 7 Maths (full generation) (35 min)
**Why**: Similar difficulty to Class 6, 15 chapters.

Chapters (15):
1. Large Numbers Around Us (Ex 1.1, 1.2, 1.3)
2. Arithmetic Expressions (Ex 2.1, 2.2)
3. A Peek Beyond the Point (Ex 3.1, 3.2)
4. Expressions Using Letter-Numbers (Ex 4.1, 4.2)
5. Parallel and Intersecting Lines (Ex 5.1, 5.2)
6. Number Play (Ex 6.1, 6.2)
7. A Tale of Three Intersecting Lines (Ex 7.1, 7.2, 7.3)
8. Working with Fractions (Ex 8.1, 8.2)
9. Geometric Twins (Ex 9.1, 9.2)
10. Operations with Integers (Ex 10.1, 10.2)
11. Finding Common Ground (Ex 11.1, 11.2)
12. Another Peek Beyond the Point (Ex 12.1, 12.2)
13. Connecting the Dots (Ex 13.1, 13.2)
14. Constructions and Tilings (Ex 14.1, 14.2)
15. Finding the Unknown (Ex 15.1, 15.2)

### Phase 5 — Class 8 Maths (full generation) (35 min)
**Why**: More complex content but still manageable.

Chapters (14):
1. A Square and A Cube (Ex 1.1, 1.2)
2. Power Play (Ex 2.1, 2.2)
3. A Story of Numbers (Ex 3.1, 3.2)
4. Quadrilaterals (Ex 4.1, 4.2, 4.3)
5. Number Play (Ex 5.1, 5.2, 5.3)
6. We Distribute, Yet Things Multiply (Ex 6.1, 6.2)
7. Proportional Reasoning I (Ex 7.1, 7.2, 7.3)
8. Fractions in Disguise (Ex 8.1, 8.2)
9. The Baudhayana-Pythagoras Theorem (Ex 9.1, 9.2)
10. Proportional Reasoning II (Ex 10.1, 10.2)
11. Exploring Some Geometric Themes (Ex 11.1, 11.2)
12. Tales by Dots and Lines (Ex 12.1, 12.2)
13. Algebra Play (Ex 13.1, 13.2, 13.3)
14. Area (Ex 14.1, 14.2)

### Phase 6 — Class 11 Maths (full generation) (20 min)
**Why**: Higher class, but only need ~4-5 questions per exercise. Many exercises have similar structure.

Chapters (14):
1. Sets (Ex 1.1, 1.2, 1.3)
2. Relations and Functions (Ex 2.1, 2.2, 2.3)
3. Trigonometric Functions (Ex 3.1, 3.2, 3.3)
4. Complex Numbers and Quadratic Equations (Ex 4.1, 4.2, 4.3)
5. Linear Inequalities (Ex 5.1, 5.2)
6. Permutations and Combinations (Ex 6.1, 6.2, 6.3, 6.4)
7. Binomial Theorem (Ex 7.1, 7.2)
8. Sequence and Series (Ex 8.1, 8.2)
9. Straight Lines (Ex 9.1, 9.2, 9.3)
10. Conic Sections (Ex 10.1, 10.2, 10.3, 10.4)
11. Introduction to Three Dimensional Geometry (Ex 11.1, 11.2, 11.3)
12. Limits and Derivatives (Ex 12.1, 12.2)
13. Statistics (Ex 13.1, 13.2, 13.3)
14. Probability (Ex 14.1, 14.2, 14.3)

### Phase 7 — Class 12 Maths (full generation) (20 min)
**Why**: Most advanced but exercises follow predictable patterns.

Chapters (13):
1. Relations and Functions (Ex 1.1, 1.2)
2. Inverse Trigonometric Functions (Ex 2.1, 2.2)
3. Matrices (Ex 3.1, 3.2, 3.3, 3.4)
4. Determinants (Ex 4.1, 4.2, 4.3, 4.4, 4.5)
5. Continuity and Differentiability (Ex 5.1, 5.2, 5.3, 5.4, 5.5, 5.6)
6. Application of Derivatives (Ex 6.1, 6.2, 6.3, 6.4, 6.5)
7. Integrals (Ex 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11)
8. Application of Integrals (Ex 8.1, 8.2)
9. Differential Equations (Ex 9.1, 9.2, 9.3, 9.4, 9.5, 9.6)
10. Vector Algebra (Ex 10.1, 10.2, 10.3, 10.4)
11. Three Dimensional Geometry (Ex 11.1, 11.2, 11.3)
12. Linear Programming (Ex 12.1, 12.2)
13. Probability (Ex 13.1, 13.2, 13.3, 13.4, 13.5)

---

## Time Budget

| Phase | Duration | Target |
|-------|----------|--------|
| Phase 1: Class 9 gaps | 30 min | 3 chapters, ~12 exercises |
| Phase 2: Class 10 gaps | 20 min | ~6 missing exercises |
| Phase 3: Class 6 full | 30 min | 10 chapters, ~21 exercises |
| Phase 4: Class 7 full | 35 min | 15 chapters, ~30 exercises |
| Phase 5: Class 8 full | 35 min | 14 chapters, ~30 exercises |
| Phase 6: Class 11 full | 20 min | 14 chapters, ~40 exercises |
| Phase 7: Class 12 full | 20 min | 13 chapters, ~50 exercises |
| **Buffer** | **10 min** | Build verification |
| **Total** | **3 hours** | All classes complete |

---

## Batch Generation Approach

### How to generate FAST

1. **One question per exercise first**: Generate exactly 1 question per exercise to make the "Coming Soon" pages show content. This is the fastest path to visible progress.

2. **Then fill to 5-6 questions**: Expand each exercise to 5-6 questions for proper coverage.

3. **Use templates** (see below): Don't write unique questions — use the template patterns and adapt.

4. **Skip diagrams**: Do NOT create SVG diagrams during this 3-hour sprint. Only add `![placeholder](/diagrams/...)` references if absolutely needed for geometry questions, and note "DIAGRAM NEEDED" in comments.

5. **Focus on content, not formatting**: Question text can be simple. Solutions can be brief but correct.

### Question ID Pattern

Use this pattern for question IDs:
```
q{Class}{Subject}{Chapter}{Exercise}{Number}
```
Where:
- Class: number only (6, 7, 8, 9, 10, 11, 12)
- Subject: m (mathematics)
- Chapter: chapter number
- Exercise: exercise number (as decimal without dot: 1, 2, 3...)
- Number: question number

Examples:
- `q6m-1-1-1` = Class 6 Maths, Ch 1, Ex 1.1, Q1
- `q11m-3-2-5` = Class 11 Maths, Ch 3, Ex 3.2, Q5

### Data Key Pattern

```
{classSlug}-{subjectSlug}-{chapterSlug}-{exerciseSlug}
```

Example: `class-6-mathematics-patterns-in-mathematics-exercise-1-1`

Where slugs are defined in `src/data/chapters.ts` (exerciseData section).

---

## Question Templates

### Template 1: Simple computation (Classes 6-8)
```typescript
{
  id: 'q{id}',
  questionNumber: 1,
  title: 'Question 1',
  content: 'Compute: {expression}.',
  solution: 'Step 1: ...\nStep 2: ...\nTherefore, {answer}.',
  difficulty: 'easy',
  tags: ['mathematics', '{topic}'],
}
```

### Template 2: Word problem (Classes 6-8)
```typescript
{
  id: 'q{id}',
  questionNumber: 2,
  title: 'Question 2',
  content: '{word problem context}. Find {what is asked}.',
  solution: 'Step 1: Identify given values.\nStep 2: Apply formula.\nStep 3: Compute. Therefore, {answer}.',
  difficulty: 'medium',
  tags: ['mathematics', '{topic}', 'word-problem'],
}
```

### Template 3: Proof/derivation (Classes 9-12)
```typescript
{
  id: 'q{id}',
  questionNumber: 3,
  title: 'Question 3',
  content: 'Prove that {statement}.',
  solution: 'Given: {given}\nTo prove: {to prove}\nProof:\nStep 1: ...\nStep 2: ...\nTherefore, {statement} is proved.',
  difficulty: 'hard',
  tags: ['mathematics', '{topic}', 'proof'],
}
```

### Template 4: Graphing/geometry (Classes 9-12)
```typescript
{
  id: 'q{id}',
  questionNumber: 4,
  title: 'Question 4',
  content: 'Plot the points {points} on a Cartesian plane. What shape do you get?',
  solution: 'Step 1: Plot each point.\nStep 2: Join in order.\nThe shape formed is {shape}.\n\n<!-- DIAGRAM NEEDED: cartesian-plane with points -->\n![Reference Cartesian plane](/diagrams/cartesian-plane.svg)',
  difficulty: 'medium',
  tags: ['mathematics', '{topic}', 'graphing'],
}
```

---

## Quality Guidelines

### Minimum Viable Quality (for 3-hour sprint)
- **Each exercise**: 5-6 questions minimum
- **Difficulty spread**: mix of easy, medium, hard
- **Content**: Must be mathematically correct
- **Solution**: Must show steps, even if brief
- **Tags**: Include 'mathematics', subject area, and topic-specific tags

### What to NEVER do
- ❌ Don't leave placeholder text like "TODO" or "FIXME"
- ❌ Don't use markdown images for diagrams that don't exist yet (use `<!-- DIAGRAM NEEDED -->` comments instead)
- ❌ Don't skip verification — always run `npx next build` to check for TypeScript errors
- ❌ Don't create duplicate entries — check if data key already exists before adding

### Must verify
- ✅ Data key matches exactly between questions.ts and chapters.ts
- ✅ Question IDs follow the pattern and are unique
- ✅ Each question has all required fields (id, questionNumber, title, content, solution, difficulty, tags)
- ✅ No duplicate question numbers within an exercise

---

## Quick Reference: Exercise Counts by Class

| Class | Chapters | Exercises | Questions Needed |
|-------|----------|-----------|-----------------|
| 6 | 10 | 21 | ~105 (5 per exercise) |
| 7 | 15 | 30 | ~150 (5 per exercise) |
| 8 | 14 | 30 | ~150 (5 per exercise) |
| 9 | 3 (gaps) | ~12 | ~60 (5 per exercise) |
| 10 | 14 | ~6 (gaps) | ~30 (5 per exercise) |
| 11 | 14 | ~40 | ~200 (5 per exercise) |
| 12 | 13 | ~50 | ~250 (5 per exercise) |
| **Total** | **83** | **~189** | **~945 questions** |

---

## Execution Strategy

### For each exercise:
1. Read the chapter title and description from `chapterData`
2. Read the exercise slug and number from `exerciseData`
3. Construct the data key: `${classSlug}-${subjectSlug}-${chapterSlug}-${exerciseSlug}`
4. Generate 5-6 questions using templates
5. Add to `questionData` in `questions.ts`
6. Build with `npx next build` to verify

### Speed tips:
- Process 1 exercise per 1-2 minutes
- For similar exercises (e.g., 2 exercises in same chapter), batch-generate together
- Use the exercise title/number to determine what types of questions to create
- Keep solutions concise but correct — 3-5 lines per solution
- Don't overthink difficulty ratings — easy = direct formula application, medium = 2-step problem, hard = multi-step/proof
