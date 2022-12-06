import React from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import TestimonialCard from '~/pages/Home/TestimonialCard';
import TestPhoto from '~/assets/images/Image.svg';

const Home = () => {
  useTheme();

  return (
    <>
      <PromoSection />
      <AcademiesSection />
      <TestimonialCard
        photo={TestPhoto}
        message="During the 3 month academy we managed to learn not only the basics, but also to create advanced web page. I am glad that I chose to apply and challenge myself. I would definitely recommend to apply for anyone who’s interested in front-end. "
        name={'Laura Hales'}
        academy={'Sourcery for Front-End Graduate'}
      />
    </>
  );
};

export default Home;
