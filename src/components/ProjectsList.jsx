import React from "react";
import { Link } from "react-router-dom";
import projects from "../projects.json";

// You may want to use icons for symbols, but for now we'll just render the symbol names
const symbolIcons = {
  react: "/react.svg", // Replace with actual icon paths
  vite: "/vite.svg",
  css3: "/css3.svg",
  html5: "/html5.svg",
  nodejs: "/nodejs.svg",
  javascript: "/javascript.svg",
};

const ProjectsList = () => {
  return (
    <div className="projectsList">
      {projects.map((project, idx) => (
        <Link to={`/project${idx + 1}`} key={project.name} className="project">
          <div>
            <img src={project.photo} alt={project.name} />
            <h3 className="yellowText">{project.name}</h3>
            <p className="whiteText">{project.info}</p>
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
