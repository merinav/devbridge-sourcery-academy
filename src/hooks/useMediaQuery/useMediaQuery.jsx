import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
}

useMediaQuery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default useMediaQuery;
