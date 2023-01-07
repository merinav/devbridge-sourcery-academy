import React from 'react';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '~/constants/constants';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '~/components/MediaSection';

function Testers() {
  useTheme('green');

  return (
    <>
      <TestimonialsSection academy={ACADEMIES.testers} />
      <MediaSection academy={ACADEMIES.testers} />
    </>
  );
}

export default Testers;
