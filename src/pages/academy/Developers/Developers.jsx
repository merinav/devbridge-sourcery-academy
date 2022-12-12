import React from 'react';
import useTheme from '/src/hooks/useTheme';

function Developers() {
  useTheme('blue');

  return (
    <>
      <h1 className="only-for-testing">/academy/developers</h1>
    </>
  );
}

export default Developers;
