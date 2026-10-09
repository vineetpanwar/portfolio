export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: "Next Level Sports",
    title: "Senior Full-Stack Engineer",
    period: "May 2025 — Present",
    location: "Remote (New York, USA)",
    summary:
      "Lead engineer owning payments, payroll, and the AI platform for a youth-sports company serving 100K+ users across the US.",
    highlights: [
      "Built a multi-agent AI support platform (Mastra + Claude) with supervisor agents, code-enforced safety gates, and LLM-as-judge evals — auto-resolves 60% of daily tickets.",
      "Led a Timesheet & Payroll platform paying 10,000+ coaches weekly (Node.js, tRPC, Prisma, PlanetScale), replacing a Google Sheets process and saving ~$1M/year.",
      "Engineered a PCI-conscious Stripe checkout (tokenized cards, idempotency, explicit retry states): 30K+ transactions with near-zero payment failures, saving ~$150K/year.",
      "Architected an idempotent webhook-processing backend on AWS Lambda (retries, DLQ, 10-min reconciliation) so failures never lose data.",
    ],
    tags: ["AI / Multi-agent", "Payments", "Node.js", "AWS", "Next.js"],
  },
  {
    company: "PayPal",
    title: "Senior Software Engineer",
    period: "Jan 2021 — Jan 2024",
    location: "Bangalore, India",
    summary:
      "Owned Java/Spring Boot and Node.js services for PayPal Home, Marketing, and Onboarding — 200M+ requests/day at 99.99% uptime.",
    highlights: [
      "Served 200M+ requests/day at 99.99% uptime as containerized microservices on PayPal's internal cloud.",
      "Built a 4-tier caching solution (LRU, KV store, Redis, snapshots) with a circuit breaker — 40K+ pages stayed up through CMS outages at 99.9999% availability.",
      "Shipped a read-through caching layer (99% hit ratio) and OpenTelemetry instrumentation as reusable npm packages adopted across 3 offshore teams.",
      "Cut global-nav load time 50% to 250ms and scaled it to 60+ countries; detected and mitigated DDoS traffic disguised as a deploy regression.",
    ],
    tags: ["Scale", "Java / Spring Boot", "Caching", "Kafka", "Observability"],
  },
  {
    company: "HARMAN International",
    title: "Senior Product Engineer",
    period: "Nov 2019 — Jan 2021",
    location: "Bangalore, India",
    summary:
      "Built resilient telemetry ingestion pipelines and real-time observability for high-volume network data.",
    highlights: [
      "Developed Java/Node.js ingestion pipelines carrying bursty telemetry from thousands of switches without dropping events.",
      "Built the observability system from the ground up — structured logging, distributed tracing, alerting, on-call runbooks.",
      "Shipped real-time D3.js + Three.js/WebGL dashboards on Kibana/Elasticsearch, responsive under continuous WebSocket push.",
    ],
    tags: ["Telemetry", "Real-time", "D3 / WebGL", "AWS"],
  },
  {
    company: "Recrosoft Technologies",
    title: "Frontend Engineer",
    period: "Aug 2018 — Nov 2019",
    location: "Bangalore, India",
    summary:
      "Built offline-first PWAs and Node.js microservices for real-time logistics (Swiggy) and finance (Goldman Sachs).",
    highlights: [
      "Engineered Node.js microservices and PostgreSQL schemas syncing real-time data across Swiggy's two-sided marketplace.",
      "Led a React + Redux offline-first PWA (service workers, IndexedDB) that improved operations efficiency 15%.",
      "Cut front-end build time 40% with a config-driven UI platform letting non-engineers assemble interfaces.",
    ],
    tags: ["PWA", "React", "Node.js", "Real-time"],
  },
  {
    company: "Danske Bank",
    title: "Associate Software Engineer",
    period: "Aug 2016 — Aug 2018",
    location: "Bangalore, India",
    summary:
      "Built secure Java middleware and modernized front ends for a bank's guarantees product and blockchain clearance.",
    highlights: [
      "Designed Java middleware bridging Node.js apps with legacy DB2 mainframes while keeping ACID guarantees.",
      "Modernized the Guarantees product (billions in annual revenue) — rebuilt pages and auth flows.",
      "Built a blockchain document-clearance platform on R3 and shipped Finnish National ID logon.",
    ],
    tags: ["Banking", "Java", "Security", "Blockchain"],
  },
];

export const education = {
  degree: "M.S. Computer Science",
  school: "Syracuse University",
  period: "Jan 2024 — May 2025",
  location: "Syracuse, NY",
  note: "Advanced Algorithms & Data Structures · OS Design & Architecture · Functional Programming (Haskell)",
};
