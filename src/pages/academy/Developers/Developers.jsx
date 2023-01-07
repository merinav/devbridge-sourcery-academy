import React from 'react';
import useTheme from '/src/hooks/useTheme';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '~/components/MediaSection';
import { ACADEMIES } from '~/constants/constants';

function Developers() {
  useTheme('blue');

  return (
    <>
      <TestimonialsSection academy={ACADEMIES.developers} />
      <MediaSection academy={ACADEMIES.developers} />
    </>
  );
}

export default Developers;
