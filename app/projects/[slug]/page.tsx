import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  featuredProjects,
  getProjectBySlug,
} from "@/lib/projects";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Layers, CheckCircle2, Code2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = "https://saikumarthota.site";
  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    title: `${project.name} | Sai Kumar Thota`,
    description: project.description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.name} | Sai Kumar Thota`,
      description: project.description,
      url: projectUrl,
      siteName: "Sai Kumar Thota",
      type: "article",
      images: [
        {
          url: project.image,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Sai Kumar Thota`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const siteUrl = "https://saikumarthota.site";
  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "Sai Kumar Thota",
      url: siteUrl,
    },
    url: projectUrl,
    dateCreated: project.year,
    keywords: project.technologies.join(", "),
  };

  return (
    <main className="min-h-screen bg-[#08080a] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-28 pb-32 px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wider group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="space-y-6 border-b border-white/[0.08] pb-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/80 border border-white/[0.08] text-zinc-300">
              {project.year}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-zinc-300">
              Software Application
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            {project.name}
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {project.liveURL && (
              <a
                href={project.liveURL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white hover:bg-zinc-200 text-black text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <span>Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.gitURL && (
              <a
                href={project.gitURL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-white/15 hover:border-white/40 text-zinc-200 hover:text-white text-sm font-medium transition-all duration-200 bg-zinc-900/40 hover:bg-zinc-900/80 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </header>

        {/* Visual Plate */}
        <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-zinc-950/60 shadow-2xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900/30">
            <img
              src={project.image}
              alt={`${project.name} interface preview`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* 2-Column Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Column: Problem, Solution, Features (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Problem Statement */}
            {project.problemStatement && (
              <section className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  The Problem
                </h2>
                <p className="text-base text-zinc-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </section>
            )}

            {/* Solution */}
            {project.solution && (
              <section className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Engineering Solution
                </h2>
                <p className="text-base text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </section>
            )}

            {/* Key Capabilities */}
            {project.features && project.features.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Key Capabilities
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar: Technical Architecture & Stack (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Architecture Card */}
            {project.architecture && (
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/30 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <Layers className="w-4 h-4 text-zinc-300" />
                  <span>Technical Architecture</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {project.architecture.overview}
                </p>
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  {project.architecture.details.map((detail, idx) => (
                    <div key={idx} className="text-xs text-zinc-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0 mt-1.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stack Tags */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                <Code2 className="w-4 h-4 text-zinc-300" />
                <span>Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Quick Facts */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/30 space-y-3 text-xs text-zinc-400">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                <span>Developer</span>
                <span className="text-white font-medium">Sai Kumar Thota</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                <span>Role</span>
                <span className="text-white font-medium">Full Stack &amp; Software Design</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Release Year</span>
                <span className="text-white font-medium">{project.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Looking for someone to build something similar?
            </h3>
            <p className="text-sm text-zinc-400">
              I am open to software engineering opportunities and projects.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="/#projects"
              className="px-5 py-2.5 rounded-full border border-white/15 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
            >
              All projects
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
