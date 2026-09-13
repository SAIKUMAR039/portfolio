import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { IntroValueSection } from "@/components/sections/intro-value";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ExperienceSection } from "@/components/sections/experience";
import { AchievementsSection } from "@/components/sections/achievements";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F4F4F5]">
      <Navbar />
      <HeroSection />
      <IntroValueSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      <AchievementsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}