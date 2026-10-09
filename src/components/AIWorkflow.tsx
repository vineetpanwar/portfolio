import { aiWorkflow, aiPrinciple } from "@/content/aiWorkflow";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SparkIcon } from "@/components/ui/icons";

export function AIWorkflow() {
  return (
    <Section
      id="ai"
      eyebrow="AI-forward"
      title="How I actually build with AI"
      intro="Not a buzzword on a résumé — a daily operating model. Here's where AI sits in my loop, and the discipline that keeps it safe to ship."
    >
      <Reveal>
        <div className="mb-8 rounded-2xl border border-accent/30 bg-accent/[0.06] p-6 accent-ring">
          <div className="flex items-start gap-3">
            <SparkIcon className="mt-0.5 h-5 w-5 flex-none text-accent" />
            <p className="text-lg font-medium leading-relaxed text-white">{aiPrinciple}</p>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aiWorkflow.map((step, i) => (
          <Reveal key={step.phase} delay={i * 0.04}>
            <div className="h-full rounded-2xl border border-white/8 bg-ink-900/50 p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-white">{step.phase}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{step.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
