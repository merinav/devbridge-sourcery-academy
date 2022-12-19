import React from 'react';
import Button from '../../../components/Button/Button';
import useTheme from '/src/hooks/useTheme';

function Developers() {
  useTheme('blue');

  return (
    <>
      <h1 style={{ color: 'var(--primary-color)' }}>/academy/developers</h1>
    </>
  );
}

export default Developers;
