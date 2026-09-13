import Reveal from "./Reveal";

const DOT_ROWS = [1, 2, 3, 4, 5, 6, 7, 8];

export default function MissionBand() {
  return (
    <section className="pt-16 pb-8 sm:pt-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 sm:px-14 sm:py-16">
            <span className="inline-block rounded-md bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/70">
              What We Do
            </span>

            <h2 className="font-heading mt-8 max-w-lg text-4xl font-bold leading-[1.2] text-accent-soft sm:text-[3rem]">
              Simplifying enterprise complexity for a connected world.
            </h2>

            {/* Triangular dot cluster, echoing the reference layout */}
            <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-1/2 sm:block">
              <div className="absolute bottom-10 right-14 flex flex-col items-center gap-2.5">
                {DOT_ROWS.map((count) => (
                  <div key={count} className="flex gap-2.5">
                    {Array.from({ length: count }).map((_, i) => (
                      <span
                        key={i}
                        className="block h-2 w-2 rounded-full bg-accent-soft/70"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
