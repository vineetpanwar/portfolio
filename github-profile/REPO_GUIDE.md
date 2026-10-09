# Repo-Polish Guide — making your GitHub hold up when recruiters click through

Your profile README is the storefront. The moment a recruiter or hiring manager clicks a repo, it has to confirm the story. This guide tells you exactly what to do.

## 1. Create the profile README (5 minutes)

1. Create a new **public** repo named exactly `vineetpanwar` (must match your username).
2. Add `README.md` — use `github-profile/README.md` from this project.
3. Commit. It renders automatically at https://github.com/vineetpanwar.

## 2. Pin the right 6 repos

GitHub lets you pin up to 6 repos (Profile → "Customize your pins"). Pin in this priority order — **quality over recency**:

| Priority | What to pin | Why |
|---|---|---|
| 1 | **This portfolio repo** | It's a live, production-grade Next.js app — a work sample in itself. |
| 2 | An **AI / multi-agent** project (even a scoped demo) | Proves the AI-forward claim with code, not words. |
| 3 | A **backend / distributed-systems** project | Shows the "systems at scale" side (API, caching, queue, infra). |
| 4 | A **full-stack product** repo | End-to-end ownership signal. |
| 5 | A **library / SDK / tool** | Shows you build leverage for others, not just features. |
| 6 | Anything with **stars or real usage** | Social proof beats everything. |

> If you don't have 6 strong public repos yet, it's better to pin 3–4 excellent ones than 6 mediocre ones. Empty or abandoned repos hurt more than they help — archive or make them private.

## 3. Every pinned repo needs a real README

Recruiters spend ~20 seconds per repo. Use this template for each:

```markdown
# Project Name
> One sentence: what it does and the impact/number.

**Stack:** TypeScript · Next.js · Postgres · AWS
**Live:** <link>  ·  **Case study:** <portfolio link>

## Why it exists
2–3 sentences on the problem.

## What's interesting technically
- The hard part you solved (caching, idempotency, evals, etc.)
- A tradeoff you made and why
- A result or metric

## Run it
\`\`\`bash
npm install && npm run dev
\`\`\`
```

A README with a screenshot/GIF, a live link, and one architecture note outperforms 1,000 lines of undocumented code.

## 4. Quick wins that raise perceived seniority

- **Add topics/tags** to each repo (`ai`, `nextjs`, `distributed-systems`) — improves discoverability and signals focus.
- **Write descriptive commit messages** on anything public; squash the "wip"/"fix" noise on the default branch if you can.
- **Add a LICENSE** (MIT is fine) to public repos — signals you expect others to use your work.
- **Clean the repo list:** archive dead experiments. A tidy profile reads "senior."
- **Contribution graph:** a steady green graph helps, but don't fake it. One or two thoughtful public repos beat a wall of forks.

## 5. Make the private-work story legible

Most of your strongest work (PayPal, Next Level Sports) is private/proprietary — that's normal and expected. The portfolio case studies carry that weight. On GitHub, make sure the profile README **links to the portfolio case studies** (already done) so the depth is one click away even when the code can't be public.

## 6. Final checklist

- [ ] `vineetpanwar/vineetpanwar` repo created, README rendering on profile
- [ ] Portfolio deployed and linked from the README
- [ ] 4–6 repos pinned, each with a real README
- [ ] Dead repos archived or made private
- [ ] Each pinned repo has a description + topics
- [ ] Profile README links to portfolio case studies for the private work
