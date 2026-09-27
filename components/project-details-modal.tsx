"use client";

import React from "react";
import { X, Github, ExternalLink, Calendar, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types/project";

interface ProjectDetailsModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const fallbackMap: Record<string, string> = {
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

  const displayImg = project.image || (project.id ? fallbackMap[project.id] : undefined);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/[0.1] bg-[#0c0c0e] p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 p-2 rounded-full text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border border-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Project Image */}
            {displayImg && (
              <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 border border-white/[0.08] bg-zinc-950">
                <img
                  src={displayImg}
                  alt={project.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/80 via-transparent to-transparent opacity-50" />
              </div>
            )}

            {/* Project Content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {project.name}
                  </h2>
                  {project.year && (
                    <div className="flex items-center text-xs text-zinc-400">
                      <Calendar className="h-3.5 w-3.5 mr-1 text-zinc-500" />
                      <span>{project.year}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  {project.gitURL && (
                    <a
                      href={project.gitURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800/40 hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveURL && (
                    <a
                      href={project.liveURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Overview
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/60 text-zinc-300 border border-white/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-2.5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ProjectDetailsModal;