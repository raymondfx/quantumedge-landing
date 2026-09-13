import Image from "next/image";
import { Star } from "lucide-react";

const METRICS = [
  { value: "99.99%", unit: "Uptime", label: "SLA Architectures" },
  { value: "10x", unit: "Faster", label: "LPO & Order Processing" },
  { value: "eTIMS & ERP", unit: "", label: "Native Compliance" },
  { value: "24/7", unit: "", label: "AI Workflow Automation" },
];

function ReviewBadge() {
  return (
    <div className="flex items-center gap-3">
      <div>
        <div className="font-ui text-xs font-medium uppercase tracking-wide text-muted">
          Trusted by
        </div>
        <div className="mt-1.5 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="font-ui mt-1 text-sm font-semibold text-navy">
          Enterprise clients
        </div>
      </div>
    </div>
  );
}

function Metric({ metric }: { metric: (typeof METRICS)[number] }) {
  return (
    <div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-heading text-[1.875rem] font-semibold leading-[1.2] text-navy">
          {metric.value}
        </span>
        {metric.unit && (
          <span className="font-heading text-xl font-semibold leading-[1.3] text-navy">
            {metric.unit}
          </span>
        )}
      </div>
      <div className="mt-1 text-base leading-[1.4] text-muted">
        {metric.label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-0 lg:pt-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-12">
          {/* Left: copy */}
          <div>
            <h1 className="font-heading animate-fade-in-up text-[2.5rem] font-semibold leading-[1] tracking-[-1px] text-navy sm:text-[3.25rem] lg:text-[4rem]">
              We manage your IT,
              <br />
              so you can manage
              <br />
              your business.
            </h1>

            <p className="animate-fade-in-up delay-200 mt-7 max-w-lg text-xl leading-[1.4] text-[#242627]">
              Take charge of your business continuity with innovative IT
              solutions
            </p>

            <div className="animate-fade-in-up delay-300 mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendly.com/raykip512/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center rounded-md px-6 py-3.5"
              >
                Schedule a Free Consultation
              </a>
              <a
                href="#services"
                className="btn-secondary inline-flex items-center justify-center rounded-md px-6 py-3.5"
              >
                Services
              </a>
            </div>
          </div>

          {/* Right: team photo, full image */}
          <div className="animate-fade-in delay-200 relative">
            <div className="card-shadow relative aspect-[1504/950] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-team.jpg"
                alt="Quantumedge engineers reviewing a client system together"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Trust / metrics strip */}
        <div className="animate-fade-in-up delay-400 mt-16 border-t border-border py-8">
          {/* Desktop: one divided row — review badge + 4 metrics */}
          <div className="hidden lg:flex lg:items-center lg:divide-x lg:divide-border">
            <div className="pr-8">
              <ReviewBadge />
            </div>
            {METRICS.map((metric) => (
              <div key={metric.label} className="px-8">
                <Metric metric={metric} />
              </div>
            ))}
          </div>

          {/* Mobile / tablet: stacked */}
          <div className="lg:hidden">
            <div className="border-b border-border pb-6">
              <ReviewBadge />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {METRICS.map((metric) => (
                <Metric key={metric.label} metric={metric} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
