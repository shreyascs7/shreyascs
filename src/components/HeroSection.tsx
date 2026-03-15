import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.png";

const tagline = 'Computer Science Student | Web Developer | Python Programmer | AI Tools Enthusiast';

const HeroSection = () => {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < tagline.length) {
        setTyped(tagline.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-48 h-48 lg:w-64 lg:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary animate-spin-slow opacity-70" />
              <div className="absolute inset-[3px] rounded-full bg-background" />
              <img
                src={profileImg}
                alt="Shreyas Mohan"
                className="absolute inset-[6px] rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary animate-pulse-glow" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <p className="mono-label mb-4">SYSTEM_INITIALIZED</p>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-4">
              SHREYAS<br />
              <span className="glow-text">MOHAN</span>
            </h1>

            <p className="font-mono text-sm text-primary/80 mb-6 h-12">
              {typed}
              <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary`}>▌</span>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              BTech Computer Science student at the College of Engineering Attingal, passionate about building modern web applications and experimenting with AI-powered tools.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="neon-btn-primary">View Projects</a>
              <a href="#contact" className="neon-btn-outline">Contact Me</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
