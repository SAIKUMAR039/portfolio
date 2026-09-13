"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export const CapabilitiesSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>("01");

  const services: ServiceItem[] = [
    {
      id: "01",
      number: "01",
      title: "FULL STACK DEVELOPMENT",
      subtitle: "End-to-End Web Applications",
      description: "Building production-ready, monolithic or modular full-stack web applications with React/Next.js and Node.js/Python backends, complete with user authentication, state management, and real-time synchronization.",
      deliverables: ["Single-Page & SSR Applications", "Authentication & RBAC Controls", "Payment & Stripe Gateway Integrations"],
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    {
      id: "02",
      number: "02",
      title: "FRONTEND ENGINEERING",
      subtitle: "Editorial & Interactive User Interfaces",
      description: "Crafting pixel-perfect, responsive frontend user interfaces using modern CSS frameworks, Framer Motion transitions, strict accessibility standards (WCAG), and optimized layout shifts.",
      deliverables: ["Responsive Multi-Device Layouts", "Micro-Interactions & Motion Design", "Component Design System Architecture"],
      techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Radix UI", "HTML5/CSS3"],
    },
    {
      id: "03",
      number: "03",
      title: "BACKEND & API DEVELOPMENT",
      subtitle: "Scalable Microservices & REST/GraphQL APIs",
      description: "Engineering fault-tolerant RESTful and GraphQL API endpoints, Express/Node.js controllers, Django/FastAPI services, request rate limiting, JWT session validation, and middleware security pipelines.",
      deliverables: ["RESTful & GraphQL API Contracts", "Middleware & Auth Pipelines", "Server-Side Streaming & Sockets"],
      techStack: ["Node.js", "Express", "Python", "Django", "FastAPI", "REST APIs"],
    },
    {
      id: "04",
      number: "04",
      title: "CLOUD & DEVOPS ARCHITECTURE",
      subtitle: "Automated Deployments & AWS Infrastructure",
      description: "Architecting cloud infrastructure on AWS (EC2, Lambda, S3, Route53), Docker containerization, IaC deployment automation with GitHub Actions CI/CD pipelines, and zero-downtime server deployments.",
      deliverables: ["AWS Infrastructure Setup", "Docker Containerization", "CI/CD Pipeline Automation"],
      techStack: ["AWS", "Docker", "Git", "GitHub Actions", "Vercel"],
    },
    {
      id: "05",
      number: "05",
      title: "DATABASE & SYSTEM DESIGN",
      subtitle: "Relational & NoSQL Schema Engineering",
      description: "Designing optimized SQL schemas, query execution plans, indexing strategies, foreign key constraints, and document collections with PostgreSQL, MySQL, MongoDB, and Supabase/Firebase serverless backends.",
      deliverables: ["Relational & Document Schemas", "Query Performance Optimization", "Database Migrations & Backup Strategies"],
      techStack: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"],
    },
    {
      id: "06",
      number: "06",
      title: "AI & AUTOMATION SOLUTIONS",
      subtitle: "LLM Integrations & RAG Pipelines",
      description: "Integrating Google Gemini and OpenAI APIs, building LLM-assisted workflows, vector embeddings, resume screening analytics, and machine learning models built with Python, TensorFlow, PyTorch, and Scikit-Learn.",
      deliverables: ["Gemini & OpenAI API Wrappers", "RAG & Document Intelligence", "Predictive ML Modeling Pipelines"],
      techStack: ["Gemini API", "OpenAI API", "Python", "TensorFlow", "PyTorch", "Scikit-Learn"],
    },
  ];

  return (
    <section id="capabilities" className="py-28 px-6 lg:px-12 bg-[#08090d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>02 — WHAT I DO</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Capabilities &amp; Services
            </h2>
          </div>
          <p className="text-zinc-400 font-sans text-sm md:text-base max-w-md">
            Full-lifecycle engineering services from high-level architecture to polished frontend implementation.
          </p>
        </div>

        {/* Numbered Rows List */}
        <div className="space-y-4">
          {services.map((service) => {
            const isSelected = hoveredId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                className={`group rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isSelected
                    ? "bg-[#0e0f15] border-indigo-500/40 shadow-xl shadow-indigo-500/5"
                    : "bg-[#0e0f15]/40 border-white/5 hover:border-white/20"
                }`}
              >
                {/* Row Summary Bar */}
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6 md:gap-10">
                    {/* Number */}
                    <span className={`font-mono text-2xl md:text-4xl font-bold transition-all duration-300 ${
                      isSelected ? "text-indigo-400 translate-x-1" : "text-zinc-600 group-hover:text-zinc-400"
                    }`}>
                      {service.number}
                    </span>

                    {/* Title */}
                    <div>
                      <h3 className={`font-sans text-xl md:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
                        isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"
                      }`}>
                        {service.title}
                      </h3>
                      <p className="font-mono text-xs text-zinc-500 mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Icon Indicator */}
                  <div className="flex items-center gap-3 self-end md:self-auto">
                    <span className={`p-2.5 rounded-lg transition-all duration-300 ${
                      isSelected ? "bg-indigo-600 text-white rotate-45" : "bg-zinc-900 text-zinc-500 group-hover:text-white"
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                        <div className="lg:col-span-6 space-y-3">
                          <h4 className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-semibold">APPROACH &amp; SCOPE</h4>
                          <p className="font-sans text-sm md:text-base text-zinc-300 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="lg:col-span-6 space-y-4">
                          <h4 className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-semibold">KEY DELIVERABLES</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.deliverables.map((deliv, dIdx) => (
                              <li key={dIdx} className="flex items-center gap-2 font-sans text-xs text-zinc-300">
                                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                                <span>{deliv}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-2">
                            <h4 className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-2">STACK TECHNOLOGIES</h4>
                            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                              {service.techStack.map((tech, tIdx) => (
                                <span key={tIdx} className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-300">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
