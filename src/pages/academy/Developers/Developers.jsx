import React from 'react';
import useTheme from '/src/hooks/useTheme';

import StepsSection from '../../../components/StepsSection';

function Developers() {
  useTheme('blue');

  return (
    <>
      <h1 style={{ color: 'var(--primary-color)' }}>/academy/developers</h1>
      <StepsSection />
    </>
  );
}

export default Developers;
