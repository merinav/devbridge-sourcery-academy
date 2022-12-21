import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import useFetch from '/src/hooks/useFetch';
import Particles_Media from '/src/assets/images/Background_particles_Media.svg';
// import fetchData from './dataLocal.js'; // TODO: remove (only for testing) and remove file dataLocal.js
import Path from './Path/Path';
import Gallery from './Gallery/Gallery';
import styles from './MediaSection.module';

const cn = classNames.bind(styles);

const MediaSection = ({ academy = 'home' }) => {
  const fetchUrl = 'https://sfe-2022-data.netlify.app/static/media.json';

  const fetchData = useFetch(fetchUrl);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (fetchData) {
      setLoading(false);
    }
  }, [fetchData]);

  let data;

  switch (true) {
    case academy === 'developers':
      data = fetchData.filter((item) => item.academy === 'developers');
      break;

    case academy === 'testers':
      data = fetchData.filter((item) => item.academy === 'testers');
      break;

    case academy === 'frontend':
      data = fetchData.filter((item) => item.academy === 'frontend');
      break;

    default:
      data = fetchData;
      break;
  }

  return (
    <section className={cn('media-section')} id="media-section">
      <div className={cn('media-section__heading-wrapper')}>
        <h1 className={cn('media-section__heading')}>Media</h1>

        <Path academy={academy} />

        <Particles_Media
          className={cn('media-section__particles')}
          aria-hidden="true"
        />
      </div>

      {loading ? (
        <div className={cn('loading-spinner')}></div>
      ) : (
        <Gallery data={data} />
      )}
    </section>
  );
};

MediaSection.propTypes = {
  academy: PropTypes.oneOf(['home', 'developers', 'testers', 'frontend']),
};

export default MediaSection;
