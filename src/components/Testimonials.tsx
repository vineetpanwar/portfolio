import { testimonials } from "@/content/testimonials";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

function QuoteMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent/50" fill="currentColor" aria-hidden>
      <path d="M9.5 6C6.5 7.5 5 10 5 13v5h6v-6H8.2c.2-1.8 1-3 2.3-3.7L9.5 6zm9 0c-3 1.5-4.5 4-4.5 7v5h6v-6h-2.8c.2-1.8 1-3 2.3-3.7L18.5 6z" />
    </svg>
  );
}

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section
      id="testimonials"
      eyebrow="Vouches"
      title="What people I've worked with say"
      intro="The short version from managers, leads, and peers who shipped alongside me."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name + t.company} delay={i * 0.05}>
            <figure className="flex h-full flex-col rounded-2xl border border-white/8 bg-ink-900/50 p-6">
              <QuoteMark />
              <blockquote className="mt-3 flex-1 text-pretty leading-relaxed text-slate-300">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-white/8 pt-4">
                <div className="font-medium text-white">{t.name}</div>
                <div className="font-mono text-xs text-slate-500">
                  {t.role} · {t.company}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
