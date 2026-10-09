export type Story = {
  title: string;
  principle: string;
  body: string;
};

// "How I think" — judgment, not just output. What separates senior from staff.
export const stories: Story[] = [
  {
    title: "Betting on RAG before understanding the problem",
    principle: "Characterize the problem before choosing an architecture.",
    body:
      "On the support-automation POC I committed early to a RAG pipeline — it's the standard pattern, so I assumed it would work. A month in, the drafts were wrong in ways I couldn't systematically catch: I'd misread the problem — resolving a ticket is a workflow, not a lookup, and retrieval can't execute steps. I'd also built without an eval harness, so 'is it improving?' was a gut call. I killed the RAG approach and inverted my process: built the evals first, then multi-agent orchestration. Because measurement existed before the system did, I could prove the new design worked rather than assert it. It now auto-resolves 60-65 tickets a day.",
  },
  {
    title: "Turning a skeptical leader's objection into the acceptance bar",
    principle: "When a leader pushes back on risk, bring evidence, not a better argument.",
    body:
      "My manager pushed back hard on letting AI auto-send replies to parents about refunds and registrations — a legitimate concern; it's people's kids and their money. I didn't argue the system was safe. I built the eval harness first — deterministic checks plus an LLM judge against historical tickets — so we had accuracy numbers per topic, then proposed a tiered rollout: draft everything, auto-send nothing until a topic clears the bar; money topics stay human-reviewed. His objection literally became the criteria the system had to clear. We went live on low-risk topics, expanded as they cleared, and he went from blocking it to citing it to the board.",
  },
  {
    title: "A 5xx spike minutes after a deploy that wasn't the deploy",
    principle: "Correlation in timing is the most seductive false signal in incident response.",
    body:
      "At PayPal, Splunk fired on a 5xx spike minutes after a release — timing made the conclusion feel obvious: new release, new errors. We rolled back (cheap, reversible), but the error rate didn't recover — that rollback was a controlled experiment that disproved our hypothesis. I stopped looking at code and looked at traffic: volume well above our curve, concentrated on a few endpoints, with signatures that didn't look like real users. It was a DDoS that started close enough to the deploy to wear a disguise. We mitigated at the edge, then I built Splunk alerts that distinguish an attack signature from a normal error spike and wrote the runbooks — so the next on-call wouldn't lose time on the wrong hypothesis.",
  },
  {
    title: "Risk-tiered PR review instead of all-or-nothing",
    principle: "Most peer conflicts are two legitimate constraints; the shared design beats winning.",
    body:
      "A peer pushed to drop mandatory PR reviews — fair point, reviews sat for days and cost us deadlines. I disagreed because our defects landed in payroll and checkout, where a bad merge means someone isn't paid correctly. Rather than argue positions, I pulled the data: his problem was review latency, mine was risk on specific paths — and those don't conflict. I proposed baking CodeRabbit into the workflow so every PR gets an instant automated review, and reserving mandatory human review for a risk-tiered list (payments, payroll, auth) enforced through CODEOWNERS. Review feedback went from hours to minutes, human attention concentrated where mistakes are expensive, and the decision held because we'd defined success upfront.",
  },
];
