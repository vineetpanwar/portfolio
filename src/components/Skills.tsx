import { skillGroups } from "@/content/skills";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SparkIcon } from "@/components/ui/icons";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills across the full stack — and the AI layer on top"
      intro="Depth in distributed backends and production frontends, plus hands-on AI engineering: multi-agent systems, evals, and guardrails."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.04}>
            <div
              className={`h-full rounded-2xl border p-5 transition-colors ${
                group.featured
                  ? "border-accent/40 bg-accent/[0.06] accent-ring"
                  : "border-white/8 bg-ink-900/50 hover:border-white/15"
              }`}
            >
              <div className="mb-3 flex items-center gap-2">
                {group.featured && <SparkIcon className="h-4 w-4 text-accent" />}
                <h3
                  className={`font-mono text-sm font-semibold uppercase tracking-wider ${
                    group.featured ? "text-accent" : "text-slate-300"
                  }`}
                >
                  {group.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-md border px-2 py-1 text-xs ${
                      group.featured
                        ? "border-accent/20 bg-accent/10 text-accent-soft"
                        : "border-white/8 bg-white/[0.03] text-slate-400"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
