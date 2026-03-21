import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = ["Home", "About", "Skills", "Services", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = links.map(l => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-[0_4px_30px_-10px_hsl(var(--primary)/0.1)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_15px_-5px_hsl(var(--primary)/0.5)]">
            <Zap size={14} className="text-primary" />
          </div>
          <span className="font-mono text-lg font-bold tracking-wider">
            <span className="text-foreground">SM</span>
            <span className="text-primary animate-pulse">_</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-mono text-[11px] uppercase tracking-[0.15em] px-3 py-2 rounded-lg transition-all duration-300 relative ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-card/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border/50 px-6 pb-6 overflow-hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 font-mono text-sm uppercase tracking-wider transition-colors border-b border-border/20 last:border-0 ${
                  activeSection === link.toLowerCase() ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
