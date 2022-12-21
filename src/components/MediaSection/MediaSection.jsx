import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import useFetch from '/src/hooks/useFetch';
import ParticlesMedia from '/src/assets/images/Background_particles_Media.svg';
import fetchData from './dataLocal.js'; // TODO: remove (only for testing) and remove file dataLocal.js
import PathMedia from './PathMedia/PathMedia';
import GalleryMedia from './GalleryMedia/GalleryMedia';
import styles from './MediaSection.module';

const cn = classNames.bind(styles);

const MediaSection = ({ academy = 'home' }) => {
  const fetchUrl = 'https://sfe-2022-data.netlify.app/static/media.json';

  // const fetchData = useFetch(fetchUrl);

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

        <PathMedia academy={academy} />

        <ParticlesMedia
          className={cn('media-section__particles')}
          aria-hidden="true"
        />
      </div>

      {loading ? (
        <div className={cn('loading-spinner')}></div>
      ) : (
        <GalleryMedia data={data} />
      )}
    </section>
  );
};

MediaSection.propTypes = {
  academy: PropTypes.oneOf(['home', 'developers', 'testers', 'frontend']),
};

export default MediaSection;
