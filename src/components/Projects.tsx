import { Link } from "react-router-dom";

import farmingHomeImage from "../assets/projects/farming/farmingHomeImage.jpg";
import handHomeImage from "../assets/projects/hand/handHomeImage.gif";
import monstersHomeImage from "../assets/projects/monsters/monstersHomeImage.png";

interface Project {
    id: number;
    title: string;
    description: string;
    tag: string;
    image: string;
    gradient: string;
    imageOffset?: string;
    awarded?: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: "A Non Farming Game",
        description:
            "Implemented mission and dialogue systems with Scriptable Objects, built a Player Controller using New Input System and FSM, designed enemy AI and boss fights, and optimized graphics with advanced rendering techniques.",
        tag: "Unity · C# · Gameplay Systems · AI · FSM",
        image: farmingHomeImage,
        gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        imageOffset: "center -100px",
        awarded: true,
    },
    {
        id: 2,
        title: "Golden Hand",
        description:
            "Developed VR mechanics in Blueprints including climbing, archery, and escaperoom puzzles, optimized performance for Meta Quest 3, and implemented realistic lighting setups with efficient material instancing for highly immersive experiences.",
        tag: "Unreal · VR · Blueprints · Optimization",
        image: handHomeImage,
        gradient: "linear-gradient(135deg, #111111 0%, #333333 100%)",
        imageOffset: "bottom",
        awarded: true,
    },
    {
        id: 3,
        title: "I.P.O.D. Atrapamonstres",
        description:
            "Integrated Vuforia for augmented reality features, developed in a continuous production environment, implemented new features, maintained the published project, and used Unity Cloud to manage player data securely and efficiently.",
        tag: "Unity · AR · Mobile · Cloud",
        image: monstersHomeImage,
        gradient: "linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 100%)",
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
                        <Link to={`/project/${p.id}`} key={p.id} className="project-card" style={{ textDecoration: "none" }}>
    
                            {p.awarded && (
                                <div className="award-badge">
                                    <svg className="award-badge-icon" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 3L14.09 8.26L20 9.27L15.5 13.14L16.82 19.02L12 16L7.18 19.02L8.5 13.14L4 9.27L9.91 8.26L12 3Z"
                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="award-badge-text">Awarded Project</span>
                                </div>
                            )}
                        
                            <div className="project-img">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="project-image"
                                    style={{ objectPosition: p.imageOffset || "center" }}
                                />
                            </div>
                        
                            <div className="project-card-body">
                                <p className="project-tag">{p.tag}</p>
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}