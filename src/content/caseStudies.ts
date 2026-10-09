export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  period: string;
  oneLiner: string; // plain-English impact, for skim + AI parsing
  featured?: boolean;
  tags: string[];
  stack: string[];
  metrics: { value: string; label: string }[];
  context: string[];
  action: string[];
  result: string[];
  learnings: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-agent-ai-support",
    title: "Multi-Agent AI Customer Service",
    company: "Next Level Sports",
    period: "2025",
    oneLiner:
      "An evals-first multi-agent platform that auto-resolves 60% of support tickets across 14 topics with zero bad auto-sends.",
    featured: true,
    tags: ["AI / Multi-agent", "Evals", "Guardrails", "LLM Ops"],
    stack: ["Mastra", "Claude (Opus/Haiku)", "TypeScript", "Postgres + pgvector", "libSQL/Turso"],
    metrics: [
      { value: "60-65", label: "tickets auto-resolved/day" },
      { value: "14", label: "topics on auto-send" },
      { value: "$55/day", label: "total platform cost" },
      { value: "0", label: "bad auto-sent replies" },
    ],
    context: [
      "Next Level Sports is a youth-sports startup where all support flows through one inbox — ~100 tickets/day answered by a 3-person team, with P1 resolution taking 2-3 days.",
      "Tickets clustered into uniform questions, registration status, refunds, and scholarship applications. The goal was to scale the support team and cut response times — without ever sending a wrong answer to a parent about their kid or their money.",
    ],
    action: [
      "Led the POC. Analyzed 12 months of historical tickets and found most were actually automatable — but resolving a ticket is a workflow (check status, apply policy, verify eligibility), not a lookup.",
      "Inverted the usual process: built the evaluation harness first — deterministic code checks plus an LLM-as-judge run against historical tickets with known-correct outcomes — so we had accuracy numbers per topic instead of vibes.",
      "Designed a Mastra multi-agent platform: supervisor agents orchestrate sub-agents that follow runbooks defined as skills. Used Opus for supervisors, Haiku for sub-agents to control cost and latency.",
      "Layered guardrails: input (regex/scope checks), processing (RBAC per agent, data spotlighting), and output (format + secret/prompt-leakage checks, self-correction loops). Failsafe decisions used deterministic code to reduce hallucination. Most tools are read-only; write tools are opt-in.",
      "4-layer eval strategy: 2 pre-deploy (deterministic + end-to-end LLM-judge), 2 on live traffic (inline scorers + a nightly judge that diffs each draft against what the human actually sent and classifies why they edited it, feeding a versioned reward).",
      "Memory: supervisor keeps a 50-message window, sub-agents are stateless; long-term memory is embeddings in Postgres + pgvector. Prompt caching cut cost and response time.",
      "Proposed a tiered rollout to a skeptical manager: the agent drafts everything but sends nothing at first; auto-send unlocks per topic only when it clears the accuracy bar. Money topics like refunds stay human-reviewed.",
    ],
    result: [
      "60-65 tickets/day auto-resolved with no human in the loop across 14 topics; for everything else the agent drafts the reply so CS just reviews and sends.",
      "Zero incidents of a bad auto-sent reply. The skeptical manager went from blocking auto-send to citing it to the board and expanding the mandate.",
      "Whole platform runs at ~$55/day by routing sub-agents to Haiku (≈1/5 the cost of Opus).",
    ],
    learnings: [
      "Query resolution is only as good as the evals and harness around the agent — build measurement before you build the system.",
      "When a leader pushes back on risk, the answer isn't a better argument, it's better evidence: building the measurement first turned his objection into the acceptance criteria.",
      "Reliability detail: the front-end webhook waits ~10s but agents take 30s-10min — fixed with instant acknowledgement plus a polite background retry.",
    ],
  },
  {
    slug: "paypal-home-at-scale",
    title: "PayPal Home & Marketing at 200M req/day",
    company: "PayPal",
    period: "2021-2024",
    oneLiner:
      "Re-architected how 40K+ pages across 200+ countries are built and rendered — sub-3s loads, self-serve content, 200M requests/day.",
    featured: true,
    tags: ["Scale", "Performance", "SSR", "Caching"],
    stack: ["Java / Spring Boot", "Node.js", "Preact", "Contentful", "Redis", "Vite"],
    metrics: [
      { value: "200M+", label: "requests/day" },
      { value: "40K+", label: "pages served" },
      { value: "<3s", label: "page load" },
      { value: "+8%", label: "engagement" },
    ],
    context: [
      "PayPal had 40K+ web pages across 200+ countries with static and dynamic content, rebuilt and updated every year.",
      "Marketing/Ops needed to publish and restructure pages, but engineering was in the loop for every content change — so the site was always stale. NFRs were strict: SEO, Core Web Vitals, page load < 2s.",
    ],
    action: [
      "Worked directly with Marketing/Ops, UX, and engineering to map how the site was actually put together and updated. Ran weekly standups with each group for progress and blockers.",
      "Found the old approach — content and CSS in files versioned through git/PRs — created huge complexity. Proposed standardizing on shared components and a design theme across PayPal; PPComponents and PPUI were born.",
      "Ran a POC choosing Contentful as the CMS (designing the content model was itself a major effort; traded off some customization for standardization), validated the design with the Architect and team in engineering sync.",
      "With a team of 8, built a system where static content for a URL lives in Contentful while components/CSS stay in the codebase, rendered by a server-side rendering engine (chosen for security of dynamic pages and SEO).",
      "Reduced latency with multi-level caching (server, client, CDN), improved accessibility, and split the UI to stream render layer-by-layer for Core Web Vitals. Integrated CookieChimp, Google Analytics, and Amplitude gated on consent.",
    ],
    result: [
      "40K+ pages served and rendered through the platform with instant content creation/updates on a much easier cadence.",
      "SEO score 90+ for most pages, page load < 3s, TTFB < 1s, with a maintainable versioned PPUI component library.",
      "Data-driven UI and rendering lifted page engagement ~8%.",
    ],
    learnings: [
      "Standardizing across the UI meant trading off custom UI and animations — optimizing performance across every layer was real, ongoing overhead.",
      "Removing engineering as a dependency for content is as valuable as any feature you ship.",
    ],
  },
  {
    slug: "caching-opentelemetry-sdk",
    title: "Caching + OpenTelemetry SDK (Sidecar)",
    company: "PayPal",
    period: "2021-2024",
    oneLiner:
      "Turned repeated per-team caching/observability work into one shared SDK adopted across 3 teams — saving 4-5 months per project.",
    tags: ["Platform", "Performance", "Observability", "Leadership"],
    stack: ["Node.js", "Redis", "OpenTelemetry", "Splunk", "npm"],
    metrics: [
      { value: "99%", label: "cache-hit ratio" },
      { value: "99.9999%", label: "availability" },
      { value: "3 teams", label: "adopted the SDK" },
      { value: "4-5 mo", label: "saved per project" },
    ],
    context: [
      "PayPal serves 200M requests/day with a functional requirement of page loads < 2s — meaning p99 internal API < 50ms and < 300ms external, plus 99.99% availability for static pages.",
      "Every repo also needed observability — failure rates, latency, CPU, per-release metrics, DDoS and traffic signals.",
    ],
    action: [
      "Researched and found there was no server-side caching for static content; proposed a 4-tier caching + fault-tolerance solution in the engineering sync.",
      "Solved the hard parts: leader-election for distributed caching, hot keys, cache eviction and invalidation policies across the layers, plus a fault-tolerant fallback where content was stored as files on disk, refreshed nightly.",
      "Standardized instrumentation — naming conventions, sampling rate, span attributes — and built Splunk dashboards with alerts, injecting trace IDs into structured logs.",
      "Noticed the same work was being repeated across projects; flagged it to the lead and proposed a common npm package + SDK as a sidecar pattern for all repos.",
      "Wrote the technical design, validated it with the architect and 3 teams, then led a team of 10 executing it in sprints over a year — wrote the integration guide, ran weekly office hours, and mentored SDE2s through leader election and cache concepts.",
    ],
    result: [
      "99% cache-hit ratio and 99.9999% availability; the SDK dropped into other repos and saved 4-5 months per project.",
      "Engagement rose ~8% from the latency/perf NFRs; the pattern was extended to other features like UTM tracking.",
    ],
    learnings: [
      "Solving a problem not just for your own use case but for other initiatives saves enormous engineering time — the sidecar/SDK lens is a force multiplier.",
    ],
  },
  {
    slug: "pci-checkout",
    title: "PCI-Conscious In-House Checkout",
    company: "Next Level Sports",
    period: "2025",
    oneLiner:
      "Replaced a SaaS checkout with an in-house Stripe flow — 30K+ transactions, near-zero failures, ~$150K/year saved.",
    tags: ["Payments", "Reliability", "Stripe"],
    stack: ["Java", "Spring Boot", "Stripe", "idempotency"],
    metrics: [
      { value: "30K+", label: "transactions" },
      { value: "~0", label: "payment failures" },
      { value: "$150K", label: "saved/year" },
      { value: "4", label: "downstream groups served" },
    ],
    context: [
      "Next Level Sports sells youth camps and league registrations. Every sale is a parent registering one child — and that single transaction feeds four groups: parents (receipt), coaches (rosters/jersey sizes), finance (refund reconciliation), and marketing (confirmation + follow-up).",
      "They relied on SportsConnect (a SaaS) with lower availability and higher per-registration cost, so the decision was to build the registration flow in-house. I owned the redesign end-to-end — data model, payment flow, and operational tooling.",
    ],
    action: [
      "Gathered needs from stakeholders, site directors, and finance: payment methods (Apple/Google Pay vs. cards), transaction volume, audience needs.",
      "Designed and architected the checkout, built a retrial mechanism, supported refunds, and kept payment intent + transaction info in our system while honoring idempotency.",
      "Covered NFRs: end-to-end client-side tracking and conversion analysis for payroll/registration data (which drove the DB choice), and kept capacity/finance details off the caching paths.",
      "Removed strict constraints to smooth payments for returning customers — aligned the checkout toward a guest-checkout experience rather than account-based.",
    ],
    result: [
      "24K+ registrations and 30K+ transactions with near-zero failures; refunds reconcile automatically.",
      "Marketing confirmation emails and end-to-end client-side tracking with click-conversion analysis shipped alongside.",
    ],
    learnings: [
      "At-least-once delivery with idempotency is the backbone of a trustworthy payment flow.",
      "Building in-house beat paying 5%+ per tier — saved ~$150K/year.",
    ],
  },
  {
    slug: "timesheet-payroll-platform",
    title: "Timesheet & Payroll Platform",
    company: "Next Level Sports",
    period: "2025",
    oneLiner:
      "Replaced a 30K-person Google Sheets payroll process with a real platform — ~$1M/year saved, payroll fully automated.",
    tags: ["0→1", "Payroll", "Internal Tooling"],
    stack: ["Node.js", "tRPC", "Prisma", "PlanetScale MySQL", "Next.js", "Retool"],
    metrics: [
      { value: "30K+", label: "people onboarded" },
      { value: "~$1M", label: "saved/year" },
      { value: "10K+", label: "coaches paid weekly" },
      { value: "1 yr", label: "0→1 build" },
    ],
    context: [
      "Next Level Family ran payroll and time tracking for 30K-40K people in Google Sheets. Finance couldn't maintain or scale the process.",
      "Payroll is a high-alpha, low-beta product — it has to be consistent and reliable.",
    ],
    action: [
      "Built the Timesheet & Payroll platform (external site-director app + finance admin portal) over ~a year. Gathered needs across stakeholders, site directors, and finance for different payroll variants.",
      "Architected the backend APIs, set up the infra, and wired up the front end and admin panel. Set aside 20 min weekly with finance, UX, and stakeholders for progress and clarifications.",
      "Leveraged LLMs for spec development and writing backend microservices; iterated per sport type; ran releases and post-launch support.",
      "As analytics/queries grew complex, convinced leadership to move internal tooling to Retool instead of maintaining custom admin dashboards.",
    ],
    result: [
      "Company-wide adoption and onboarding of 30K+ employees across the US, saving ~$1M/year on payroll alone.",
      "Time-tracking and payroll scaled; onboarding is automated, with finance automations and agents doing analysis and reporting.",
    ],
    learnings: [
      "Payroll demands consistency and reliability above all. We built our own admin dashboards first, then adopted Retool once analytics got complex — the right internal-tooling call matters as much as the product.",
    ],
  },
  {
    slug: "idempotent-webhook-backend",
    title: "Idempotent Webhook Processing Backend",
    company: "Next Level Sports",
    period: "2025",
    oneLiner:
      "Integration layer across siloed systems designed to lose zero events even when any downstream is down.",
    tags: ["Distributed Systems", "Reliability", "AWS"],
    stack: ["AWS Lambda", "API Gateway", "Kafka", "DLQ", "Terraform", "Postgres"],
    metrics: [
      { value: "0", label: "events lost" },
      { value: "10 min", label: "reconciliation sweep" },
      { value: "100K", label: "user base served" },
      { value: "5+", label: "systems integrated" },
    ],
    context: [
      "NLS runs youth-sports programs across the US for 100K users on systems that don't talk to each other natively — scheduling, payroll, program data, registrations, training/certifications, marketing.",
      "These systems were trying to sync directly, which didn't scale and duplicated work. I owned the platform and the integration layer between them.",
    ],
    action: [
      "Architected a Node.js webhook-processing backend on AWS Lambda behind API Gateway to replace individual hops, designed around the assumption that any downstream can go down at any moment — the local record is the source of truth, sync is best-effort.",
      "Built multiple single-responsibility microservices per integration, with Kafka as the event queue and consumer groups delegating to workers.",
      "Made handlers idempotent on both ends to prevent duplication on retried events; built exponential-backoff retries and a DLQ, plus a 10-minute reconciliation sweep to keep Postgres in sync. Every action is reported to Rollbar with structured context.",
      "Owned the AWS footprint: per-function IAM roles, Secrets Manager, standardized Terraform modules, and Docker builds shipped via GitHub Actions across EC2, ECS, S3, DynamoDB, RDS.",
    ],
    result: [
      "A failure-proof integration layer: no events or data lost, no duplicate processing — the key to customer trust. Every infra change ships through Terraform and reviewed CI/CD.",
    ],
    learnings: [
      "Data ingestion is hard; you design for failure and duplication from day one, not as an afterthought.",
    ],
  },
  {
    slug: "heyfurnish",
    title: "HeyFurnish — Founder & Builder",
    company: "HeyFurnish",
    period: "2024-Present",
    oneLiner:
      "Co-founded and built a furniture/home startup end-to-end — product, engineering, and go-to-market.",
    tags: ["Startup", "0→1", "Founder"],
    stack: ["Next.js", "Node.js", "AI", "Full-stack"],
    metrics: [
      { value: "0→1", label: "built from scratch" },
      { value: "Live", label: "heyfurnish.com" },
    ],
    context: [
      "HeyFurnish is a startup I co-founded, applying the same builder mindset I bring to engineering teams: ship fast, measure, and iterate.",
      "It's the clearest signal of end-to-end ownership — from product and engineering to getting real users.",
    ],
    action: [
      "Built the product end-to-end as a founder-engineer, owning architecture, implementation, and the decisions in between.",
      "Applied AI-assisted engineering to move fast without lowering the quality bar — the same approach I use on production teams.",
    ],
    result: [
      "A live product at heyfurnish.com, and firsthand experience owning a business outcome, not just a feature.",
    ],
    learnings: [
      "Founding something sharpens the instinct for what actually moves a business — which makes me a better engineer on any team.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
