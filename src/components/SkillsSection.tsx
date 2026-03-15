import { motion } from "framer-motion";
import { Code, Globe, FileCode, Palette, Bot, Braces } from "lucide-react";

const skills = [
  { name: "Python", icon: Code, level: 85, color: "from-primary to-secondary" },
  { name: "Web Development", icon: Globe, level: 80, color: "from-secondary to-primary" },
  { name: "HTML", icon: FileCode, level: 90, color: "from-primary to-primary" },
  { name: "CSS", icon: Palette, level: 85, color: "from-secondary to-primary" },
  { name: "AI Tools", icon: Bot, level: 75, color: "from-primary to-secondary" },
  { name: "JavaScript", icon: Braces, level: 70, color: "from-secondary to-secondary" },
];

const CircularProgress = ({ level, delay }: { level: number; delay: number }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={radius} fill="none" strokeWidth="3" className="stroke-muted/30" />
        <motion.circle
          cx="40" cy="40" r={radius} fill="none" strokeWidth="3"
          strokeLinecap="round"
          className="stroke-primary"
          style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.4))" }}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference - (level / 100) * circumference }}
          viewport={{ once: true }}
          transition={{ delay, duration: 1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-sm font-bold text-foreground">{level}%</span>
      </div>
    </div>
  );
};

const SkillsSection = () => (
  <section id="skills" className="py-28 relative grid-bg">
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />

    <div className="container relative mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="mono-label mb-3">// SKILLS</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground">
          Tech <span className="glow-text">Arsenal</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="glass-card p-6 flex flex-col items-center text-center group"
          >
            <CircularProgress level={skill.level} delay={i * 0.08 + 0.3} />
            <div className="mt-4 flex items-center gap-2">
              <div className="p-2 rounded-sm bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
                <skill.icon size={16} strokeWidth={1.5} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
