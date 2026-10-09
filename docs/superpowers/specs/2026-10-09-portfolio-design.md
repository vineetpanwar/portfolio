# Portfolio & GitHub Landing — Design Spec

**Date:** 2026-10-09
**Owner:** Vineet Panwar
**Goal:** An undeniable personal portfolio + GitHub profile for **Senior/Staff Full-Stack + AI-forward (incl. Forward-Deployed) Engineer** roles. Scannable by human recruiters, hiring managers, and AI screening agents.

## Intent (design brief)
- **Audience, in order:** (1) non-technical recruiter/HR — 10–20s skim for seniority signals, logos, big numbers; (2) hiring manager / FDE lead — reads depth, judgment, AI fluency; (3) AI screening agents — need clean semantic HTML + structured data.
- **Positioning:** 8+ yrs, Danske Bank → PayPal (200M req/day) → HeyFurnish / Next Level Sports. Systems-at-scale engineer who is also deep in AI engineering (multi-agent, evals-first).
- **Aesthetic:** Dark, technical, precise (Vercel/Linear/Anthropic energy) **+ editorial scannability** — huge headline, metrics strip, logos, plain-English impact one-liners before any depth. Not bold/colorful (hurts staff credibility), not plain-light (reads junior).
- **Success:** Reads credible to engineers AND scannable to recruiters in one 20s pass; AI agents extract clean facts; the site itself is a flawless work sample (Lighthouse ~100, WCAG AA).

## Stack & architecture
- **Next.js 14 App Router + TypeScript + Tailwind CSS**, deployed to **Vercel** (user hosts).
- **Static-first (SSG)**; ISR-ready. Zero backend.
- **Content-as-data:** typed `content/*.ts` is the single source of truth feeding both UI and the AI layer (JSON-LD, llms.txt). Adding a project = one file edit.
- **Motion:** Framer Motion, restrained; reveal-on-scroll + subtle hero. Honors `prefers-reduced-motion`.
- **Calendly:** link + optional inline widget. **Resume:** static PDF in `/public`.

## Page structure
Single long-scroll landing + per-case-study detail routes (`/work/[slug]`).

1. **Hero** — name, positioning line, CTAs (Book a call → Calendly; Resume; GitHub; LinkedIn). Subtle animated backdrop.
2. **Metrics strip** — `200M req/day · 99.99% uptime · 60% tickets auto-resolved · ~$1M/yr saved · 55k+ users`.
3. **Trust row** — PayPal, Danske Bank, HARMAN, Syracuse, Next Level Sports, HeyFurnish.
4. **About** — 3–4 plain-English sentences.
5. **Skills matrix** — Languages, Backend, Frontend, Cloud/Infra, Data, **AI Engineering** (featured), Observability, Testing.
6. **Experience timeline** — NLS → PayPal → HARMAN → Recrosoft → Danske; 2–3 impact bullets each.
7. **Case studies** — cards → detail pages, each **Context → Action → Result → Learnings**:
   - Multi-agent AI Customer Service (evals-first, guardrails, cost control) — lead for AI roles
   - PayPal Home @ 200M req/day (4-tier caching, SSR, Core Web Vitals)
   - Caching + OpenTelemetry SDK (sidecar, 3 teams)
   - PCI Checkout (Stripe, idempotency, ~$150K saved)
   - Timesheet & Payroll Platform (~$1M saved, Retool)
   - Idempotent Webhook Backend (Lambda/Kafka/DLQ)
   - HeyFurnish (founder/builder signal)
8. **Engineering judgment** — "how I think": evals-before-architecture (RAG dead-end), measurement-as-acceptance-criteria, DDoS-vs-deploy incident, risk-tiered PR review.
9. **How I work with AI** — design specs, multi-agent research, Claude Code/Cursor, AI code-review gates.
10. **Contact / CTA** — Calendly, email, socials.

## AI-agent scannability layer
- **JSON-LD** `Person` + `ItemList`/`CreativeWork` of projects in `<head>`.
- **`/llms.txt`** — clean markdown résumé-of-record for LLM crawlers.
- Semantic HTML, real meta/OG tags, `sitemap.xml`, `robots.txt`, per-page metadata, plain-language impact sentences.

## Companion deliverables
- **GitHub profile README** (`vineetpanwar/vineetpanwar`): positioning, metrics, stack, selected work → portfolio links, stats, Calendly.
- **`REPO_GUIDE.md`**: which repos to pin + README template so click-throughs hold up.

## Facts / links (source of truth)
- Email: `vineetpanwar027@gmail.com` · GitHub: `github.com/vineetpanwar` · LinkedIn: `linkedin.com/in/vineet-panwar-b5ba19110` · Calendly: `calendly.com/vineetpanwar027/30min` · HeyFurnish: `heyfurnish.com` · Location: New York, NY. (Phone omitted from public site; via resume/Calendly.)

## Quality bar / verification
- `next build` clean, `tsc` no errors, ESLint clean.
- Lighthouse ~100 (Perf/A11y/Best/SEO), WCAG AA contrast, keyboard nav, reduced-motion.
- Mobile-first responsive; no layout shift; fonts preloaded.

## Out of scope (YAGNI)
- CMS, blog/MDX pipeline (content-as-data is enough now), auth, analytics backend, i18n, dark/light toggle (dark is the brand; ensure light-readability only if trivially free).
