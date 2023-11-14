import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

export default async function Home() {
  return (
    <div className=" bg-violet-300 text-black h-screen snap-y  ease-out snap-mandatory  overflow-y-scroll z-0 scrollbar scrollbar-track-violet-500/20 scrollbar-thumb-violet-800/80">
      {/*Navbar*/}
      <Navbar />

      {/*header*/}
      <section id="header" className=" snap-start ">
        <Header />
      </section>

      {/*about*/}
      <section id="about" className=" snap-center  ">
        <About />
      </section>

      {/*skills*/}
      <section id="skills" className="snap-start">
        <Tools />
      </section>

      {/*projects*/}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/*blogs*/}
      <section id="blogs" className="snap-start">
        <Blogs />
      </section>
      {/*contact*/}
      <section id="contact" className="contact snap-start">
        <Contact />
      </section>
      {/*footer*/}
    </div>
  );
}
