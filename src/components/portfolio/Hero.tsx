import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import portrait from "@/assets/waleed-portrait-hero-v2.png";

const floatingSnippets = [
  { top: "12%", left: "6%", text: "const dev = 'Waleed';", delay: "0s" },
  { top: "70%", left: "3%", text: "npm run build", delay: "1.2s" },
  { top: "22%", right: "5%", text: "<Component />", delay: "0.6s" },
  { top: "72%", right: "6%", text: "SELECT * FROM ideas;", delay: "1.8s" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-dvh flex items-center pt-32 pb-20 overflow-hidden">
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

      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Available for freelance & full-time roles
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Muhammad Waleed</span>
            <br />
            <span className="text-foreground/90">Full Stack Developer</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I create powerful web applications using modern frontend and backend
            technologies, focusing on performance, usability, and great user
            experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
          <div className="mt-10 flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-waleed-ali-6b1420225/"
              target="_blank"
              rel="noreferrer"
              aria-label="Muhammad Waleed on LinkedIn"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <div className="h-px flex-1 max-w-32 bg-border" />
            <span className="text-xs font-mono">Based remotely · Open worldwide</span>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div className="relative">
            <div aria-hidden className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand/40 via-brand-3/30 to-brand-2/40 blur-2xl" />
            <div className="relative glass-strong rounded-[2rem] p-3">
              <img
                src={portrait}
                alt="Muhammad Waleed, full stack developer portrait"
                width={520}
                height={640}
                className="rounded-[1.5rem] w-full max-w-md object-cover aspect-[4/5]"
              />
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
      </div>
    </section>
  );
}
