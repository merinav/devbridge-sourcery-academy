import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Path_Media from '/src/assets/images/Path_Media.svg';
import Particles_Media from '/src/assets/images/Background_particles_Media.svg';
import Icon_play from '/src/assets/icons/Icon_play.svg';
import styles from './MediaSection.module';

const cn = classNames.bind(styles);

const MediaSection = () => {
  const [mediaData, setMediaData] = useState([]);
  const [mediaDevelopers, setMediaDevelopers] = useState([]);
  const [mediaTesters, setMediaTesters] = useState([]);
  const [mediaFrontEnd, setMediaFrontEnd] = useState([]);
  const MAX_MEDIA_ITEMS = 6;

  const fetchMediaData = async () => {
    try {
      const response = await fetch(
        'https://sfe-2022-data.netlify.app/static/media.json'
      );
      const data = await response.json();
      setMediaData(data);

      const developers = data.filter((item) => item.academy === 'developers');
      setMediaDevelopers(developers);

      const testers = data.filter((item) => item.academy === 'testers');
      setMediaTesters(testers);

      const frontEnd = data.filter((item) => item.academy === 'frontend');
      setMediaFrontEnd(frontEnd);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMediaData();
  }, []);

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

      {mediaData && (
        <div className={cn('media-section__gallery')}>
          {mediaData
            .filter((item, index) => index < MAX_MEDIA_ITEMS)
            .map((item, index) =>
              item.type === 'image' ? (
                <div className={cn('media-container')} key={index}>
                  <img
                    className={cn('media-item', `image-${index + 1}`)}
                    src={item.thumbnail}
                    onClick={() => console.log(`Image-${index} clicked`)}
                    alt="Sourcery academy gallery image"
                  />
                </div>
              ) : (
                <div className={cn('media-container')} key={index}>
                  <video
                    className={cn('media-item', `video-${index + 1}`)}
                    width="auto"
                    height="218"
                    id={`video-${index}`}
                    poster={item.thumbnail}
                    onClick={() => console.log(`Video-${index} clicked`)}
                  >
                    <source
                      src={item.src}
                      type={'video/' + item.src.split('.').pop()}
                    />
                    <p>
                      Your browser doesn&quot;t support HTML video. Here is a{' '}
                      <a href={item.src}>link to the video</a> instead.
                    </p>
                  </video>
                  <div className={cn('video-controls')}>
                    <button
                      type="button"
                      className={cn('play-button')}
                      onClick={() =>
                        console.log(`Video-${index} play button clicked`)
                      }
                    >
                      <Icon_play />
                    </button>
                  </div>
                </div>
              )
            )}
        </div>
      )}
    </section>
  );
};

export default MediaSection;
