import React from 'react';
import Button from '../../../components/Button/Button';
import useTheme from '/src/hooks/useTheme';

function Testers() {
  useTheme('green');

  return (
    <>
      <Button>testers</Button>
      <h1 className="only-for-testing">/academy/testers</h1>
    </>
  );
}

export default Testers;
