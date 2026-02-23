import { useParams } from "react-router-dom";
import "../styles/projectPages.css";

import farmingBg from "../assets/projects/farming/farmingBg.jpg";
import farming1 from "../assets/projects/farming/farming1.jpg";
import farming3 from "../assets/projects/farming/farming3.jpg";
import farming4 from "../assets/projects/farming/farming4.jpg";
import farmingUI from "../assets/projects/farming/farmingUI.png";
import farmingGameplay from "../assets/projects/farming/farmingGameplay.png";
import farmingGameplayNight from "../assets/projects/farming/farmingGameplayNight.png";
import farmingDaltonism from "../assets/projects/farming/farmingDaltonismFilter.png";

export default function FarmingPage() {
  const { id } = useParams();

  // De moment només tens el projecte 1 complet
  if (id !== "1") return <p style={{ padding: "4rem" }}>Project not found.</p>;

  const gallery = [
    farming1,
    farming3,
    farming4,
    farmingUI,
    farmingGameplay,
    farmingGameplayNight,
    farmingDaltonism,
  ];

  return (
    <div className="project-page">

      {/* Fons */}
      <div
        className="project-bg"
        style={{ backgroundImage: `url(${farmingBg})` }}
      />

      {/* Panell */}
      <div className="project-panel">

        <h1>A non farming game — Unity Gameplay Programmer</h1>
        <h2 className="subtitle">Gameplay Systems & Accessibility-Focused Unity Development</h2>

        <div className="project-awards">

          <div className="award">
            <span className="award-icon">
              <svg className="award-svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L14.09 8.26L20 9.27L15.5 13.14L16.82 19.02L12 16L7.18 19.02L8.5 13.14L4 9.27L9.91 8.26L12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Awarded <strong>“Best Project of the Year”</strong> at Deia Escola d’Art i Disseny (2023)
            <span className="award-icon">
              <svg className="award-svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L14.09 8.26L20 9.27L15.5 13.14L16.82 19.02L12 16L7.18 19.02L8.5 13.14L4 9.27L9.91 8.26L12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>

          <div className="award">
            <span className="award-icon">
              <svg className="award-svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L14.09 8.26L20 9.27L15.5 13.14L16.82 19.02L12 16L7.18 19.02L8.5 13.14L4 9.27L9.91 8.26L12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Finalist at <strong>Indie Games Málaga</strong> (2023)
            <span className="award-icon">
              <svg className="award-svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L14.09 8.26L20 9.27L15.5 13.14L16.82 19.02L12 16L7.18 19.02L8.5 13.14L4 9.27L9.91 8.26L12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>

        </div>

        <p className="intro">
          Sole programmer responsible for <strong>gameplay architecture</strong>, <strong>AI systems</strong>, <strong>UI accessibility</strong>, 
          and <strong>performance optimization</strong> in a production environment. Built <strong>scalable systems</strong> supporting 
          exploration, combat, and dynamic game states.
        </p>

        <h3>Core Contributions</h3>
        <ul>
          <li>Designed <strong>mission and dialogue systems</strong> using <strong>Scriptable Objects</strong> + <strong>FSM architecture</strong></li>
          <li>Implemented <strong>Player Controller</strong> with <strong>Unity New Input System</strong></li>
          <li>Developed <strong>enemy AI</strong> with <strong>NavMesh pathfinding</strong> and <strong>perception logic</strong></li>
          <li>Created <strong>boss encounters</strong> using modular <strong>finite state machines</strong></li>
          <li>Implemented <strong>aim assist</strong> and <strong>vission-based enemy detection</strong></li>
          <li>Built <strong>dynamic day/night gameplay state system</strong></li>
        </ul>

        <h3>UI & Accessibility</h3>
        <ul>
          <li>Adjustable <strong>text scaling</strong> for readability</li>
          <li><strong>Color accessibility settings</strong> for visual perception needs</li>
          <li>Assistive <strong>aiming</strong> and <strong>minimap navigation systems</strong></li>
          <li>Designed <strong>usability focused UI architecture</strong></li>
        </ul>

        <h3>Technical Art & Optimization</h3>
        <ul>
          <li><strong>Shader Graph</strong> visual effects and gameplay feedback shaders</li>
          <li>Rendering optimization using <strong>LODs</strong>, <strong>occlusion culling</strong>, and <strong>frustum culling</strong></li>
          <li>Realtime <strong>performance profiling</strong> and tuning</li>
        </ul>

        <h3>Production Context</h3>
        <ul>
          <li>Full <strong>system ownership</strong> from implementation to debugging</li>
          <li>Developed within <strong>collaborative production pipeline</strong></li>
          <li>Focus on <strong>maintainability</strong>, <strong>scalability</strong>, and <strong>runtime efficiency</strong></li>
        </ul>

        <h3>Gameplay Video</h3>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/CrokrCcLVCo"
            title="Gameplay Video"
            allowFullScreen
          />
        </div>

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
