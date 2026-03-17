import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, ArrowRight, Folder } from "lucide-react";

const projects = [
  {
    title: "Sign Language Translator",
    desc: "A project designed to bridge communication between sign language users and others by translating sign gestures into readable text or speech using computer vision and programming techniques.",
    tags: ["Python", "Computer Vision", "OpenCV", "Machine Learning"],
    featured: true,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[200px]"
      style={{ background: 'radial-gradient(circle, hsl(280 85% 65% / 0.05), transparent 70%)' }} />

    <div className="container relative mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="mono-label mb-3">// PROJECTS</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Featured <span className="gradient-text">Work</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass-card group"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-6 py-3 border-b border-border/60 bg-card/30">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <Folder size={12} className="text-muted-foreground ml-2" />
              <span className="font-mono text-[10px] text-muted-foreground">~/projects/sign-language-translator</span>
              {project.featured && (
                <span className="ml-auto font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                  ★ FEATURED
                </span>
              )}
            </div>

            <div className="p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Preview */}
                <div className="lg:w-72 flex-shrink-0">
                  <div className="aspect-video rounded-md border border-border/60 flex items-center justify-center group-hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, hsl(240 12% 8%), hsl(240 10% 12%))' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ background: 'radial-gradient(circle at center, hsl(160 95% 55% / 0.05), transparent 70%)' }} />
                    <div className="text-center relative">
                      <Eye size={28} className="mx-auto text-muted-foreground/30 mb-2 group-hover:text-primary/40 transition-colors duration-500" />
                      <span className="font-mono text-[10px] text-muted-foreground/40">Preview</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 flex items-center gap-3"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {project.title}
                    <ArrowRight size={18} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="neon-btn-primary text-xs">
                      <Github size={14} strokeWidth={1.5} /> GitHub
                    </a>
                    <a href="#" className="neon-btn-outline text-xs">
                      <ExternalLink size={14} strokeWidth={1.5} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
