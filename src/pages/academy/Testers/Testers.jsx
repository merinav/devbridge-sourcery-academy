import React, { useEffect } from 'react';

function Testers() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'green-theme');

    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);

  return <h1 className="only-for-testing">/academy/testers</h1>;
}

export default Testers;
