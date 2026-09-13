"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { usePortfolio } from "@/context/portfolio-context";

export const ContactSection: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const profile = portfolioData?.profile;
  const socials = portfolioData?.socials;
  const [copied, setCopied] = useState(false);

  const email = profile?.email || "saikumarthota2004@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 bg-[#08090d] border-t border-white/5 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span>08 — INITIATE CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95]">
              LET'S BUILD <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-white bg-clip-text text-transparent">
                SOMETHING.
              </span>
            </h2>

            <p className="font-sans text-lg sm:text-xl text-zinc-300 max-w-xl">
              Have an opportunity, engineering project, or full-time software engineering role in mind? I’m open for conversation.
            </p>

            {/* Email CTA Button */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`mailto:${email}`}
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-extrabold text-base tracking-wider transition-all duration-200 flex items-center gap-3 shadow-xl shadow-indigo-600/25 group"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 font-mono text-xs tracking-wider transition-all duration-200 flex items-center gap-2 hover:border-indigo-500/40"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-500" />}
                <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Email card */}
            <div className="p-6 rounded-2xl bg-[#0e0f15] border border-white/10 hover:border-indigo-500/40 transition-colors shadow-lg">
              <div className="font-mono text-xs text-zinc-500 mb-1">DIRECT EMAIL</div>
              <a href={`mailto:${email}`} className="font-sans font-bold text-white text-base hover:text-indigo-300 transition-colors">
                {email}
              </a>
            </div>

            {/* Phone & Location card */}
            <div className="p-6 rounded-2xl bg-[#0e0f15] border border-white/10 space-y-3 shadow-lg">
              <div>
                <div className="font-mono text-xs text-zinc-500 mb-1">LOCATION</div>
                <div className="font-sans font-bold text-white text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>{profile?.location || "Hyderabad, India"}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10">
                <div className="font-mono text-xs text-zinc-500 mb-1">PHONE</div>
                <div className="font-sans font-bold text-white text-base flex items-center gap-2">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span>{profile?.phone || "+91 90590 81173"}</span>
                </div>
              </div>
            </div>

            {/* Social Links card */}
            <div className="p-6 rounded-2xl bg-[#0e0f15] border border-white/10 space-y-3 font-mono text-xs shadow-lg">
              <div className="text-zinc-500 mb-2">ONLINE PRESENCE</div>
              <div className="flex flex-col gap-2">
                <a
                  href={socials?.github || "https://github.com/SAIKUMAR039"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-indigo-400" />
                    <span>GitHub / SAIKUMAR039</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={socials?.linkedin || "https://www.linkedin.com/in/sai-kumar-thota-101764252/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn / Sai Kumar Thota</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;