import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { InnoVentSection } from "@/components/sections/innovent-honor";
import { AchievementsSection } from "@/components/sections/achievements";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080a] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      <EducationSection />
      <InnoVentSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}