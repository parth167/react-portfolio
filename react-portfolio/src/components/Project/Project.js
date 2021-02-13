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
        <p className="card-text">
          <h4>{group ? 'Group' : 'Individual'} project</h4>
        </p>
        <p className="card-text">
          <h4>GitHub: </h4>
          <a href={github} alt="GitHub url">
            {github}
          </a>
        </p>
        <p className="card-text">
          <h4>Deployed app: </h4>
          <a href={deployed} alt="deployed url">
            {deployed}
          </a>
        </p>
        <p className="card-text">
          <h4>Technologies used:</h4> {tech}
        </p>
        <hr />
      </div>
    </>
  );
};

export default Project;
