"use client";

import React from "react";

export const TechStackSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Data",
      skills: ["SQL", "PostgreSQL", "MySQL", "Database Design"],
    },
    {
      title: "Engineering",
      skills: ["Data Structures", "Algorithms", "OOP", "Git", "Debugging", "Agile"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Core technologies and engineering fundamentals I use to design, develop, and deliver software.
          </p>
        </div>

        {/* 4-Category Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/15 transition-all duration-200 flex flex-col justify-between space-y-5"
            >
              <h3 className="text-base font-semibold text-white tracking-tight">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.04]">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/70 text-zinc-200 border border-white/[0.06]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
