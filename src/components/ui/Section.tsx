import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-content scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      {(eyebrow || title) && (
        <header className="mb-12 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          )}
          {intro && <p className="mt-4 text-lg leading-relaxed text-slate-400">{intro}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
