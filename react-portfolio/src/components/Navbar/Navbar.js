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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1>Parth Patel</h1>

      <ul className="navbar-nav ml-auto">
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
    </nav>
  );
};

export default Navbar;
