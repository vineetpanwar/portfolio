import { experience, education } from "@/content/experience";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  return (
    <Section
      id="experience"
      eyebrow="Track record"
      title="Eight years shipping systems that matter"
      intro="From securing bank transactions to serving 200M requests a day to building the AI that runs a support org."
    >
      <ol className="relative border-l border-white/10 pl-6 sm:pl-8">
        {experience.map((role, i) => (
          <li key={role.company} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[41px]">
              <span className="h-3 w-3 rounded-full border-2 border-accent bg-ink-950" />
            </span>
            <Reveal delay={i * 0.03}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {role.title} ·{" "}
                  <span className="text-accent">{role.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">{role.period}</span>
              </div>
              <p className="mt-0.5 font-mono text-xs text-slate-500">{role.location}</p>
              <p className="mt-3 max-w-3xl text-slate-300">{role.summary}</p>
              <ul className="mt-4 grid gap-2">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent/70" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal>
        <div className="mt-10 rounded-2xl border border-white/8 bg-ink-900/50 p-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-semibold text-white">
              {education.degree} ·{" "}
              <span className="text-accent">{education.school}</span>
            </h3>
            <span className="font-mono text-xs text-slate-500">{education.period}</span>
          </div>
          <p className="mt-2 text-sm text-slate-400">{education.note}</p>
        </div>
      </Reveal>
    </Section>
  );
}
