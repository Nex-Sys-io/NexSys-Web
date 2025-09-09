import Navbar from "./components/navbar.js";
import Home from "./home_subpages/home.js";
import About from "./home_subpages/about.js";
import Projects from "./home_subpages/projects.js";
import Contact from "./home_subpages/contact.js";
import Footer from "./components/footer.js";

export default function Main() {
  return (
    <main className="pt-24">
      <Navbar/>
      <div id="home" className="scroll-mt-24">
        <Home />
      </div>
      <div id="about" className="scroll-mt-24">
        <About />
      </div>
      <div id="projects" className="scroll-mt-24">
        <Projects />
      </div>
      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
