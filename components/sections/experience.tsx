"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { usePortfolio } from "@/context/portfolio-context";

export const ExperienceSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const experiences = portfolioData.experience || [];

  return (
    <section id="journey" className="py-28 px-6 lg:px-12 bg-[#08090d] border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>05 — CAREER &amp; ACADEMICS</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              The Journey
            </h2>
          </div>
          <p className="text-zinc-400 font-sans text-sm md:text-base max-w-md">
            Chronological milestone history covering professional enterprise internship performance and computer science academics.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-12">
          
          {experiences.map((item, idx) => {
            const isInternship = item.scope === "experience";
            const yearLabel = isInternship ? "2024 — 2025" : "2022 — 2026";
            const icon = isInternship ? <Briefcase className="w-4 h-4 text-white" /> : <GraduationCap className="w-4 h-4 text-white" />;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                {/* Node dot icon on timeline line */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-10 h-10 rounded-xl bg-zinc-950 border border-indigo-500/50 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-indigo-400 transition-all duration-300">
                  {icon}
                </div>

                {/* Main Card */}
                <div className="p-8 rounded-2xl bg-[#0e0f15] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl space-y-4">
                  
                  {/* Top line: Year & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono text-xs">
                    <span className="px-3 py-1 rounded-md bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 font-bold">
                      {yearLabel}
                    </span>
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  {/* Role / Degree Title */}
                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {item.subject}
                    </h3>
                    <p className="font-mono text-xs text-zinc-400 mt-1">
                      {isInternship ? "CODIT TECH SOLUTIONS — PRODUCTION INTERNSHIP" : "SR UNIVERSITY — B.TECH COMPUTER SCIENCE"}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-2">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-sm text-zinc-300 font-sans leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;