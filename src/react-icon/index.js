import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const FaCode = (...props) => {
  return <FontAwesomeIcon {...props} icon={faCode} />;
};

export const FaFacebook = (...props) => {
  return <FontAwesomeIcon {...props} icon={faFacebook} />;
};

export const FaGithub = (...props) => {
  return <FontAwesomeIcon {...props} icon={faGithub} />;
};

export const FaHome = (...props) => {
  return <FontAwesomeIcon {...props} icon={faHome} />;
};

export const FaUser = (...props) => {
  return <FontAwesomeIcon {...props} icon={faUser} />;
};

export const FaYoutube = (...props) => {
  return <FontAwesomeIcon {...props} icon={faYoutube} />;
};
