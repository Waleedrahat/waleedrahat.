import { useEffect, useRef, useState } from "react";
import { Rocket, Target, Heart, Sparkles } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Technologies Used" },
  { value: 4, suffix: "", label: "Years Learning" },
  { value: 30, suffix: "+", label: "Happy Clients" },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.floor(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

function StatCard({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCountUp(value, active);
  return (
    <div className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform">
      <div className="text-4xl font-bold text-gradient font-display">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(true),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="About" title="Crafting software that feels effortless" />
        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="text-foreground font-medium">Muhammad Waleed</span>, a full
              stack developer obsessed with turning ideas into fast, reliable, and beautifully
              engineered products. My journey started with curiosity — one landing page,
              one late-night bug — and grew into a deep love for shipping software end to end.
            </p>
            <p>
              Today I work across the stack: from pixel-perfect React interfaces to typed
              APIs, databases, and infrastructure. I believe great products come from clean
              architecture, honest UX, and relentless iteration.
            </p>
            <p>
              My goal is simple — build web experiences that businesses trust and users
              genuinely enjoy.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-4">
              <ValueTag icon={<Rocket className="h-4 w-4" />} label="Performance-first" />
              <ValueTag icon={<Target className="h-4 w-4" />} label="Detail-driven" />
              <ValueTag icon={<Heart className="h-4 w-4" />} label="User-focused" />
            </div>
          </div>
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} active={active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueTag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="glass rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-foreground">
      <span className="text-brand">{icon}</span>
      {label}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <Sparkles className="h-3 w-3 text-brand" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl">{subtitle}</p>}
    </div>
  );
}
