import React from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import MediaSection from '/src/components/MediaSection';

const Home = () => {
  useTheme();

  return (
    <>
      <PromoSection />
      <AcademiesSection />
      {/* <MediaSection /> */}
      <MediaSection academy={'frontend'} />
    </>
  );
};

export default Home;

// 'home', 'developers', 'testers', 'frontend' // TODO: remove (only for testing)
