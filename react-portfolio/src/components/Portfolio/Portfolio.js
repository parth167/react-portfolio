import React from 'react';
import projects from '../../assets/projects.json';
import Project from '../Project/Project';

const Portfolio = function () {
  const projectList = projects.map((project) => {
    return (
      <Project
        id={project.id}
        title={project.title}
        group={project.group}
        github={project.github}
        deployed={project.deployed}
        screenshot={project.screenshot}
        description={project.description}
        tech={project.tech}
        key={project.id.toString()}
      />
    );
  });

  return (
    <div className="row content-body">
      <div className="col-12">{projectList}</div>
    </div>
  );
};

export default Portfolio;
