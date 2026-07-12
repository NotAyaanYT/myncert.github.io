# MyNCERTSolutions Requirements Checkpoint

Date: 2026-07-12

Source instruction: `C:\Users\ADI\Downloads\New Text Document.txt`

## Product Goal

Build `MyNCERTSolutions` for `myncert.online`: a production-ready educational platform for original, verified NCERT-based resources for Classes 6-12.

The platform must be scalable, secure, SEO-optimized, AWS-ready, maintainable, accessible, responsive, dark-mode capable, and suitable for real public deployment.

## Non-Negotiables

- Do not invent chapters, exercises, questions, or solutions.
- Do not publish placeholder educational content.
- Do not hardcode large content datasets.
- Do not generate demo or lorem ipsum content.
- Use verified content only.
- Ask for clarification when educational content cannot be verified.
- Prioritize maintainability, scalability, security, accessibility, and performance over speed.

## Required Product Surface

- Public website
- Authentication system
- Admin dashboard
- CMS
- Search engine
- SEO system
- Database-backed content model
- Media library
- Analytics integration
- AWS deployment configuration
- AdSense-ready layout system
- Responsive UI
- Dark mode
- Accessibility support

## Required Pages

- Home
- About
- Contact
- Privacy Policy
- Terms
- Disclaimer
- DMCA
- Search
- Classes
- Subjects
- Chapters
- Exercises
- Questions
- Solutions
- Bookmarks
- Profile
- Admin
- Dashboard
- Analytics
- Media
- 404
- 500

## Admin CMS Requirements

The admin dashboard must support create, edit, delete, publish, unpublish, archive, and restore flows for:

- Classes
- Subjects
- Chapters
- Exercises
- Questions
- Solutions
- Images
- SEO records
- Announcements
- Users
- Roles

## Content Model

Canonical hierarchy:

```text
Class
Subject
Chapter
Exercise
Question
Solution
```

All canonical educational content should come from the database. Static TypeScript datasets may remain temporarily during migration, but they are not the target architecture.

## Search Requirements

Search must support:

- Question number
- Exercise number
- Chapter
- Subject
- Class
- Keyword
- Autocomplete
- Fuzzy matching
- Fast indexing

## SEO Requirements

The platform must generate:

- Meta titles
- Meta descriptions
- Canonical URLs
- OpenGraph tags
- Twitter cards
- JSON-LD
- Breadcrumb schema
- FAQ schema
- `robots.txt`
- XML sitemap
- Structured data

## Performance Requirements

Target:

- Lighthouse score: 95+
- Excellent Core Web Vitals
- Lazy loading
- Code splitting
- Image optimization
- Caching
- Prefetching
- Server Components where appropriate

## Current App Gap Summary

The current app already has a useful Next.js route surface, public pages, dark mode, static generation, and SEO primitives. It is not yet production-complete because content is hardcoded, admin auth is hardcoded, there is no Prisma/PostgreSQL schema, no real CMS persistence, no media pipeline, and lint currently fails.

