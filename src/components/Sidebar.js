import React from "react";
import CustomAnimatedLink from "./CustomAnimatedLink";
import { pages } from "../links/pages";
import "./styles/Sidebar.css";

export default function Sidebar() {
  console.log("sidebar rendered!");

  return (
    <div className="sidebar-container d-flex flex-column justify-content-between p-2">
      <div className="context-setting">Cont</div>
      <li className="page-links d-flex flex-column">
        {pages.map((page) => (
          <CustomAnimatedLink {...page} />
        ))}
      </li>
      <div className="social-links">Social</div>
    </div>
  );
}
