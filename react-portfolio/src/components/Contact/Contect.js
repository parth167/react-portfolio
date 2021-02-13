import React from 'react';
import Resume from '../../assets/images/resume.pdf';

const Contact = function () {
  return (
    <div className="row content-body">
      <div className="col-12">
        <p>
          My email address is{' '}
          <a href="mailto:parthpatel167@gmail.com">parthpatel167@gmail.com</a>
        </p>
        <p>
          My GitHub can be found at{' '}
          <a href="https://github.com/parth167">https://github.com/parth167</a>
        </p>
        <p>
          My LinkedIn can be found at{' '}
          <a href="https://www.linkedin.com/in/parth-patel-4725381b5/ ">
            https://www.linkedin.com/in/parth-patel-4725381b5/
          </a>
        </p>
        <p>
          Click{' '}
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            here
          </a>{' '}
          to view my resume
        </p>
      </div>
    </div>
  );
};

export default Contact;
