import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { Hero } from "@/components/home/hero";
import { TechCards } from "@/components/home/tech-cards";
import { TrustStrip } from "@/components/home/trust-strip";
import { LearningJourney } from "@/components/home/learning-journey";
import { TechUniverse } from "@/components/home/tech-universe";
import { FeaturedPrograms } from "@/components/home/featured-programs";
import { LabPreview } from "@/components/home/lab-preview";
import { AiMentorPreview } from "@/components/home/ai-mentor-preview";
import { ProjectsScroller } from "@/components/home/projects-scroller";
import { SchoolBand } from "@/components/home/school-band";
import { EventsStrip } from "@/components/home/events-strip";
import { Testimonials } from "@/components/home/testimonials";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.fullName} — Robotics, AI, IoT & STEM Innovation Lab`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.fullName,
  description: siteConfig.description,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Robotics",
    "Artificial Intelligence",
    "Internet of Things",
    "STEM Education",
    "Drone Technology",
    "3D Printing",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />
      <TechCards />
      <TrustStrip />
      <LearningJourney />
      <TechUniverse />
      <FeaturedPrograms />
      <LabPreview />
      <AiMentorPreview />
      <ProjectsScroller />
      <SchoolBand />
      <EventsStrip />
      <Testimonials />
      <FaqSection />
      <FinalCta />

      <div className="mt-28 sm:mt-36" aria-hidden />
    </>
  );
}
