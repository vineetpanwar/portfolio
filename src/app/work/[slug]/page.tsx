import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { site } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowIcon, CalendarIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  const title = `${c.title} — ${c.company}`;
  return {
    title,
    description: c.oneLiner,
    openGraph: {
      title,
      description: c.oneLiner,
      url: `${site.url}/work/${c.slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description: c.oneLiner },
    alternates: { canonical: `${site.url}/work/${c.slug}` },
  };
}

const sections = [
  { key: "context", label: "Context", tone: "slate" },
  { key: "action", label: "What I did", tone: "accent" },
  { key: "result", label: "Result", tone: "signal" },
  { key: "learnings", label: "Learnings", tone: "slate" },
] as const;

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.oneLiner,
    about: c.tags.join(", "),
    author: { "@type": "Person", name: site.name, url: site.url },
    publisher: { "@type": "Person", name: site.name },
    url: `${site.url}/work/${c.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Nav />
      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-radial-glow" aria-hidden />

        <article className="relative mx-auto max-w-3xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            All work
          </Link>

          <div className="mt-6">
            <p className="font-mono text-xs text-accent">
              {c.company} · {c.period}
            </p>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {c.title}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-300">{c.oneLiner}</p>
          </div>

          {/* Metrics */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {c.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-white/8 bg-ink-900/60 px-4 py-3">
                <div className="font-mono text-xl font-semibold text-white">{m.value}</div>
                <div className="mt-0.5 text-xs leading-tight text-slate-500">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {c.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-slate-400"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Narrative */}
          <div className="mt-12 space-y-10">
            {sections.map((sec) => {
              const items = c[sec.key];
              const accentClass =
                sec.tone === "accent"
                  ? "text-accent"
                  : sec.tone === "signal"
                    ? "text-signal"
                    : "text-slate-300";
              return (
                <section key={sec.key}>
                  <h2
                    className={`mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] ${accentClass}`}
                  >
                    {sec.label}
                  </h2>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-pretty leading-relaxed text-slate-300"
                      >
                        <span
                          className={`mt-2.5 h-1.5 w-1.5 flex-none rounded-full ${
                            sec.tone === "accent"
                              ? "bg-accent"
                              : sec.tone === "signal"
                                ? "bg-signal"
                                : "bg-slate-600"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-accent/30 bg-accent/[0.06] p-6 text-center accent-ring">
            <p className="text-lg font-medium text-white">Want the deeper version?</p>
            <p className="mx-auto mt-1 max-w-md text-sm text-slate-400">
              I&apos;m happy to walk through the architecture, tradeoffs, and what I&apos;d do
              differently.
            </p>
            <a
              href={site.links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              <CalendarIcon className="h-4 w-4" />
              Book a call
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
