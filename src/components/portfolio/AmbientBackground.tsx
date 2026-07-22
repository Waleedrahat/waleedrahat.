import { useEffect } from "react";

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: `${-(index % 12)}s`,
  duration: `${12 + (index % 7) * 2}s`,
  size: `${2 + (index % 3)}px`,
}));

export function AmbientBackground() {
  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  return (
    <div className="ambient-wallpaper" aria-hidden>
      <div className="ambient-wallpaper__grid" />
      <div className="ambient-wallpaper__aurora ambient-wallpaper__aurora--one" />
      <div className="ambient-wallpaper__aurora ambient-wallpaper__aurora--two" />
      <div className="ambient-wallpaper__aurora ambient-wallpaper__aurora--three" />
      <div className="ambient-wallpaper__pointer" />
      <div className="ambient-wallpaper__particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      <div className="ambient-wallpaper__noise" />
    </div>
  );
}

export function MotionEffects() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "main section > div, main article, main .glass, footer .grid > div",
    );

    targets.forEach((target, index) => {
      target.classList.add("motion-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
}
