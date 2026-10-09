import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:px-8">
        <p className="font-mono">
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <p className="font-mono text-xs">
          Built with Next.js · TypeScript · Tailwind — deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
