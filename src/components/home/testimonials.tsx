import { Quote } from "lucide-react";
import { testimonials } from "@/data/catalog";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <section aria-label="What families and schools say" className="container-x mt-28 sm:mt-40">
      <SectionHeading
        align="center"
        eyebrow="Word of Mouth"
        title={
          <>
            BUILDERS, PARENTS &amp;{" "}
            <span className="text-gradient">EDUCATORS TALK.</span>
          </>
        }
      />

      <Stagger className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.12}>
        {testimonials.slice(0, 3).map((testimonial) => (
          <StaggerItem key={testimonial.name + testimonial.role}>
            <figure className="glass card-hover relative flex h-full flex-col rounded-2xl p-7">
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-primary/15"
                aria-hidden
              />
              <span
                className="font-display text-5xl font-bold leading-none text-gradient"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 leading-relaxed text-muted">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold tracking-tight">{testimonial.name}</p>
                <p className="mt-0.5 text-sm text-faint">{testimonial.role}</p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
