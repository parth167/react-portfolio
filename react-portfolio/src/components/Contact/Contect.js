import React from 'react';
import Resume from '../../assets/images/resume.pdf';
import git from './github-128.png';
import link from './square-linkedin-128.png';
import email from './email.png';
import cv from './cv_PNG44.png';

const Contact = function () {
  return (
    <div className="row content-body">
      <div className="col-12">
        <p>
          My Contect Detail{' '}
          <a href="mailto:parthpatel167@gmail.com">
            <img className="icon" src={email} alt="Email" />
          </a>
          <a href="https://github.com/parth167">
            <img className="icon" src={git} alt="GitHub Profile" />
          </a>
          <a href="https://www.linkedin.com/in/parth-patel-4725381b5/ ">
            <img className="icon" src={link} alt="LinkedIn Profile" />
          </a>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <img className="icon" src={cv} alt="Resume" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
