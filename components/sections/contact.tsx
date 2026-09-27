"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Mail, Github, Linkedin } from "lucide-react";
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

  const contactLinks = [
    {
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/SAIKUMAR039",
      href: socials?.github || "https://github.com/SAIKUMAR039",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/sai-kumar-thota",
      href: socials?.linkedin || "https://www.linkedin.com/in/sai-kumar-thota-101764252/",
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-28 px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Main Pitch */}
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Contact
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            Let’s build something useful.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            I’m currently open to software engineering opportunities, collaborations, and interesting products to work on.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href={`mailto:${email}`}
              className="px-6 py-3.5 bg-white hover:bg-zinc-200 text-black text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Send an email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-full border border-white/15 hover:border-white/40 text-zinc-200 hover:text-white text-sm font-medium transition-all duration-200 bg-zinc-900/40 hover:bg-zinc-900/80 flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Email copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy email address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3-Card Understated Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactLinks.map((card, idx) => {
            const Icon = card.icon;
            return (
              <a
                key={idx}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-200 flex flex-col justify-between space-y-4 group"
              >
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-medium text-zinc-300">{card.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm font-medium text-white tracking-tight truncate">
                  {card.value}
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;