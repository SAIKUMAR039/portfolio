"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            A short introduction.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed"
        >
          <p>
            I graduated with a B.Tech in Computer Science &amp; Engineering from SR University. Over the past few years, I’ve developed hands-on full-stack experience building web applications, backend APIs, and data-driven tools.
          </p>
          <p>
            On the frontend, I enjoy creating clean, responsive interfaces that feel natural to use. On the backend, I work with REST APIs, design database schemas, and handle service integrations. I also like exploring practical AI and NLP applications—building tools that solve straightforward, everyday problems.
          </p>
          <p>
            What I enjoy most is taking a project from an initial concept all the way through development and deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;