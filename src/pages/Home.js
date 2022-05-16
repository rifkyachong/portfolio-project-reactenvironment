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
      <p>This portfolio project is still in development</p>
      <p>
        It will be certainly a great portfolio with a advanced animation sass
        and css animation library
      </p>
      <p>
        It uses create-react-app only in developement mode, but I will configure
        webpack in production to reduce memory size
      </p>
    </div>
  );
}
