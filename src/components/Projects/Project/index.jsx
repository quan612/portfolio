import React, { useContext, useEffect, useState, useLayoutEffect } from 'react';
import PortfolioContext from '../../../context/context';

import './styles.scss';
import SVG from './svg';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';

const Project = (props) => {
  const { cords, currentProject, handleSetProject, projects } = useContext(PortfolioContext);

  const [state, setState] = useState({
    styles: {
      backgroundColor: currentProject.backgroundColor,
      transform: `translate(${cords.x}px, ${cords.y}px)`,
      maxWidth: `${cords.width}px`,
      height: `${cords.height}px`,
      borderRadius: '30px',
    },
  });

  useLayoutEffect(() => {
    if (currentProject.id === '') handleSetProject('jira');
  }, []);

  useEffect(() => {
    // if (currentProject === {}) handleSetProject('jira');
    const timer = setTimeout(() => {
      const styles = {
        backgroundColor: currentProject.backgroundColor,
      };

      setState({ styles });
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="content-wrapper">
      <div className="details">
        <div className="details-container">
          <div className="img-wrapper" style={state.styles}>
            <div className="devices">
              {currentProject.laptop === '' && (
                <div className="device device__laptop">
                  <img
                    src={currentProject.img_url}
                    alt="Laptop Showing example Application we build in the course"
                  />
                </div>
              )}

              {currentProject.laptop && currentProject.laptop !== '' && (
                <div className="device device__laptop">
                  <img
                    src="/laptop.png"
                    alt="Laptop Showing example Application we build in the course"
                  />
                  <img
                    className="within-laptop"
                    src={currentProject.laptop}
                    alt="Laptop Showing example Application we build in the course"
                  />

                  {/* <video
                  playsinline=""
                  poster="https://res.cloudinary.com/wesbos/image/upload/f_auto,q_auto/v1539136514/ARG/poster-desktop.png"
                  src="https://player.vimeo.com/external/293411180.sd.mp4?s=80085aa3bbdb99ce97c951f886269255746eeb00&amp;profile_id=165"
                  muted=""
                  autoplay=""
                  loop=""
                ></video> */}
                </div>
              )}

              {currentProject.phone && currentProject.phone !== '' && (
                <div className="device device__phone">
                  <img
                    src="/phone.png"
                    alt="iPhone Showing example Application we build in the course"
                  />

                  <img
                    className="within-phone"
                    src={currentProject.phone}
                    alt="Laptop Showing example Application we build in the course"
                  />
                  {/* <video
                  playsinline=""
                  poster="https://res.cloudinary.com/wesbos/image/upload/f_auto,q_auto/v1539136512/ARG/poster-mobile.png"
                  src="https://player.vimeo.com/external/294362989.sd.mp4?s=ec0c0d2ef616dcefaeb1628db7022db7bbedf3de&amp;profile_id=165"
                  muted=""
                  autoplay=""
                  loop=""
                ></video> */}
                </div>
              )}
            </div>
          </div>
          <div className="details">
            <Link className="back" to={`/projects`}>
              Going Back
            </Link>

            <div className="detail-box">
              <h2>{currentProject.title}</h2>
              <p>{currentProject.info}</p>
            </div>

            {currentProject.url !== '' && (
              <div className="detail-box">
                <h3>Demo</h3>
                <a href={currentProject.url}>{currentProject.url}</a>
              </div>
            )}

            {currentProject.source && currentProject.source !== '' && (
              <div className="detail-box">
                <h3>Source</h3>
                <a href={currentProject.source}>{currentProject.source}</a>
              </div>
            )}

            {currentProject.features && currentProject.features.length > 0 && (
              <div className="detail-box">
                <h3>Features</h3>
                <ul>
                  {currentProject.features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <p>{feature}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {currentProject.stacks && currentProject.stacks.length > 0 && (
              <div className="detail-box">
                <h3>Stacks</h3>
                <ul className="stack-container">
                  {currentProject.stacks.map((stack, index) => {
                    return (
                      <div className={'stack'} key={index}>
                        <SVG icon={stack.icon} name={stack.name} width="10rem" left="1%" top="2%" />
                      </div>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
