import Navbar from "./components/navbar.js";
import Home from "./home_subpages/home.js";
import About from "./home_subpages/about.js";
import Projects from "./home_subpages/projects.js";
import Contact from "./home_subpages/contact.js";
import Footer from "./components/footer.js";

export default function Main() {
  return (
    <main className="absolute inset-0">
      <Navbar/>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}