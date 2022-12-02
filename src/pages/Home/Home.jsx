import React, { useEffect } from 'react';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';

const Home = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'violet-theme');

    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);

  return (
    <>
      <PromoSection />
      <AcademiesSection />
    </>
  );
};

export default Home;
