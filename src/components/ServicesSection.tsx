import { motion } from "framer-motion";
import { Bot, Cog, Plug, FlaskConical, ArrowUpRight } from "lucide-react";

const services = [
  { title: "AI-Based Tools", desc: "Creating intelligent tools powered by modern AI frameworks and APIs.", icon: Bot },
  { title: "Automation Scripts", desc: "Building automation scripts to streamline repetitive workflows.", icon: Cog },
  { title: "AI Web Integration", desc: "Integrating AI features seamlessly into web applications.", icon: Plug },
  { title: "ML Experiments", desc: "Experimenting with machine learning concepts and prototypes.", icon: FlaskConical },
];

const ServicesSection = () => (
  <section id="services" className="py-28 relative">
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

    <div className="container relative mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="mono-label mb-3">// SERVICES</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground mb-4">
          AI Tools <span className="glow-text">Development</span>
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
            className="glass-card p-8 group relative overflow-hidden"
          >
            {/* Number watermark */}
            <span className="absolute top-4 right-5 font-mono text-6xl font-black text-muted/10 select-none group-hover:text-primary/10 transition-colors duration-500">
              0{i + 1}
            </span>

            <div className="relative">
              <div className="p-3 w-fit rounded-sm bg-primary/10 border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/15 transition-all duration-300 mb-5">
                <service.icon size={24} strokeWidth={1.5} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                {service.title}
                <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </div>

            {/* Bottom glow line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
