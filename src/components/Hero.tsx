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
                            I am a Unity & Unreal Developer and Technical Artist with 3 years of experience shipping PC, 
                            mobile, VR, and AR projects. Strong foundation in C# programming, gameplay systems, 
                            shader development, and real-time performance optimization across both engines. 
                            Proficient in Unity tooling including Shader Graph, Scriptable Objects, FSMs, Profiler, 
                            and Frame Debugger, as well as 2D and 3D pipelines. Experienced in Unreal Engine for 
                            VR development, with deep knowledge of draw call optimization and engine debugging 
                            workflows. Familiar with CI/CD pipelines using Git and Unity Cloud Build, asset 
                            management best practices, and version control in team environments. Committed to 
                            delivering production-quality work with a focus on performance, visual quality, and clean 
                            technical execution. 
                        </p>
                        <p className="hero-bio">
                            My background combines programming and 3D art, which allows me to understand the
                            full pipeline from gameplay architecture and AI systems to shaders, rigging and
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
                            <img src={portrait} alt="David Rey - Unity Developer" />
                        </div>
                        <div className="portrait-accent-2" />
                    </div>
                </div>
            </div>
        </section>
    );
}
