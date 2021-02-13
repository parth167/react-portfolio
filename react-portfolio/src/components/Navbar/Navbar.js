import React, { useContext } from 'react';
import Navlink from '../Navlink/Navlink';
import { PageContext } from '../../page/Page';

const Navbar = function () {
  const { page, setPage } = useContext(PageContext);

  const clickHandler = function (link, event) {
    event.preventDefault();
    setPage(link);
  };

  return (
    <nav className="navbarnavbar-expand-lg navbar-dark bg-dark">
      <div className="container navbar-container mx-0">
        <div className="row w-100">
          <div className="col-4 col-sm-3 col-xl-2 text-center navbar-name">
            <h1>Parth Patel</h1>
          </div>
          <div className="col-1 col-sm-4 col-xl-6"></div>
          <div className="col-7 col-sm-5 col-xl-4 navbar-links">
            <ul className="nav nav-tabs justify-content-end">
              <Navlink
                text="About"
                handleClick={(event) => {
                  clickHandler('About', event);
                }}
                active={page === 'About'}
              />
              <Navlink
                text="Portfolio"
                handleClick={(event) => {
                  clickHandler('portfolio', event);
                }}
                active={page === 'portfolio'}
              />
              <Navlink
                text="Contact"
                handleClick={(event) => {
                  clickHandler('contact', event);
                }}
                active={page === 'contact'}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
