import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react";
import { SectionHeading } from "./About";

const items = [
  {
    icon: Rocket,
    year: "2024 — Present",
    title: "Freelance Full Stack Developer",
    place: "Remote · Worldwide",
    desc: "Building custom web apps for startups and small businesses across e-commerce, SaaS, and AI-powered tools.",
  },
  {
    icon: Briefcase,
    year: "2023 — 2024",
    title: "Full Stack Developer",
    place: "Tech Studio",
    desc: "Shipped production features across React and Node.js codebases, focusing on performance and DX.",
  },
  {
    icon: Award,
    year: "2023",
    title: "Advanced Full Stack Certification",
    place: "Online Program",
    desc: "Completed a rigorous full stack program covering system design, databases, and modern deployment.",
  },
  {
    icon: GraduationCap,
    year: "2021 — 2022",
    title: "Frontend Developer",
    place: "First Client Projects",
    desc: "Delivered responsive websites and dashboards, building the foundation of my professional practice.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & milestones"
          subtitle="The path so far — from first commits to production-grade systems."
        />
        <div className="mt-14 relative">
          <div aria-hidden className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <ul className="space-y-8">
            {items.map((it, i) => (
              <li key={it.title} className="md:grid md:grid-cols-2 md:gap-10 relative">
                <div className={`md:${i % 2 === 0 ? "col-start-1 text-right pr-10" : "col-start-2 pl-10"}`}>
                  <div className="glass rounded-2xl p-6 relative">
                    <div className="text-xs font-mono text-brand uppercase tracking-widest">{it.year}</div>
                    <h3 className="mt-2 font-display text-lg font-semibold">{it.title}</h3>
                    <div className="text-sm text-muted-foreground">{it.place}</div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                </div>
                <span
                  className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full btn-primary ring-4 ring-background"
                  aria-hidden
                >
                  <it.icon className="h-4 w-4" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
