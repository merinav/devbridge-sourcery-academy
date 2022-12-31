import React from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import useFetch from '~/hooks/useFetch';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '/src/components/MediaSection';

const Home = () => {
  useTheme();
  const testimonials = useFetch(
    'https://www.jurele.lt/testimonials.json'
  ).filter(
    (testimonial) => testimonial.academy === 'Sourcery for Front-End Graduate'
  );

  return (
    <>
      <PromoSection />
      <AcademiesSection />
      <TestimonialsSection testimonials={testimonials} />
      <MediaSection />
    </>
  );
};

export default Home;
