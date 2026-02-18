interface Skill {
    icon: string;
    title: string;
    description: string;
    tags: string[];
}

const skills: Skill[] = [
    {
        icon: "🎮",
        title: "Unity Gameplay Systems",
        description:
            "Designing and implementing robust gameplay loops, player controllers, AI behaviour trees, event systems and game state management in Unity.",
        tags: ["C#", "Unity", "AI / NavMesh", "Physics", "Event Systems"],
    },
    {
        icon: "🥽",
        title: "VR / AR Development",
        description:
            "Building immersive experiences with OpenXR, XR Interaction Toolkit and ARFoundation. Optimized for standalone headsets and mobile AR platforms.",
        tags: ["OpenXR", "XR Toolkit", "ARFoundation", "Oculus SDK", "Spatial UI"],
    },
    {
        icon: "⚡",
        title: "Performance Optimization",
        description:
            "Profiling and optimizing real-time applications: draw call batching, LOD systems, memory management, shader optimization and GPU profiling.",
        tags: ["Unity Profiler", "GPU Instancing", "LOD", "Occlusion Culling", "URP"],
    },
    {
        icon: "🎨",
        title: "3D Art Pipeline",
        description:
            "Full 3D production pipeline knowledge spanning modelling, UV unwrapping, rigging, animation and real-time shader authoring in Shader Graph.",
        tags: ["Blender", "Shader Graph", "Rigging", "Animation", "PBR Materials"],
    },
];

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Expertise</p>
                    <h2 className="section-title">Skills</h2>
                </div>

                <div className="skills-grid">
                    {skills.map((s) => (
                        <div className="skill-card" key={s.title}>
                            <span className="skill-icon">{s.icon}</span>
                            <h3>{s.title}</h3>
                            <p>{s.description}</p>
                            <div className="skill-tags">
                                {s.tags.map((t) => (
                                    <span className="skill-tag" key={t}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
