import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { AnimatePresence } from 'framer-motion';
import Icon_play from '/src/assets/icons/Icon_play.svg';
import styles from './GalleryMedia.module';
import Modal from '~/components/Modal';

const cn = classNames.bind(styles);

const GalleryMedia = ({
  data,
  isModalOpen,
  openModalHandler,
  closeModalHandler,
}) => {
  const maxMediaItems = Math.min(data.length, 6);
  return (
    <div
      className={cn(
        'gallery',
        `${
          maxMediaItems === 1
            ? 'gallery--' + maxMediaItems + '-item'
            : maxMediaItems !== 6
            ? 'gallery--' + maxMediaItems + '-items'
            : ''
        }`
      )}
    >
      {data.slice(0, maxMediaItems).map((item, index) =>
        item.type === 'image' ? (
          <figure
            className={cn('media-container', `media-container-${index + 1}`)}
            key={index}
            onClick={openModalHandler}
          >
            <img
              className={cn('media-item', `image-${index + 1}`)}
              src={item.thumbnail}
              alt="Sourcery academy gallery image"
            />
          </figure>
        ) : (
          <figure
            className={cn('media-container', `media-container-${index + 1}`)}
            key={index}
            onClick={openModalHandler}
          >
            <video
              className={cn('media-item', `video-${index + 1}`)}
              width="auto"
              height="218"
              poster={item.thumbnail}
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
              <button type="button" className={cn('play-button')}>
                <Icon_play />
              </button>
            </div>
          </figure>
        )
      )}
      <AnimatePresence initial="false" mode={'wait'}>
        {isModalOpen && (
          <Modal closeModal={closeModalHandler}>
            <div></div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

GalleryMedia.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  openModalHandler: PropTypes.func.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
};

export default GalleryMedia;
