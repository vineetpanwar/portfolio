import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";

export function CaseStudies() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Case studies — the problem, the call, the result"
      intro="Each one follows the same honest shape: context, what I actually did, what it produced, and what I learned. Click through for the full story."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {caseStudies.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.04} className={c.featured ? "md:col-span-2" : ""}>
            <Link
              href={`/work/${c.slug}`}
              className={`group flex h-full flex-col justify-between gap-5 rounded-2xl border p-6 transition-all hover:-translate-y-0.5 ${
                c.featured
                  ? "border-accent/30 bg-gradient-to-br from-accent/[0.08] to-transparent hover:border-accent/50"
                  : "border-white/8 bg-ink-900/50 hover:border-white/20"
              } ${c.featured ? "md:flex-row md:items-center" : ""}`}
            >
              <div className={c.featured ? "md:max-w-2xl" : ""}>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {c.featured && (
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                      Featured
                    </span>
                  )}
                  <span className="font-mono text-xs text-slate-500">
                    {c.company} · {c.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-slate-400">{c.oneLiner}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className={c.featured ? "md:w-56 md:flex-none" : ""}>
                <div className="grid grid-cols-2 gap-3">
                  {c.metrics.slice(0, c.featured ? 4 : 2).map((m) => (
                    <div key={m.label} className="rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2">
                      <div className="font-mono text-lg font-semibold text-white">{m.value}</div>
                      <div className="text-[11px] leading-tight text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Read case study
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
