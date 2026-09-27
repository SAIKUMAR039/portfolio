"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CapabilityItem {
  index: string;
  title: string;
  category: string;
  scope: string;
  technologies: string[];
}

export const CapabilitiesSection: React.FC = () => {
  const capabilities: CapabilityItem[] = [
    {
      index: "01",
      category: "APPLICATION ARCHITECTURE",
      title: "FULL STACK WEB SYSTEMS",
      scope: "Engineering end-to-end monolithic and modular web applications with Next.js App Router, React, and Node.js.",
      technologies: ["Next.js 14", "React", "TypeScript", "Node.js"],
    },
    {
      index: "02",
      category: "INTERFACE DESIGN",
      title: "FRONTEND ENGINEERING",
      scope: "Precision UI development with Tailwind CSS, strict WCAG accessibility compliance, and Framer Motion micro-interactions.",
      technologies: ["Tailwind CSS", "Framer Motion", "Radix UI", "HTML5/CSS3"],
    },
    {
      index: "03",
      category: "DISTRIBUTED SERVICES",
      title: "BACKEND & API PIPELINES",
      scope: "High-throughput RESTful and GraphQL endpoints, rate-limited middleware, JWT validation, and FastAPI microservices.",
      technologies: ["FastAPI", "Python", "Express", "REST/GraphQL", "JWT"],
    },
    {
      index: "04",
      category: "CLOUD INFRASTRUCTURE",
      title: "AWS & DEVOPS DEPLOYMENTS",
      scope: "Cloud application architecture on AWS (EC2, S3, Route53), Docker containerization, and GitHub Actions CI/CD automation.",
      technologies: ["AWS", "Docker", "GitHub Actions", "Vercel", "Linux"],
    },
    {
      index: "05",
      category: "DATA PERSISTENCE",
      title: "DATABASE SCHEMA MODELING",
      scope: "Relational PostgreSQL schema design, composite indexing, query execution optimization, and Supabase integration.",
      technologies: ["PostgreSQL", "MongoDB", "SQLAlchemy", "Supabase", "SQL"],
    },
    {
      index: "06",
      category: "MACHINE INTELLIGENCE",
      title: "APPLIED AI & LLM AGENTS",
      scope: "Integrating Google Gemini and OpenAI APIs, document intelligence parsers, RAG workflows, and predictive ML modeling.",
      technologies: ["Gemini API", "OpenAI", "TensorFlow", "spaCy", "NLP"],
    },
  ];

  return (
    <section id="capabilities" className="py-14 sm:py-18 px-6 lg:px-12 bg-[#070709] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white" />
              <span>INDEX // 02 — CAPABILITIES &amp; SERVICES</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              TECHNICAL SCOPE
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 max-w-sm">
            Strictly scoped engineering disciplines executed with production reliability and code hygiene.
          </p>
        </div>

        {/* 6-Part Swiss Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-6 sm:p-7 border-r border-b border-white/10 flex flex-col justify-between group hover:bg-zinc-950 transition-colors"
            >
              <div className="space-y-4">
                {/* Meta index */}
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-zinc-500 group-hover:text-white transition-colors">
                    [{item.index}] // {item.category}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Title */}
                <h3 className="font-sans text-base sm:text-lg font-bold text-white tracking-tight uppercase">
                  {item.title}
                </h3>

                {/* Scope */}
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {item.scope}
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-1.5 font-mono text-[10px]">
                {item.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-zinc-900 border border-white/10 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
