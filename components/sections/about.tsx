"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "@/context/portfolio-context";
import { Cpu, Heart, Compass } from "lucide-react";

export const AboutSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const profile = portfolioData?.profile;

  return (
    <section id="about" className="py-28 px-6 lg:px-12 bg-[#08090d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span>07 — PHILOSOPHY &amp; STORY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Large Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
              MORE THAN CODE.
            </h2>

            <div className="p-6 rounded-2xl bg-[#0e0f15] border border-white/10 space-y-4 shadow-xl">
              <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider block font-semibold">
                ENGINEERING CORE VALUES
              </span>
              <ul className="space-y-3 font-sans text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Product-First Mindset:</strong> Writing software designed around real user needs, latency requirements, and intuitive UI interactions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span><strong>AI Automation:</strong> Levering cutting-edge LLMs (Gemini, OpenAI) and machine learning models to solve complex real-world problems.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Continuous Mastery:</strong> Constantly expanding cloud architecture, database tuning, and modern framework proficiency.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Authentic Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 font-sans text-base sm:text-lg text-zinc-300 leading-relaxed space-y-6"
          >
            <p>
              My journey into software engineering started with a deep curiosity for how complex digital applications operate behind the scenes. Based in Hyderabad, India, I’m currently completing my B.Tech in Computer Science &amp; Engineering at SR University while working on production web platforms.
            </p>
            <p>
              During my 9-month production internship at Codit Tech Solutions, I engineered full-stack components with React, Node.js, and PostgreSQL, reducing rendering latency and building production REST APIs. I thrive in collaborative environments where code quality, performance metrics, and clean system architecture are valued.
            </p>
            <p>
              Beyond traditional web development, I have a passion for artificial intelligence. From developing AI resume screening engines to generative image platforms and machine learning price prediction models, I enjoy building intelligent software that automates tedious tasks and opens up new possibilities.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;