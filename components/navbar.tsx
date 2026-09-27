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
  const isMarketingPage = pathname === "/marketing";
  const [activeSection, setActiveSection] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
    { id: "marketing", label: "Marketing", isRoute: true, href: "/marketing" },
  ];

  useEffect(() => {
    setMounted(true);

    if (isMarketingPage) {
      setActiveSection("marketing");
      return;
    }

    const handleScroll = () => {
      // If user reaches the bottom of the page, highlight Contact
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Check section offsets
      const sectionIds = ["about", "work", "skills", "experience", "contact"];
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
  }, [isMarketingPage]);

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
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)] select-none"
    >
      <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-zinc-950/85 backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/80 ring-1 ring-white/[0.06]">
        {/* Brand: SAI */}
        {isMarketingPage ? (
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
                layoutId="activeSectionPill"
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
          {navItems.map((item) => {
            const isActive = isMarketingPage
              ? item.id === "marketing"
              : activeSection === item.id;

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
                      layoutId="activeSectionPill"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            }

            // If we are on marketing page, anchor links must point to /#section
            if (isMarketingPage) {
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
                    layoutId="activeSectionPill"
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