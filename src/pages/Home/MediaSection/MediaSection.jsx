import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import useFetch from '/src/hooks/useFetch';
import Path_Media from '/src/assets/images/Path_Media.svg';
import Particles_Media from '/src/assets/images/Background_particles_Media.svg';
import Icon_play from '/src/assets/icons/Icon_play.svg';
// import mediaSectionData from './dataLocal.js'; // TODO: remove (only for testing) and remove file dataLocal.js
import styles from './MediaSection.module';

const cn = classNames.bind(styles);

const MediaSection = () => {
  const mediaSectionFetchUrl =
    'https://sfe-2022-data.netlify.app/static/media.json';
  const mediaSectionData = useFetch(mediaSectionFetchUrl);
  console.log({ mediaSectionData }); // TODO: remove (only for testing)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mediaSectionData) {
      setLoading(false);
    }
  }, [mediaSectionData]);

  let MAX_MEDIA_ITEMS;
  switch (true) {
    case mediaSectionData.length < 1:
      console.log('TEST 0'); // TODO: remove (only for testing)
      MAX_MEDIA_ITEMS = 0;
      break;

    case mediaSectionData.length < 2:
      console.log('TEST 1'); // TODO: remove (only for testing)
      MAX_MEDIA_ITEMS = 1;
      break;

    case mediaSectionData.length < 3:
      console.log('TEST 2'); // TODO: remove (only for testing)
      MAX_MEDIA_ITEMS = 2;
      break;

    case mediaSectionData.length < 4:
      console.log('TEST 3'); // TODO: remove (only for testing)
      MAX_MEDIA_ITEMS = 3;
      break;

    case mediaSectionData.length < 5:
      console.log('TEST 4'); // TODO: remove (only for testing)
      MAX_MEDIA_ITEMS = 4;
      break;

    case mediaSectionData.length < 6:
      console.log('TEST 5'); // TODO: remove (only for testing)
      MAX_MEDIA_ITEMS = 5;
      break;

    default:
      MAX_MEDIA_ITEMS = 6;
      console.log('TEST 6 default'); // TODO: remove (only for testing)
      break;
  }

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
        MAX_MEDIA_ITEMS > 0 && (
          <div
            className={cn(
              'media-section__gallery',
              `${MAX_MEDIA_ITEMS === 1 ? 'one-item' : ''}`,
              `${MAX_MEDIA_ITEMS === 2 ? 'two-items' : ''}`,
              `${MAX_MEDIA_ITEMS === 3 ? 'three-items' : ''}`,
              `${MAX_MEDIA_ITEMS === 4 ? 'four-items' : ''}`,
              `${MAX_MEDIA_ITEMS === 5 ? 'five-items' : ''}`
            )}
          >
            {mediaSectionData
              .filter((item, index) => index < MAX_MEDIA_ITEMS)
              .map((item, index) =>
                item.type === 'image' ? (
                  <div
                    className={cn(
                      'media-container',
                      `media-container-${index + 1}`
                    )}
                    key={index}
                  >
                    <img
                      className={cn('media-item', `image-${index + 1}`)}
                      src={item.thumbnail}
                      onClick={() => console.log(`Image-${index + 1} clicked`)} // TODO: remove (only for testing)
                      alt="Sourcery academy gallery image"
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      'media-container',
                      `media-container-${index + 1}`
                    )}
                    key={index}
                  >
                    <video
                      className={cn('media-item', `video-${index + 1}`)}
                      width="auto"
                      height="218"
                      id={`video-${index}`}
                      poster={item.thumbnail}
                      onClick={() => console.log(`Video-${index + 1} clicked`)} // TODO: remove (only for testing)
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
                        onClick={
                          () =>
                            console.log(
                              `Video-${index + 1} play button clicked`
                            ) // TODO: remove (only for testing)
                        }
                      >
                        <Icon_play />
                      </button>
                    </div>
                  </div>
                )
              )}
          </div>
        )
      )}
    </section>
  );
};

export default MediaSection;
