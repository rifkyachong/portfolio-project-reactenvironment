import React from "react";
import CustomAnimatedMultilineText from "../components/CustomAnimatedText";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  console.log("open project page");

  return (
    <div className="page-container" id="project-page">
      <CustomAnimatedMultilineText>
        <h2>My Project</h2>
      </CustomAnimatedMultilineText>
      <ProjectCard />
    </div>
  );
}
