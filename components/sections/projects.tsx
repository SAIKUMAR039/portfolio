"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/projects";

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative"
    >
      {/* Anchor for #work links */}
      <div id="work" className="absolute -top-24" />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Curated software applications, REST APIs, and practical AI systems built with Python, React, Next.js, and AWS.
          </p>
        </div>

        {/* 4 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => {
            const projectUrl = `/projects/${project.slug}`;

            return (
              <article
                key={project.slug}
                className="rounded-2xl border border-white/[0.08] bg-zinc-900/30 overflow-hidden flex flex-col justify-between group hover:border-white/25 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Visual Plate / Thumbnail */}
                  <Link
                    href={projectUrl}
                    className="block relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-white/[0.06] group"
                    aria-label={`View ${project.name} case study`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  </Link>

                  {/* Content Body */}
                  <div className="p-6 space-y-4">
                    {/* Title & Year */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                        <Link href={projectUrl} className="hover:underline">
                          {project.name}
                        </Link>
                      </h3>
                      <span className="text-[11px] font-medium text-zinc-500 px-2 py-0.5 rounded-full border border-white/[0.06] bg-zinc-900/60 flex-shrink-0">
                        {project.year}
                      </span>
                    </div>

                    {/* Clean Human Description */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech, tIdx) => (
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

                {/* Card Footer: Detail Link + Code & Live Links */}
                <div className="px-6 py-4 border-t border-white/[0.06] bg-zinc-950/40 flex items-center justify-between">
                  <Link
                    href={projectUrl}
                    className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>Read case study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.gitURL && (
                      <a
                        href={project.gitURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveURL && project.liveURL !== project.gitURL && (
                      <a
                        href={project.liveURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-zinc-200 hover:text-white flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* GitHub Curation Note */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.06] text-xs text-zinc-400">
          <span>Curated selection of production and prototype systems.</span>
          <a
            href="https://github.com/SAIKUMAR039?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Explore all 60+ repositories on GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;