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
          I worked on a live, published <strong>mobile AR game</strong>, building new features,
          improving player feedback, and managing <strong>player data with Unity cloud</strong> as part
          of an ongoing production environment.
        </p>

        {/* Core Contributions */}
        <h3>What I worked on</h3>
        <ul>
          <li>Integrated AR features using <strong>Vuforia</strong> in Unity</li>
          <li>Implemented gameplay features and fixed issues in a live production build</li>
          <li>Prepared and maintained <strong>Android builds</strong> across different devices</li>
          <li>Created <strong>VFX and visual feedback</strong> to make player interactions clearer and more responsive</li>
        </ul>

        {/* Cloud & Data */}
        <h3>Cloud & Player Data</h3>
        <ul>
          <li>Used <strong>Unity Cloud services</strong> to manage player data</li>
          <li>Worked with <strong>SQL database</strong> for persistence and tracking</li>
          <li>Used player data to support iteration and feature decisions</li>
        </ul>

        {/* Technical Art */}
        <h3>Visual Feedback & Performance</h3>
        <ul>
          <li>Designed visual feedback to help players understand AR interactions</li>
          <li>Balanced visual quality with <strong>mobile performance constraints</strong></li>
        </ul>

        {/* Production Context */}
        <h3>Production Context</h3>
        <ul>
          <li>Worked in a <strong>continuous production environment</strong> with regular updates</li>
          <li>Maintained and improved a <strong>published mobile AR project</strong></li>
          <li>Focused on stability, usability, and real-world device performance</li>
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