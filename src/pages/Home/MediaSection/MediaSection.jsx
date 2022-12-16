import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Path_Media from '/src/assets/images/Path_Media.svg';
import Particles_Media from '/src/assets/images/Background_particles_Media.svg';
import Icon_play from '/src/assets/icons/Icon_play.svg';
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

  const videoPlay = () => {
    const video = document.getElementById('video');

    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  };

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
                onClick={() => console.log('media-image clicked')}
                alt="Sourcery academy gallery image"
              />
            ) : (
              <div className={cn('media-video-container')} key={index}>
                <video
                  className={cn('media-video')}
                  width="auto"
                  height="218"
                  id="video"
                  poster={item.thumbnail}
                  // controls // TODO: remove (only for testing)
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
                    id="play-button"
                    type="button"
                    className={cn('play-button')}
                    onClick={videoPlay}
                  >
                    <Icon_play className={cn('play-icon')} />
                  </button>
                </div>
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default MediaSection;
