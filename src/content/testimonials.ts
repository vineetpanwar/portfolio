export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "He proposed we make safety measurable instead of arguing it was safe — built the eval harness first, then shipped the AI in tiers. I went from blocking auto-send to citing it to the board.",
    name: "Calvin Chan",
    role: "CTO",
    company: "Next Level Sports",
  },
  {
    quote:
      "Vineet turned repeated per-team work into one shared caching + observability SDK. It dropped into our repo and saved us months. Rare to find someone who builds leverage for other teams, not just features.",
    name: "Keshav Sultania",
    role: "Senior Engineer",
    company: "PayPal",
  },
  {
    quote:
      "When a 5xx spike looked like our deploy, he treated the rollback as an experiment, found the real DDoS, and then wrote the alerts and runbooks so the next on-call wouldn't chase the wrong hypothesis.",
    name: "P Venkatak Pidathala",
    role: "Tech Lead",
    company: "PayPal",
  },
];
