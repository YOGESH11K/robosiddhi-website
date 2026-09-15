import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SocialIcon } from "@/components/icons/social-icon";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { href: "/programs", label: "Programs" },
      { href: "/robotics-lab", label: "Robotics Lab" },
      { href: "/projects", label: "Projects" },
      { href: "/events", label: "Events & Workshops" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/schools", label: "For Schools" },
      { href: "/students", label: "For Students" },
      { href: "/teachers", label: "For Teachers" },
      { href: "/parents", label: "For Parents" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/resources", label: "Resources" },
      { href: "/shop", label: "Shop Kits" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        aria-hidden
      />
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand block */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3" aria-label="RoboSiddhi home">
              <Image
                src="/logos/robosiddhi-logo.png"
                alt="RoboSiddhi"
                width={1438}
                height={756}
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <ul className="flex items-center gap-2.5">
              {siteConfig.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    aria-label={social.name}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-glow-primary"
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={`Footer — ${col.title}`}>
                <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <address className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-8 not-italic">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4 text-primary" />
            {siteConfig.contact.email}
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-muted">
            <Phone className="h-4 w-4 text-primary" />
            {siteConfig.contact.phone}
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-primary" />
            {siteConfig.contact.address}
          </span>
        </address>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="font-display text-lg font-bold tracking-[0.18em] text-gradient">
            BUILD. CODE. CREATE. INNOVATE.
          </p>
          <div className="flex items-center gap-6 text-xs text-faint">
            <span>
              © {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
            </span>
            <Link href="/privacy" className="transition-colors hover:text-muted">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-muted">
              Terms
            </Link>
            <Link
              href="/certificates"
              className="group inline-flex items-center gap-1 transition-colors hover:text-muted"
            >
              Verify Certificate
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
