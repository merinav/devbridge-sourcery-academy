import React from 'react';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import HamburgerButton from '../../components/Header/Hamburger/HamburgerButton';

const Home = () => {
  return (
    <>
      <PromoSection />
      <AcademiesSection />

      <HamburgerButton />
    </>
  );
};

export default Home;
