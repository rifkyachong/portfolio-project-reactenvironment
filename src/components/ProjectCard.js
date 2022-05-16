import React from "react";
import { FaGithub, FaYoutube } from "../react-icon";
import "./styles/ProjectCard.scss";

export default function ProjectCard() {
  return (
    <div className="card project-card-container">
      <div className="top-section">
        <div className="thumbnail-container">
          <img src="sampleimg.JPG" />
          <div className="overlay"></div>
          <div className="project-links">
            <a
              href="http://youtu.be/ivhT8GatMLs"
              target={"_blank"}
              style={{ ["--animation-index"]: 0 }}
            >
              <FaYoutube />
            </a>
            <a
              href="https://github.com/rifkyachong/thirty-game-app"
              target={"_blank"}
              style={{ ["--animation-index"]: 1 }}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="project-detail">
        <h3 className="card- title project-title">&lt;Twenty Game App /&gt;</h3>
        <div className="card-text project-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          repellat? Digniss
        </div>
      </div>
      <div className="card-footer project-tech-stack">
        <>asdasda</>
      </div>
    </div>
  );
}
