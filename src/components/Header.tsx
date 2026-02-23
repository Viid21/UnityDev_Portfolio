import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const goToSection = (section: string) => {
    const base = "/UnityDev_Portfolio";

    if (location.pathname !== "/UnityDev_Portfolio/") {
      // Si NO estàs a la Home → redirigeix a la Home + secció
      window.location.href = `${base}/#${section}`;
    } else {
      // Si ja estàs a la Home → scroll suau
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <span className="header-brand">David Rey's portfolio</span>

          <nav>
            <ul className="header-nav">
              <li><button className="nav-btn" onClick={() => goToSection("about")}>About</button></li>
              <li><button className="nav-btn" onClick={() => goToSection("projects")}>Projects</button></li>
              <li><button className="nav-btn" onClick={() => goToSection("skills")}>Skills</button></li>
              <li><button className="nav-btn" onClick={() => goToSection("contact")}>Contact</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}