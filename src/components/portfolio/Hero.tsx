import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import portrait from "@/assets/waleed-portrait.jpg";

const floatingSnippets = [
  { top: "12%", left: "6%", text: "const dev = 'Waleed';", delay: "0s" },
  { top: "70%", left: "3%", text: "npm run build", delay: "1.2s" },
  { top: "22%", right: "5%", text: "<Component />", delay: "0.6s" },
  { top: "72%", right: "6%", text: "SELECT * FROM ideas;", delay: "1.8s" },
];

const highlightPills = ["React", "TypeScript", "Node.js", "Design Systems"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-dvh flex items-center pt-22 pb-14 overflow-hidden">
      {/* animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-2/25 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-brand-3/20 blur-3xl animate-blob [animation-delay:-8s]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      {/* floating code snippets */}
      {floatingSnippets.map((s, i) => (
        <div
          key={i}
          className="hidden md:block absolute font-mono text-xs text-muted-foreground/70 glass rounded-lg px-3 py-2 animate-float"
          style={{ top: s.top, left: (s as any).left, right: (s as any).right, animationDelay: s.delay }}
        >
          {s.text}
        </div>
      ))}

      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.15fr_1fr] gap-6 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-4">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Available for freelance & full-time roles
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Muhammad Waleed</span>
            <br />
            <span className="text-foreground/90">Full Stack Developer</span>
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I create high-impact web applications using modern frontend and backend
            technologies, blending performance, design, and product thinking into
            experiences that feel effortless.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {highlightPills.map((pill) => (
              <span key={pill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                {pill}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
              View My Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a href="#" className="btn-ghost rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <div className="h-px flex-1 max-w-32 bg-border" />
            <span className="text-xs font-mono">Based remotely · Open worldwide</span>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 w-full max-w-[560px]">
          <div className="absolute inset-0 rounded-[2.75rem] bg-gradient-to-br from-brand/35 via-brand-2/25 to-brand-3/30 blur-3xl opacity-90 scale-110" />
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-white/15 bg-white/10 blur-2xl" />
          <div className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full border border-brand-2/20 bg-brand-2/10 blur-2xl" />
          <div className="relative glass-strong rounded-[2rem] p-3 sm:p-4 shadow-[0_30px_90px_-24px_rgba(0,0,0,0.55)]">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-background/70 via-card to-background/80 p-2">
              <img
                src={portrait}
                alt="Muhammad Waleed, full stack developer portrait"
                width={520}
                height={640}
                loading="eager"
                decoding="async"
                className="rounded-[1.2rem] w-full max-w-md object-cover aspect-[4/5] object-top shadow-[0_20px_55px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition duration-500 hover:scale-[1.02] hover:shadow-[0_35px_80px_-25px_rgba(0,0,0,0.8)]"
                style={{ filter: "saturate(1.08) contrast(1.04) brightness(1.02)" }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_45%,rgba(255,255,255,0.04))]" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 text-xs font-mono animate-float">
              <div className="text-brand-2">● online</div>
              <div className="text-muted-foreground mt-1">Shipping code · 24/7</div>
            </div>
            <div className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 animate-float [animation-delay:-2s]">
              <div className="text-2xl font-bold text-gradient">50+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
