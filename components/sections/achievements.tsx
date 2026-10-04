"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export const AchievementsSection: React.FC = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate — Cloud Architecting",
      issuer: "Amazon Web Services",
      topic: "Cloud Architecture, VPC & Distributed Systems",
    },
    {
      title: "AWS Academy Graduate — Cloud Foundations",
      issuer: "Amazon Web Services",
      topic: "Cloud Infrastructure, Core Services & Security",
    },
    {
      title: "Oracle Cloud Infrastructure (OCI) Administration — Certified",
      issuer: "Oracle",
      topic: "OCI Cloud Infrastructure, Compute & Storage Administration",
    },
    {
      title: "ServiceNow Developer Virtual Internship",
      issuer: "ServiceNow & AICTE",
      topic: "Enterprise Workflows, Scripting & Platform Administration",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Technical credentials verified from my baseline resume across cloud infrastructure, architecture, and platform workflows.
          </p>
        </div>

        {/* Clean 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/30 hover:border-white/20 transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400">
                  {item.topic}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-3 border-t border-white/[0.04]">
                <span className="font-medium text-zinc-300">{item.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;