export type SkillGroup = {
  title: string;
  items: string[];
  featured?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Engineering",
    featured: true,
    items: [
      "LLM APIs (Anthropic, OpenAI)",
      "Multi-agent systems (Mastra)",
      "Evaluation harnesses & LLM-as-judge",
      "RAG",
      "Safety gates & guardrails",
      "Prompt/context engineering",
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Spring Boot",
      "Express",
      "tRPC",
      "REST",
      "GraphQL",
      "WebSockets",
      "Apache Kafka",
      "Stripe",
      "Microservices",
      "Event-driven architecture",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React 18",
      "Next.js (App Router, SSR/ISR/SSG)",
      "React Native (Expo)",
      "Preact",
      "TanStack Query",
      "Zustand",
      "Redux",
      "Tailwind CSS",
      "Storybook",
      "WCAG 2.1 AA",
      "Core Web Vitals",
    ],
  },
  {
    title: "Cloud & Infra",
    items: [
      "AWS (ECS, Lambda, API Gateway, EC2, S3)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
      "Canary & A/B deploys",
    ],
  },
  {
    title: "Data",
    items: [
      "PostgreSQL",
      "MySQL (PlanetScale)",
      "Prisma",
      "Redis",
      "MongoDB",
      "DynamoDB",
      "Elasticsearch",
      "pgvector",
      "DB2",
    ],
  },
  {
    title: "Languages",
    items: ["TypeScript / JavaScript (ES6+)", "Java", "SQL", "Python", "Kotlin"],
  },
  {
    title: "Observability",
    items: [
      "OpenTelemetry",
      "Splunk & Splunk Observability Cloud",
      "Sentry",
      "Rollbar",
      "Catchpoint",
      "Looker",
      "Kibana",
      "Distributed tracing",
      "Runbooks",
    ],
  },
  {
    title: "Testing",
    items: ["Jest", "Vitest", "Playwright", "Cypress", "React Testing Library"],
  },
];
