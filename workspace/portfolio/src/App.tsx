import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Awards from "./components/Awards";
import Media from "./components/Media";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Publications />
        <Awards />
        <Media />
        <section id="contact" className="container py-16">
          <h2 className="section-title">Get in touch</h2>
          <p className="mt-2 max-w-prose text-neutral-300">
            I’m excited to collaborate with teams pushing embodied AI into the
            real world. Reach out on LinkedIn or explore more demos on Devpost.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.linkedin.com/in/gshklovski/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary-600 px-4 py-2 font-medium text-white hover:bg-primary-500"
            >
              Message on LinkedIn
            </a>
            <a
              href="https://devpost.com/gshklovs"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 font-medium hover:bg-neutral-800"
            >
              View Devpost
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
