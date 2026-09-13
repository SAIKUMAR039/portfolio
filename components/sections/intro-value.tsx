"use client";

import React from "react";
import { motion } from "framer-motion";

export const IntroValueSection: React.FC = () => {
  const stats = [
    {
      value: "01+",
      label: "Years Experience",
      detail: "9-Month Production Internship",
    },
    {
      value: "10+",
      label: "Projects Built",
      detail: "Full Stack & AI Platforms",
    },
    {
      value: "25+",
      label: "Technologies",
      detail: "Languages, Cloud & AI Frameworks",
    },
    {
      value: "06+",
      label: "Certifications",
      detail: "AWS, Oracle & ServiceNow Credentials",
    },
  ];

  return (
    <section className="py-28 px-6 lg:px-12 bg-[#08090d] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Tag */}
        <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span>01 — VALUE PROPOSITION</span>
        </div>

        {/* Oversized Statement & Paragraph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              "I turn ideas into scalable digital products."
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 text-zinc-300 font-sans text-base sm:text-lg leading-relaxed space-y-4 pt-2"
          >
            <p>
              I specialize in bridging high-level software engineering architecture with refined frontend aesthetics. My engineering workflow prioritizes clean code standards, fault-tolerant backend services, resilient database schemas, and intelligent AI automation.
            </p>
            <p className="text-zinc-400 text-sm">
              Whether building enterprise microservices or prototyping full-stack AI platforms, I deliver reliable digital products built for scale.
            </p>
          </motion.div>
        </div>

        {/* Real Highlight Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/10"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0e0f15] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group shadow-lg"
            >
              <div className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight group-hover:text-indigo-400 transition-colors mb-2">
                {stat.value}
              </div>
              <div className="font-sans text-sm sm:text-base font-semibold text-zinc-200">
                {stat.label}
              </div>
              <div className="font-mono text-xs text-zinc-400 mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default IntroValueSection;
