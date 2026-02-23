import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <BrowserRouter basename="/UnityDev_Portfolio">
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Projects />
                <Skills />
                <Contact />
              </div>
            }
          />

          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;