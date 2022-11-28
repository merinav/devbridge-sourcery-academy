import React from 'react';
import AcadList from './AcadList/AcadList';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';

const Home = () => {
  return (
    <>
      <PromoSection />
      <AcademiesSection />
      <AcadList />
    </>
  );
};

export default Home;
