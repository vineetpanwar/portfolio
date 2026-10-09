import { stories } from "@/content/judgment";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Judgment() {
  return (
    <Section
      id="judgment"
      eyebrow="Engineering judgment"
      title="How I think when it's not obvious"
      intro="Output is table stakes. These are the calls — and the misses — that show how I reason about risk, measurement, and tradeoffs."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {stories.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <article className="h-full rounded-2xl border border-white/8 bg-ink-900/50 p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Principle
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-white">
                {s.principle}
              </p>
              <h3 className="mt-4 text-sm font-medium text-slate-300">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
