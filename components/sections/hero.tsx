"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, FileText, Linkedin } from "lucide-react";

export const HeroSection: React.FC = () => {
  const coreTech = ["Python", "React.js", "Node.js", "FastAPI", "SQL"];

  return (
    <section
      id="hero"
      className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center pt-20 pb-28 sm:pt-32 sm:pb-20 px-6 lg:px-8"
    >
      <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-7">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/[0.08] text-xs text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Hyderabad, India</span>
          <span className="text-zinc-600">•</span>
          <span>Open to Software Engineering Roles</span>
        </div>

        {/* Primary Name & Heading */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05]">
            Sai Kumar Thota
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl font-medium text-zinc-200 tracking-tight leading-snug max-w-3xl">
            Software Engineer building web applications, APIs and practical AI systems.
          </p>
        </div>

        {/* Core Tech Stack Row */}
        <div className="pt-0.5 sm:pt-1">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
            {coreTech.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-zinc-900/90 text-zinc-200 border border-white/[0.1] hover:border-white/20 transition-colors">
                  {tech}
                </span>
                {idx < coreTech.length - 1 && (
                  <span className="text-zinc-600 text-xs hidden sm:inline">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Primary Call-to-Actions (3 Buttons) */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 sm:pt-3">
          <Link
            href="#projects"
            className="px-5 sm:px-6 py-3 sm:py-3.5 bg-white hover:bg-zinc-200 text-black text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </Link>

          <a
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Sai_Kumar_Thota_Resume.pdf"
            className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-white/15 hover:border-white/40 text-zinc-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 bg-zinc-900/40 hover:bg-zinc-900/80 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sai-kumar-thota-101764252/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-white/15 hover:border-white/40 text-zinc-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 bg-zinc-900/40 hover:bg-zinc-900/80 flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;