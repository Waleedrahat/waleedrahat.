import { Code2, Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-4 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="glass rounded-[2rem] border border-white/10 p-5 sm:p-7 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.7)]">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl btn-primary">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="font-display font-bold">Muhammad Waleed</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Full Stack Developer building scalable, modern web applications with clean code and creative solutions.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Navigation</div>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {["Home", "About", "Skills", "Projects", "Experience", "Services", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Elsewhere</div>
            <div className="flex gap-2">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 text-muted-foreground hover:text-foreground transition"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Muhammad Waleed. All rights reserved.</div>
            <div className="font-mono">Designed & built with care.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
