import React from 'react';
import Button from '../../../components/Button/Button';
import useTheme from '/src/hooks/useTheme';

function Testers() {
  useTheme('green');

  return (
    <>
      <h1 style={{ color: 'var(--primary-color)' }}>/academy/testers</h1>
    </>
  );
}

export default Testers;
