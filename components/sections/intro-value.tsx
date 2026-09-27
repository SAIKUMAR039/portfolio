"use client";

import React from "react";
import { motion } from "framer-motion";

export const IntroValueSection: React.FC = () => {
  const ledgerItems = [
    {
      index: "01",
      label: "PRODUCTION EXP",
      stat: "01+ YEARS",
      detail: "9-Month enterprise developer internship",
    },
    {
      index: "02",
      label: "SYSTEMS DEPLOYED",
      stat: "10+ PLATFORMS",
      detail: "Full-stack web & applied AI applications",
    },
    {
      index: "03",
      label: "CORE ARSENAL",
      stat: "25+ TECHNOLOGIES",
      detail: "TypeScript, Python, AWS, Docker, Gemini",
    },
    {
      index: "04",
      label: "CREDENTIALS",
      stat: "06+ CERTIFIED",
      detail: "AWS, Oracle Generative AI, ServiceNow",
    },
  ];

  return (
    <section className="bg-[#070709] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {ledgerItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 lg:p-8 flex flex-col justify-between group hover:bg-zinc-950 transition-colors"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500 mb-6">
                <span>[{item.index}] // {item.label}</span>
                <span className="text-zinc-600 group-hover:text-white transition-colors">↗</span>
              </div>
              <div>
                <div className="font-mono text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-1">
                  {item.stat}
                </div>
                <div className="font-sans text-xs text-zinc-400">
                  {item.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroValueSection;
