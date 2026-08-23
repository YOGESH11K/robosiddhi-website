import Link from "next/link";
import { technologies } from "@/data/technologies";
import { TechIcon } from "@/components/icons/tech-icon";
import { Reveal } from "@/components/ui/reveal";

const cardLinks: Record<string, string> = {
  robotics: "/robotics-lab",
  "artificial-intelligence": "/ai-mentor",
  iot: "/programs",
  coding: "/students",
  drones: "/events",
  "space-technology": "/projects",
  "3d-printing": "/shop",
};

export function TechCards() {
  return (
    <section aria-label="Technologies you can learn" className="relative z-10 -mt-4 sm:-mt-6">
      <div className="container-x [perspective:900px]">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {technologies.map((tech, i) => (
            <Reveal
              key={tech.slug}
              as="li"
              delay={i * 0.06}
              y={18}
              className="[perspective:600px]"
            >
              <Link
                href={cardLinks[tech.slug] ?? "/programs"}
                style={{ "--tech": tech.color } as React.CSSProperties}
                aria-label={`Explore ${tech.name}`}
                className="glass animate-float-slow group flex h-full flex-col items-center gap-2.5 rounded-xl px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:[border-color:var(--tech)] hover:[box-shadow:0_16px_40px_-16px_var(--tech)] hover:[transform:rotateX(7deg)]"
              >
                <span
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-white/[0.04] transition-colors duration-300"
                  style={{ color: tech.color }}
                >
                  <TechIcon name={tech.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors duration-300 group-hover:text-foreground">
                  {tech.name}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
