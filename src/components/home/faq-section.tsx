import { homepageFaqs } from "@/data/catalog";
import { Accordion } from "@/components/ui/tabs";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection() {
  return (
    <section aria-label="Frequently asked questions" className="container-x mt-28 sm:mt-40">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            QUESTIONS,
            <br />
            <span className="text-gradient">ANSWERED.</span>
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted">
            Everything parents and students ask us most. Something else on your
            mind? Write to us — a human replies.
          </p>
        </Reveal>

        <Accordion items={homepageFaqs} />
      </div>
    </section>
  );
}
