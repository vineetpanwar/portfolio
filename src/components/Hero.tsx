import { site } from "@/content/site";
import { ArrowIcon, GithubIcon, LinkedinIcon, DocIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950" aria-hidden />

      <div className="relative mx-auto max-w-content px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_2px_rgba(94,234,212,0.6)]" />
            Available for Senior / Staff · AI-forward roles
          </p>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient">{site.name}</span>
          </h1>
          <p className="mt-4 max-w-3xl text-xl font-medium text-white sm:text-2xl">
            {site.role}
          </p>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400 sm:text-xl">
            {site.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-slate-400">
            8+ years across Banking, FinTech, and AI platforms — from{" "}
            <span className="text-slate-200">PayPal at 200M requests/day</span> to{" "}
            <span className="text-slate-200">multi-agent AI systems</span> that auto-resolve 60% of
            support. I lead with measurement: evals and observability before architecture.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={site.links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-ink-950 transition-transform hover:-translate-y-0.5 accent-ring"
            >
              Book a 30-min call
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white transition-colors hover:bg-white/10"
            >
              <DocIcon className="h-4 w-4" />
              Résumé
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-white transition-colors hover:bg-white/10"
            >
              <GithubIcon className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-white transition-colors hover:bg-white/10"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
