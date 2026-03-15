import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative grid-bg">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mono-label mb-2">// PROJECTS</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground mb-12">
          Featured <span className="glow-text">Work</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 lg:p-12 max-w-3xl group"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-destructive opacity-80" />
          <div className="w-3 h-3 rounded-full bg-secondary opacity-60" />
          <div className="w-3 h-3 rounded-full bg-primary opacity-60" />
          <span className="font-mono text-xs text-muted-foreground ml-2">project://sign-language-translator</span>
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Sign Language Translator</h3>

        <p className="text-muted-foreground leading-relaxed mb-6">
          A project designed to bridge communication between sign language users and others by translating sign gestures into readable text or speech using computer vision and programming techniques.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["Python", "Computer Vision", "OpenCV", "Machine Learning"].map((tag) => (
            <span key={tag} className="font-mono text-xs px-3 py-1 rounded-sm bg-primary/10 text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href="#" className="neon-btn-primary text-xs">
            <Github size={16} strokeWidth={1.5} /> GitHub
          </a>
          <a href="#" className="neon-btn-outline text-xs">
            <ExternalLink size={16} strokeWidth={1.5} /> Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
