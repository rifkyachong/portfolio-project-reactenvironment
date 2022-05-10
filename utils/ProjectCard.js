import React from "react";
import sampleImg from "./sampleimg.jpeg";

export default function ProjectCard() {
  return (
    <div className="card card-continer">
      <img className="card-img-top" src={sampleImg} />
      <div className="card-body">
        <h3 className="card-title">Twenty Game App</h3>
        <div className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias
          quos inventore, iste recusandae beatae et iure voluptas dolorum a
          maxime sapiente ut molestiae fugiat asperiores commodi dignissimos
          aperiam? Rem.
        </div>
      </div>
    </div>
  );
}
