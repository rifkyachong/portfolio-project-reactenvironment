import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "../react-icon";

import "./styles/CustomAnimatedLink.scss";

export default function CustomAnimatedLink() {
  return (
    <Link to="/">
      <ul className="custom-animated-link" id="home-link">
        <FaHome />
        <p>Home</p>
      </ul>
    </Link>
  );
}
