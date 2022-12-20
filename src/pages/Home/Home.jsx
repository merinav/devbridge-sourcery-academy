import React from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
// import MediaSection from './MediaSection';
import MediaSectionReusable from '/src/components/MediaSectionReusable';

const Home = () => {
  useTheme();

  return (
    <>
      <PromoSection />
      <AcademiesSection />
      {/* <MediaSection /> */}
      <MediaSectionReusable />
    </>
  );
};

export default Home;
