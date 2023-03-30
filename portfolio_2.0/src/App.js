import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Prjoects from "./components/Prjoects";
import ContactMe from "./components/ContactMe";
import { HashLink as Link } from "react-router-hash-link";
import pic from "./components/button.jpg";

function App() {
  return (
    <div className="bg-[#000117] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-10 scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-[#3374FF]/30">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Prjoects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <div className="sticky bottom-12 w-full">
        <div className="flex items-center justify-center">
          <Link to="#hero">
            <img
              src={pic}
              alt=""
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              // height={1000}
              // width={1000}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
