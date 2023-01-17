import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { AnimatePresence } from 'framer-motion';
import Icon_play from '/src/assets/icons/Icon_play.svg';
import GalleryMediaModal from '~/components/MediaSection/GalleryMedia/GalleryMediaModal';
import styles from './GalleryMedia.module';

const cn = classNames.bind(styles);

const GalleryMedia = ({ data }) => {
  const [selectedMediaItem, setSelectedMediaItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const maxMediaItems = Math.min(data.length, 6);

  const openModalHandler = (mediaItemIndex) => {
    setSelectedMediaItem(mediaItemIndex);
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setSelectedMediaItem(null);
  };

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
            key={item.src}
            onClick={() => openModalHandler(index)}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                openModalHandler(index);
              }
            }}
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
            key={item.src}
            onClick={() => openModalHandler(index)}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                openModalHandler(index);
              }
            }}
          >
            <img
              className={cn('media-item', `video-${index + 1}`)}
              src={item.thumbnail}
              alt="Sourcery academy gallery video thumbnail"
            />
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
          <GalleryMediaModal
            data={data}
            closeModalHandler={closeModalHandler}
            selectedMediaItem={selectedMediaItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

GalleryMedia.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GalleryMedia;
