import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Code2, Cpu, Zap, ChevronRight } from "lucide-react";
import profileImg from "@/assets/profile.png";

const highlights = [
  { icon: Code2, label: "Vibe Coder", desc: "Building with passion & creativity", color: "primary" },
  { icon: Cpu, label: "AI Explorer", desc: "Experimenting with AI-powered tools", color: "secondary" },
  { icon: Zap, label: "Fast Learner", desc: "Adapting to new technologies quickly", color: "accent" },
];

const timeline = [
  { year: "2023", event: "Started BTech in CS & Engineering" },
  { year: "2024", event: "First web development projects" },
  { year: "2025", event: "AI tools development & experimentation" },
  { year: "2027", event: "Expected graduation" },
];

const AboutSection = () => (
  <section id="about" className="py-28 relative">
    <div className="absolute inset-0 dot-pattern opacity-20" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[200px]"
      style={{ background: 'radial-gradient(circle, hsl(160 95% 55% / 0.06), transparent 70%)' }} />

    <div className="container relative mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="mono-label mb-3">// ABOUT_ME</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Designing Solutions,<br />
          <span className="gradient-text-subtle">Not Just Code</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Image — 2 cols */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 relative"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, hsl(160 95% 55% / 0.2), hsl(280 85% 65% / 0.2))', filter: 'blur(8px)' }} />
            <div className="neon-border rounded-md overflow-hidden p-1 relative">
              <img src={profileImg} alt="Shreyas Mohan" className="w-full rounded-md bg-card" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
            {[
              { icon: GraduationCap, text: "CS Student" },
              { icon: Calendar, text: "Class of 2027" },
              { icon: MapPin, text: "Kerala, India" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-3 py-2 rounded-md bg-card/40 border border-border/60 text-xs font-mono text-muted-foreground hover:border-primary/30 transition-colors">
                <Icon size={14} className="text-primary" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content — 3 cols */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3 space-y-8"
        >
          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
            Shreyas Mohan is a computer science student interested in vibe coding and web development. He enjoys experimenting with new technologies, creating AI tools, and building modern digital experiences that push creative boundaries.
          </p>

          {/* Education terminal block */}
          <div className="glass-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-card/30">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <span className="font-mono text-[10px] text-muted-foreground ml-2">education.json</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-1">
              <p className="text-muted-foreground">{"{"}</p>
              <p className="pl-4"><span className="text-primary">"degree"</span>: <span className="text-secondary">"BTech in CS & Engineering"</span>,</p>
              <p className="pl-4"><span className="text-primary">"institution"</span>: <span className="text-secondary">"College of Engineering Attingal"</span>,</p>
              <p className="pl-4"><span className="text-primary">"graduation"</span>: <span className="text-accent">"2027"</span>,</p>
              <p className="pl-4"><span className="text-primary">"status"</span>: <span className="text-primary animate-pulse">"in_progress ▌"</span></p>
              <p className="text-muted-foreground">{"}"}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Journey</p>
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 py-2 group"
              >
                <span className="font-mono text-xs text-primary font-bold w-10">{item.year}</span>
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors relative">
                  {i < timeline.length - 1 && <div className="absolute top-2 left-1/2 -translate-x-1/2 w-px h-6 bg-border" />}
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.event}</span>
                <ChevronRight size={12} className="text-primary/0 group-hover:text-primary/60 transition-colors ml-auto" />
              </motion.div>
            ))}
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-5 text-center group"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-md bg-${h.color}/10 border border-${h.color}/20 group-hover:border-${h.color}/50 flex items-center justify-center transition-all duration-300`}>
                  <h.icon size={22} className={`text-${h.color}`} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">{h.label}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
