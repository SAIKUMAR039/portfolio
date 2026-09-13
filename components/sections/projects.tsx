"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, ExternalLink, Sparkles, Layers, Cpu, Code2, 
  FileText, ShieldAlert, TrendingUp, Cloud, MessageSquare, SunMedium, CheckCircle,
  Zap, Database, Terminal
} from "lucide-react";
import { usePortfolio } from "@/context/portfolio-context";

type ProjectCategory = "all" | "ai" | "web";

export const ProjectsSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const projects = portfolioData.projects || [];
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    if (activeCategory === "ai") {
      return projects.filter(
        (p) =>
          p.name.toLowerCase().includes("ai") ||
          p.name.toLowerCase().includes("prediction") ||
          p.name.toLowerCase().includes("imagine") ||
          p.name.toLowerCase().includes("benege")
      );
    }
    if (activeCategory === "web") {
      return projects.filter(
        (p) =>
          !p.name.toLowerCase().includes("ai") &&
          !p.name.toLowerCase().includes("prediction") &&
          !p.name.toLowerCase().includes("imagine") &&
          !p.name.toLowerCase().includes("benege")
      );
    }
    return projects;
  }, [activeCategory, projects]);

  const categories = [
    { id: "all" as ProjectCategory, label: "All Projects" },
    { id: "ai" as ProjectCategory, label: "AI & ML Platforms" },
    { id: "web" as ProjectCategory, label: "Web & Full Stack" },
  ];

  const handleImageError = (projectId: string) => {
    setFailedImages((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="py-28 px-6 lg:px-12 bg-[#08090d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>03 — FEATURED PROJECTS</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected Workspaces
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-950 border border-white/10 rounded-xl self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const projectNum = String(index + 1).padStart(2, "0");
              const projectImg = (project as any).image;
              const hasValidImage = projectImg && !failedImages[project.id];

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-[#0e0f15] border border-white/10 p-6 md:p-8 hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top glow line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-6">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4">
                      <span className="text-indigo-400 font-bold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        PROJECT / {projectNum}
                      </span>
                      <span className="text-zinc-500">{project.year || "2025"}</span>
                    </div>

                    {/* Image ONLY if valid real image exists */}
                    {hasValidImage && (
                      <div className="w-full h-56 rounded-xl overflow-hidden border border-white/10">
                        <img 
                          src={projectImg} 
                          alt={project.name}
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Title & Description */}
                    <div className="space-y-2.5">
                      <h3 className="font-sans text-2xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features list */}
                    {project.features && project.features.length > 0 && (
                      <div className="space-y-2">
                        <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block">KEY CAPABILITIES</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-sans text-xs text-zinc-400">
                          {project.features.slice(0, 4).map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Chips */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div>
                        <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-2">STACK &amp; INTEGRATIONS</span>
                        <div className="flex flex-wrap gap-2 font-mono text-xs">
                          {project.technologies.map((tech, tIdx) => (
                            <span key={tIdx} className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/10">
                    {project.liveURL && (
                      <a
                        href={project.liveURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-black font-sans font-bold text-xs tracking-wider transition-all duration-200 flex items-center gap-2 shadow-sm"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.gitURL && (
                      <a
                        href={project.gitURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-200 font-sans font-semibold text-xs tracking-wider transition-all duration-200 flex items-center gap-2 hover:border-indigo-500/40"
                      >
                        <Github className="w-4 h-4" />
                        <span>SOURCE CODE</span>
                      </a>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;