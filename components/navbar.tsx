"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

export function Navbar(): React.ReactElement | null {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "WORK", href: "#projects" },
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "STACK", href: "#stack" },
    { label: "JOURNEY", href: "#journey" },
    { label: "CREDENTIALS", href: "#certifications" },
    { label: "ABOUT", href: "#about" },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090d]/95 border-b border-white/10 shadow-xl py-3.5"
          : "bg-transparent border-b border-white/5 py-5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Brand Identification */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 select-none"
        >
          <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-base font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              SAI KUMAR THOTA
            </span>
            <span className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase">
              Full Stack Engineer
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AVAILABLE
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 font-mono text-xs tracking-wider">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-400 hover:text-white transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Contact Action Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#contact"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-bold text-xs tracking-wider transition-all duration-200 flex items-center gap-1.5 group shadow-md shadow-indigo-600/20"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
          
        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-zinc-300" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#08090d] border-b border-white/10 overflow-hidden"
          >
            <div className="w-full px-6 py-6 flex flex-col gap-4 font-mono text-sm">
              <div className="pb-3 border-b border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span>NAVIGATION MENU</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </span>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-300 hover:text-white font-medium py-1 transition-colors flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600" />
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 mt-2">
                <Link
                  href="#contact"
                  className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-bold text-xs tracking-wider text-center block transition-colors shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  START A CONVERSATION →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;