"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

// Calendly's inline widget, themed to match the site. Only the third-party
// script is deferred past first paint — the widget container always renders,
// reserving its height (no layout shift). Loading is triggered by whichever
// comes first: the section nearing the viewport, the first user interaction,
// or a short idle timeout. The belt-and-suspenders triggers mean the calendar
// loads reliably even if IntersectionObserver is throttled or the visitor
// lands straight on #contact.
const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

// Dark-theme params: ink background, light text, accent cyan.
const themedUrl = `${site.links.calendly}?hide_gdpr_banner=1&background_color=06080d&text_color=e6edf6&primary_color=4cc9f0`;

export function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let done = false;
    const cleanups: Array<() => void> = [];

    const trigger = () => {
      if (done) return;
      done = true;
      cleanups.forEach((fn) => fn());
      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${CALENDLY_SCRIPT}"]`,
      );
      if (existing) {
        setLoaded(true);
        return;
      }
      const s = document.createElement("script");
      s.src = CALENDLY_SCRIPT;
      s.async = true;
      s.onload = () => setLoaded(true);
      document.body.appendChild(s);
    };

    // 1) Load when the widget nears the viewport.
    const el = ref.current;
    if (el && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && trigger(),
        { rootMargin: "400px" },
      );
      io.observe(el);
      cleanups.push(() => io.disconnect());
    }

    // 2) Load on the first user interaction (covers direct #contact landings).
    const onInteract = () => trigger();
    const events: Array<keyof WindowEventMap> = ["scroll", "pointerdown", "keydown"];
    events.forEach((ev) =>
      window.addEventListener(ev, onInteract, { once: true, passive: true }),
    );
    cleanups.push(() =>
      events.forEach((ev) => window.removeEventListener(ev, onInteract)),
    );

    // 3) Safety net: load shortly after mount regardless.
    const t = window.setTimeout(trigger, 2500);
    cleanups.push(() => window.clearTimeout(t));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div ref={ref} className="mx-auto mt-12 max-w-2xl">
      <div
        className="calendly-inline-widget overflow-hidden rounded-2xl border border-white/10 bg-ink-900/40"
        data-url={themedUrl}
        style={{ minWidth: "320px", height: "680px" }}
        aria-label="Calendly scheduling widget"
      />
      <p className="mt-4 text-sm text-slate-500">
        {loaded ? "Prefer to book directly? " : "Loading the calendar… you can also "}
        <a
          href={site.links.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-4 hover:underline"
        >
          open it on Calendly ↗
        </a>
      </p>
    </div>
  );
}
