# MyNCERTSolutions

Production-oriented NCERT educational platform for `myncert.online`, built with Next.js, TypeScript, Tailwind CSS, PostgreSQL, and Prisma.

## Current Status

This codebase is being migrated from a static-content Next.js app into a database-backed CMS platform.

Completed foundation work:

- Next.js App Router baseline
- TypeScript and Tailwind baseline
- Public route surface for classes, subjects, chapters, exercises, questions, and study resources
- Prisma 7 setup
- PostgreSQL schema design
- Server-only Prisma client helper
- Requirements, architecture, database, and progress docs

## Local Development

```bash
npm install
npm run prisma:generate
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
npx prisma validate
```

## Database

Set `DATABASE_URL` in `.env.local`.

Use `.env.example` as the safe template. Do not commit real credentials.

Prisma commands:

```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:studio
```

## Project Docs

- `docs/requirements.md`
- `docs/architecture.md`
- `docs/database.md`
- `docs/progress-log.md`

## Content Policy

Do not invent chapters, exercises, questions, or solutions. Educational content must come from verified sources or admin-created drafts reviewed before publishing.

