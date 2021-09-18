import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agung Tri Atidhira | Data Specialist', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Agung Tri Atidhira',
  subtitle: 'I love coding and working with data',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Seorang software engineer yang sangat senang mendalami dunia data science.',
  paragraphTwo:
    'Lulus sebagai sarjana akuntansi dan pernah bekerja sebagai auditor di salah satu akuntan publik big 4.',
  paragraphThree:
    'Memiliki motto untuk menjadi pembelajar seumur hidup dan memberi manfaat seluas mungkin.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Data Visualization Dashboard with Shiny',
    info: 'Creating shiny dashboard to visualize and analyze Youtube Indonesia trending videos data.',
    info2: '',
    url: 'https://atidhira.shinyapps.io/YouTube_Indonesia_Trending_Videos/',
    repo: 'https://github.com/agungatd', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Diabetes Prediction',
    info: 'lorem iopsom',
    info2: '',
    url: 'https://rpubs.com/agungatd/LBB_classification',
    repo: 'https://github.com/agungatd', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Analysis and Prediction of Medical Insurance Charges',
    info: 'lorem ipsum',
    info2: '',
    url: 'https://rpubs.com/agungatd/LBB_LR',
    repo: 'https://github.com/agungatd', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's Connect and Talk",
  email: 'https://www.linkedin.com/in/agung-atidhira-6b498877/',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:agungatidhira@gmail.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agung-atidhira-6b498877/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/agungatd',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
