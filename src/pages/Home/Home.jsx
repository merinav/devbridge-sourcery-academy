import React from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '/src/components/MediaSection';

const Home = () => {
  useTheme();

  return (
    <>
      <PromoSection />
      <AcademiesSection />
      <TestimonialsSection />
      <MediaSection />
    </>
  );
};

export default Home;
