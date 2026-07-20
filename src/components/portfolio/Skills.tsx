import { SectionHeading } from "./About";

type Skill = { name: string; level: number };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "Authentication", level: 85 },
      { name: "Server Development", level: 85 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 82 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 78 },
      { name: "VS Code", level: 98 },
      { name: "Figma", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title="A modern, full-stack toolbox"
          subtitle="The technologies I reach for daily to design, build, and ship production-ready web applications."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {groups.map((g) => (
            <div key={g.title} className="glass rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-5 shadow-[0_20px_55px_-24px_rgba(0,0,0,0.7)] hover:border-white/20 transition group">
              <div className="mb-4">
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              </div>
              <ul className="space-y-3">
                {g.skills.map((s) => (
                  <li key={s.name} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/90">{s.name}</span>
                      <span className="text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand via-brand-2 to-brand-3"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
