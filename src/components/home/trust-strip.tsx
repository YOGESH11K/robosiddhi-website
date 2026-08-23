import { siteConfig } from "@/data/site-config";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";

const items = [
  {
    label: "Students mentored",
    value: siteConfig.stats.students.value,
    suffix: siteConfig.stats.students.suffix,
  },
  {
    label: "Projects built",
    value: siteConfig.stats.projects.value,
    suffix: siteConfig.stats.projects.suffix,
  },
  {
    label: "Partner schools",
    value: siteConfig.stats.schools.value,
    suffix: siteConfig.stats.schools.suffix,
  },
  {
    label: "Technology programs",
    value: siteConfig.stats.programs.value,
    suffix: siteConfig.stats.programs.suffix,
  },
];

export function TrustStrip() {
  return (
    <section
      id="impact"
      aria-label="Community impact"
      className="container-x mt-20 sm:mt-28"
    >
      <Reveal>
        <div className="glass-strong grid-bg relative overflow-hidden rounded-2xl px-6 py-10 sm:px-10">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.75 0.14 210 / 0.5), transparent)",
            }}
          />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 text-center lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <dd className="order-1 font-display text-4xl font-bold tracking-tight text-primary sm:text-[2.75rem]">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </dd>
                <dt className="order-2 text-sm text-muted">{item.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-8 border-t border-border pt-4 font-mono text-[11px] tracking-wide text-faint">
            Community impact figures — placeholder until verified.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
