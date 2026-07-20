import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Waleed — Full Stack Developer" },
      {
        name: "description",
        content:
          "Muhammad Waleed is a Full Stack Developer building scalable, modern, and user-friendly web applications with React, Node.js, and TypeScript.",
      },
      { property: "og:title", content: "Muhammad Waleed — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Muhammad Waleed — scalable, high-performance web applications built with modern frontend and backend technologies.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
