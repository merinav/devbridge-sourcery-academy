import React, { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  const media = window.matchMedia(query);

  useEffect(() => {
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (event) => setMatches(event.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return matches;
};
export default useMediaQuery;
