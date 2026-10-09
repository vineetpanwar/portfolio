import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 text-slate-400">That route doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-accent px-5 py-2.5 font-medium text-ink-950 transition-transform hover:-translate-y-0.5"
      >
        Back home
      </Link>
    </main>
  );
}
