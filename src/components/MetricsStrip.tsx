import { metrics } from "@/content/metrics";

export function MetricsStrip() {
  return (
    <section
      aria-label="Key metrics"
      className="relative border-y border-white/5 bg-ink-900/60"
    >
      <div className="mx-auto grid max-w-content grid-cols-2 divide-x divide-y divide-white/5 sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
        {metrics.map((m) => (
          <div key={m.label} className="px-5 py-7 sm:px-6">
            <div className="font-mono text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {m.value}
            </div>
            <div className="mt-1 text-sm font-medium text-slate-300">{m.label}</div>
            {m.sub && <div className="mt-0.5 text-xs text-slate-500">{m.sub}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
