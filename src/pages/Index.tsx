import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ServicesSection />
    <ProjectsSection />
    <ContactSection />
    <footer className="border-t border-border py-10 text-center">
      <p className="font-mono text-xs text-muted-foreground mb-1">
        © 2025 Shreyas Mohan
      </p>
      <p className="font-mono text-[10px] text-muted-foreground/50">
        Built with passion and code
      </p>
    </footer>
  </div>
);

export default Index;
