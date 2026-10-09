import Image from "next/image";
import { site, hireMailto } from "@/content/site";
import {
  ArrowIcon,
  GithubIcon,
  LinkedinIcon,
  DocIcon,
  MailIcon,
} from "@/components/ui/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950" aria-hidden />

      <div className="relative mx-auto max-w-content px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="grid animate-fade-up items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Left: copy */}
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_2px_rgba(94,234,212,0.6)]" />
              Open to Senior / Staff · AI-forward roles · NYC or Remote
            </p>

            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-gradient">{site.name}</span>
            </h1>
            <p className="mt-4 max-w-3xl text-xl font-medium sm:text-2xl">
              <span className="text-accent">Senior Full-Stack</span>
              <span className="text-white"> + AI Engineer</span>
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400 sm:text-xl">
              {site.tagline}
            </p>

            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-slate-400">
              8+ years across Banking, FinTech, and AI platforms — from{" "}
              <span className="text-slate-200">PayPal at 200M requests/day</span> to{" "}
              <span className="text-slate-200">multi-agent AI systems</span> that auto-resolve 60%
              of support. I lead with measurement: evals and observability before architecture.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={hireMailto}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 accent-ring"
              >
                <MailIcon className="h-4 w-4" />
                Hire me
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white transition-colors hover:bg-white/10"
              >
                See my work
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
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2.5 text-white transition-colors hover:bg-white/10"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2.5 text-white transition-colors hover:bg-white/10"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-5 flex items-center gap-2 font-mono text-xs text-slate-500">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {site.location} · Open to relocation · Remote-first OK
            </p>
          </div>

          {/* Right: photo */}
          <div className="order-first lg:order-none">
            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 accent-ring">
                <Image
                  src={site.photo}
                  alt={`${site.name}, ${site.role}`}
                  width={640}
                  height={720}
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
