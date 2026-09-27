"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Megaphone, Users, Target, Globe, Briefcase } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function MarketingContent() {
  const coreCompetencies = [
    {
      icon: Users,
      title: "Client Acquisition & Pitching",
      description:
        "Met directly with prospective business owners to pitch marketing strategies, explain how digital channels reach customers, and onboard them as active clients.",
    },
    {
      icon: Target,
      title: "Meta & Google Advertising",
      description:
        "Set up and managed targeted paid campaigns across Meta (Facebook & Instagram) and Google Ads, focusing on audience targeting and campaign efficiency.",
    },
    {
      icon: Megaphone,
      title: "Content Strategy & Social Media",
      description:
        "Planned content schedules, visual branding guidelines, and copywriting across client social channels to maintain consistent brand presence.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Built and launched clean, responsive business websites that connected client advertising traffic to dedicated landing pages.",
    },
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Direct Client Pitching",
      detail:
        "Approached prospective clients in person, evaluated their market presence, and pitched practical marketing proposals tailored to their target audience.",
    },
    {
      number: "02",
      title: "Onboarding & Strategy",
      detail:
        "Guided clients through digital channels, set communication goals, established content themes, and prepared campaign timelines.",
    },
    {
      number: "03",
      title: "Campaign Execution",
      detail:
        "Launched structured Meta and Google ad campaigns, handled creative assets, and reviewed audience engagement and ad spend.",
    },
    {
      number: "04",
      title: "Web Delivery & Conversion",
      detail:
        "Developed and deployed business websites so that client ad campaigns directed traffic to structured, professional landing pages.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#08080a] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Engineering Portfolio</span>
          </Link>

          {/* Role badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900/80 border border-white/[0.08] text-zinc-300">
            <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
            <span>Director · 1 Year Tenure</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            Digital Marketing at SKIZEN.
          </h1>

          {/* Supporting summary */}
          <p className="text-base sm:text-xl text-zinc-400 leading-relaxed max-w-3xl">
            Over the course of a year as Director at SKIZEN, I led client-facing operations—handling business development, pitching and onboarding clients, running Meta and Google Ads campaigns, planning social content, and building client websites.
          </p>

          {/* Overview specs */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30">
              <span className="text-xs text-zinc-500 block">Organization</span>
              <span className="text-sm font-semibold text-white mt-0.5 block">SKIZEN</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30">
              <span className="text-xs text-zinc-500 block">Role</span>
              <span className="text-sm font-semibold text-white mt-0.5 block">Director</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30">
              <span className="text-xs text-zinc-500 block">Duration</span>
              <span className="text-sm font-semibold text-white mt-0.5 block">1 Year</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30">
              <span className="text-xs text-zinc-500 block">Focus</span>
              <span className="text-sm font-semibold text-white mt-0.5 block">Growth &amp; Ads</span>
            </div>
          </div>

        </div>
      </section>

      {/* Core Competencies Grid */}
      <section className="py-20 sm:py-24 px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Areas of Responsibility
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What I handled at SKIZEN.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Combining business development, paid performance advertising, content management, and web design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreCompetencies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/15 transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* End-to-End Client Process */}
      <section className="py-20 sm:py-24 px-6 lg:px-8 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Execution Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              From pitch to campaign delivery.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              How I engaged with clients and guided their digital presence from initial discovery to live campaigns.
            </p>
          </div>

          <div className="space-y-4">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/15 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono font-semibold text-zinc-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-zinc-800/60 mt-0.5">
                    {step.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Skills Summary Banner */}
      <section className="py-20 sm:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8 text-center sm:text-left">
          
          <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-zinc-900/30 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Digital Marketing Capabilities
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                Tools, platforms, and methods applied throughout my year of client work at SKIZEN:
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Client Acquisition",
                "Direct Pitching",
                "Client Onboarding",
                "Meta Ads Manager",
                "Facebook & Instagram Ads",
                "Google Ads",
                "Audience Targeting",
                "Content Planning",
                "Social Media Management",
                "Website Building",
                "Campaign Analytics",
              ].map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/60 text-zinc-300 border border-white/[0.06]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-zinc-400">
                Interested in full-stack engineering or technical collaboration?
              </span>
              <Link
                href="/#contact"
                className="px-5 py-2.5 bg-white hover:bg-zinc-200 text-black text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
