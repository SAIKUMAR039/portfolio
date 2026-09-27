import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ExperienceSection } from "@/components/sections/experience";
import { AchievementsSection } from "@/components/sections/achievements";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080a] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}