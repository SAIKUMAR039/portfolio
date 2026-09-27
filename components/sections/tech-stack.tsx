"use client";

import React from "react";
import { motion } from "framer-motion";

export const TechStackSection: React.FC = () => {
  const areas = [
    {
      title: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Backend & APIs",
      technologies: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "PostgreSQL"],
    },
    {
      title: "Applied AI",
      technologies: ["Python", "NLP", "spaCy", "language model APIs"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I work with.
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Technologies I use regularly to build web applications and practical tools.
          </p>
        </div>

        {/* 3 Simple Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/15 transition-all duration-200 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {area.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/60 text-zinc-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
