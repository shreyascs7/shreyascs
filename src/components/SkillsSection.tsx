import { motion } from "framer-motion";
import { Code, Globe, FileCode, Palette, Bot, Braces } from "lucide-react";

const skills = [
  { name: "Python", icon: Code, level: 85, accent: "primary" },
  { name: "Web Development", icon: Globe, level: 80, accent: "secondary" },
  { name: "HTML", icon: FileCode, level: 90, accent: "primary" },
  { name: "CSS", icon: Palette, level: 85, accent: "accent" },
  { name: "AI Tools", icon: Bot, level: 75, accent: "secondary" },
  { name: "JavaScript", icon: Braces, level: 70, accent: "primary" },
];

const CircularProgress = ({ level, delay, accent }: { level: number; delay: number; accent: string }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-28 h-28">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 90 90">
        {/* Track */}
        <circle cx="45" cy="45" r={radius} fill="none" strokeWidth="2" className="stroke-muted/20" />
        {/* Glow track */}
        <motion.circle
          cx="45" cy="45" r={radius} fill="none" strokeWidth="4"
          strokeLinecap="round"
          className={`stroke-${accent}`}
          style={{ filter: `drop-shadow(0 0 8px hsl(var(--${accent}) / 0.5))` }}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference - (level / 100) * circumference }}
          viewport={{ once: true }}
          transition={{ delay, duration: 1.2, ease: "easeOut" }}
        />
        {/* Thin outer ring */}
        <circle cx="45" cy="45" r="44" fill="none" strokeWidth="0.5" className="stroke-border/30" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-lg font-bold text-foreground">{level}</span>
        <span className="font-mono text-[8px] text-muted-foreground uppercase tracking-wider">%</span>
      </div>
    </div>
  );
};

const SkillsSection = () => (
  <section id="skills" className="py-28 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]"
      style={{ background: 'radial-gradient(circle, hsl(280 85% 65% / 0.05), transparent 70%)' }} />

    <div className="container relative mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="mono-label mb-3">// SKILLS</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Tech <span className="gradient-text">Arsenal</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto text-sm mt-4">
          Tools and technologies I work with to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="glass-card p-6 flex flex-col items-center text-center group"
          >
            <CircularProgress level={skill.level} delay={i * 0.08 + 0.3} accent={skill.accent} />
            <div className="mt-5 flex items-center gap-2.5">
              <div className={`p-2.5 rounded-md bg-${skill.accent}/10 border border-${skill.accent}/20 group-hover:border-${skill.accent}/50 transition-all duration-300`}>
                <skill.icon size={16} strokeWidth={1.5} className={`text-${skill.accent}`} />
              </div>
              <h3 className="font-bold text-foreground text-sm">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="section-divider mt-20 max-w-2xl mx-auto"
      />
    </div>
  </section>
);

export default SkillsSection;
