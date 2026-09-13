import { Workflow, BrainCircuit, Cloud, ShieldCheck, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    id: "service-automation",
    icon: Workflow,
    title: "Business Automation & Integration",
    description:
      "End-to-end API integrations, payment gateways, custom ERP/CRM connectors, and high-throughput transactional engines.",
  },
  {
    id: "service-ai",
    icon: BrainCircuit,
    title: "Enterprise AI & Predictive Systems",
    description:
      "Custom LLM workflows, automated document processing, intelligent customer channels (WhatsApp/SMS APIs), and automated incident response systems.",
  },
  {
    id: "service-cloud",
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description:
      "High-availability microservices (Go, Rust, Node), Kubernetes, CI/CD pipelines, automated load testing, and multi-tenant SaaS infrastructure.",
  },
  {
    id: "service-compliance",
    icon: ShieldCheck,
    title: "Regulatory & Compliance Tech",
    description:
      "Native integration with local tax systems (KRA eTIMS, electronic invoicing), bank APIs, and regional financial reporting tools.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-solutions-gradient relative scroll-mt-20 py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            Enterprise Services
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            Full-stack engineering for mission-critical operations
          </h2>
          <p className="mt-4 max-w-lg text-base leading-[1.4] text-muted">
            From procurement automation to compliance-native infrastructure,
            we build the systems that keep your enterprise running.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <div
                id={service.id}
                className="card-shadow card-shadow-hover group h-full scroll-mt-28 rounded-2xl bg-white p-8"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <service.icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="font-heading mt-6 text-xl font-semibold leading-[1.3] text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-[1.4] text-muted">
                  {service.description}
                </p>
                <div className="font-ui mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
