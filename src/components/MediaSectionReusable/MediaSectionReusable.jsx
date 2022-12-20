import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import useFetch from '/src/hooks/useFetch';
import Path_Media from '/src/assets/images/Path_Media.svg';
import Particles_Media from '/src/assets/images/Background_particles_Media.svg';
// import mediaSectionData from './dataLocal.js'; // TODO: remove (only for testing) and remove file dataLocal.js
import Gallery from './Gallery/Gallery';
import styles from './MediaSectionReusable.module';

const cn = classNames.bind(styles);

const MediaSectionReusable = () => {
  const mediaSectionFetchUrl =
    'https://sfe-2022-data.netlify.app/static/media.json';

  const mediaSectionData = useFetch(mediaSectionFetchUrl);
  // console.log({ mediaSectionData }); // TODO: remove (only for testing)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mediaSectionData) {
      setLoading(false);
    }
  }, [mediaSectionData]);

  return (
    <section className={cn('media-section')} id="media-section">
      <div className={cn('media-section__heading-wrapper')}>
        <h1 className={cn('media-section__heading')}>Media</h1>
        <Path_Media className={cn('media-section__path')} aria-hidden="true" />
        <Particles_Media
          className={cn('media-section__particles')}
          aria-hidden="true"
        />
      </div>

      {loading ? (
        <div className={cn('loading-spinner')}></div>
      ) : (
        <Gallery data={mediaSectionData} />
      )}
    </section>
  );
};

export default MediaSectionReusable;
