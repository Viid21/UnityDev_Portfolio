export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <span className="header-brand">David Rey's portfolio</span>
          <nav>
            <ul className="header-nav">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}