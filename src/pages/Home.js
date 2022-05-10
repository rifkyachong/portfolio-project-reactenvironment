import React from "react";
import "./styles/Home.scss";
import CustomAnimatedMultilineText from "../components/CustomAnimatedText";

export default function Home() {
  return (
    <div className="page-container" id="home-page">
      <CustomAnimatedMultilineText>
        <h1>Hi! I'm Rifky</h1>
        <h2>Web Developer</h2>
      </CustomAnimatedMultilineText>
    </div>
  );
}
