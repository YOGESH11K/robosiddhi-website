"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { EASE } from "@/lib/motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/robotics-lab", label: "Robotics Lab" },
  { href: "/projects", label: "Projects" },
  { href: "/schools", label: "For Schools" },
  { href: "/students", label: "For Students" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Link
      href="/"
      aria-label="RoboSiddhi home"
      className="group flex items-center gap-2.5"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-glow-primary">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" aria-hidden>
          <rect x="4" y="7" width="16" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="9.5" cy="13" r="1.6" fill="currentColor" />
          <circle cx="14.5" cy="13" r="1.6" fill="currentColor" />
          <path d="M12 7V3.8M12 3.8h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="15.8" cy="3.8" r="1.4" fill="currentColor" />
        </svg>
      </span>
      <span className="font-display text-[17px] font-bold leading-none tracking-tight">
        ROBO
        <span className="text-gradient">SIDDHI</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Main navigation"
          className="container-x flex h-16 items-center justify-between gap-4 sm:h-[72px]"
        >
          <Logo />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300",
                      active
                        ? "text-primary"
                        : "text-muted hover:text-foreground",
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                        transition={{ ease: EASE, duration: 0.4 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <ButtonLink href="/robotics-lab" size="sm" className="hidden sm:inline-flex">
              Start Building
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </ButtonLink>
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white/[0.03] text-foreground transition-colors hover:border-primary/40 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="dot-bg absolute inset-0 opacity-60" aria-hidden />
            <nav
              aria-label="Mobile navigation"
              className="container-x relative mt-24 flex flex-col gap-1 pb-10"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: EASE }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block border-b border-border py-3.5 font-display text-2xl font-semibold tracking-tight transition-colors",
                      pathname === link.href
                        ? "text-gradient"
                        : "text-foreground hover:text-primary",
                    )}
                  >
                    <span className="mr-3 font-mono text-xs text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4, ease: EASE }}
                className="mt-8"
              >
                <ButtonLink href="/robotics-lab" size="lg" className="w-full">
                  Start Building
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
