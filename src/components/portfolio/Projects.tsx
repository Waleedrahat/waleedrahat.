import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./About";
import ecom from "@/assets/project-ecommerce.jpg";
import tasks from "@/assets/project-tasks.jpg";
import ai from "@/assets/project-ai.jpg";
import dash from "@/assets/project-dashboard.jpg";
import portfolio from "@/assets/project-portfolio.jpg";

const projects = [
  {
    title: "Full Stack E-commerce Platform",
    desc: "A production-grade storefront with Stripe payments, inventory management, and an admin dashboard.",
    image: ecom,
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    featured: true,
  },
  {
    title: "Task Management Application",
    desc: "Real-time collaboration app with drag-and-drop boards, workspaces, and role-based access.",
    image: tasks,
    tech: ["React", "Express", "MongoDB", "Socket.IO"],
  },
  {
    title: "AI-powered Web Application",
    desc: "Conversational assistant with streaming responses, memory, and custom knowledge base.",
    image: ai,
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Edge"],
  },
  {
    title: "Business Dashboard",
    desc: "Analytics dashboard with rich charts, KPI cards, and multi-tenant reporting.",
    image: dash,
    tech: ["React", "TypeScript", "Node.js", "Charts"],
  },
  {
    title: "Portfolio Website",
    desc: "A refined developer portfolio with premium motion, glass surfaces, and dark aesthetics.",
    image: portfolio,
    tech: ["React", "Tailwind", "Motion"],
  },
];

export function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I'm proud of"
          subtitle="A handful of products that showcase how I approach engineering, design, and delivery."
        />

        {/* Featured */}
        <article className="mt-8 group glass rounded-[2rem] border border-white/10 overflow-hidden grid lg:grid-cols-2 shadow-[0_26px_80px_-30px_rgba(0,0,0,0.7)]">
          <div className="relative overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <span className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[11px] uppercase tracking-widest">
              Featured
            </span>
          </div>
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <h3 className="font-display text-2xl lg:text-3xl font-bold">{featured.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{featured.desc}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <li key={t} className="text-xs font-mono text-muted-foreground border border-white/10 rounded-full px-3 py-1">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="btn-primary rounded-full px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2">
                Live Demo <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#" className="btn-ghost rounded-full px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </article>

        {/* Grid */}
        <div className="mt-5 grid md:grid-cols-2 gap-4">
          {rest.map((p) => (
            <article key={p.title} className="group glass rounded-[1.6rem] border border-white/10 overflow-hidden shadow-[0_20px_60px_-26px_rgba(0,0,0,0.7)] hover:-translate-y-1 transition-all">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li key={t} className="text-[10px] font-mono text-muted-foreground border border-white/10 rounded-full px-2 py-0.5">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <a href="#" className="btn-primary rounded-full px-4 py-2 text-xs font-medium inline-flex items-center gap-1.5">
                    Live <ExternalLink className="h-3 w-3" />
                  </a>
                  <a href="#" className="btn-ghost rounded-full px-4 py-2 text-xs font-medium inline-flex items-center gap-1.5">
                    <Github className="h-3 w-3" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
