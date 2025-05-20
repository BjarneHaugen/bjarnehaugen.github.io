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
};

const ProjectsList = () => {
  return (
    <div className="projectsList">
      {projects.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id} className="project">
          <div>
            <img src={project.gallery?.[0] || project.photo} alt={project.name} />
            <h3 className="yellowText fontSizeSmall">{project.name}</h3>
            <p className="whiteText fontSizeXSmall">{project.info}</p>
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
