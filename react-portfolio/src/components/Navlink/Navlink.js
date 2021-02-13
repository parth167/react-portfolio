import React from 'react';

const Navlink = function ({ text, handleClick, active }) {
  return (
    <li className="nav-item">
      <a
        className={active ? 'nav-link active' : 'nav-link'}
        onClick={handleClick}
        href="https://www.google.com"
      >
        {text}
      </a>
    </li>
  );
};

export default Navlink;
