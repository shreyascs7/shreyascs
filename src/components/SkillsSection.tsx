import { motion, useInView } from "framer-motion";
import { Code, Globe, FileCode, Palette, Bot, Braces, TrendingUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const skills = [
  { name: "Python", icon: Code, level: 85, accent: "primary" },
  { name: "Web Development", icon: Globe, level: 80, accent: "secondary" },
  { name: "HTML", icon: FileCode, level: 90, accent: "primary" },
  { name: "CSS", icon: Palette, level: 85, accent: "accent" },
  { name: "AI Tools", icon: Bot, level: 75, accent: "secondary" },
  { name: "JavaScript", icon: Braces, level: 70, accent: "primary" },
];

const AnimatedCounter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span>{count}</span>;
};

const CircularProgress = ({ level, delay, accent, inView }: { level: number; delay: number; accent: string; inView: boolean }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-28 h-28">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r={radius} fill="none" strokeWidth="2" className="stroke-muted/15" />
        <motion.circle
          cx="48" cy="48" r={radius} fill="none" strokeWidth="3.5"
          strokeLinecap="round"
          className={`stroke-${accent}`}
          style={{ filter: `drop-shadow(0 0 10px hsl(var(--${accent}) / 0.5))` }}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: circumference - (level / 100) * circumference } : {}}
          transition={{ delay, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <circle cx="48" cy="48" r="46" fill="none" strokeWidth="0.5" className="stroke-border/20" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-xl font-bold text-foreground">
          <AnimatedCounter target={level} inView={inView} />
        </span>
        <span className="font-mono text-[8px] text-muted-foreground uppercase tracking-wider">%</span>
      </div>
    </div>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const SkillsSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[250px]"
        style={{ background: 'radial-gradient(circle, hsl(280 85% 65% / 0.04), hsl(160 95% 55% / 0.03), transparent 70%)' }} />

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
            <TrendingUp size={12} className="text-primary" />
            <span className="mono-label text-[10px]">SKILLS</span>
          </motion.div>
          <h2 className="section-heading">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm mt-5">
            Tools and technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={cardItem}
              whileHover={{ scale: 1.04, y: -5 }}
              className="glass-card-premium p-7 flex flex-col items-center text-center group cursor-default"
            >
              <CircularProgress level={skill.level} delay={i * 0.1 + 0.2} accent={skill.accent} inView={isInView} />
              <div className="mt-5 flex items-center gap-2.5">
                <div className={`p-2.5 rounded-lg bg-${skill.accent}/10 border border-${skill.accent}/20 group-hover:border-${skill.accent}/50 group-hover:bg-${skill.accent}/15 transition-all duration-300`}>
                  <skill.icon size={16} strokeWidth={1.5} className={`text-${skill.accent} group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="font-bold text-foreground text-sm">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
