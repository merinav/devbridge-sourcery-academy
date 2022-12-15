import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Path_Media from '/src/assets/images/Path_Media.svg';
import Particles_Media from '/src/assets/images/Background_particles_Media.svg';
import styles from './MediaSection.module';

const cn = classNames.bind(styles);

const MediaSection = () => {
  const [mediaData, setMediaData] = useState([]);

  const fetchMediaData = async () => {
    try {
      const response = await fetch(
        'https://sfe-2022-data.netlify.app/static/media.json'
      );
      const data = await response.json();
      setMediaData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMediaData();
  }, []);

  console.log(mediaData); // TODO: remove (only for testing)

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

      <div className={cn('media-section__gallery')}>
        {mediaData
          .filter((item, index) => index < 6)
          .map((item, index) =>
            item.type === 'image' ? (
              <img
                className={cn('media-image')}
                src={item.thumbnail}
                key={index}
              />
            ) : (
              <video
                className={cn('media-video')}
                src={item.src}
                key={index}
                width="auto"
                height="218"
                controls
              ></video>
            )
          )}
      </div>
    </section>
  );
};

export default MediaSection;
