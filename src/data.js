const techIconsData = {
  angular: {
    imgSrc: 'img/angular.svg',
    imgAlt: 'Angular logo',
    name: 'Angular'
  },
  bootstrap: {
    imgSrc: 'img/bootstrap.svg',
    imgAlt: 'Bootstrap logo',
    name: 'Bootstrap'
  },
  cypress: {
    imgSrc: 'img/cypress.svg',
    imgAlt: 'Cypress logo',
    name: 'Cypress'
  },
  docker: {
    imgSrc: 'img/docker.svg',
    imgAlt: 'Docker logo',
    name: 'Docker'
  },
  firebase: {
    imgSrc: 'img/firebase.svg',
    imgAlt: 'Firebase logo',
    name: 'Firebase'
  },
  javascript: {
    imgSrc: 'img/javascript.svg',
    imgAlt: 'JavaScript logo',
    name: 'JavaScript'
  },
  kubernetes: {
    imgSrc: 'img/kubernetes.svg',
    imgAlt: 'Kubernetes logo',
    name: 'Kubernetes'
  },
  nodejs: {
    imgSrc: 'img/nodejs.svg',
    imgAlt: 'Node.js logo',
    name: 'Node.js'
  },
  react: {
    imgSrc: 'img/react.svg',
    imgAlt: 'React logo',
    name: 'React'
  },
  svelte: {
    imgSrc: 'img/svelte.svg',
    imgAlt: 'Svelte logo',
    name: 'Svelte'
  },
  tailwindcss: {
    imgSrc: 'img/tailwindcss.svg',
    imgAlt: 'Tailwind CSS logo',
    name: 'Tailwind CSS'
  },
  typescript: {
    imgSrc: 'img/typescript.svg',
    imgAlt: 'TypeScript logo',
    name: 'TypeScript'
  }
};

export const projects = [
  {
    name: 'EddieBot',
    imageSrc: 'https://user-images.githubusercontent.com/624760/91444835-3797dc80-e86d-11ea-8dfa-d7993a4d382d.png',
    description: 'Discord bot for EddieHub\'s Discord server.',
    link: 'https://github.com/EddieHubCommunity/EddieBot',
    techList: [
      techIconsData.typescript,
      techIconsData.docker
    ]
  },
  {
    name: 'LiveStream GitOps Demo',
    imageSrc: 'https://user-images.githubusercontent.com/624760/91444606-e687e880-e86c-11ea-9001-522fc212c7c5.png',
    description: 'GitOps live stream repo for EddieBot',
    link: 'https://github.com/EddieHubCommunity/LiveStream-GitOps-Demo',
    techList: [
      techIconsData.javascript,
      techIconsData.nodejs,
      techIconsData.docker,
      techIconsData.kubernetes
    ]
  },
  {
    name: 'EddieBot Map',
    imageSrc: 'https://user-images.githubusercontent.com/624760/91445888-9f9af280-e86e-11ea-8180-9198953bc33d.png',
    description: 'Live streaming background with a map and maybe more ...',
    link: 'https://github.com/EddieHubCommunity/EddieBotLive',
    techList: [
      techIconsData.javascript,
      techIconsData.angular,
      techIconsData.firebase
    ]
  },
  {
    name: 'EddieHub Community website',
    imageSrc: 'https://user-images.githubusercontent.com/624760/91445058-83e31c80-e86d-11ea-8243-3ca11b384d40.png',
    description: 'Information about our community',
    link: 'https://github.com/EddieHubCommunity/EddieHubCommunity.github.io',
    techList: [
      techIconsData.javascript,
      techIconsData.svelte,
      techIconsData.tailwindcss,
      techIconsData.cypress
    ]
  },
  {
    name: 'Support',
    imageSrc: 'https://user-images.githubusercontent.com/624760/91445509-1d123300-e86e-11ea-9648-c5c715355f26.png',
    description: 'Community Help & Support and AEA (Ask Everyone Anything)',
    link: 'https://github.com/EddieHubCommunity/support',
  },
  {
    name: 'EddieBot UI',
    imageSrc: 'https://user-images.githubusercontent.com/624760/91444606-e687e880-e86c-11ea-9001-522fc212c7c5.png',
    description: 'EddieBotUI is the front end application that shows EddieHub Discord Community\'s public stats.',
    link: 'https://github.com/EddieHubCommunity/EddieBotUI',
    techList: [
      techIconsData.javascript,
      techIconsData.react,
      techIconsData.bootstrap
    ]
  },
  {
    name: 'Awesome GitHub Profiles',
    imageSrc: 'https://user-images.githubusercontent.com/624760/91445261-cefd2f80-e86d-11ea-8421-4553b29d2e4a.png',
    description: 'List of GitHub profiles that have awesome customization, that you can use for inspiration',
    link: 'https://github.com/EddieHubCommunity/awesome-github-profiles',
  },
  {
    name: 'Hacktoberfest practice',
    imageSrc: 'https://user-images.githubusercontent.com/624760/91445718-61053800-e86e-11ea-81c7-751328c63e85.png',
    description: 'Repo for you to raise a Pull Request for practice',
    link: 'https://github.com/EddieHubCommunity/hacktoberfest-practice',
  },
];

export const badges = {
  community: {
    title: 'Community',
    classes: 'bg-yellow-400 text-black',
  },
  serverBooster: {
    title: 'Server Booster',
    classes: 'bg-purple-400 text-white',
  },
  python: {
    title: 'Python',
    classes: 'bg-green-400 text-white',
  },
  opensource: {
    title: 'Opensource',
    classes: 'bg-green-400 text-white',
  },
  cat: {
    title: 'Cat Lover',
    classes: 'bg-orange-200',
  },
};

export const moderators = [
  {
    name: 'Stephen Mount',
    description: 'After 10+ years in software engineering, I am coming up with ideas and things to reverse engineer things for the new wave of ARM etc etc',
    website: 'https://ste.london/',
    imageSrc: 'https://avatars1.githubusercontent.com/u/150512',
    github: 'stemount',
    badges: ['community', 'serverBooster'],
  },
  {
    name: 'Michael Mba',
    description: 'Linux Systems Integrator | Open Source Enthusiast | Photographer | Gamer || Starting my Python journey.',
    website: 'https://mikeysan.hashnode.dev/',
    imageSrc: 'https://avatars0.githubusercontent.com/u/13338176?s=460&u=d66a31344752bb3fa882a59b3effb10e084f226c&v=4',
    github: 'mikeysan',
    badges: ['community', 'python'],
  },
  {
    name: 'Praveen Kumar Purushothaman',
    description: 'Microsoft MVP, Web Developer and Computer Software & UX Architect. Mentor - Full Stack @Thinkful-Ed.',
    website: 'https://praveen.science/',
    imageSrc: 'https://i.imgur.com/XdP5iyp.png',
    github: 'praveenscience',
    badges: ['community', 'cat'],
  },
  {
    name: 'David',
    description: 'Job: Software Developer Consultant I love programming, more specifically w/ Kotlin... it\'s just the best. Very interested in Web Dev and building discord bots',
    website: 'https://bolt04.github.io/react-ultimate-resume/',
    imageSrc: 'https://avatars1.githubusercontent.com/u/18630253?s=460&u=36cdb692666236ff5db7aa3c71e58327bdbdecc7&v=4',
    github: 'BOLT04',
    badges: ['community'],
  },
  {
    name: 'Eddie Jaoude',
    description: 'Fullstack open source DevRel! I love code and the community :). GitHub Star ⭐ program 🤓',
    website: 'http://youtube.com/eddiejaoude?sub_confirmation=1',
    imageSrc: 'https://avatars3.githubusercontent.com/u/624760?s=460&v=4',
    github: 'eddiejaoude',
    badges: ['community', 'opensource'],
  },
  {
    name: 'Petra',
    description: 'Linux and blockchain. Looking for ways to change the world.',
    website: 'https://metaverde.github.io/',
    imageSrc: 'https://avatars1.githubusercontent.com/u/32101027?s=460&u=a3204811c6965f28996b6bcd36bdc800216d5dfe&v=4',
    github: 'metaverde',
    badges: ['community'],
  },
  {
    name: 'Amandine Flachs',
    description: '',
    website: 'https://www.flachsconsulting.com/',
    imageSrc: 'https://avatars0.githubusercontent.com/u/29413522?s=460&v=4',
    github: 'AmandineFlachs',
    badges: ['community'],
  },
  {
    name: 'Allan Regush',
    description: 'Passionate about all things hardware and software. I consider myself a jack of all trades - a master of some.',
    website: '',
    imageSrc: 'https://avatars.githubusercontent.com/u/17693494?s=400&u=5cfa4838b83a0d239c097026fbbae302611d2ccb&v=4',
    github: 'AllanRegush',
    badges: ['community'],
  },
  {
    name:'Nicholas Carrigan',
    description:'Developer @freecodecamp',
    website:'https://www.nhcarrigan.com',
    imageSrc:'https://avatars.githubusercontent.com/u/63889819?s=400&u=9dab24c783a82afce97cfe6438f242e6df641243&v=4',
    github:'nhcarrigan',
    badges:['community']
  }
];

export const footerData = [
  {
    text: 'YouTube',
    i: 'fab fa-youtube-square',
    link: 'https://youtube.com/eddiejaoude?sub_confirmation=1'
  },
  {
    text: 'GitHub',
    i: 'fab fa-github-square',
    link: 'https://github.com/EddieHubCommunity'
  },
  {
    text: 'Discord',
    i: 'fab fa-discord',
    link: 'http://discord.eddiehub.org'
  }
];
