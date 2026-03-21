import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, ArrowRight, Folder, Star } from "lucide-react";

const projects = [
  {
    title: "Sign Language Translator",
    desc: "A project designed to bridge communication between sign language users and others by translating sign gestures into readable text or speech using computer vision and programming techniques.",
    tags: ["Python", "Computer Vision", "OpenCV", "Machine Learning"],
    featured: true,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute top-0 right-1/4 w-[700px] h-[500px] rounded-full blur-[250px]"
      style={{ background: 'radial-gradient(circle, hsl(280 85% 65% / 0.05), hsl(160 95% 55% / 0.03), transparent 70%)' }} />

    <div className="container relative mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-5"
        >
          <Star size={12} className="text-primary" />
          <span className="mono-label text-[10px]">PROJECTS</span>
        </motion.div>
        <h2 className="section-heading">
          Featured <span className="gradient-text">Work</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card-premium group"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-6 py-3.5 border-b border-border/60 bg-card/30">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <Folder size={12} className="text-muted-foreground ml-2" />
              <span className="font-mono text-[10px] text-muted-foreground">~/projects/sign-language-translator</span>
              {project.featured && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="ml-auto font-mono text-[10px] px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  ★ FEATURED
                </motion.span>
              )}
            </div>

            <div className="p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Preview */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="lg:w-72 flex-shrink-0"
                >
                  <div className="aspect-video rounded-xl border border-border/60 flex items-center justify-center group-hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, hsl(240 12% 8%), hsl(240 10% 12%))' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ background: 'radial-gradient(circle at center, hsl(160 95% 55% / 0.08), transparent 70%)' }} />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="text-center relative"
                    >
                      <Eye size={30} className="mx-auto text-muted-foreground/30 mb-2 group-hover:text-primary/50 transition-colors duration-500" />
                      <span className="font-mono text-[10px] text-muted-foreground/40">Preview</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 flex items-center gap-3 font-display">
                    {project.title}
                    <ArrowRight size={18} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{project.desc}</p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {project.tags.map((tag, j) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.05 }}
                        className="tech-tag"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      href="#"
                      className="neon-btn-primary text-xs"
                    >
                      <Github size={14} strokeWidth={1.5} /> GitHub
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      href="#"
                      className="neon-btn-outline text-xs"
                    >
                      <ExternalLink size={14} strokeWidth={1.5} /> Live Demo
                    </motion.a>
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
