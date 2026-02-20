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
}

const projects: Project[] = [
    {
        id: 1,
        title: "A Non Farming Game",
        description:
            "A young boy protects his summer village from emotional ghosts, balancing cozy daytime quests with fast-paced nighttime isometric shooting.",
        tag: "Unity · Quest system · Nav Mesh",
        image: farmingHomeImage,
        gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        imageOffset: "center -100px",
    },
    {
        id: 2,
        title: "Golden Hand",
        description:
            "A VR escape room where you play a thief infiltrating a medieval castle, solving puzzles to steal the king's legendary relic.",
        tag: "Unreal · VR · Optimization",
        image: handHomeImage,
        gradient: "linear-gradient(135deg, #111111 0%, #333333 100%)",
        imageOffset: "bottom",
    },
    {
        id: 3,
        title: "Atrapamonstres",
        description:
            "AR creature-catching game using Vuforia image recognition, where players scan real-world objects to summon monsters and complete evolving challenges.",
        tag: "Unity · AR · Mobile · External API",
        image: monstersHomeImage,
        gradient: "linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 100%)",
        imageOffset: "center",
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
