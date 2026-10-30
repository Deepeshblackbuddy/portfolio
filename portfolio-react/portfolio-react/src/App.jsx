import data from "./data/portfolio.json";
import GlobalStyles from "./GlobalStyles.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <GlobalStyles site={data.site} />
      <Navbar site={data.site} nav={data.nav} />
      <main>
        <Hero hero={data.hero} />
        <About about={data.about} />
        <Projects section={data.projectsSection} projects={data.projects} />
        <Contact contact={data.contact} site={data.site} />
      </main>
    </>
  );
}
