import React, { useContext, useEffect, useState, Fragment, useLayoutEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';
import './Projects.scss';

const ProjectsList = ({ location }) => {
  const {
    projects,
    getCords,
    cords,
    currentProject,
    handleSetProject,
    windowScrollPosition,
  } = useContext(PortfolioContext);
  const [state, setState] = useState({});
  console.log(location);

  useLayoutEffect(() => {
    if (currentProject.id && location.state && !location.state.prevPath) {
      // window.scrollTo(0, windowScrollPosition);

      setState({
        styles: {
          transform: `translate(${cords.x * -1}px, ${cords.y * -1}px)`,
          width: window.innerWidth > 991 ? '40vw' : '100vw',
          height: window.innerWidth > 991 ? '90vh' : '50vh',
          backgroundColor: currentProject.backgroundColor,
          opacity: '1',
          animationFillMode: 'none',
          animation: 'none',
          transition: `opacity 0ms`,
          marginTop: '90px',
        },
      });
    }
  }, []);

  useEffect(() => {
    if (currentProject.id && location.state && !location.state.prevPath) {
      const timer = setTimeout(() =>
        setState({
          styles: {
            opacity: '1',
            animationFillMode: 'none',
            animation: 'none',
            borderRadius: '30px',
          },
        })
      );
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const handleOnGoingToSubPage = (id) => {
    getCords(id);
    handleSetProject(id);
  };

  return (
    <div className="content-wrapper">
      <div className="projects-container">
        {projects.map((item) => {
          return (
            <div key={item.id} className="list-item ">
              <Link
                style={currentProject.id === item.id ? state.styles : {}}
                to={`/projects/${item.id}`}
                id={item.id}
                onClick={() => handleOnGoingToSubPage(item.id)}
              >
                <img src={item.img_url} alt={item.title} />
                <div className="bg" style={{ backgroundColor: item.backgroundColor }} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
