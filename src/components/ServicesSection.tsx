import { motion } from "framer-motion";
import { Bot, Cog, Plug, FlaskConical, ArrowUpRight, Layers } from "lucide-react";

const services = [
  { title: "AI-Based Tools", desc: "Creating intelligent tools powered by modern AI frameworks and APIs.", icon: Bot, accent: "primary" },
  { title: "Automation Scripts", desc: "Building automation scripts to streamline repetitive workflows.", icon: Cog, accent: "secondary" },
  { title: "AI Web Integration", desc: "Integrating AI features seamlessly into web applications.", icon: Plug, accent: "accent" },
  { title: "ML Experiments", desc: "Experimenting with machine learning concepts and prototypes.", icon: FlaskConical, accent: "primary" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const ServicesSection = () => (
  <section id="services" className="py-32 relative">
    <div className="absolute inset-0 dot-pattern opacity-15" />
    <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full blur-[250px]"
      style={{ background: 'radial-gradient(circle, hsl(160 95% 55% / 0.05), transparent 70%)' }} />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[200px]"
      style={{ background: 'radial-gradient(circle, hsl(280 85% 65% / 0.04), transparent 70%)' }} />

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
          <Layers size={12} className="text-primary" />
          <span className="mono-label text-[10px]">SERVICES</span>
        </motion.div>
        <h2 className="section-heading mb-5">
          AI Tools <span className="gradient-text-subtle">Development</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Focused on building AI-powered solutions that push the boundaries of what's possible with code.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            variants={cardItem}
            whileHover={{ scale: 1.02 }}
            className="glass-card-premium p-8 group cursor-default"
          >
            {/* Number watermark */}
            <span className="absolute top-4 right-5 font-mono text-8xl font-black select-none transition-all duration-700"
              style={{ color: 'hsl(var(--muted) / 0.04)' }}>
              0{i + 1}
            </span>

            <div className="relative">
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className={`p-4 w-fit rounded-xl bg-${service.accent}/10 border border-${service.accent}/20 group-hover:border-${service.accent}/50 group-hover:bg-${service.accent}/15 transition-all duration-400 mb-6`}
              >
                <service.icon size={26} strokeWidth={1.5} className={`text-${service.accent}`} />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </div>

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-primary/50 transition-all duration-700" />
            {/* Side accent */}
            <div className={`absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-${service.accent} to-transparent group-hover:h-full transition-all duration-700 rounded-full`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
