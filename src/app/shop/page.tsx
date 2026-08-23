import type { Metadata } from "next";
import { ArrowRight, PackageSearch, ShoppingCart } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { DifficultyBadge } from "@/components/ui/badge";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { products } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Shop Kits",
  description:
    "RoboSiddhi learning kits — beginner electronics, robot builder, IoT innovator and classroom bundles. Pricing on request while our catalog is being verified.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      <PageHero
        eyebrow="Learning Kits"
        title={
          <>
            THE EXACT KITS
            <br />
            WE <span className="text-gradient">TEACH WITH.</span>
          </>
        }
        description="Every kit is curated around our curriculum — components chosen for the projects they unlock, not a random parts dump. Pricing is shared on enquiry."
      >
        <ButtonLink href="/contact">
          Enquire About Kits <ShoppingCart className="h-4 w-4" />
        </ButtonLink>
      </PageHero>

      {/* Category rail */}
      <section className="container-x pt-14">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-white/[0.03] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Products */}
      <section className="container-x py-12 sm:py-16">
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <GlassCard className="flex h-full flex-col p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    {product.category}
                  </span>
                  <DifficultyBadge level={product.difficulty} />
                </div>

                <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p>

                {product.badge && (
                  <span className="mt-3 w-fit rounded-full border border-highlight/30 bg-highlight/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-highlight">
                    ★ {product.badge}
                  </span>
                )}

                <h3 className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  What&apos;s inside
                </h3>
                <ul className="mt-2 flex flex-col gap-1.5" aria-label={`Components of ${product.name}`}>
                  {product.components.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {c}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  Unlock these builds
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  {product.projectsPossible.join(" · ")}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-6 mt-7">
                  <span className="font-mono text-sm text-highlight">{product.priceNote}</span>
                  <ButtonLink href="/contact" size="sm">
                    Enquire <ArrowRight className="h-3.5 w-3.5" />
                  </ButtonLink>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14">
          <SectionHeading
            eyebrow="Schools & Bulk Orders"
            title="Setting up a class or lab?"
            description="Classroom bundles include teacher master kits and curriculum access. Ask us about configuration for your student count."
          />
          <div className="mt-8 flex justify-center gap-3">
            <ButtonLink href="/schools" variant="secondary">
              School Solutions
            </ButtonLink>
            <ButtonLink href="/contact">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal className="mt-12 flex items-start justify-center gap-2 text-center text-xs leading-relaxed text-faint">
          <PackageSearch className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          Catalog contents reflect the hardware used in RoboSiddhi programs; prices are
          intentionally unpublished until verified (TODO_CONFIG in src/data/catalog.ts).
        </Reveal>
      </section>
    </>
  );
}

