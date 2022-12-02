import React, { useEffect } from 'react';

function Kids() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'kids-theme');

    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);

  return <h1 className="only-for-testing">/academy/kids</h1>;
}

export default Kids;
