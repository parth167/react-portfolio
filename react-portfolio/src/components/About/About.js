import React from 'react';
import pic from './PPATEL.JPG';
import git from './github-128.png';
import link from './square-linkedin-128.png';
import email from './email.png';
function About() {
  return (
    <div className="row content-container">
      <div className="col-12 ">
        <img
          className="float-left mr-4 MyPicture rounded"
          src={pic}
          alt="parth"
        />
        <p>
          My name is Parth Patel. I am a new web developer trained in producing
          full-stack web applications, from front-end HTML, CSS and Javascript
          to Express server and databases.
        </p>
        <p>
          I have a B.E. from University of pune India in Electronics and
          Telecommunication Engennering. After so many up and down, I realized
          that Electronics and Telecommunication is not good for me.so i decide
          to change my field to codeing.
        </p>
        <p>
          Start my coding journey by enrolling in a coding bootcamp through the
          University of Kansas. During this bootcamp I've had exposure to HTML,
          CSS and JavaScript. The program so far has given me a foundation for
          web development. Because of that you are looking my portfolio.
          Hopefully after 6 months of writing code intensely, I can take the
          next steps to slowly transition into this field!.
        </p>
        <p>
          My Contect Detail{' '}
          <a href="mailto:parthpatel167@gmail.com">
            <img className="icon" src={email} alt="GitHub Profile" />
          </a>
          <a href="https://github.com/parth167">
            <img className="icon" src={git} alt="GitHub Profile" />
          </a>
          <a href="https://www.linkedin.com/in/parth-patel-4725381b5/ ">
            <img className="icon" src={link} alt="LinkedIn Profile" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
