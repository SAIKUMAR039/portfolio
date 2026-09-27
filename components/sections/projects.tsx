"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { usePortfolio } from "@/context/portfolio-context";
import { ProjectDetailsModal } from "@/components/project-details-modal";
import type { Project } from "@/types/project";

export const ProjectsSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const projectsList = portfolioData.projects || [];
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ai", label: "AI Tools" },
    { id: "systems", label: "Systems & IoT" },
  ];

  const filteredProjects = projectsList.filter((project: any) => {
    if (activeCategory === "all") return true;
    const techs = ((project.technologies || []) as string[]).map((t: string) => t.toLowerCase());
    const name = (project.name || "").toLowerCase();
    const desc = (project.description || "").toLowerCase();

    if (activeCategory === "ai") {
      return (
        techs.some((t) => t.includes("gemini") || t.includes("openai") || t.includes("tensor") || t.includes("spacy")) ||
        name.includes("ai") ||
        name.includes("imagine") ||
        desc.includes("ai") ||
        desc.includes("machine learning") ||
        desc.includes("generative")
      );
    }
    if (activeCategory === "systems") {
      return (
        techs.some((t) => t.includes("iot") || t.includes("arduino") || t.includes("sensor")) ||
        name.includes("iot") ||
        name.includes("parking") ||
        name.includes("air tags") ||
        name.includes("alert")
      );
    }
    if (activeCategory === "fullstack") {
      return (
        techs.some((t) => t.includes("react") || t.includes("next.js") || t.includes("node") || t.includes("fastapi")) &&
        !name.includes("parking")
      );
    }
    return true;
  });

  const handleImageError = (projectId: string) => {
    setFailedImages((prev) => ({ ...prev, [projectId]: true }));
  };

  const fallbackImageMap: Record<string, string> = {
    "Whats-app_appointment": "/projects/whatsapp-appointment.svg",
    "IOT_parking_system": "/projects/iot-parking.svg",
    "AI-Resume-Screening-System": "/projects/ai-resume-screening.png",
    "Nerdy-AI-Studio": "/projects/nerdy-ai-studio.png",
    "Imagine": "/projects/imagine.png",
    "airesume-screening": "/projects/ai-resume-screening.png",
    "File-Share": "/projects/file-share.svg",
    "Benege-AI-Chat": "/projects/benege-ai-chat.svg",
    "Student-Utils": "/projects/student-utils.svg",
    "Smart-Emergency-Alert-System": "/projects/emergency-alert.svg",
    "ToDo-List": "/projects/todo-list.svg",
    "Weather": "/projects/weather.svg",
    "Bitcoin-Price-Prediction": "/projects/bitcoin-prediction.svg",
  };

  return (
    <section id="work" className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div id="projects" className="absolute -top-24" />
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-sm text-zinc-400">
              Projects I have built across web applications, APIs, and practical AI tools.
            </p>
          </div>

          {/* Clean Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-zinc-900/80 border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-white text-black shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any, index: number) => {
              const rawImg = project.image;
              const projectImg = rawImg || (project.id ? fallbackImageMap[project.id] : undefined) || (
                project.name?.toLowerCase().includes("whatsapp") ? "/projects/whatsapp-appointment.svg" :
                project.name?.toLowerCase().includes("parking") || project.name?.toLowerCase().includes("iot") ? "/projects/iot-parking.svg" :
                project.name?.toLowerCase().includes("resume") ? "/projects/ai-resume-screening.png" :
                undefined
              );
              const hasValidImage = projectImg && !failedImages[project.id];

              return (
                <motion.div
                  key={project.id || index}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/[0.08] bg-zinc-900/30 overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300 shadow-xl"
                >
                  <div>
                    {/* Visual Plate / Thumbnail */}
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-white/[0.06] cursor-pointer"
                    >
                      {hasValidImage ? (
                        <img
                          src={projectImg}
                          alt={project.name}
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-zinc-500">
                          <span className="text-sm font-medium text-zinc-400">{project.name}</span>
                          <span className="text-xs text-zinc-600 mt-1">Preview</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    </div>

                    {/* Content Body */}
                    <div className="p-6 space-y-4">
                      {/* Title & Year */}
                      <div className="flex items-start justify-between gap-3">
                        <h3 
                          onClick={() => setSelectedProject(project)}
                          className="text-lg font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors cursor-pointer"
                        >
                          {project.name}
                        </h3>
                        {project.year && (
                          <span className="text-[11px] font-medium text-zinc-500 px-2 py-0.5 rounded-full border border-white/[0.06] bg-zinc-900/60 flex-shrink-0">
                            {project.year}
                          </span>
                        )}
                      </div>

                      {/* Natural Human Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {(project.technologies || []).slice(0, 5).map((tech: string, tIdx: number) => (
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

                  {/* Card Footer: Action Links */}
                  <div className="px-6 py-4 border-t border-white/[0.06] bg-zinc-950/30 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>View details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

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
                      {project.liveURL && (
                        <a
                          href={project.liveURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;