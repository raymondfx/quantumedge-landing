import { CheckCircle2, Truck, FileCheck2, Receipt, RefreshCcw } from "lucide-react";
import Reveal from "./Reveal";

const CAPABILITIES = [
  { icon: Truck, text: "Inbound distributor LPO ingestion" },
  { icon: FileCheck2, text: "Automated order validation" },
  { icon: CheckCircle2, text: "Live delivery tracking" },
  { icon: Receipt, text: "eTIMS tax integration" },
  { icon: RefreshCcw, text: "Automated QuickBooks/ERP syncing" },
];

export default function FlagshipSpotlight() {
  return (
    <section id="flagship" className="relative overflow-hidden scroll-mt-20 bg-navy py-24 lg:py-28">
      <div className="bg-dot-grid absolute inset-y-0 right-0 w-1/2 opacity-40 [mask-image:linear-gradient(to_left,#000,transparent)]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent-soft px-3.5 py-1 text-xs font-semibold text-accent">
                Flagship Highlight
              </span>
              <h2 className="font-heading mt-5 text-3xl font-bold leading-[1.2] text-white sm:text-[2.5rem]">
                Automated LPO &amp; Supply Chain Management System
              </h2>
              <p className="mt-3 text-base font-medium text-accent-soft">
                For Bulk Material Distributors, Manufacturers &amp; Enterprise Suppliers
              </p>
              <p className="mt-4 text-base leading-[1.4] text-white/60">
                Built for steel, cement, and hardware distributors managing
                high volumes of inbound purchase orders — where manual
                processing means delays, errors, and lost revenue.
              </p>

              <ul className="mt-8 space-y-3.5">
                {CAPABILITIES.map((cap) => (
                  <li key={cap.text} className="flex items-center gap-3 text-base text-white/85">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent-soft">
                      <cap.icon size={16} />
                    </span>
                    {cap.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 card-shadow">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                Measured Impact
              </div>
              <div className="mt-4 font-heading text-4xl font-bold text-navy sm:text-5xl">
                Days <span className="text-accent">&rarr;</span> Minutes
              </div>
              <p className="mt-3 text-base leading-[1.4] text-muted">
                LPO turnaround time reduced from days to minutes, while
                automated validation eliminates invoice errors end-to-end.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
                <div>
                  <div className="font-heading text-[1.875rem] font-semibold text-navy">100%</div>
                  <div className="mt-1 text-base leading-[1.4] text-muted">
                    Automated order validation
                  </div>
                </div>
                <div>
                  <div className="font-heading text-[1.875rem] font-semibold text-navy">Live</div>
                  <div className="mt-1 text-base leading-[1.4] text-muted">
                    Delivery &amp; ERP sync tracking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
