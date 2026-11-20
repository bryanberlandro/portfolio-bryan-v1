import { Cursor } from "@/components/ui/Cursor";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProgressSection } from "@/components/sections/ProgressSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <Cursor />
      <RevealObserver />
      <Navbar />
      <main id="main">
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ProgressSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}