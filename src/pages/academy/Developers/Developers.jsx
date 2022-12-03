import React, { useEffect } from 'react';
import useTheme from '../../../hooks/useTheme';

function Developers() {
  useTheme('blue');

  return <h1 className="only-for-testing">/academy/developers</h1>;
}

export default Developers;
