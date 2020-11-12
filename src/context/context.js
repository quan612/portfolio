import React, { useState, useEffect, useLayoutEffect } from 'react';
import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

const PortfolioContext = React.createContext({ projects: [] });

const PortfolioProvider = ({ children }) => {
  const [hero, setHero] = useState(heroData);
  const [about, setAbout] = useState(aboutData);
  const [projects, setProjects] = useState([...projectsData]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState(footerData);
  const [cords, setCords] = useState({});
  const [currentProject, setCurrentProject] = useState({
    id: '',
    source: '',
    title: '',
    info: '',
    backgroundColor: '#2D3E51',
    learning_curves: [],
    stacks: [],
    laptop: '',
    phone: '',
    windowScrollPosition: 0,
  });

  const getCords = (id) => {
    setCords(document.getElementById(id).getBoundingClientRect());
    setCurrentProject({ windowScrollPosition: window.scrollY });
  };

  const handleSetProject = (id) => {
    const thisProject = projects.find((project) => project.id === id);
    setCurrentProject({ ...thisProject });
  };

  return (
    <PortfolioContext.Provider
      value={{
        hero,
        about,
        projects,
        contact,
        footer,
        getCords,
        cords,
        handleSetProject,
        currentProject,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
export { PortfolioProvider };
