import React from 'react';
import useTheme from '/src/hooks/useTheme';

function FrontEnd() {
  useTheme('red');

  return (
    <>
      <h1 className="only-for-testing">/academy/front-end</h1>
    </>
  );
}

export default FrontEnd;
