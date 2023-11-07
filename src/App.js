import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

const config = {
  github: {
    username: 'rakibh07', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 15, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'dmrakib',
    twitter: '',
    facebook: 'dmrakibh',
    instagram: '',
    dribbble: '',
    behance: 'devbuckets',
    medium: '',
    dev: '',
    stackoverflow: '6074117/rakib-hossain', // format: userid/username
    skype: 'rakib.hossain.jlk',
    website: 'https://rakibh.xyz',
    phone: '+8801767838719',
    Whatsaap: '+8801767838719',
    email: 'dmrakib.jlk@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'MySQL',
    'Git',
    'PHPUnit',
    'HTML',
    'CSS',
    'Ajax',
    'Bootstrap',
    'Flex, Grid, Media Query',
    'Wordpress',
    'WP Plugins',
  ],
  experiences: [
    {
      company: 'Future Trak BD',
      position: 'Web Developer',
      from: 'May 20222',
      to: ' September,2023',
      companyLink: 'https://furutretrackbd.com',
    },
    {
      company: 'Weblink Communication',
      position: 'Wordpress Developer',
      from: 'Januyary 2020',
      to: 'April 2022',
      companyLink: 'https://softbd.com/',
    },
    {
      company: 'DreamyMove',
      position: 'Wordpress Developer',
      from: 'July 2018',
      to: 'october 2018 ',
      companyLink: 'https://dreamymove.com/',
    },
  ],
   certifications: [
    {
      name: 'Learn With Hasin Hyder',
      body: 'Wordpress Theme Development',
      year: 'august  2018',
      link: 'https://learnwith.hasinhayder.com'
    },

    {
      name: 'Learn With Hasin Hyder',
      body: 'Wordpress Plugins Development',
      year: 'august  2018',
      link: 'https://learnwith.hasinhayder.com'
    },

   { name: 'Learn With Hasin Hyder',
    body: 'Mastering in PHP and MYSQL',
    year: 'august  2018',
    link: 'https://learnwith.hasinhayder.com'
  },
  ], 
  education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'rakibh07', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'corporate',
   ,
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/rakibh07"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

function App() {
  return <GitProfile config={config} />;
}

export default App;
