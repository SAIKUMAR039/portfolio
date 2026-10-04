"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Work Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Hands-on software development experience across the full application lifecycle.
          </p>
        </div>

        {/* Experience Card */}
        <div className="p-7 sm:p-9 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/15 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium bg-zinc-800/80 border border-white/[0.06] text-zinc-300">
                <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
                <span>Internship</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Web Developer Intern
              </h3>

              <div className="space-y-1 text-xs text-zinc-400">
                <p className="font-semibold text-zinc-200 text-sm">
                  VisionFame Pvt. Ltd.
                </p>
                <p className="flex items-center gap-1.5 text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Jan 2025 – Sep 2025</span>
                </p>
                <p className="flex items-center gap-1.5 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Hyderabad, India</span>
                </p>
              </div>
            </div>

            {/* Right Column: Bullets from Resume (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <ul className="space-y-3">
                <li className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0 mt-2" />
                  <span>
                    Participated in the end-to-end software development lifecycle including design, development, testing, debugging and deployment for production-facing features.
                  </span>
                </li>
                <li className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0 mt-2" />
                  <span>
                    Built and maintained backend APIs and frontend components using JavaScript, React.js and Node.js with structured relational data.
                  </span>
                </li>
                <li className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0 mt-2" />
                  <span>
                    Investigated application issues, documented findings and proposed code-level improvements with senior developers.
                  </span>
                </li>
                <li className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0 mt-2" />
                  <span>
                    Debugged application issues and verified fixes to improve reliability, responsiveness and maintainability.
                  </span>
                </li>
                <li className="text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0 mt-2" />
                  <span>
                    Collaborated with cross-functional teams under Agile practices to deliver customer-focused development tasks.
                  </span>
                </li>
              </ul>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                {[
                  "JavaScript",
                  "React.js",
                  "Node.js",
                  "SQL",
                  "REST APIs",
                  "Debugging",
                  "Agile",
                  "Git",
                ].map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800/60 text-zinc-300 border border-white/[0.04]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;