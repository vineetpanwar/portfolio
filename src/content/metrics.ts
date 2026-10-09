export type Metric = {
  value: string;
  label: string;
  sub?: string;
};

// The undeniable numbers — first thing a recruiter's eye catches.
export const metrics: Metric[] = [
  { value: "200M+", label: "requests / day", sub: "PayPal, 99.99% uptime" },
  { value: "60%", label: "tickets auto-resolved", sub: "multi-agent AI support" },
  { value: "~$1M", label: "saved / year", sub: "payroll platform" },
  { value: "55K+", label: "app users", sub: "cross-platform sports app" },
  { value: "8+", label: "years shipping", sub: "Banking → FinTech → AI" },
];
