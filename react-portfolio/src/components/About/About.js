import React from 'react';
import pic from './PPATEL.JPG';

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
      </div>
    </div>
  );
}

export default About;
