import React from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import MediaSection from '/src/components/MediaSection';
import AdmissionSection from '../../components/AdmissionSection/AdmissionSection';

const Home = () => {
  useTheme();

  return (
    <>
      <AdmissionSection />

      <PromoSection />
      <AcademiesSection />
      <MediaSection />
    </>
  );
};

export default Home;
