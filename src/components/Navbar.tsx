import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = ["Home", "About", "Skills", "Services", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-[0_4px_30px_-10px_hsl(var(--primary)/0.1)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
            <Zap size={14} className="text-primary" />
          </div>
          <span className="font-mono text-lg font-bold tracking-wider">
            <span className="text-foreground">SM</span>
            <span className="text-primary animate-pulse">_</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-primary px-3 py-2 rounded-md hover:bg-primary/5 transition-all duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-md hover:bg-card/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border/50 px-6 pb-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors border-b border-border/20 last:border-0"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
