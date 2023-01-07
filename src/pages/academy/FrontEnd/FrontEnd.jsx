import React from 'react';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '~/constants/constants';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '~/components/MediaSection';

function FrontEnd() {
  useTheme('red');

  return (
    <>
      <TestimonialsSection academy={ACADEMIES.frontend} />
      <MediaSection academy={ACADEMIES.frontend} />
    </>
  );
}

export default FrontEnd;
