import "../styles/projectPages.css";

import goldenBg from "../assets/projects/hand/GoldenHandBG.png";
import golden4 from "../assets/projects/hand/GoldenHandRenders_4.png";
import golden5 from "../assets/projects/hand/GoldenHandRenders_5.png";
import golden7 from "../assets/projects/hand/GoldenHandRenders_7.png";
import golden8 from "../assets/projects/hand/GoldenHandRenders_8.png";

export default function GoldenHandPage() {
  const gallery = [golden4, golden5, golden7, golden8];

  return (
    <div className="project-page">

      {/* Background */}
      <div
        className="project-bg"
        style={{ backgroundImage: `url(${goldenBg})` }}
      />

      {/* Panel */}
      <div className="project-panel">

        <h1>Golden Hand — Unreal VR Developer</h1>
        <h2 className="subtitle">VR Interaction Systems & Performance Optimization for Standalone Headsets</h2>

        {/* Awards */}
        <div className="project-awards">

          <div className="award">
            <span className="award-icon">
              <svg className="award-svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L14.09 8.26L20 9.27L15.5 13.14L16.82 19.02L12 16L7.18 19.02L8.5 13.14L4 9.27L9.91 8.26L12 3Z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Awarded <strong>“Best Project of the Year”</strong> at Deia Escola d'Art i Disseny (2024)
            <span className="award-icon">
              <svg className="award-svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L14.09 8.26L20 9.27L15.5 13.14L16.82 19.02L12 16L7.18 19.02L8.5 13.14L4 9.27L9.91 8.26L12 3Z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

        </div>

        {/* Intro */}
        <p className="intro">
          Developed and optimized core <strong>VR interaction systems</strong> and <strong>rendering pipeline</strong> 
          for a standalone headset experience, focusing on <strong>performance stability</strong>, 
          <strong>immersion</strong>, and <strong>responsive player interaction</strong>.
        </p>

        {/* Core Contributions */}
        <h3>Core Contributions</h3>
        <ul>
          <li>Implemented <strong>VR mechanics</strong> in Blueprints including climbing, archery, and escaperoom style puzzle interactions</li>
          <li>Designed interaction logic prioritizing <strong>precision</strong>, <strong>comfort</strong>, and <strong>physical presence</strong> in VR</li>
          <li>Structured gameplay systems to support <strong>modular puzzle</strong> and <strong>traversal mechanics</strong></li>
        </ul>

        {/* VR Performance */}
        <h3>VR Performance & Optimization</h3>
        <ul>
          <li>Optimized project for <strong>Meta Quest 3</strong> standalone hardware</li>
          <li>Reduced draw calls through <strong>material instancing</strong> and efficient shader usage</li>
          <li>Applied VR <strong>performance strategies</strong> to maintain stable frame rates</li>
          <li>Balanced <strong>visual fidelity</strong> and <strong>runtime efficiency</strong> across target devices</li>
        </ul>

        {/* Technical Art */}
        <h3>Technical Art & Rendering</h3>
        <ul>
          <li>Configured <strong>realistic lighting setups</strong> to enhance immersion in VR environments</li>
          <li>Implemented <strong>material and rendering workflows</strong> optimized for realtime performance</li>
          <li>Integrated <strong>visual feedback systems</strong> supporting gameplay readability in VR</li>
        </ul>

        {/* Production Context */}
        <h3>Production Context</h3>
        <ul>
          <li>Focus on <strong>performance development</strong> for standalone VR platforms</li>
          <li>End-to-end responsibility for <strong>interaction systems</strong> and <strong>rendering optimization</strong></li>
        </ul>

        {/* Video */}
        <h3>Gameplay Video</h3>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/JPGp_OQbZ1o"
            title="Gameplay Video"
            allowFullScreen
          />
        </div>

        {/* Gallery */}
        <h3>Gallery</h3>
        <div className="gallery">
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              className="gallery-img"
              onClick={() => openModal(img)}
            />
          ))}
        </div>

      </div>

      {/* Modal */}
      <div id="img-modal" className="modal" onClick={closeModal}>
        <img id="modal-img" />
      </div>
    </div>
  );
}

// Modal helpers
function openModal(src: string) {
  const modal = document.getElementById("img-modal")!;
  const modalImg = document.getElementById("modal-img") as HTMLImageElement;
  modalImg.src = src;
  modal.classList.add("open");
}

function closeModal() {
  const modal = document.getElementById("img-modal")!;
  modal.classList.remove("open");
}