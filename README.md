# Vineet Panwar — Portfolio

A production-grade personal portfolio for a **Senior/Staff Full-Stack + AI-forward engineer**. Dark, technical, precise — built to be scannable by human recruiters *and* AI screening agents.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**, deployed on **Vercel**.

## Highlights

- ⚡ **Static-first** (SSG) — every route prerendered, instant loads
- 🤖 **AI-agent layer** — JSON-LD (`Person` + project `ItemList`), `/llms.txt`, sitemap, semantic HTML
- 📇 **Content-as-data** — all copy lives in typed `src/content/*.ts`; one source of truth feeds the UI and the AI layer
- 🎬 Restrained motion, honors `prefers-reduced-motion`
- ♿ WCAG-minded: keyboard focus, contrast, semantic landmarks

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

## Edit your content

Everything is data — no need to touch components:

| File | What it controls |
|---|---|
| `src/content/site.ts` | Name, role, tagline, links, email, résumé, summary |
| `src/content/metrics.ts` | The headline metrics strip |
| `src/content/skills.ts` | Skill groups (AI Engineering is featured) |
| `src/content/experience.ts` | Experience timeline + education |
| `src/content/caseStudies.ts` | Case studies (Context → Action → Result → Learnings) |
| `src/content/judgment.ts` | "How I think" stories |
| `src/content/aiWorkflow.ts` | "How I build with AI" band |
| `public/llms.txt` | Machine-readable résumé for AI crawlers |
| `public/Vineet_Panwar_Resume.pdf` | Your downloadable résumé |

Add a case study = add one object to `caseStudies.ts`. It automatically gets a page at `/work/<slug>`, a sitemap entry, and JSON-LD.

## Before you ship

1. **Set your real domain** in `src/content/site.ts` → `url`. This drives OG tags, canonical URLs, sitemap, and JSON-LD. (Defaults to `vineetpanwar.vercel.app`.)
2. Replace `public/Vineet_Panwar_Resume.pdf` if you update your résumé.
3. (Optional) Add a custom OG image at `public/og.png` and reference it in `src/app/layout.tsx`.

See **DEPLOY.md** for Vercel steps.

## Companion deliverables

- `github-profile/README.md` — your GitHub profile README (for the `vineetpanwar/vineetpanwar` repo)
- `github-profile/REPO_GUIDE.md` — how to pin and polish repos so the profile holds up
