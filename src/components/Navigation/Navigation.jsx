import React, { useEffect, useState } from 'react';

import { Link } from 'gatsby';
import './styles.scss';

import { Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window == 'undefined') return;
    setCurrentUrl(window.location.href);
  });

  const handleOnClick = (e) => {
    let targetRadio = document.getElementById(e.target.getAttribute('data-tag'));
    targetRadio.click();
  };

  return (
    <div className="nav-wrapper">
      <Navbar expand="lg">
        <input type="radio" name="tab" id="home" defaultChecked />
        <input type="radio" name="tab" id="projects" />
        <input type="radio" name="tab" id="contact" />
        {/* <input type="radio" name="tab" id="heart" />
        <input type="radio" name="tab" id="about" /> */}

        <Link
          to={'/'}
          className="home"
          data-tag="home"
          onClick={(e) => handleOnClick(e)}
          state={{ prevPath: currentUrl }}
        >
          Home
        </Link>

        <Link
          to={'/projects'}
          className="projects"
          data-tag="projects"
          onClick={(e) => handleOnClick(e)}
          state={{ prevPath: currentUrl }}
        >
          Projects
        </Link>

        <Link
          to={'/contact'}
          className="contact"
          data-tag="contact"
          onClick={(e) => handleOnClick(e)}
          state={{ prevPath: currentUrl }}
        >
          Contact
        </Link>

        {/* <Link to={'/projects'} className="hear" data-tag="heart" onClick={(e) => handleOnClick(e)}>
          Heart
        </Link>

        <Link to={'/contact'} className="about" data-tag="about" onClick={(e) => handleOnClick(e)}>
          About
        </Link> */}
        <div className="tab"></div>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
