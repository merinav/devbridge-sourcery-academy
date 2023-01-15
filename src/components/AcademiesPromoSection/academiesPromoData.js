import { routes } from '~/routes';

const data = {
  DEVELOPERS: {
    headingData: 'Sourcery Academy for Developers',
    imagePath: '/assets/images/Image_Academies_Promo_Developers.png',
    paragraphData:
      'Become a software development with our free of charge three-month academy, available this fall and spring. Work with our top specialists as your mentors and lecturers in Kaunas and Vilnius.',
    buttonProps: { to: routes.register },
  },
  FRONTEND: {
    headingData: 'Push the Pixels with Sourcery Academy for Front-End',
    imagePath: '/assets/images/Image_Academies_Promo_Front_End.png',
    paragraphData:
      'Start your career in software development with the intense program at Sourcery for Front-End. Complete the admission and enter our free of charge three-month academy to learn from our top specialists.',
    buttonProps: { to: routes.register },
  },
  TESTERS: {
    headingData: 'Set your inner tester free with Sourcery for Testers!',
    imagePath: '/assets/images/Image_Academies_Promo_Testers.png',
    paragraphData:
      'Kick off your career in software testing with our free of charge three-month academy “Sourcery for Testers”, available this summer. Work with our top specialists as your mentors and lecturers in Kaunas and Vilnius.',
    buttonProps: { to: routes.register },
  },
};

export default data;
