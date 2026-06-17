"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GetStartedDialog from "./GetStartedDialog";

const navLinks = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "Our Services", href: "/#services", id: "services" },
  { label: "Our Work", href: "/#work", id: "work" },
  { label: "Testimonials", href: "/#testimonials", id: "testimonials" },
  { label: "Insights", href: "/#mini-blogs", id: "mini-blogs" },
  { label: "About Us", href: "/about", id: "about-page" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Glass background deepens once the user scrolls past the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy on the home page: highlight the section currently in view
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["home", "services", "work", "testimonials", "mini-blogs"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Resolve which nav item is active across pages
  const activeKey =
    pathname === "/about"
      ? "about-page"
      : pathname.startsWith("/projects")
      ? "work"
      : pathname.startsWith("/blog")
      ? "mini-blogs"
      : activeId;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] border-b border-white/10 bg-[#0a0a0a] transition-all duration-300 ${
          scrolled ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]" : ""
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-7 py-3.5 max-md:px-5">
          {/* Logo */}
          <Link
            href="/"
            className="relative block h-[42px] w-[120px] shrink-0"
            aria-label="TEAMZ home"
          >
            <Image
              src="/images/teamz-dark-logo-transparent.png"
              alt="TEAMZ"
              fill
              sizes="120px"
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex rounded-full border border-white/10 bg-white/[0.04] p-1.5">
            {navLinks.map((link) => {
              const isActive = activeKey === link.id;
              return (
                <li key={link.label} className="relative">
                  <Link
                    href={link.href}
                    onClick={() => setActiveId(link.id)}
                    className={`relative block whitespace-nowrap rounded-full px-[18px] py-[9px] text-[0.875rem] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#0a0a0a]"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-[#00DD88]" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="group hidden shrink-0 items-center gap-1.5 rounded-full bg-[#00DD88] px-5 py-2.5 text-[0.875rem] font-semibold text-[#0a0a0a] transition-all duration-200 hover:shadow-[0_8px_24px_-6px_rgba(0,221,136,0.6)] hover:-translate-y-0.5 active:scale-95 md:inline-flex"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            className="text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-7 w-7" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#0a0a0a] p-6"
          >
            <div className="flex items-center justify-between">
              <div className="relative h-[42px] w-[120px]">
                <Image
                  src="/images/teamz-dark-logo-transparent.png"
                  alt="TEAMZ"
                  fill
                  sizes="120px"
                  className="object-contain object-left"
                />
              </div>
              <button
                aria-label="Close menu"
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <ul className="mt-12 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = activeKey === link.id;
                return (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveId(link.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between rounded-2xl px-5 py-4 text-2xl font-medium transition-colors ${
                        isActive
                          ? "bg-[#00DD88] text-[#0a0a0a]"
                          : "text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                      <ArrowUpRight className="h-5 w-5 opacity-60" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-auto">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsDialogOpen(true);
                }}
                className="w-full rounded-full bg-[#00DD88] px-7 py-4 text-center text-lg font-semibold text-[#0a0a0a] transition-transform duration-200 active:scale-95"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <GetStartedDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
