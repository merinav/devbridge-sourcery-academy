import React from 'react';
import useTheme from '/src/hooks/useTheme';

function Register() {
  useTheme('purple');

  return (
    <>
      <h1 className="only-for-testing">/register</h1>
    </>
  );
}

export default Register;
