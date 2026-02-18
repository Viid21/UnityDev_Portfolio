import portrait from "../assets/portrait.png";

export default function Hero() {
    return (
        <section className="hero-section" id="about">
            <div className="container">
                <div className="hero-inner">
                    {/* Text side */}
                    <div className="hero-text">
                        <p className="hero-greeting">
                            Hi, my name is{" "}
                            <a
                                href="https://www.linkedin.com/in/davidrey21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-name-inline"
                            >
                                David Rey
                            </a>
                        </p>

                        <h1 className="hero-title">Unity<br />Developer</h1>

                        <div className="hero-about-label">About Me</div>

                        <p className="hero-bio">
                            I am a Unity Gameplay Developer and Technical Artist with experience working in real
                            production environments, contributing to gameplay systems, performance optimization
                            and VR/AR development. Over the past years I have worked on both independent and
                            professional projects, taking part in feature implementation, debugging, visual
                            effects, and real-time optimization.
                        </p>
                        <p className="hero-bio">
                            My background combines programming and 3D art, which allows me to understand the
                            full pipeline—from gameplay architecture and AI systems to shaders, rigging and
                            animation. Although I eventually specialized in gameplay programming, this
                            multidisciplinary foundation helps me collaborate efficiently with artists,
                            designers and technical teams.
                        </p>
                        <p className="hero-bio">
                            I am constantly looking to improve, take on new responsibilities and tackle
                            challenging problems. If you want to know more about my work or collaborate on a
                            project, feel free to reach out through my contact links.
                        </p>
                    </div>

                    {/* Portrait side */}
                    <div className="hero-portrait-wrap">
                        <div className="portrait-accent" />
                        <div className="hero-portrait-frame">
                            <img src={portrait} alt="David Rey – Unity Developer" />
                        </div>
                        <div className="portrait-accent-2" />
                    </div>
                </div>
            </div>
        </section>
    );
}
