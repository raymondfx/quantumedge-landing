"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useContactModal } from "./ContactModalProvider";

const SERVICE_LINKS = [
  { label: "Business Automation & Integration", href: "#service-automation" },
  { label: "Enterprise AI & Predictive Systems", href: "#service-ai" },
  { label: "Cloud Infrastructure & DevOps", href: "#service-cloud" },
  { label: "Regulatory & Compliance Tech", href: "#service-compliance" },
];

const NAV_LINKS = [
  { label: "Flagship Solutions", href: "#flagship" },
  { label: "Enterprise AI", href: "#service-ai" },
  { label: "Methodology", href: "#why-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Backdrop-filter lives on this inner bar, not <header> itself — a filter/backdrop-filter
          ancestor becomes the containing block for position:fixed descendants, which would
          collapse the drawer below (whose fixed positioning must resolve against the viewport). */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_24px_rgba(10,13,49,0.08)]" : ""
        } border-b border-border`}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between py-4">
            <a href="#top" className="flex items-center gap-2.5 shrink-0 group">
              <Image
                src="/logo/icon.svg"
                alt=""
                width={32}
                height={32}
                priority
                className="h-8 w-8 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-heading text-lg font-bold tracking-tight text-navy sm:text-xl">
                QuantumEdge<span className="hidden sm:inline"> Technologies</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-7">
              {/* Services dropdown */}
              <div className="group relative">
                <button className="font-heading flex items-center gap-1 text-base font-medium text-navy/80 hover:text-accent transition-colors">
                  Services
                  <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
                </button>

                <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="card-shadow rounded-xl border border-border bg-white p-2">
                    {SERVICE_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="font-ui block rounded-lg px-4 py-2.5 text-sm font-medium text-navy hover:bg-surface hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-heading text-base font-medium text-navy/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              <a
                href="#contact"
                className="group flex flex-col items-start leading-tight"
              >
                <span className="font-ui flex items-center gap-1 rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-navy/70 group-hover:text-accent transition-colors">
                  Client Support
                  <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="font-heading mt-1 text-sm font-semibold text-navy">
                  +254 726 084 248
                </span>
              </a>

              <button
                onClick={openContactModal}
                className="btn-primary inline-flex items-center rounded-md px-5 py-2.5"
              >
                Contact Us
              </button>
            </div>

            <button
              className="lg:hidden text-navy p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-18 bottom-0 overflow-y-auto bg-white transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "72px" }}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          <div className="py-3.5 border-b border-border">
            <div className="text-lg font-medium text-navy">Services</div>
            <div className="mt-3 flex flex-col gap-3 pl-2">
              {SERVICE_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="font-ui text-sm font-medium text-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className="font-heading text-lg font-medium text-navy hover:text-accent py-3.5 border-b border-border transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="py-3.5 border-b border-border">
            <div className="text-xs font-medium uppercase tracking-wide text-muted">
              Client Support
            </div>
            <div className="mt-1 text-base font-semibold text-navy">
              +254 726 084 248
            </div>
          </div>

          <button
            onClick={() => {
              handleNavClick();
              openContactModal();
            }}
            className="btn-primary mt-6 inline-flex items-center justify-center rounded-md px-5 py-3.5"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
