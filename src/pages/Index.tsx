import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    {/* Global noise overlay */}
    <div className="noise-overlay" />
    
    <Navbar />
    <HeroSection />
    
    <div className="section-divider max-w-4xl mx-auto" />
    <AboutSection />
    
    <div className="section-divider max-w-4xl mx-auto" />
    <SkillsSection />
    
    <div className="section-divider max-w-4xl mx-auto" />
    <ServicesSection />
    
    <div className="section-divider max-w-4xl mx-auto" />
    <ProjectsSection />
    
    <div className="section-divider max-w-4xl mx-auto" />
    <ContactSection />
    
    <footer className="border-t border-border/40 py-12 text-center relative">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="relative">
        <p className="font-mono text-xs text-muted-foreground mb-2">
          © 2025 <span className="text-primary">Shreyas Mohan</span>
        </p>
        <p className="font-mono text-[10px] text-muted-foreground/40">
          crafted with <span className="text-primary/60">♥</span> and code
        </p>
      </div>
    </footer>
  </div>
);

export default Index;
