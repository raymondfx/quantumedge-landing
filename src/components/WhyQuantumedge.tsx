import { Lock, RefreshCw, Layers, Globe2 } from "lucide-react";
import Reveal from "./Reveal";

const STACK = [
  "Go",
  "Rust",
  "React",
  "TypeScript",
  "Python / AI",
  "Docker",
  "Kubernetes",
  "Cloudflare",
  "PostgreSQL",
  "Temporal",
];

const PILLARS = [
  {
    icon: Lock,
    title: "High Security & Data Sovereignty",
    description:
      "Data residency-aware architecture with defense-in-depth security practices baked into every deployment.",
  },
  {
    icon: RefreshCw,
    title: "Zero-Downtime Migration",
    description:
      "Legacy-to-modern system transitions engineered without disrupting live business operations.",
  },
  {
    icon: Layers,
    title: "Multi-tenant Isolation",
    description:
      "Secure, isolated environments for every client on shared infrastructure, without compromising performance.",
  },
  {
    icon: Globe2,
    title: "Regional Compliance",
    description:
      "Native alignment with East African tax, banking, and financial-reporting regulatory frameworks.",
  },
];

export default function WhyQuantumedge() {
  return (
    <section id="why-us" className="relative scroll-mt-20 py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            Why Quantumedge
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            Engineering discipline, enterprise trust
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="font-ui rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-navy transition-colors hover:border-accent/40 hover:text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="card-shadow card-shadow-hover h-full rounded-2xl border border-border bg-white p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <pillar.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-heading mt-5 text-xl font-semibold leading-[1.3] text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-base leading-[1.4] text-muted">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
