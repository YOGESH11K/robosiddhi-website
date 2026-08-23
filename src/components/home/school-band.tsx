import { ArrowRight, ClipboardCheck, Cpu, GraduationCap, School } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const checklist = [
  {
    icon: School,
    title: "Lab Setup",
    note: "Turnkey robotics/ATL labs — equipment, benches, safety and layout designed for real class loads.",
  },
  {
    icon: GraduationCap,
    title: "Curriculum",
    note: "NEP-aligned, grade-wise curriculum mapped to your academic calendar.",
  },
  {
    icon: Cpu,
    title: "Teacher Training",
    note: "We certify your teachers to run the lab independently — hardware, pedagogy and assessment.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment & Reports",
    note: "Project-based rubrics and term reports that make STEM progress visible to parents.",
  },
];

export function SchoolBand() {
  return (
    <section aria-label="School solutions" className="container-x mt-28 sm:mt-40">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-highlight">
            For Schools
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            BUILD A ROBOTICS ECOSYSTEM{" "}
            <span className="text-gradient">INSIDE YOUR SCHOOL.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            From an empty room to a buzzing innovation lab in one term. We
            handle the technology; your teachers own the classroom — with our
            team behind them all year.
          </p>
          <ButtonLink href="/schools" variant="secondary" size="lg" className="mt-8">
            Request School Program
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden />
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-3.5">
            {checklist.map((item) => (
              <li
                key={item.title}
                className="glass card-hover flex items-start gap-4 rounded-xl p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-success/25 bg-success/10 text-success">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="flex items-center gap-2 font-semibold">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-muted">
                    {item.note}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
