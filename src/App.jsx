import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Stack from "./pages/Stack";
import Publications from "./pages/Publications";
import Awards from "./pages/Awards";
import Certifications from "./pages/Certifications";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/certifications" element={<Certifications />} />
        </Route>
      </Routes>
    </Router>
  );
}
