import { routes } from '~/routes';

const data = {
  DEVELOPERS: {
    headingData: 'Sourcery Academy for Developers',
    imagePath:
      'https://sfe-2022-data.netlify.app/static/video/developers/thumbnails/47110170574_c00cc2b54d_k-1.jpg',
    paragraphData:
      'Become a software development with our free of charge three-month academy, available this fall and spring. Work with our top specialists as your mentors and lecturers in Kaunas and Vilnius.',
    buttonProps: { to: routes.register },
  },
  FRONTEND: {
    headingData: 'Push the Pixels with Sourcery Academy for Front-End',
    imagePath:
      'https://sfe-2022-data.netlify.app/static/video/testers/thumbnails/48741988306_5beb53f25e_o.jpg',
    paragraphData:
      'Start your career in software development with the intense program at Sourcery for Front-End. Complete the admission and enter our free of charge three-month academy to learn from our top specialists.',
    buttonProps: { to: routes.register },
  },
  TESTERS: {
    headingData: 'Set your inner tester free with Sourcery for Testers!',
    imagePath:
      'https://sfe-2022-data.netlify.app/static/video/frontend/thumbnails/49397671398_59fa405f03_o-3.jpg',
    paragraphData:
      'Kick off your career in software testing with our free of charge three-month academy “Sourcery for Testers”, available this summer. Work with our top specialists as your mentors and lecturers in Kaunas and Vilnius.',
    buttonProps: { to: routes.register },
  },
};

export default data;
