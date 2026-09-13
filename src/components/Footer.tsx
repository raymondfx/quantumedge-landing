import Image from "next/image";

const SOLUTION_LINKS = [
  { label: "Business Automation", href: "#services" },
  { label: "Enterprise AI", href: "#services" },
  { label: "Cloud & DevOps", href: "#services" },
  { label: "Compliance Tech", href: "#services" },
];

const COMPANY_LINKS = [
  { label: "Flagship Solutions", href: "#flagship" },
  { label: "Methodology", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy pt-16">
      <div className="bg-dot-grid absolute inset-y-0 right-0 w-1/2 opacity-30 [mask-image:linear-gradient(to_left,#000,transparent)]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo/icon.svg"
                alt=""
                width={32}
                height={32}
                className="h-7 w-7"
              />
              <span className="font-heading text-base font-bold tracking-tight text-white">
                QuantumEdge Technologies
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Enterprise software engineering, AI automation, and cloud-native
              solutions for East Africa&rsquo;s growing enterprises.
            </p>
            <p className="mt-4 text-xs text-white/40">Nairobi, Kenya</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SOLUTION_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-accent-soft transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-accent-soft transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row">
          <p>&copy; {year} Quantumedge Technologies Limited. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-accent-soft transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-accent-soft transition-colors">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
