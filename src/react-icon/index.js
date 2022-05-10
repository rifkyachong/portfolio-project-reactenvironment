import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const FaFacebook = (...props) => {
  return <FontAwesomeIcon {...props} icon={faFacebook} />;
};
