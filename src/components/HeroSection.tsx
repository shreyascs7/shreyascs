import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.png";

const tagline = 'Computer Science Student | Web Developer | Python Programmer | AI Tools Enthusiast';

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Year", value: "2027" },
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
    }, 35);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Glow orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]"
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] hidden lg:block"
      >
        <div className="glass-card p-3 flex items-center gap-2">
          <Terminal size={14} className="text-primary" />
          <span className="font-mono text-[10px] text-muted-foreground">ready_to_build</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-[10%] hidden lg:block"
      >
        <div className="glass-card p-3 flex items-center gap-2">
          <Sparkles size={14} className="text-secondary" />
          <span className="font-mono text-[10px] text-muted-foreground">ai_enthusiast</span>
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
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary animate-spin-slow opacity-70" />
              {/* Inner background */}
              <div className="absolute inset-[3px] rounded-full bg-background" />
              {/* Image */}
              <img
                src={profileImg}
                alt="Shreyas Mohan"
                className="absolute inset-[6px] rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
            </div>
            {/* Status dot */}
            <div className="absolute -bottom-1 -right-1 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary animate-pulse-glow" />
            </div>
            {/* Decorative bracket */}
            <div className="absolute -top-4 -left-4 font-mono text-primary/30 text-2xl select-none">&lt;</div>
            <div className="absolute -bottom-4 -right-4 font-mono text-primary/30 text-2xl select-none">/&gt;</div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center lg:text-left max-w-2xl"
          >
            {/* Terminal label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 mb-5 glass-card px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="mono-label">SYSTEM_INITIALIZED</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-2">
              SHREYAS
            </h1>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-5">
              <span className="glow-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MOHAN
              </span>
            </h1>

            <div className="font-mono text-sm text-primary/80 mb-6 h-12 flex items-start">
              <span className="text-secondary mr-2 hidden sm:inline">&gt;</span>
              <span>
                {typed}
                <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary transition-opacity`}>▌</span>
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-sm lg:text-base">
              BTech Computer Science student at the College of Engineering Attingal, passionate about building modern web applications and experimenting with AI-powered tools.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="#projects" className="neon-btn-primary group">
                <span>View Projects</span>
                <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a href="#contact" className="neon-btn-outline">Contact Me</a>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: taglineComplete ? 1 : 0, y: taglineComplete ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="flex gap-8 justify-center lg:justify-start"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-mono text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Social links + scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-between mt-16"
        >
          <div className="hidden lg:flex items-center gap-4">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#contact" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.5)]"
              >
                <Icon size={16} />
              </a>
            ))}
            <div className="w-16 h-px bg-border ml-2" />
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
