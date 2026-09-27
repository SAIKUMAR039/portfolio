"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] pt-12 pb-24 sm:pb-28 px-6 lg:px-8 text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Attribution */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="text-zinc-400 font-medium">Sai Kumar Thota</span>
          <span className="hidden sm:inline text-zinc-700">·</span>
          <span>© {currentYear} All rights reserved.</span>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/SAIKUMAR039"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sai-kumar-thota-101764252/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <Link href="/admin" className="hover:text-zinc-300 transition-colors">
            Admin
          </Link>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors pl-2 border-l border-white/[0.08]"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
