"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";

export const EducationSection: React.FC = () => {
  const coursework = [
    "Data Structures",
    "Algorithms",
    "DBMS",
    "Operating Systems",
    "Object-Oriented Programming",
  ];

  return (
    <section
      id="education"
      className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Academics
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Academic foundation in computer science and software engineering principles.
          </p>
        </div>

        {/* Education Card */}
        <div className="p-7 sm:p-9 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/15 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium bg-zinc-800/80 border border-white/[0.06] text-zinc-300">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                <span>Bachelor of Technology</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Computer Science &amp; Engineering
              </h3>

              <div className="space-y-1 text-xs text-zinc-400">
                <p className="font-semibold text-zinc-200 text-sm">
                  SR University
                </p>
                <p className="flex items-center gap-1.5 text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>2022 – 2026 (Graduation: June 2026)</span>
                </p>
                <p className="flex items-center gap-1.5 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Telangana, India</span>
                </p>
              </div>

              {/* CGPA Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-800/90 border border-white/[0.1] text-xs">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-zinc-400">CGPA:</span>
                  <span className="text-white font-bold">7.2 / 10</span>
                </div>
              </div>
            </div>

            {/* Right Column: Coursework (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm text-zinc-300 leading-relaxed">
                Focused on core computational theory, data structures and algorithms, database management systems, operating systems, and object-oriented software engineering.
              </p>

              <div className="space-y-3 pt-3 border-t border-white/[0.04]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800/60 text-zinc-300 border border-white/[0.04]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
