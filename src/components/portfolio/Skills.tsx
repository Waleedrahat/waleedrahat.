import { SectionHeading } from "./About";

type Skill = { name: string; level: number };

const groups: { title: string; accent: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    accent: "from-brand to-brand-3",
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
    accent: "from-brand-2 to-brand",
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
    accent: "from-brand-3 to-brand-2",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 82 },
    ],
  },
  {
    title: "Tools",
    accent: "from-brand to-brand-2",
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
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="glass rounded-2xl p-6 hover:border-white/20 transition group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${g.accent}`} />
              </div>
              <ul className="space-y-4">
                {g.skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground/90">{s.name}</span>
                      <span className="text-muted-foreground font-mono text-xs">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${g.accent} transition-all duration-1000`}
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
