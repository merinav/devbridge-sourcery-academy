import React, { useEffect } from 'react';

function FrontEnd() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'red-theme');

    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);

  return <h1 className="only-for-testing">/academy/front-end</h1>;
}

export default FrontEnd;
