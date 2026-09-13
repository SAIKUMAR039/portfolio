"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "@/context/portfolio-context";
import { Code2, Cpu, Database, Cloud, Layers, Terminal, Sparkles } from "lucide-react";

export const TechStackSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const skillCategories = portfolioData.skills || [];

  const iconMap: Record<string, React.ReactNode> = {
    "Languages": <Code2 className="w-5 h-5 text-indigo-400" />,
    "Frontend": <Layers className="w-5 h-5 text-purple-400" />,
    "Backend & APIs": <Terminal className="w-5 h-5 text-indigo-400" />,
    "Databases": <Database className="w-5 h-5 text-emerald-400" />,
    "Cloud & DevOps": <Cloud className="w-5 h-5 text-sky-400" />,
    "AI Tools": <Cpu className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="stack" className="py-28 px-6 lg:px-12 bg-[#08090d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>04 — TECHNOLOGY MATRIX</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineering Stack
            </h2>
          </div>
          <p className="text-zinc-400 font-sans text-sm md:text-base max-w-md">
            Strictly scoped engineering technologies across frontend architectures, backend microservices, databases, cloud, and AI.
          </p>
        </div>

        {/* Stack Categories Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, cIdx) => {
            const icon = iconMap[category.name] || <Sparkles className="w-5 h-5 text-indigo-400" />;

            return (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: cIdx * 0.05 }}
                className="p-8 rounded-2xl bg-[#0e0f15] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/10">
                        {icon}
                      </div>
                      <h3 className="font-sans text-lg font-bold text-white tracking-tight">
                        {category.name.toUpperCase()}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      {category.skills.length} UNITS
                    </span>
                  </div>

                  {/* Skills Items List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between font-mono text-xs">
                          <span className="text-zinc-200 font-medium group-hover:text-white">
                            {skill.name}
                          </span>
                          <span className="text-zinc-500">
                            {skill.experience || `${skill.proficiency}%`}
                          </span>
                        </div>
                        {/* Thin Proficiency hairline bar */}
                        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-500 rounded-full"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Note */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                  <span>PRODUCTION READY</span>
                  <span>CATEGORY / {String(cIdx + 1).padStart(2, "0")}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
