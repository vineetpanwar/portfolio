export const site = {
  name: "Vineet Panwar",
  role: "Senior Full-Stack + AI Engineer",
  // Positioning line — the one sentence a recruiter reads first.
  tagline: "I architect systems that run at scale and the AI that runs on top of them.",
  location: "New York, NY",
  // Deployment-agnostic. Set to your real domain before shipping OG/sitemap.
  url: "https://vineetpanwar.vercel.app",
  email: "vineetpanwar027@gmail.com",
  resume: "/Vineet_Panwar_Resume.pdf",
  links: {
    github: "https://github.com/vineetpanwar",
    linkedin: "https://www.linkedin.com/in/vineet-panwar-b5ba19110",
    calendly: "https://calendly.com/vineetpanwar027/30min",
    heyfurnish: "https://heyfurnish.com",
  },
  // Short, plain-English summary — also fed to llms.txt and JSON-LD.
  summary:
    "Senior Full-Stack Engineer with 8+ years across Banking, FinTech, AI platforms, and Sports Tech. " +
    "I build scalable distributed backends, data-driven UIs, and multi-agent AI systems. " +
    "At PayPal I shipped services handling 200M+ requests/day at 99.99% uptime; at Next Level Sports " +
    "I built a multi-agent AI support platform that auto-resolves 60% of tickets and a payroll platform " +
    "that saved ~$1M/year. I lead with measurement — evals and observability before architecture.",
} as const;

export type Site = typeof site;
