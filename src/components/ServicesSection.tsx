import { motion } from "framer-motion";
import { Bot, Cog, Plug, FlaskConical } from "lucide-react";

const services = [
  { title: "AI-Based Tools", desc: "Creating intelligent tools powered by modern AI frameworks and APIs.", icon: Bot },
  { title: "Automation Scripts", desc: "Building automation scripts to streamline repetitive workflows.", icon: Cog },
  { title: "AI Web Integration", desc: "Integrating AI features seamlessly into web applications.", icon: Plug },
  { title: "ML Experiments", desc: "Experimenting with machine learning concepts and prototypes.", icon: FlaskConical },
];

const ServicesSection = () => (
  <section id="services" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mono-label mb-2">// SERVICES</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground mb-4">
          AI Tools <span className="glow-text">Development</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          Focused on building AI-powered solutions that push the boundaries of what's possible with code.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-8 group"
          >
            <div className="p-3 w-fit rounded-sm bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors mb-4">
              <service.icon size={28} strokeWidth={1.5} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
