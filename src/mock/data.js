import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Quan Huynh',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'tennis.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: 'jira',
    img_url: '/jira-transparent.gif',
    title: 'Project Management',
    info:
      'A Jira-clone full stack web application that user can create issues and sub-tasks within project.',

    url: 'https://jira-client-prod.herokuapp.com/',
    source: 'https://github.com/quan612/IssueManagement',
    features: [
      'Easy to understand project structure with separated client and server side.',
      'Written in modern React, functional components with latest hooks api.',
      'Various custom UI elements that are reusable across the site.',
      'Drag and drop items.',
    ],
    backgroundColor: '#d2e8f2',
    stacks: [
      { name: 'react', icon: '/react.svg' },
      { name: 'graphql', icon: '/graphql.svg' },
      { name: 'react-apollo', icon: '/apollo-graphql.svg' },
    ],
    laptop: '/jira-laptop.png',
    phone: '/jira-phone.png',
  },
  {
    id: 'testlink',
    img_url: '/project-management.png',
    title: 'Test Link Simulation',
    info:
      'My first React application when I tried to learn web development to tailor my skill as a tester. I was thinking to learn unit test with mocha and chai, but I ended up building this application. It has a lot of flaws but I decided to have it as a lesson.',

    url: 'http://test-link-react.herokuapp.com/',
    source: 'https://github.com/quan612/TestLinkSimulation',
    features: [
      'React using hooks API',
      'Simple state management with Redux thunk.',
      'Using a 3rd party API from testlink',
    ],
    backgroundColor: '#989EAC',
    stacks: [
      { name: 'react', icon: '/react.svg' },
      { name: 'redux', icon: '/redux.svg' },
    ],
    laptop: '',
    phone: '',
  },
  {
    id: 'selenium',
    img_url: '/test-automation.gif',
    title: 'Selenium test automation',
    info:
      'A simple Selenium project to demonstrate building test automation following Page Object Models and Factory Pattern. ',
    info2: '',
    url: '',
    source: 'https://github.com/quan612/TestPlaneTicket',
    backgroundColor: '#9bc6ba',
    stacks: [{ name: 'java', icon: '/java.svg' }],
    laptop: '',
    phone: '',
  },

  {
    id: 'rental',
    img_url: '/rental.gif',
    title: 'Rent Booking Application',
    info: 'Work in progress - Rental booking application built with Angular, NodeJS and MongoDb',
    info2: '',
    url: '',
    repo: '',
    backgroundColor: '#d64e00',
    laptop: '',
    phone: '',
  },
  {
    id: 'portfolio',
    img_url: '/portfolio.webp',
    title: 'This portfolio',
    info: 'Built with Gatsby, React, and Frame Motion',
    info2: '',
    url: '',
    source: 'https://github.com/quan612/rental-booking-angular',
    repo: '',
    backgroundColor: '#FFD1DC',
    laptop: '',
    phone: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/quan-huynh-83604ba3/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/quan612',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
