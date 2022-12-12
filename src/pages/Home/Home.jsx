import React from 'react';
import AcadList from './AcadList/AcadList';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';

const Home = () => {
  useTheme();

  return (
    <>
      <PromoSection />
      <AcademiesSection />
      <AcadList />
    </>
  );
};

export default Home;
