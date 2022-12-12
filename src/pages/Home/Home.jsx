import React from 'react';
import AcadList from './AcadList/AcadList';
import useTheme from '../../hooks/useTheme';
import PromoHome from './PromoHome';
import AcademiesSection from './AcademiesSection';

const Home = () => {
  useTheme();

  return (
    <>
      <PromoHome />
      <AcademiesSection />
      <AcadList />
    </>
  );
};

export default Home;
