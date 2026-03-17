import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "shreyas54416@gmail.com", href: "mailto:shreyas54416@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7510616947", href: "tel:+917510616947" },
  { icon: MapPin, label: "Location", value: "Kerala, India", href: "#" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        "service_4pr55p9",
        "template_yec0bjt",
        { from_name: form.name, from_email: form.email, message: form.message },
        "wUFrzEd1gDMTiUbDR"
      );
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="mono-label mb-3">// CONTACT</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground mb-4">
            Let's <span className="glow-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Interested in collaborating or have a project in mind? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card p-5 flex items-center gap-4 group block"
              >
                <div className="p-3 rounded-sm bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
                  <Icon size={18} strokeWidth={1.5} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">{label}</p>
                  <p className="text-sm text-foreground truncate">{value}</p>
                </div>
                <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
              </motion.a>
            ))}

            <div className="flex gap-3 pt-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex-1 glass-card p-4 flex items-center justify-center gap-2 group"
                >
                  <Icon size={18} strokeWidth={1.5} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form — 3 cols */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 space-y-5"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Send a message</span>
            </div>

            {[
              { key: "name", label: "Name", type: "text", placeholder: "Your Name" },
              { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key} className="relative">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5 block">{label}</label>
                <input
                  className={`neon-input w-full ${focused === key ? "border-primary" : ""}`}
                  type={type}
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  onFocus={() => setFocused(key)}
                  onBlur={() => setFocused(null)}
                />
              </div>
            ))}

            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                className={`neon-input w-full min-h-[140px] resize-none ${focused === "message" ? "border-primary" : ""}`}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button type="submit" disabled={sending} className="neon-btn-primary w-full justify-center disabled:opacity-50">
              {sending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} strokeWidth={1.5} /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
