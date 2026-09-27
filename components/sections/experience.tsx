"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience &amp; Education
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Hands-on software development experience and academic background in computer science.
          </p>
        </div>

        {/* Experience & Education Stack */}
        <div className="space-y-8">
          
          {/* Internship Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="p-7 sm:p-9 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/15 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column (5 Cols) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium bg-zinc-800/80 border border-white/[0.06] text-zinc-300">
                  <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
                  <span>9-Month Internship</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Full Stack Developer Intern
                </h3>

                <div className="space-y-1 text-xs text-zinc-400">
                  <p className="font-medium text-zinc-300">
                    Vision Fame Pvt. Ltd. (Codit Tech Solutions)
                  </p>
                  <p className="flex items-center gap-1.5 text-zinc-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>May 2024 — January 2025</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-zinc-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Hyderabad, India</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Experience Bullets (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <ul className="space-y-2.5">
                  <li className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                    <span>Built and maintained web application features using React.js and Tailwind CSS.</span>
                  </li>
                  <li className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                    <span>Developed backend services and REST APIs using Python, FastAPI, and Node.js.</span>
                  </li>
                  <li className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                    <span>Worked with request validation, database queries, and API responses.</span>
                  </li>
                  <li className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                    <span>Integrated external services and internal APIs into application workflows.</span>
                  </li>
                  <li className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 flex-shrink-0 mt-2" />
                    <span>Used Git-based workflows while working on reusable and maintainable code.</span>
                  </li>
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                  {["React.js", "Python", "FastAPI", "Node.js", "Tailwind CSS", "REST APIs", "Git"].map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800/60 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="p-7 sm:p-9 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/15 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column (5 Cols) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium bg-zinc-800/80 border border-white/[0.06] text-zinc-300">
                  <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Bachelor's Degree</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  B.Tech in Computer Science &amp; Engineering
                </h3>

                <div className="space-y-1 text-xs text-zinc-400">
                  <p className="font-medium text-zinc-300">SR University</p>
                  <p className="flex items-center gap-1.5 text-zinc-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2022 — 2026</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-zinc-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Telangana, India</span>
                  </p>
                </div>
              </div>

              {/* Right Column (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Focused on computer science fundamentals, full-stack software development, database systems, and applied artificial intelligence.
                </p>

                <div className="space-y-2 pt-2 border-t border-white/[0.04]">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                    Relevant Coursework
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "DBMS",
                      "Operating Systems",
                      "Object-Oriented Programming",
                    ].map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800/60 text-zinc-400"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;