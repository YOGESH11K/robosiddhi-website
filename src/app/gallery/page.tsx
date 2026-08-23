import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside the RoboSiddhi lab — workshops, competitions, student builds and school programs. A look at life at the benches.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            LIFE AT THE
            <br />
            <span className="text-gradient">BENCHES.</span>
          </>
        }
        description="Workshops, races, demo days and quiet wiring victories — moments from the RoboSiddhi community."
      />

      <section className="container-x py-14 sm:py-20">
        <GalleryGrid />

        <p className="mx-auto mt-14 flex max-w-xl items-start justify-center gap-2 text-center text-sm leading-relaxed text-faint">
          <Camera className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          Tiles are original generated visuals standing in for photos we haven&apos;t published
          yet. Real lab photography will replace them as it&apos;s verified.
        </p>
      </section>
    </>
  );
}
