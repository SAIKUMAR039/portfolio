"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08]">
            Software engineer building thoughtful, useful digital products.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            I’m a Computer Science graduate who enjoys turning ideas into clean web applications, reliable APIs, and practical AI-powered tools.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-4">
            <Link
              href="#work"
              className="px-6 py-3.5 bg-white hover:bg-zinc-200 text-black text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <span>View my work</span>
              <ArrowDown className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3.5 rounded-full border border-white/15 hover:border-white/40 text-zinc-200 hover:text-white text-sm font-medium transition-all duration-200 bg-zinc-900/40 hover:bg-zinc-900/80 flex items-center gap-2"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;