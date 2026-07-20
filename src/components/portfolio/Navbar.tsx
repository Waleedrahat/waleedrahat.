import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-[1.4rem] border border-white/10 px-4 sm:px-6 py-3 transition-all ${
            scrolled
              ? "glass-strong shadow-[0_18px_60px_-24px_rgba(0,0,0,0.7)]"
              : "bg-white/5 backdrop-blur-sm"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl btn-primary">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              Muhammad<span className="text-gradient">.</span>Waleed
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary rounded-full px-5 py-2 text-sm font-medium shadow-[0_12px_35px_-14px_rgba(0,0,0,0.75)]">
              Let's talk
            </a>
          </div>
          <button
            aria-label="Toggle menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm rounded-lg hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center btn-primary rounded-full px-5 py-3 text-sm font-medium"
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
