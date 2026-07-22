import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { SectionHeading } from "./About";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Have a project idea? Let's build something amazing together."
          subtitle="Drop a message — I usually reply within 24 hours."
        />
        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="glass rounded-2xl p-8 space-y-6">
            <InfoRow
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="waleedrahat248@gmail.com"
              href="mailto:waleedrahat248@gmail.com"
            />
            <InfoRow icon={<MapPin className="h-4 w-4" />} label="Location" value="Remote · Worldwide" />
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Socials</div>
              <div className="flex gap-2">
                <SocialLink icon={<Github className="h-4 w-4" />} label="GitHub" href="#" />
                <SocialLink
                  icon={<Linkedin className="h-4 w-4" />}
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/muhammad-waleed-ali-6b1420225/"
                  external
                />
                <SocialLink icon={<Twitter className="h-4 w-4" />} label="Twitter" href="#" />
              </div>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-gradient-to-br from-brand/10 to-brand-2/10">
              <div className="text-sm font-medium">Currently accepting new projects</div>
              <p className="text-xs text-muted-foreground mt-1">Freelance, contract, and full-time roles.</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="Project inquiry" />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project…"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand/60 focus:ring-2 focus:ring-brand/30 transition"
              />
            </div>
            <button
              type="submit"
              className="btn-primary rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
            >
              {sent ? "Message sent ✓" : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand/60 focus:ring-2 focus:ring-brand/30 transition"
      />
    </div>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 border border-white/10 text-brand">{icon}</span>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
        {href ? <a href={href} className="text-sm hover:text-brand transition-colors">{value}</a> : <div className="text-sm">{value}</div>}
      </div>
    </div>
  );
}

function SocialLink({ icon, label, href, external = false }: { icon: React.ReactNode; label: string; href: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 text-muted-foreground hover:text-foreground transition"
    >
      {icon}
    </a>
  );
}
