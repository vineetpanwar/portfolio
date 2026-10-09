# Deploy to Vercel

Two ways — the dashboard (easiest) or the CLI.

## Option A — GitHub + Vercel dashboard (recommended)

1. **Push this project to a GitHub repo** (public is great — the repo is a work sample):
   ```bash
   # from the project root
   git add -A
   git commit -m "feat: portfolio site"
   # create an empty repo on github.com first, e.g. "portfolio", then:
   git remote add origin https://github.com/vineetpanwar/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to **https://vercel.com/new**, click **Import** on the `portfolio` repo.
3. Vercel auto-detects Next.js. Leave defaults (Build: `next build`, Output: `.next`). Click **Deploy**.
4. You'll get a URL like `https://portfolio-xxxx.vercel.app` in ~1 minute.

## Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # first run: links/creates the project, deploys a preview
vercel --prod   # promote to production
```

## Custom domain (optional, recommended)

1. Buy a domain (e.g. `vineetpanwar.dev` or `.com`).
2. In Vercel → your project → **Settings → Domains** → add it. Vercel shows the DNS records.
3. At your registrar, add the records Vercel gives you (usually an `A` record to `76.76.21.21` for the apex and a `CNAME` to `cname.vercel-dns.com` for `www`).
4. **Then update `src/content/site.ts` → `url`** to your real domain and redeploy, so OG tags, canonical URLs, sitemap, and JSON-LD all point at the right place.

## After deploy — verify

- `https://<your-domain>/` loads fast
- `https://<your-domain>/llms.txt` returns your machine-readable résumé
- `https://<your-domain>/sitemap.xml` and `/robots.txt` resolve
- Paste your URL into a link preview tester to confirm OG tags
- Run Lighthouse (Chrome DevTools) — expect ~100 across the board
