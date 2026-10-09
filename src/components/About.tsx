import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const facts = [
  { k: "Based in", v: "New York, NY" },
  { k: "Focus", v: "Full-stack + AI engineering" },
  { k: "Domains", v: "FinTech · Payments · Sports Tech" },
  { k: "Also", v: "Co-founder, HeyFurnish" },
];

export function About() {
  return (
    <Section id="about" eyebrow="Who I am">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              I&apos;m a Full-Stack Engineer who likes the hard middle of a system — where scale,
              reliability, and now AI all meet. I&apos;ve built scalable distributed backends,
              data-driven configurable UIs, and multi-agent orchestration with LLM-based judgment.
            </p>
            <p>
              At <span className="text-white">Next Level Sports</span> I led a small team: scaled
              support to 60% automated resolution and built the timesheet, payroll, and checkout
              systems end-to-end. Before that, at <span className="text-white">PayPal</span>, I
              worked on a bigger team building Home, Marketing, and Onboarding platforms serving 200M
              requests a day.
            </p>
            <p>
              I want to bring that combination — scale plus AI — to building systems and services in
              Payments, healthcare, automotive, or software. I lead with measurement: I characterize
              the problem and build the evals before I commit to an architecture.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/5">
            {facts.map((f) => (
              <div key={f.k} className="bg-ink-900/80 px-5 py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">{f.k}</dt>
                <dd className="mt-1 font-medium text-white">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
