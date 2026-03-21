import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Code2, Cpu, Zap, ChevronRight, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { useRef } from "react";

const highlights = [
  { icon: Code2, label: "Vibe Coder", desc: "Building with passion & creativity", color: "primary" },
  { icon: Cpu, label: "AI Explorer", desc: "Experimenting with AI-powered tools", color: "secondary" },
  { icon: Zap, label: "Fast Learner", desc: "Adapting to new technologies quickly", color: "accent" },
];

const timeline = [
  { year: "2023", event: "Started BTech in CS & Engineering", active: true },
  { year: "2024", event: "First web development projects", active: true },
  { year: "2025", event: "AI tools development & experimentation", active: true },
  { year: "2027", event: "Expected graduation", active: false },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={sectionRef}>
      <motion.div style={{ y: bgY }} className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[250px]"
        style={{ background: 'radial-gradient(circle, hsl(160 95% 55% / 0.06), hsl(280 85% 65% / 0.03), transparent 70%)' }} />

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
            <Sparkles size={12} className="text-primary" />
            <span className="mono-label text-[10px]">ABOUT_ME</span>
          </motion.div>
          <h2 className="section-heading">
            Designing Solutions,<br />
            <span className="gradient-text-subtle">Not Just Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* Image — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 relative"
          >
            <div className="relative group">
              <motion.div
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: 'linear-gradient(135deg, hsl(160 95% 55% / 0.15), hsl(280 85% 65% / 0.15))', filter: 'blur(12px)' }}
              />
              <div className="neon-border rounded-xl overflow-hidden p-1.5 relative">
                <img src={profileImg} alt="Shreyas Mohan" className="w-full rounded-lg bg-card" />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-1.5 rounded-lg bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start"
            >
              {[
                { icon: GraduationCap, text: "CS Student" },
                { icon: Calendar, text: "Class of 2027" },
                { icon: MapPin, text: "Kerala, India" },
              ].map(({ icon: Icon, text }) => (
                <motion.div
                  key={text}
                  variants={item}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-card/40 border border-border/60 text-xs font-mono text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300 group/tag"
                >
                  <Icon size={14} className="text-primary group-hover/tag:scale-110 transition-transform" />
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-relaxed text-sm lg:text-base border-l-2 border-primary/30 pl-5"
            >
              Shreyas Mohan is a computer science student interested in vibe coding and web development. He enjoys experimenting with new technologies, creating AI tools, and building modern digital experiences that push creative boundaries.
            </motion.p>

            {/* Education terminal block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card-premium overflow-hidden"
            >
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/60 bg-card/30">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                <span className="font-mono text-[10px] text-muted-foreground ml-2">education.json</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-1.5">
                <p className="text-muted-foreground/60">{"{"}</p>
                <p className="pl-4"><span className="text-primary">"degree"</span>: <span className="text-secondary">"BTech in CS & Engineering"</span>,</p>
                <p className="pl-4"><span className="text-primary">"institution"</span>: <span className="text-secondary">"College of Engineering Attingal"</span>,</p>
                <p className="pl-4"><span className="text-primary">"graduation"</span>: <span className="text-accent">"2027"</span>,</p>
                <p className="pl-4"><span className="text-primary">"status"</span>: <span className="text-primary animate-pulse">"in_progress ▌"</span></p>
                <p className="text-muted-foreground/60">{"}"}</p>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-0">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">Journey</p>
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4 py-3 group cursor-default"
                >
                  <span className={`font-mono text-xs font-bold w-12 ${t.active ? 'text-primary' : 'text-muted-foreground/40'}`}>{t.year}</span>
                  <div className="relative flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${t.active ? 'bg-primary group-hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.6)]' : 'bg-muted-foreground/20 border border-muted-foreground/30'}`} />
                    {i < timeline.length - 1 && (
                      <div className={`absolute top-3 left-1/2 -translate-x-1/2 w-px h-8 ${t.active ? 'bg-primary/30' : 'bg-border/40'}`} />
                    )}
                  </div>
                  <span className={`text-sm transition-colors duration-300 ${t.active ? 'text-muted-foreground group-hover:text-foreground' : 'text-muted-foreground/40'}`}>
                    {t.event}
                  </span>
                  <ChevronRight size={12} className="text-primary/0 group-hover:text-primary/60 transition-all duration-300 ml-auto" />
                </motion.div>
              ))}
            </div>

            {/* Highlight cards */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-3 gap-4"
            >
              {highlights.map((h) => (
                <motion.div
                  key={h.label}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card p-6 text-center group cursor-default"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-${h.color}/10 border border-${h.color}/20 group-hover:border-${h.color}/50 group-hover:bg-${h.color}/15 flex items-center justify-center transition-all duration-400`}>
                    <h.icon size={24} className={`text-${h.color} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1.5">{h.label}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
