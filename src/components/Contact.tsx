import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { CalendarIcon, MailIcon, GithubIcon, LinkedinIcon, ArrowIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="relative mx-auto max-w-content px-5 py-24 text-center sm:px-8 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Let&apos;s talk
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Building something that needs to run at scale — and think?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-400">
            I&apos;m open to Senior / Staff Full-Stack and AI-forward roles. The fastest way to
            reach me is to grab a slot — or send a note.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-ink-950 transition-transform hover:-translate-y-0.5 accent-ring"
            >
              <CalendarIcon className="h-4 w-4" />
              Book a 30-min call
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <MailIcon className="h-4 w-4" />
              {site.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={site.links.heyfurnish}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-slate-400 transition-colors hover:text-white"
            >
              heyfurnish.com ↗
            </a>
          </div>

          <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Pick a time that works for you
          </p>
          <CalendlyEmbed />
        </Reveal>
      </div>
    </section>
  );
}
