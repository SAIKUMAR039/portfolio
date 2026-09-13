"use client";

import React from "react";
import Link from "next/link";
import { usePortfolio } from "@/context/portfolio-context";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const { portfolioData } = usePortfolio();
  const profile = portfolioData?.profile;
  const socials = portfolioData?.socials;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08090d] border-t border-white/10 text-zinc-400 font-sans py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-sans text-lg font-extrabold text-white tracking-tight">
                SAI KUMAR THOTA
              </span>
              <span className="font-mono text-xs text-zinc-500 tracking-wider uppercase mt-0.5">
                Full Stack Engineer / Software Developer
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Architecting enterprise digital applications, cloud services, scalable APIs, and intelligent AI models.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-zinc-500 uppercase tracking-widest block mb-2">SECTIONS</span>
            <div className="grid grid-cols-2 gap-2">
              <Link href="#projects" className="hover:text-white transition-colors">SELECTED WORK</Link>
              <Link href="#capabilities" className="hover:text-white transition-colors">CAPABILITIES</Link>
              <Link href="#stack" className="hover:text-white transition-colors">STACK MATRIX</Link>
              <Link href="#journey" className="hover:text-white transition-colors">THE JOURNEY</Link>
              <Link href="#certifications" className="hover:text-white transition-colors">CREDENTIALS</Link>
              <Link href="#about" className="hover:text-white transition-colors">ABOUT ME</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-zinc-500 uppercase tracking-widest block mb-2">CONNECT</span>
            <div className="flex flex-col gap-2">
              <a
                href={socials?.github || "https://github.com/SAIKUMAR039"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-indigo-400" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>

              <a
                href={socials?.linkedin || "https://www.linkedin.com/in/sai-kumar-thota-101764252/"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>

              <a
                href={`mailto:${profile?.email || "saikumarthota2004@gmail.com"}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>EMAIL</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-600" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <p>© {currentYear} SAI KUMAR THOTA. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span className="text-zinc-500">Designed &amp; engineered by Sai Kumar Thota</span>
            <Link href="/admin" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              // ADMIN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
