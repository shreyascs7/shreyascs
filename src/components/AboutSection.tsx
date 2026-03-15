import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import profileImg from "@/assets/profile.png";

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mono-label mb-2">// ABOUT_ME</p>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground mb-12">
          Designing Solutions,<br />
          <span className="glow-text">Not Just Code</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="neon-border rounded-sm overflow-hidden p-1">
            <img src={profileImg} alt="Shreyas Mohan" className="w-full rounded-sm bg-card" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            Shreyas Mohan is a computer science student interested in vibe coding and web development. He enjoys experimenting with new technologies, creating AI tools, and building modern digital experiences.
          </p>

          {/* Education JSON block */}
          <div className="glass-card p-6 font-mono text-sm space-y-2">
            <p className="text-muted-foreground">{"{"}</p>
            <div className="pl-4 space-y-2">
              <p><span className="text-primary">"degree"</span>: <span className="text-secondary">"BTech in Computer Science & Engineering"</span>,</p>
              <p><span className="text-primary">"institution"</span>: <span className="text-secondary">"College of Engineering Attingal"</span>,</p>
              <p><span className="text-primary">"graduation"</span>: <span className="text-secondary">"2027"</span></p>
            </div>
            <p className="text-muted-foreground">{"}"}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap size={16} strokeWidth={1.5} className="text-primary" />
              <span>CS Student</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} strokeWidth={1.5} className="text-primary" />
              <span>Class of 2027</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} strokeWidth={1.5} className="text-primary" />
              <span>Kerala, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
