import React from 'react';
import AcademyList from './AcademyList';
import useTheme from '../../hooks/useTheme';
import PromoHome from './PromoHome';
import AcademiesSection from './AcademiesSection';

const Home = () => {
  useTheme();

  return (
    <>
      <PromoHome />
      <AcademiesSection />
      <AcademyList />
    </>
  );
};

export default Home;
