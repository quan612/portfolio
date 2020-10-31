import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

import './About.scss';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div id="about">
      <div className="flex-wrapper about-content">
        <div className="flex-item">
          <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="about-wrapper__image">
              <AboutImg filename={img} />
            </div>
          </Fade>
        </div>
        <div className="flex-item">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="about-content__info">
              <p className="about-content__info-text">
                {paragraphOne ||
                  'I am Quan, a software technical analyst working for Global Affinity on their debt collection products in Toronto, Canada.'}
              </p>
              <p className="about-content__info-text">
                {paragraphTwo ||
                  'I have spent the last 5 years working across different areas in software development, including but not limited to quality assurance, quality control process, to code review, building test automation from scratch.'}
              </p>
              <p className="about-content__info-text">
                {paragraphThree ||
                  'Out of the office, you can find me coaching tennis for junior students, playing tennis tournament, and reading technical documents.'}
              </p>
              {/* {resume && (
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                  >
                    Resume
                  </a>
                </span>
              )} */}
            </div>
          </Fade>
        </div>
      </div>
      <div className="social-links">
        {networks &&
          networks.map((network) => {
            const { id, name, url } = network;
            return (
              <a
                key={id}
                href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={name}
              >
                <i className={`fa fa-${name || 'refresh'} `} />
              </a>
            );
          })}
      </div>
      <div className="footer-wrapper">
        <div className="wave-wrapper">
          <div className="wave-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-wave"
              viewBox="0 0 800 338.05"
              preserveAspectRatio="none"
            >
              <path>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                ></animate>
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
