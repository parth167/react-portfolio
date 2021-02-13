import React from 'react';

const Project = function ({
  id,
  title,
  group,
  github,
  deployed,
  screenshot,
  description,
  tech,
}) {
  const cardId = 'project' + id.toString();

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>

      <img src={screenshot} className="card-img-top" alt="screenshot" />
      <div className="card-body">
        <h4>{group ? 'Group' : 'Individual'} project</h4>
        <h4>GitHub: </h4>
        <a href={github} alt="GitHub url">
          {github}
        </a>
        <h4>Deployed app: </h4>
        <a href={deployed} alt="deployed url">
          {deployed}
        </a>
        <h4>Technologies used:</h4> {tech}
        <hr />
      </div>
    </>
  );
};

export default Project;
