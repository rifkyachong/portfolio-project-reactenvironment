import React from "react";
import { Link } from "react-router-dom";

import "./styles/CustomAnimatedLink.scss";

export default function CustomAnimatedLink({ url, name, icon }) {
  return (
    <Link to={url}>
      <ul className="custom-animated-link" id={`${name}-link`}>
        {icon}
        <p>{name}</p>
      </ul>
    </Link>
  );
}
