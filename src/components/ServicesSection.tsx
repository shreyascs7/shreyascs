import { motion } from "framer-motion";
import { Bot, Cog, Plug, FlaskConical, ArrowUpRight } from "lucide-react";

const services = [
  { title: "AI-Based Tools", desc: "Creating intelligent tools powered by modern AI frameworks and APIs.", icon: Bot, accent: "primary" },
  { title: "Automation Scripts", desc: "Building automation scripts to streamline repetitive workflows.", icon: Cog, accent: "secondary" },
  { title: "AI Web Integration", desc: "Integrating AI features seamlessly into web applications.", icon: Plug, accent: "accent" },
  { title: "ML Experiments", desc: "Experimenting with machine learning concepts and prototypes.", icon: FlaskConical, accent: "primary" },
];

const ServicesSection = () => (
  <section id="services" className="py-28 relative">
    <div className="absolute inset-0 dot-pattern opacity-15" />
    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[200px]"
      style={{ background: 'radial-gradient(circle, hsl(160 95% 55% / 0.05), transparent 70%)' }} />

    <div className="container relative mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="mono-label mb-3">// SERVICES</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          AI Tools <span className="gradient-text-subtle">Development</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Focused on building AI-powered solutions that push the boundaries of what's possible with code.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-8 group"
          >
            {/* Number watermark */}
            <span className="absolute top-4 right-5 font-mono text-7xl font-black text-muted/5 select-none group-hover:text-primary/8 transition-colors duration-700">
              0{i + 1}
            </span>

            <div className="relative">
              <div className={`p-3.5 w-fit rounded-md bg-${service.accent}/10 border border-${service.accent}/20 group-hover:border-${service.accent}/50 group-hover:bg-${service.accent}/15 transition-all duration-300 mb-5`}>
                <service.icon size={24} strokeWidth={1.5} className={`text-${service.accent}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                {service.title}
                <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </div>

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-primary/40 transition-all duration-700" />
            {/* Side accent */}
            <div className={`absolute top-0 left-0 w-px h-0 bg-${service.accent} group-hover:h-full transition-all duration-700`} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
