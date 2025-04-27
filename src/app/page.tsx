import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="projects" className="scroll-mt-24 md:scroll-mt-32 lg:scroll-mt-40">
  <Projects />
</section>

<section id="skills" className="scroll-mt-24 md:scroll-mt-32 lg:scroll-mt-40">
  <Skills />
</section>

<section id="contact" className="scroll-mt-24 md:scroll-mt-32 lg:scroll-mt-40">
  <Contact />
</section>
    </main>
  );
}