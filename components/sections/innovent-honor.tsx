"use client";

import React from "react";
import { Award, CheckCircle2, Trophy } from "lucide-react";

export const InnoVentSection: React.FC = () => {
  return (
    <section
      id="innovent"
      className="py-20 sm:py-24 px-6 lg:px-8 border-t border-white/[0.08] relative"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Key Honor
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tata Technologies InnoVent
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            National engineering recognition for innovation, product design, and practical software-hardware problem solving.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.12] bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
                <Trophy className="w-3.5 h-3.5 text-amber-300" />
                <span>National Finalist — InnoVent 2026</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Recognized Nationwide by Tata Technologies
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                Selected among top engineering teams nationwide in Tata Technologies InnoVent, evaluating innovative digital engineering solutions, technical feasibility, and practical implementation for real-world impact.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>National engineering competition</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Industry jury evaluation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Product feasibility &amp; system design</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>High-pressure technical presentation</span>
                </div>
              </div>
            </div>

            {/* Right Meta Card (4 Cols) */}
            <div className="lg:col-span-4 p-6 rounded-xl border border-white/[0.08] bg-zinc-950/60 space-y-4 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <span className="text-zinc-400">Awarding Body</span>
                <span className="text-white font-semibold">Tata Technologies</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <span className="text-zinc-400">Recognition</span>
                <span className="text-white font-semibold">National Finalist</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <span className="text-zinc-400">Year</span>
                <span className="text-white font-semibold">2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Scope</span>
                <span className="text-emerald-400 font-semibold">All-India Universities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnoVentSection;
