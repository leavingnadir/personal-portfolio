import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Footer from './sections/Footer';
import Stack from "./sections/Stack";
import Publications from "./sections/Publication";
import Certifications from "./sections/Certifications";

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Experiences />
      <Certifications />
      <Publications />
      <Footer/>
    </>
  );
};

export default App;
