import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Sparkles, Zap } from "lucide-react";
import profileImg from "@/assets/profile.png";

const tagline = 'Computer Science Student | Web Developer | Python Programmer | AI Tools Enthusiast';

const stats = [
  { label: "Projects", value: "10+", icon: "⚡" },
  { label: "Technologies", value: "15+", icon: "🔧" },
  { label: "Year", value: "2027", icon: "🎓" },
];

const HeroSection = () => {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [taglineComplete, setTaglineComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < tagline.length) {
        setTyped(tagline.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTaglineComplete(true);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full blur-[180px]"
          style={{ background: 'radial-gradient(circle, hsl(160 95% 55% / 0.08), transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[180px]"
          style={{ background: 'radial-gradient(circle, hsl(280 85% 65% / 0.08), transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, hsl(45 100% 60% / 0.04), transparent 70%)' }}
        />
      </div>

      {/* Floating decorative cards */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-[12%] hidden lg:block"
      >
        <div className="glass-card p-3 px-4 flex items-center gap-2">
          <Terminal size={13} className="text-primary" />
          <span className="font-mono text-[10px] text-muted-foreground">~/ready_to_build</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-36 left-[8%] hidden lg:block"
      >
        <div className="glass-card p-3 px-4 flex items-center gap-2">
          <Sparkles size={13} className="text-secondary" />
          <span className="font-mono text-[10px] text-muted-foreground">ai.enthusiast</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[60%] right-[8%] hidden lg:block"
      >
        <div className="glass-card p-3 px-4 flex items-center gap-2">
          <Zap size={13} className="text-accent" />
          <span className="font-mono text-[10px] text-muted-foreground">vibe.coder</span>
        </div>
      </motion.div>

      <div className="container relative mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative flex-shrink-0 group"
          >
            <div className="relative w-52 h-52 lg:w-72 lg:h-72">
              {/* Animated outer ring */}
              <div className="absolute inset-0 rounded-full animate-spin-slow" style={{
                background: 'conic-gradient(from 0deg, hsl(160 95% 55%), hsl(280 85% 65%), hsl(45 100% 60%), hsl(160 95% 55%))'
              }} />
              <div className="absolute inset-[3px] rounded-full bg-background" />
              <img
                src={profileImg}
                alt="Shreyas Mohan"
                className="absolute inset-[6px] rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
            </div>
            {/* Status */}
            <div className="absolute -bottom-1 -right-1">
              <div className="w-5 h-5 rounded-full bg-primary animate-pulse-glow" />
            </div>
            {/* Decorative brackets */}
            <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 font-mono text-primary text-3xl select-none">&lt;</motion.div>
            <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-6 -right-6 font-mono text-secondary text-3xl select-none">/&gt;</motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 mb-5 glass-card px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="mono-label text-[10px]">SYSTEM_INITIALIZED</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              SHREYAS
            </h1>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="gradient-text">MOHAN</span>
            </h1>

            <div className="font-mono text-sm text-primary/80 mb-6 h-12 flex items-start">
              <span className="text-secondary mr-2 hidden sm:inline">$</span>
              <span>
                {typed}
                <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary transition-opacity`}>▌</span>
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-sm lg:text-base">
              BTech Computer Science student at the College of Engineering Attingal, passionate about building modern web applications and experimenting with AI-powered tools.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="#projects" className="neon-btn-primary group">
                <span>View Projects</span>
                <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a href="#contact" className="neon-btn-outline">Contact Me</a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: taglineComplete ? 1 : 0, y: taglineComplete ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card px-5 py-3 text-center hover:!transform-none">
                  <div className="font-mono text-xl font-bold text-foreground">{stat.icon} {stat.value}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-between mt-16"
        >
          <div className="hidden lg:flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/shreyas54416-del", label: "GH" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shreyas-mohan-4b6244294", label: "LI" },
              { icon: Mail, href: "#contact", label: "EM" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 rounded-md border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] bg-card/20"
              >
                <Icon size={16} />
              </a>
            ))}
            <div className="w-20 h-px bg-gradient-to-r from-border to-transparent ml-2" />
          </div>

          <a href="#about" className="mx-auto lg:mx-0 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
