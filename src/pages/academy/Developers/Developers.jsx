import React, { useEffect } from 'react';

function Developers() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'blue-theme');

    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);

  return <h1 className="only-for-testing">/academy/developers</h1>;
}

export default Developers;
