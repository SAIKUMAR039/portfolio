"use client";

import React from "react";
import { motion } from "framer-motion";

export const AchievementsSection: React.FC = () => {
  const certifications = [
     {
      title: "National Finalist — Tata Technologies InnoVent-2026",
      issuer: "Tata Technologies",
      year: "2026",
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Foundations",
      issuer: "Oracle",
      year: "2024",
    },
    {
      title: "AWS Academy Graduate — Cloud Architecting",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      title: "AWS Academy Graduate — Cloud Foundations",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      title: "ServiceNow Developer Virtual Internship",
      issuer: "ServiceNow & AICTE",
      year: "2024",
    },
   
  ];

  return (
    <section id="certifications" className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Certifications and competitive recognition in cloud computing, generative AI, and engineering.
          </p>
        </div>

        {/* Clean, Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/15 transition-all duration-200 flex flex-col justify-between space-y-3 group"
            >
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug group-hover:text-zinc-200 transition-colors">
                {item.title}
              </h3>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-white/[0.04]">
                <span>{item.issuer}</span>
                <span className="text-zinc-500">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;