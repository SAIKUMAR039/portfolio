"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { usePortfolio } from "@/context/portfolio-context";

export const AchievementsSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const achievements = portfolioData.achievements || [];

  const getIssuer = (msg: string) => {
    if (msg.includes("Tata Technologies")) return "Tata Technologies";
    if (msg.includes("AWS")) return "Amazon Web Services (AWS)";
    if (msg.includes("ServiceNow")) return "ServiceNow / AICTE";
    if (msg.includes("Oracle")) return "Oracle Cloud Infrastructure";
    return "Industry Credential";
  };

  return (
    <section id="certifications" className="py-28 px-6 lg:px-12 bg-[#08090d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>06 — CREDENTIALS &amp; RECOGNITION</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Certifications &amp; Honors
            </h2>
          </div>
          <p className="text-zinc-400 font-sans text-sm md:text-base max-w-md">
            Validated certifications in AWS cloud architecture, Oracle Generative AI, ServiceNow engineering, and national competition awards.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => {
            const cleanTitle = item.message.replace(/^LOADED\s*/, "");
            const issuer = getIssuer(cleanTitle);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-8 rounded-2xl bg-[#0e0f15] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md bg-zinc-900 border border-white/10 font-mono text-[10px] text-indigo-300 uppercase tracking-wider">
                      {issuer}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-lg font-bold text-white tracking-tight leading-snug group-hover:text-indigo-300 transition-colors">
                    {cleanTitle}
                  </h3>

                  {/* Description Subtext */}
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>

                {/* Footer status */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    VERIFIED CREDENTIAL
                  </span>
                  <span>VALIDATED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;