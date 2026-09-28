# Scrbb website

Next.js (App Router). Every page is a folder in `src/app`:

| Address | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/feedback` | `src/app/feedback/page.tsx` |
| `/robots.txt` | `src/app/robots.ts` |
| `/sitemap.xml` | `src/app/sitemap.ts` |

To add a page, create `src/app/your-page/page.tsx` and add it to `src/app/sitemap.ts`.

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase URL and anon key
npm run dev                  # http://localhost:3000
```

Run `supabase-feedback.sql` once in the Supabase SQL editor (creates the feedback table).

## Things you'll edit

- `src/lib/site.ts`: APK link, version, store links, contact, course list
- `src/styles/landing.css`: colours and styles (same tokens as the app)
