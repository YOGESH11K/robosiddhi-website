import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { programs } from "@/data/programs";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/programs",
    "/robotics-lab",
    "/projects",
    "/ai-mentor",
    "/schools",
    "/students",
    "/teachers",
    "/parents",
    "/about",
    "/resources",
    "/events",
    "/shop",
    "/contact",
    "/certificates",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const programRoutes = programs.map((p) => ({
    url: `${base}/programs/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...programRoutes, ...projectRoutes];
}
