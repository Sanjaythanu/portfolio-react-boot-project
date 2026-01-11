import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <Navbar toggleTheme={() => setDark(!dark)} />
      <Home />
      <About />
      <Skills/>
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
