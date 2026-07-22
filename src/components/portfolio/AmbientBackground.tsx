import { useEffect } from "react";

export function AmbientBackground() {
  return (
    <div className="ambient-wallpaper" aria-hidden>
      <div className="ambient-wallpaper__image" />
      <div className="ambient-wallpaper__grid" />
      <div className="ambient-wallpaper__beam ambient-wallpaper__beam--one" />
      <div className="ambient-wallpaper__beam ambient-wallpaper__beam--two" />
      <div className="ambient-wallpaper__stars" />
      <div className="ambient-wallpaper__noise" />
    </div>
  );
}

export function MotionEffects() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "main section > div, main article, footer .grid > div",
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
