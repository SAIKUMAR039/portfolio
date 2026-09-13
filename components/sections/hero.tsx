"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, Terminal, Code2, Cpu, Zap, Layers, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { usePortfolio } from "@/context/portfolio-context";

export const HeroSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const profile = portfolioData?.profile;
  const [activeTab, setActiveTab] = useState<"architecture" | "stack" | "metrics">("architecture");

  // Lightweight 60fps Ambient Vector Grid (Optimized for smooth scrolling)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = 20; // Lightweight node count
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 1,
      color: Math.random() > 0.5 ? "#6366f1" : "#8b5cf6",
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle architectural grid
      const gridSize = 40;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Connecting lines
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 10000) {
            const alpha = (1 - Math.sqrt(distSq) / 100) * 0.15;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 lg:px-12 bg-[#08090d] overflow-hidden">
      {/* Soft ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 my-auto">
        
        {/* Left Column: Hero Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start space-y-6"
        >
          {/* Metadata pill badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">SAI KUMAR THOTA</span>
            <span className="text-zinc-600">•</span>
            <span className="text-indigo-200">FULL STACK &amp; AI DEVELOPER</span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] text-left">
            Crafting intelligent software &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-white bg-clip-text text-transparent">
              scalable digital products.
            </span>
          </h1>

          {/* Intro Paragraph */}
          <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl text-left">
            I’m a Full Stack Engineer specialized in building high-performance web applications, robust REST/GraphQL APIs, database architectures, and cloud-powered AI solutions.
          </p>

          {/* Skill Pills */}
          <div className="flex flex-wrap gap-2 pt-1 pb-1 font-mono text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 text-zinc-300 flex items-center gap-1.5 shadow-sm">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" /> React &amp; Next.js
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 text-zinc-300 flex items-center gap-1.5 shadow-sm">
              <Terminal className="w-3.5 h-3.5 text-purple-400" /> Node.js &amp; Python
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 text-zinc-300 flex items-center gap-1.5 shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" /> AWS &amp; Gemini API
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-bold text-sm tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-600/25 group"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="px-7 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white font-sans font-semibold text-sm tracking-wider transition-all duration-200 flex items-center gap-2 hover:border-indigo-500/40"
            >
              <span>LET'S CONNECT</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Interactive Developer Workspace Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative w-full rounded-2xl bg-[#0e0f15] border border-white/10 overflow-hidden shadow-2xl group"
        >
          {/* Header Bar */}
          <div className="h-11 bg-zinc-900/90 border-b border-white/10 px-4 flex items-center justify-between font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-zinc-300 font-semibold">sai_developer_workspace</span>
            </div>
            <div className="flex items-center gap-1 text-indigo-400 text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE SYSTEM</span>
            </div>
          </div>

          {/* Interactive Workspace Body */}
          <div className="p-6 relative min-h-[380px] flex flex-col justify-between space-y-6">
            
            {/* Interactive Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-zinc-950 border border-white/10 font-mono text-xs">
              <button
                onClick={() => setActiveTab("architecture")}
                className={`flex-1 py-1.5 rounded text-center transition-colors ${
                  activeTab === "architecture" ? "bg-indigo-600 text-white font-bold" : "text-zinc-400 hover:text-white"
                }`}
              >
                Architecture
              </button>
              <button
                onClick={() => setActiveTab("stack")}
                className={`flex-1 py-1.5 rounded text-center transition-colors ${
                  activeTab === "stack" ? "bg-indigo-600 text-white font-bold" : "text-zinc-400 hover:text-white"
                }`}
              >
                Core Stack
              </button>
              <button
                onClick={() => setActiveTab("metrics")}
                className={`flex-1 py-1.5 rounded text-center transition-colors ${
                  activeTab === "metrics" ? "bg-indigo-600 text-white font-bold" : "text-zinc-400 hover:text-white"
                }`}
              >
                Metrics
              </button>
            </div>

            {/* Canvas Ambient Render */}
            <canvas ref={canvasRef} className="w-full h-full block absolute inset-0 pointer-events-none opacity-40" />

            {/* Tab Content Display */}
            {activeTab === "architecture" && (
              <div className="space-y-3 font-mono text-xs relative z-10">
                <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/10 space-y-1.5">
                  <div className="text-zinc-400 flex items-center justify-between">
                    <span className="text-indigo-400 font-semibold">// FRONTEND LAYER</span>
                    <span className="text-[10px] text-emerald-400">SSR / RSC ENABLED</span>
                  </div>
                  <div className="text-white font-sans text-xs">Next.js 14 App Router • Tailwind CSS • Framer Motion</div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/10 space-y-1.5">
                  <div className="text-zinc-400 flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">// BACKEND &amp; APIS</span>
                    <span className="text-[10px] text-indigo-400">REST &amp; GRAPHQL</span>
                  </div>
                  <div className="text-white font-sans text-xs">Node.js Express • FastAPI Python • JWT Security</div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/10 space-y-1.5">
                  <div className="text-zinc-400 flex items-center justify-between">
                    <span className="text-emerald-400 font-semibold">// CLOUD &amp; AI PIPELINE</span>
                    <span className="text-[10px] text-emerald-400">AWS + GEMINI</span>
                  </div>
                  <div className="text-white font-sans text-xs">AWS S3/Lambda • Docker • Google Gemini SDK</div>
                </div>
              </div>
            )}

            {activeTab === "stack" && (
              <div className="grid grid-cols-2 gap-3 relative z-10 font-mono text-xs">
                <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/10 space-y-1">
                  <div className="text-indigo-400 text-[10px]">LANGUAGES</div>
                  <div className="text-white font-sans font-semibold">TypeScript, Python, SQL</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/10 space-y-1">
                  <div className="text-purple-400 text-[10px]">FRAMEWORKS</div>
                  <div className="text-white font-sans font-semibold">React, Next.js, Django</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/10 space-y-1">
                  <div className="text-emerald-400 text-[10px]">DATABASES</div>
                  <div className="text-white font-sans font-semibold">PostgreSQL, MongoDB, Supabase</div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/90 border border-white/10 space-y-1">
                  <div className="text-amber-400 text-[10px]">AI &amp; CLOUD</div>
                  <div className="text-white font-sans font-semibold">AWS, Docker, Gemini API</div>
                </div>
              </div>
            )}

            {activeTab === "metrics" && (
              <div className="grid grid-cols-2 gap-3 relative z-10 font-mono text-xs">
                <div className="p-4 rounded-lg bg-zinc-900/90 border border-white/10 text-center space-y-1">
                  <div className="text-2xl font-extrabold text-indigo-400 font-sans">9 MOS</div>
                  <div className="text-[10px] text-zinc-400">PRODUCTION INTERNSHIP</div>
                </div>
                <div className="p-4 rounded-lg bg-zinc-900/90 border border-white/10 text-center space-y-1">
                  <div className="text-2xl font-extrabold text-emerald-400 font-sans">10+</div>
                  <div className="text-[10px] text-zinc-400">PROJECTS BUILT</div>
                </div>
                <div className="p-4 rounded-lg bg-zinc-900/90 border border-white/10 text-center space-y-1">
                  <div className="text-2xl font-extrabold text-purple-400 font-sans">8.5</div>
                  <div className="text-[10px] text-zinc-400">B.TECH CGPA</div>
                </div>
                <div className="p-4 rounded-lg bg-zinc-900/90 border border-white/10 text-center space-y-1">
                  <div className="text-2xl font-extrabold text-amber-400 font-sans">6+</div>
                  <div className="text-[10px] text-zinc-400">CERTIFICATIONS</div>
                </div>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="p-3 rounded-lg bg-zinc-950 border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 relative z-10">
              <span className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Open for Full-Time Roles</span>
              </span>
              <span className="text-indigo-400">2026 GRAD</span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-full flex flex-col items-center justify-center mt-12 z-10"
      >
        <Link
          href="#capabilities"
          className="flex flex-col items-center gap-1.5 group font-mono text-xs text-zinc-500 hover:text-white transition-colors"
        >
          <span className="tracking-widest uppercase">SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 text-indigo-400 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;