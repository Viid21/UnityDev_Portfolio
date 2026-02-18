interface Project {
    id: number;
    title: string;
    description: string;
    tag: string;
    icon: string;
    gradient: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "A Non Farming Game",
        description:
            "An indie Unity game that subverts farming genre expectations with surreal mechanics, custom gameplay systems and procedural world generation.",
        tag: "Unity · Indie",
        icon: "🌾",
        gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    },
    {
        id: 2,
        title: "Golden Hand",
        description:
            "A dark action game featuring a protagonist with a supernatural golden mechanical hand. Built with custom physics interactions and VFX shaders.",
        tag: "Unity · Action",
        icon: "✋",
        gradient: "linear-gradient(135deg, #111111 0%, #333333 100%)",
    },
    {
        id: 3,
        title: "Atrapamonstres",
        description:
            "A monster-catching mobile game developed in Unity. Features AI-driven creature behaviour, AR integration and real-time performance optimization.",
        tag: "Unity · AR · Mobile",
        icon: "👾",
        gradient: "linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 100%)",
    },
    {
        id: 4,
        title: "Medic Combat",
        description:
            "A VR first-person game set in a combat zone where the player takes on the role of a field medic. Developed with OpenXR and optimized for standalone headsets.",
        tag: "Unity · VR",
        icon: "🏥",
        gradient: "linear-gradient(135deg, #141414 0%, #282828 100%)",
    },
];

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Selected Work</p>
                    <h2 className="section-title">Projects</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((p) => (
                        <div className="project-card" key={p.id}>
                            <div className="project-img">
                                <div
                                    className="project-img-placeholder"
                                    style={{ background: p.gradient }}
                                >
                                    <span className="icon">{p.icon}</span>
                                </div>
                            </div>
                            <div className="project-card-body">
                                <p className="project-tag">{p.tag}</p>
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
