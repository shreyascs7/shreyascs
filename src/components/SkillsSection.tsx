import { motion } from "framer-motion";
import { Code, Globe, FileCode, Palette, Bot } from "lucide-react";

const skills = [
  { name: "Python", icon: Code, level: 85 },
  { name: "Web Development", icon: Globe, level: 80 },
  { name: "HTML", icon: FileCode, level: 90 },
  { name: "CSS", icon: Palette, level: 85 },
  { name: "AI Tools", icon: Bot, level: 75 },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative grid-bg">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mono-label mb-2">// SKILLS</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground mb-12">
          Tech <span className="glow-text">Arsenal</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-6 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-sm bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
                <skill.icon size={24} strokeWidth={1.5} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{skill.name}</h3>
                <p className="font-mono text-xs text-muted-foreground">{skill.level}%</p>
              </div>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
