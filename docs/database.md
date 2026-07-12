# Database Setup

Date: 2026-07-12

## Prisma Commands

```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:studio
```

## Environment

Prisma reads `DATABASE_URL` through `prisma.config.ts`.

Expected format:

```text
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

Do not commit `.env.local` or any file containing production credentials.

## Schema Scope

The schema currently includes:

- Users, roles, and user-role assignments
- Classes, subjects, chapters, exercises, questions, and solutions
- Workflow statuses for draft, published, unpublished, and archived content
- Source verification statuses
- SEO metadata
- Media assets
- Bookmarks
- Announcements
- Import jobs
- Audit logs

## Migration Policy

Do not run migrations against production without reviewing the generated SQL first.

Do not seed invented educational content. Seed scripts may create required system roles and a first admin user, but educational records must come from verified sources or admin-created drafts.

