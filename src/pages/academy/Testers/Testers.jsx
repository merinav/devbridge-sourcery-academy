import React, { useEffect } from 'react';
import useTheme from '../../../hooks/useTheme';

function Testers() {
  useTheme('green');

  return <h1 className="only-for-testing">/academy/testers</h1>;
}

export default Testers;
