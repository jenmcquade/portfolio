import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jen McQuade', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jen McQuade',
  subtitle: 'I\'m a Full Stack Web Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'clover.jpg',
  paragraphOne: `I'm a Full Stack Web developer with a decade of experience building unique, branded Web sites and promotional emails in high-volume, fast-paced software sprints.`,
  paragraphTwo: `I have over five years of experience using JavaScript and PHP in Content Management Systems like Drupal and WordPress. Some of this work has included implementing large production site migrations, constructing campaign landing pages and single page applications, and custom module development.`,
  paragraphThree: `I also love Podcasting and writing, continued education, and playing guitar.`,
  resume: 'jen-mcquade-frontend.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cube.jpg',
    video: 'cube',
    title: 'Instagram Cube',
    info: 'This is a ReactJS and Redux demonstration project with Instagram integration.',
    info2: `It uses the NPM package 'styled-components' to create three dimensional styles and animations. A React component calls to an Amazon Gateway in order to proxy Instagram's graphql services. Redux is used to maintain the state of styles and history of menu actions.`,
    url: 'https://cube.jmcquade.com',
    repo: 'https://github.com/jenmcquade/rubix-demos', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'eks.jpg',
    title: 'Evil Kitteh Studios',
    info: 'A custom WordPress theme built in mid-2018 for Sean Hall, a local comic artist.',
    info2: 'The site uses a mobile-optimized template with a customized backend for publishing. The theme\'s design was created by me, using assets provided by Sean.',
    url: 'https://www.evilkittehstudios.com',
  },
  {
    id: nanoid(),
    img: 'mount-angel-abbey.jpg',
    title: 'Mount Angel Abbey',
    info: 'A custom WordPress theme developed under contract for SiteCrafting, Tacoma, WA.',
    info2: 'This responsive theme was built in January, 2019, using SiteCrafting\'s custom frontend and backend tools. Design was provided by the client.',
    url: 'https://www.mountangelabbey.com',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Ready to build great things together?',
  btn: 'Send',
  email: 'jen.k.mcquade@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'http://twitter.com/mcquadejen',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/JenMcQuade',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jenmcquade',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
