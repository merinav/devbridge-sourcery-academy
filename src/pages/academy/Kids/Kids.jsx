import React from 'react';
import Button from '../../../components/Button/Button';
import useTheme from '/src/hooks/useTheme';

function Kids() {
  useTheme('kids');

  return (
    <>
      <Button>kids</Button>
      <h1 className="only-for-testing">/academy/kids</h1>
    </>
  );
}

export default Kids;
