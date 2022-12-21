import React from 'react';
import classNames from 'classnames/bind';
import Icon_play from '/src/assets/icons/Icon_play.svg';
import PropTypes from 'prop-types';
import styles from './GalleryMedia.module';

const cn = classNames.bind(styles);

const GalleryMedia = ({ data }) => {
  let MAX_MEDIA_ITEMS;

  switch (true) {
    case data.length < 1:
      MAX_MEDIA_ITEMS = 0;
      break;

    case data.length < 2:
      MAX_MEDIA_ITEMS = 1;
      break;

    case data.length < 3:
      MAX_MEDIA_ITEMS = 2;
      break;

    case data.length < 4:
      MAX_MEDIA_ITEMS = 3;
      break;

    case data.length < 5:
      MAX_MEDIA_ITEMS = 4;
      break;

    case data.length < 6:
      MAX_MEDIA_ITEMS = 5;
      break;

    default:
      MAX_MEDIA_ITEMS = 6;
      break;
  }

  return (
    <>
      {MAX_MEDIA_ITEMS > 0 && (
        <div
          className={cn(
            'gallery',
            `${MAX_MEDIA_ITEMS === 1 ? 'gallery--1-item' : ''}`,
            `${MAX_MEDIA_ITEMS === 2 ? 'gallery--2-items' : ''}`,
            `${MAX_MEDIA_ITEMS === 3 ? 'gallery--3-items' : ''}`,
            `${MAX_MEDIA_ITEMS === 4 ? 'gallery--4-items' : ''}`,
            `${MAX_MEDIA_ITEMS === 5 ? 'gallery--5-items' : ''}`
          )}
        >
          {data
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
                          console.log(`Video-${index + 1} play button clicked`) // TODO: remove (only for testing)
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
    </>
  );
};

GalleryMedia.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GalleryMedia;
