import "../styles/projectPages.css";

// IMPORTA LES TEVES IMATGES (afegeix les que tinguis)
import monstersBg from "../assets/projects/monsters/monstersHomeImage.png";

export default function AtrapamonstresPage() {
  return (
    <div className="project-page">

      {/* Background */}
      <div
        className="project-bg"
        style={{ backgroundImage: `url(${monstersBg})` }}
      />

      {/* Panel */}
      <div className="project-panel">

        <h1>I.P.O.D. Atrapamonstres — Unity AR Developer</h1>
        <h2 className="subtitle">Mobile AR Systems, Cloud Data Integration & Live Production Support</h2>

        {/* Intro */}
        <p className="intro">
          Worked on a live, published <strong>mobile AR experience</strong>, implementing augmented reality features,
          player-facing systems, and <strong>cloud-backed data workflows</strong> within a continuous production pipeline.
        </p>

        {/* Core Contributions */}
        <h3>Core Contributions</h3>
        <ul>
          <li>Integrated <strong>AR functionality</strong> using <strong>Vuforia</strong> within Unity</li>
          <li>Implemented new gameplay features and maintained <strong>production code</strong> in an active release environment</li>
          <li>Developed <strong>Android-ready builds</strong> with a focus on stability and device compatibility</li>
          <li>Created <strong>VFX</strong> and player feedback systems to improve interaction clarity and responsiveness</li>
        </ul>

        {/* Cloud & Data */}
        <h3>Cloud, Data & Analytics</h3>
        <ul>
          <li>Implemented <strong>Unity Cloud</strong> services for player data management</li>
          <li>Structured <strong>SQL-based data storage</strong> for persistence and tracking</li>
          <li>Supported analytics-driven iteration through <strong>player data monitoring</strong></li>
        </ul>

        {/* Technical Art */}
        <h3>Technical Art & UX</h3>
        <ul>
          <li>Designed <strong>visual feedback</strong> to reinforce AR interactions and gameplay readability</li>
          <li>Balanced real-time effects with <strong>mobile performance constraints</strong></li>
        </ul>

        {/* Production Context */}
        <h3>Production Context</h3>
        <ul>
          <li>Continuous deployment environment with <strong>live maintenance responsibilities</strong></li>
          <li>Focus on <strong>reliability</strong>, <strong>scalability</strong>, and <strong>user-facing polish</strong> in a published mobile AR product</li>
        </ul>

        {/* Video */}
        <h3>Gameplay Video</h3>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/lo1p-jk0iG8"
            title="Gameplay Video"
            allowFullScreen
          />
        </div>
      </div>

      {/* Modal */}
      <div id="img-modal" className="modal" onClick={closeModal}>
        <img id="modal-img" />
      </div>
    </div>
  );
}

function closeModal() {
  const modal = document.getElementById("img-modal")!;
  modal.classList.remove("open");
}