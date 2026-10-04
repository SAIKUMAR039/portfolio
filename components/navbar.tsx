"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  isRoute?: boolean;
  href?: string;
}

export function Navbar(): React.ReactElement | null {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  // Desktop items: unchanged
  const desktopNavItems: NavItem[] = [
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "innovent", label: "Honors" },
    { id: "contact", label: "Contact" },
    { id: "marketing", label: "Marketing", isRoute: true, href: "/marketing" },
  ];

  // Mobile items: exactly 4 items (Home/SAI, Work, Skills, Experience)
  const mobileNavItems = [
    { id: "home", label: "SAI", sectionId: "" },
    { id: "work", label: "Work", sectionId: "work" },
    { id: "skills", label: "Skills", sectionId: "skills" },
    { id: "experience", label: "Experience", sectionId: "experience" },
  ];

  useEffect(() => {
    setMounted(true);

    if (!isHome) {
      if (pathname === "/marketing") {
        setActiveSection("marketing");
      } else if (pathname?.startsWith("/projects")) {
        setActiveSection("work");
      } else {
        setActiveSection("");
      }
      return;
    }

    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Check section offsets
      const sectionIds = ["work", "skills", "experience", "innovent", "contact"];
      let currentSection = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            currentSection = id;
            break;
          }
        }
      }

      // If scrolled to top hero area
      if (window.scrollY < 200) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, pathname]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    setActiveSection("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav
      aria-label="Floating Navigation Bar"
      className="fixed left-1/2 -translate-x-1/2 z-50 select-none bottom-dock-safe w-[calc(100%-1.25rem)] min-[360px]:w-[calc(100%-2rem)] max-w-[360px] md:w-auto md:max-w-[calc(100vw-2rem)]"
    >
      {/* MOBILE FLOATING DOCK (< 768px): Compact, 4 evenly distributed items */}
      <div className="flex md:hidden items-center justify-between w-full h-[52px] px-1 py-1 rounded-full bg-zinc-950/90 backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/90 ring-1 ring-white/[0.06]">
        <div className="grid grid-cols-4 w-full h-full items-center gap-1">
          {mobileNavItems.map((item) => {
            const isItemActive =
              item.id === "home"
                ? activeSection === ""
                : activeSection === item.sectionId;

            if (!isHome) {
              const href = item.id === "home" ? "/" : `/#${item.sectionId}`;
              return (
                <Link
                  key={item.id}
                  href={href}
                  className={`relative flex items-center justify-center h-full min-h-[44px] px-1.5 rounded-full text-[11px] min-[360px]:text-xs font-medium transition-colors ${
                    isItemActive
                      ? "text-black font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isItemActive && (
                    <motion.div
                      layoutId="activeSectionPillMobile"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            }

            return (
              <button
                key={item.id}
                onClick={item.id === "home" ? scrollToTop : () => scrollToSection(item.sectionId)}
                className={`relative flex items-center justify-center h-full min-h-[44px] px-1.5 rounded-full text-[11px] min-[360px]:text-xs font-medium transition-colors ${
                  isItemActive
                    ? "text-black font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                {isItemActive && (
                  <motion.div
                    layoutId="activeSectionPillMobile"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DESKTOP NAVIGATION (>= 768px): Exactly UNCHANGED */}
      <div className="hidden md:flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-zinc-950/85 backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/80 ring-1 ring-white/[0.06]">
        {/* Brand: SAI */}
        {!isHome ? (
          <Link
            href="/"
            className="relative px-3 sm:px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full text-white hover:text-zinc-200 transition-colors"
            aria-label="Back to home"
          >
            <span>SAI</span>
          </Link>
        ) : (
          <button
            onClick={scrollToTop}
            className={`relative px-3 sm:px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full transition-colors ${
              activeSection === ""
                ? "text-black font-extrabold"
                : "text-white hover:text-zinc-200"
            }`}
            aria-label="Scroll to top"
          >
            {activeSection === "" && (
              <motion.div
                layoutId="activeSectionPillDesktop"
                className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span>SAI</span>
          </button>
        )}

        {/* Divider */}
        <div className="w-px h-4 bg-white/15 my-auto mx-0.5" />

        {/* Navigation Section Items */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {desktopNavItems.map((item) => {
            const isActive = activeSection === item.id;

            // Route item (Marketing)
            if (item.isRoute) {
              return (
                <Link
                  key={item.id}
                  href={item.href || "/marketing"}
                  className={`relative px-3 sm:px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionPillDesktop"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            }

            // If we are on subpage, anchor links must navigate to /#section
            if (!isHome) {
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  className="relative px-3 sm:px-3.5 py-1.5 text-xs font-medium rounded-full text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
                >
                  <span>{item.label}</span>
                </Link>
              );
            }

            // Normal section button on homepage
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 sm:px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSectionPillDesktop"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;