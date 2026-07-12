# MyNCERTSolutions Architecture Checkpoint

Date: 2026-07-12

## Current Baseline

The existing folder contains a Next.js 16 App Router project under `ncert-solutions-hub`.

Observed stack:

- Next.js 16.2.10
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- ESLint 9
- `next-themes`
- `lucide-react`
- Static TypeScript content in `src/data`
- API routes for search, contact, and admin login

Build status:

- `npm run build` passes.
- `npm run lint` fails with React hook lint errors and unused-code warnings.

## Main Architectural Problems To Resolve

1. Content is stored in hardcoded TypeScript files instead of a database.
2. Admin login uses hardcoded credentials.
3. CMS pages exist visually, but do not yet manage persistent content.
4. `src/lib/api.ts` references API endpoints that do not exist yet.
5. Search scans in-memory static data and does not use indexing.
6. README remains the default Next.js template.
7. Prisma is configured, but migrations and content import tooling are not implemented yet.
8. No production deployment configuration exists for AWS.

## Target Architecture

```text
Next.js App Router
  Public pages
  Admin pages
  API route handlers / server actions

Application services
  Auth service
  Content service
  Search service
  SEO service
  Media service
  Analytics service

Persistence
  PostgreSQL
  Prisma ORM
  Migration history
  Verified content import pipeline

Infrastructure
  AWS-ready environment configuration
  S3-compatible media storage
  CDN-ready image delivery
  Observability and analytics hooks
```

## Proposed Folder Structure

The current `src/app`, `src/components`, `src/lib`, and `src/data` structure can evolve without a disruptive rewrite.

```text
src/
  app/
    (public)/
    admin/
    api/
  components/
    layout/
    seo/
    ui/
    forms/
    admin/
    content/
  config/
  db/
  features/
    auth/
    content/
    search/
    seo/
    media/
    analytics/
  lib/
  server/
  types/
prisma/
  schema.prisma
  migrations/
scripts/
  import/
  validate-content/
docs/
```

## Database Direction

Use PostgreSQL with Prisma. Model canonical content as normalized records:

- `Class`
- `Subject`
- `Chapter`
- `Exercise`
- `Question`
- `Solution`
- `MediaAsset`
- `SeoMetadata`
- `Announcement`
- `User`
- `Role`
- `Session` or auth-compatible account/session tables
- `AuditLog`

Add workflow fields to content records:

- `status`: draft, published, unpublished, archived
- `sourceStatus`: unverified, verified, rejected
- `createdById`
- `updatedById`
- `publishedAt`
- `archivedAt`

## Search Direction

Phase 1 should use PostgreSQL-backed search with indexed fields and normalized query helpers.

Phase 2 can add a dedicated search provider if needed. Candidate providers should be selected after traffic, budget, and hosting constraints are known.

## Authentication Direction

Remove hardcoded admin credentials. Use a real auth layer with:

- Password hashing
- Secure session cookies
- Role-based access control
- Admin-only route protection
- CSRF-aware mutation flows
- Rate limiting for login

## Content Import Direction

Do not generate NCERT content automatically. Build import tooling that accepts verified source files, validates hierarchy and required metadata, then inserts draft records for admin review before publishing.

## Implementation Order

The master instruction requires this order:

1. Requirements analysis
2. Project architecture
3. Folder structure
4. Next.js configuration
5. TypeScript configuration
6. Tailwind configuration
7. Prisma configuration
8. PostgreSQL schema
9. Component library
10. Layout system
11. Navigation
12. Search
13. Authentication
14. Admin dashboard
15. CMS
16. SEO framework
17. Analytics
18. AdSense-ready layout
19. Performance
20. Testing

This checkpoint completes steps 1-8 at foundation level:

- Requirements analysis
- Project architecture
- Folder direction
- Existing Next.js, TypeScript, and Tailwind baseline review
- Prisma configuration
- PostgreSQL schema design

The next implementation checkpoint should create the first migration against a real PostgreSQL database, then begin replacing hardcoded content reads with database-backed service functions. Static content should remain in place until verified import paths are ready.
