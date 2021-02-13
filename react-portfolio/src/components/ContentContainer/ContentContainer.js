import React, { useContext } from 'react';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contect';

import { PageContext } from '../../page/Page';

const ContentContainer = function () {
  const { page } = useContext(PageContext);

  const pageTitle = function () {
    let title = '';

    switch (page) {
      case 'About':
        title = "Parth's Profile";
        break;
      case 'portfolio':
        title = 'Project Portfolio';
        break;
      case 'contact':
        title = 'Contact Me';
        break;
      default:
        title = '';
    }
    return title;
  };

  return (
    <div className="container content-container mb-5">
      <div className="row w-100">
        <div className="col-0 col-sm-1 col-xl-2"></div>
        <div className="col-12 col-sm-10 col-xl-8 content">
          <div className="row content-title mb-3">
            <div className="col-12">
              <h2>{pageTitle()}</h2>
            </div>
          </div>
          {page === 'About' ? <About /> : ''}
          {page === 'portfolio' ? <Portfolio /> : ''}
          {page === 'contact' ? <Contact /> : ''}
        </div>
        <div className="col-0 col-sm-1 col-xl-2"></div>
      </div>
    </div>
  );
};

export default ContentContainer;
