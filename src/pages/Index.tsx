import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const footerLinks = [
  { icon: Github, href: "https://github.com/shreyas54416-del", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shreyas-mohan-4b6244294", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shreyas54416@gmail.com", label: "Email" },
];

const Index = () => (
  <div className="min-h-screen bg-background relative">
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
    
    {/* Enhanced Footer */}
    <footer className="border-t border-border/40 py-16 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, hsl(160 95% 55% / 0.04), transparent 70%)' }} />
      
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Social links */}
          <div className="flex items-center gap-3">
            {footerLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] bg-card/20"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <p className="font-mono text-xs text-muted-foreground">
            © 2025 <span className="text-primary">Shreyas Mohan</span>
          </p>
          <p className="font-mono text-[10px] text-muted-foreground/40 flex items-center gap-1.5">
            crafted with <Heart size={10} className="text-primary/60 animate-pulse" /> and code
          </p>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            className="mt-2 w-8 h-8 rounded-lg border border-border/40 flex items-center justify-center text-muted-foreground/40 hover:text-primary hover:border-primary/30 transition-all duration-300"
          >
            <ArrowUp size={14} />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  </div>
);

export default Index;
