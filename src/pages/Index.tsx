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
    <footer className="border-t border-border py-8 text-center">
      <p className="font-mono text-xs text-muted-foreground">
        © 2025 Shreyas Mohan — Built with passion and code
      </p>
    </footer>
  </div>
);

export default Index;
