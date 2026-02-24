import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import FarmingPage from "./pages/FarmingPage";
import GoldenHandPage from "./pages/GoldenHandPage";
import AtrapamonstresPage from "./pages/AtrapamonstresPage";

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

          <Route path="/project/1" element={<FarmingPage />} />
          <Route path="/project/2" element={<GoldenHandPage />} />
          <Route path="/project/3" element={<AtrapamonstresPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;