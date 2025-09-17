import React from "react";
import { Link } from "react-router-dom";
import projects from "../projects.json";

const symbolIcons = {
  react: "/react.svg",
  vite: "/vite.svg",
  css3: "/css3.svg",
  html5: "/html5.svg",
  nodejs: "/nodejs.svg",
  javascript: "/javascript.svg",
  github: "/github.svg",
  godot: "/godot.svg",
};

const ProjectsList = () => {
  return (
    <div className="projectsList">
      {projects.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id} className="project">
          <div>
            <img className="projectPhotos" src={project.photo || "/default-photo.png"} alt={project.name} />
            <h3 className="yellowText fontRajdhani">{project.name}</h3>
            <p className="whiteText fontRajdhani">{project.info}</p>
            <div className="symbols">
              {project.symbols.map((symbol) => (
                <img
                  key={symbol}
                  src={symbolIcons[symbol] || "/vite.svg"}
                  alt={symbol}
                  title={symbol}
                  style={{ width: 24, height: 24, marginRight: 4 }}
                />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsList;
