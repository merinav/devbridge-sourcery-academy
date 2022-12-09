import React from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';

const Home = () => {
  useTheme();

  return (
    <>
      <PromoSection />
      <AcademiesSection />
    </>
  );
};

export default Home;
