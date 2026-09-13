import Image from "next/image";
import Reveal from "./Reveal";

function DigitalOceanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-6 sm:w-6" fill="#0080FF">
      <path d="M12.04 0C5.408-.02.005 5.37.005 11.992h4.638c0-4.923 4.882-8.731 10.064-6.855a6.95 6.95 0 014.147 4.148c1.889 5.177-1.924 10.055-6.84 10.064v-4.61H7.391v4.623h4.61V24c7.86 0 13.967-7.588 11.397-15.83-1.115-3.59-3.985-6.446-7.575-7.575A12.8 12.8 0 0012.039 0zM7.39 19.362H3.828v3.564H7.39zm-3.563 0v-2.978H.85v2.978z" />
    </svg>
  );
}

function MetaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-6 sm:w-6" fill="#0467DF">
      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-6 sm:w-6">
      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
      <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
    </svg>
  );
}

// Freeform staggered positions (percent of the badge field), echoing the reference's
// irregular 3-column "brick" rhythm rather than a neat grid. x values keep enough
// margin from 0/100 so badges don't clip the container edge on narrow viewports.
const BADGES = [
  {
    name: "Azure",
    x: 38,
    y: 14,
    render: () => (
      <Image src="/logo/partners/azure.svg" alt="Azure" width={128} height={128} className="h-6 w-6 sm:h-8 sm:w-8" />
    ),
  },
  {
    name: "Microsoft",
    x: 72,
    y: 20,
    render: () => (
      <span className="flex items-center gap-1.5 sm:gap-2">
        <MicrosoftIcon />
        <span className="font-heading text-sm font-bold tracking-tight text-navy sm:text-lg">Microsoft</span>
      </span>
    ),
  },
  {
    name: "AWS",
    x: 11,
    y: 48,
    render: () => (
      <Image src="/logo/partners/aws.svg" alt="AWS" width={128} height={128} className="h-8 w-8 sm:h-10 sm:w-10" />
    ),
  },
  {
    name: "Meta",
    x: 47,
    y: 62,
    render: () => (
      <span className="flex items-center gap-1.5 sm:gap-2">
        <MetaIcon />
        <span className="font-heading text-sm font-bold tracking-tight text-navy sm:text-lg">Meta</span>
      </span>
    ),
  },
  {
    name: "DigitalOcean",
    x: 79,
    y: 56,
    render: () => (
      <span className="flex items-center gap-1.5 sm:gap-2">
        <DigitalOceanIcon />
        <span className="font-heading text-xs font-bold tracking-tight text-navy sm:text-base">DigitalOcean</span>
      </span>
    ),
  },
];

export default function CloudPartners() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="font-ui inline-block rounded-md bg-surface px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted">
              Partners
            </span>
            <h2 className="font-heading mt-5 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
              Recognized by the best
            </h2>
            <p className="mt-4 max-w-md text-base leading-[1.4] text-muted">
              We build on infrastructure and platforms trusted by the
              world&rsquo;s leading technology providers, so your systems
              inherit their reliability from day one.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mx-auto h-[280px] w-full max-w-[480px] sm:h-[320px]">
              {BADGES.map((badge) => (
                <div
                  key={badge.name}
                  className="card-shadow card-shadow-hover absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-white px-3 py-2.5 sm:px-5 sm:py-4"
                  style={{ left: `${badge.x}%`, top: `${badge.y}%` }}
                >
                  {badge.render()}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
