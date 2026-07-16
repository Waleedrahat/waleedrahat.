import { Layers, Layout, Server, Database, AppWindow } from "lucide-react";
import { SectionHeading } from "./About";

const services = [
  {
    icon: Layers,
    title: "Full Stack Web Development",
    desc: "Complete frontend and backend solutions built on modern, scalable architectures.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Fast, responsive, and pixel-perfect user interfaces that feel effortless to use.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Secure APIs and scalable server systems engineered for reliability at scale.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    desc: "Efficient data models and storage systems that stay fast as your product grows.",
  },
  {
    icon: AppWindow,
    title: "Web Application Development",
    desc: "Custom business applications tailored to your workflow and product goals.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
          subtitle="End-to-end product engineering — from the first line of code to production deployment."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group glass rounded-2xl p-7 relative overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl btn-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 text-xs font-mono text-muted-foreground/70">
                  0{i + 1} / 0{services.length}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
