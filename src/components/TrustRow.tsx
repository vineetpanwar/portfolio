const companies = [
  "PayPal",
  "Danske Bank",
  "HARMAN",
  "Goldman Sachs",
  "Swiggy",
  "Syracuse University",
];

export function TrustRow() {
  return (
    <section aria-label="Companies worked with" className="border-b border-white/5 bg-ink-950">
      <div className="mx-auto max-w-content px-5 py-8 sm:px-8">
        <p className="mb-5 text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
          Shipped for teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((c) => (
            <span
              key={c}
              className="text-base font-semibold tracking-tight text-slate-400 transition-colors hover:text-slate-200 sm:text-lg"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
