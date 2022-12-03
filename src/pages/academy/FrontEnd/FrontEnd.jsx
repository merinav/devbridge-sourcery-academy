import React, { useEffect } from 'react';
import useTheme from '../../../hooks/useTheme';

function FrontEnd() {
  useTheme('red');

  return <h1 className="only-for-testing">/academy/front-end</h1>;
}

export default FrontEnd;
