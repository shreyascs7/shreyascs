import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Code2, Cpu, Zap } from "lucide-react";
import profileImg from "@/assets/profile.png";

const highlights = [
  { icon: Code2, label: "Vibe Coder", desc: "Building with passion & creativity" },
  { icon: Cpu, label: "AI Explorer", desc: "Experimenting with AI-powered tools" },
  { icon: Zap, label: "Fast Learner", desc: "Adapting to new technologies quickly" },
];

const AboutSection = () => (
  <section id="about" className="py-28 relative">
    {/* Subtle glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[150px]" />

    <div className="container relative mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="mono-label mb-3">// ABOUT_ME</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground">
          Designing Solutions,<br />
          <span className="glow-text">Not Just Code</span>
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
            <div className="absolute -inset-1 rounded-sm bg-gradient-to-tr from-primary/30 via-secondary/20 to-primary/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="neon-border rounded-sm overflow-hidden p-1 relative">
              <img src={profileImg} alt="Shreyas Mohan" className="w-full rounded-sm bg-card" />
            </div>
          </div>

          {/* Info chips below image */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
            {[
              { icon: GraduationCap, text: "CS Student" },
              { icon: Calendar, text: "Class of 2027" },
              { icon: MapPin, text: "Kerala, India" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-3 py-2 rounded-sm bg-card/50 border border-border text-xs font-mono text-muted-foreground">
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
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/50">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
              <span className="font-mono text-[10px] text-muted-foreground ml-2">education.json</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-1">
              <p className="text-muted-foreground">{"{"}</p>
              <p className="pl-4"><span className="text-primary">"degree"</span>: <span className="text-secondary">"BTech in CS & Engineering"</span>,</p>
              <p className="pl-4"><span className="text-primary">"institution"</span>: <span className="text-secondary">"College of Engineering Attingal"</span>,</p>
              <p className="pl-4"><span className="text-primary">"graduation"</span>: <span className="text-secondary">"2027"</span>,</p>
              <p className="pl-4"><span className="text-primary">"status"</span>: <span className="text-primary">"in_progress ▌"</span></p>
              <p className="text-muted-foreground">{"}"}</p>
            </div>
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
                className="glass-card p-4 text-center group"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-sm bg-primary/10 border border-primary/20 group-hover:border-primary/50 flex items-center justify-center transition-colors">
                  <h.icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">{h.label}</h4>
                <p className="text-[11px] text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
