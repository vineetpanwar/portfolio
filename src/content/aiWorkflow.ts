export type AIStep = {
  phase: string;
  detail: string;
};

// How I work with AI day-to-day — targets the AI-forward / FDE signal.
export const aiWorkflow: AIStep[] = [
  {
    phase: "Design & architecture",
    detail:
      "Use multiple agents to research options, then have Claude draft the design spec for frontend/backend with enough context. Leverage Claude's design skills to plan before building.",
  },
  {
    phase: "Writing code",
    detail:
      "Claude as the LLM, Cursor as the IDE for boilerplate and implementation. Plan-first with Superpowers skills, then write — and review — after. Generate types and interfaces from data models.",
  },
  {
    phase: "Prototyping",
    detail:
      "MCP integrations to Figma and Contentful to accelerate prototype generation and content creation.",
  },
  {
    phase: "Testing & debugging",
    detail:
      "AI for unit and integration tests toward 100% coverage. For debugging, AI in Slack suggests where a bug originated and drafts a fix; Claude Code parses logs, finds root cause, and proposes the fix.",
  },
  {
    phase: "Refactoring",
    detail: "Use AI to migrate to newer code patterns — then verify the result.",
  },
  {
    phase: "Shipping & PR review",
    detail:
      "AI writes structured PR descriptions. Every AI-generated change is treated as alien code — a CodeRabbit AI reviewer gates it, with human review reserved for risk-tiered paths.",
  },
];

export const aiPrinciple =
  "I treat AI-generated code as alien code: it ships only through review and test gates. The leverage is speed; the discipline is measurement.";
