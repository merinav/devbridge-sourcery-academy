import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Path_Media from '/src/assets/images/Path_Media.svg';
import Particles_Media from '/src/assets/images/Background_particles_Media.svg';
import Icon_play from '/src/assets/icons/Icon_play.svg';
import Icon_arrow from '/src/assets/icons/Icon_arrow_down.svg';
import Icon_close from '/src/assets/icons/Icon_close_x.svg';
import styles from './MediaSection.module';

const cn = classNames.bind(styles);

const MediaSection = () => {
  const [mediaData, setMediaData] = useState([]);
  const [mediaNumber, setMediaNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

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

  const handleOpenModal = (index) => {
    setMediaNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handlePrevMedia = () => {
    return mediaNumber === 0
      ? // setMediaNumber(mediaData.filter((item, index) => index < 6).length - 1)
        setMediaNumber(mediaData.length - 1)
      : setMediaNumber(mediaNumber - 1);
  };

  const handleNextMedia = () => {
    return mediaNumber + 1 === mediaData.length
      ? // mediaData.filter((item, index) => index < 6).length
        setMediaNumber(0)
      : setMediaNumber(mediaNumber + 1);
  };

  return (
    <>
      {openModal && (
        <div className={cn('modal')}>
          <button
            className={cn('modal-button', 'modal-button--prev')}
            onClick={handlePrevMedia}
          >
            <Icon_arrow className={cn('icon-image', 'icon-image--prev')} />
          </button>
          <button
            className={cn('modal-button', 'modal-button--next')}
            onClick={handleNextMedia}
          >
            <Icon_arrow className={cn('icon-image', 'icon-image--next')} />
          </button>
          <button
            className={cn('modal-button', 'modal-button--close')}
            onClick={handleCloseModal}
          >
            <Icon_close className={cn('icon-image', 'icon-image--close')} />
          </button>
          <div className={cn('full-screen-image-container')}>
            {mediaData[mediaNumber].type === 'image' ? (
              <img
                className={cn('full-screen-image')}
                src={mediaData[mediaNumber].src}
                alt="Sourcery academy gallery image"
              />
            ) : (
              <video
                className={cn('full-screen-video')}
                width="100%"
                height="100%"
                poster={mediaData[mediaNumber].thumbnail}
                controls
              >
                <source
                  src={mediaData[mediaNumber].src}
                  type={'video/' + mediaData[mediaNumber].src.split('.').pop()}
                />
                <p>
                  Your browser doesn&quot;t support HTML video. Here is a{' '}
                  <a href={mediaData[mediaNumber].src}>link to the video</a>{' '}
                  instead.
                </p>
              </video>
            )}
          </div>
        </div>
      )}

      <section className={cn('media-section')} id="media-section">
        <div className={cn('media-section__heading-wrapper')}>
          <h1 className={cn('media-section__heading')}>Media</h1>
          <Path_Media
            className={cn('media-section__path')}
            aria-hidden="true"
          />
          <Particles_Media
            className={cn('media-section__particles')}
            aria-hidden="true"
          />
        </div>

        {mediaData && (
          <div className={cn('media-section__gallery')}>
            {mediaData
              .filter((itemFilter, indexFilter) => indexFilter < 6)
              .map((itemMap, indexMap) =>
                itemMap.type === 'image' ? (
                  <img
                    className={cn('media-image')}
                    src={itemMap.thumbnail}
                    key={indexMap}
                    onClick={() => handleOpenModal(indexMap)}
                    alt="Sourcery academy gallery image"
                  />
                ) : (
                  <div className={cn('media-video-container')} key={indexMap}>
                    <video
                      className={cn('media-video')}
                      width="auto"
                      height="218"
                      id={`video-${indexMap}`}
                      poster={itemMap.thumbnail}
                      onClick={() => handleOpenModal(indexMap)}
                    >
                      <source
                        src={itemMap.src}
                        type={'video/' + itemMap.src.split('.').pop()}
                      />
                      <p>
                        Your browser doesn&quot;t support HTML video. Here is a{' '}
                        <a href={itemMap.src}>link to the video</a> instead.
                      </p>
                    </video>
                    <div className={cn('video-controls')}>
                      <button
                        type="button"
                        className={cn('play-button')}
                        onClick={() => handleOpenModal(indexMap)}
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
    </>
  );
};

export default MediaSection;
