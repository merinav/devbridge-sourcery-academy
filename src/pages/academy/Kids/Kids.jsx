import React from 'react';
import useTheme from '/src/hooks/useTheme';

function Kids() {
  useTheme('kids');

  return <h1 className="only-for-testing">/academy/kids</h1>;
}

export default Kids;
