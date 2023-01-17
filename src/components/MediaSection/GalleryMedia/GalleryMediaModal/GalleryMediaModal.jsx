import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Modal from '~/components/Modal';
import GalleryMediaCarousel from '~/components/MediaSection/GalleryMedia/GalleryMediaCarousel';
import styles from './GalleryMediaModal.module.scss';

const cn = classNames.bind(styles);

const GalleryMediaModal = ({ closeModalHandler, data, selectedMediaItem }) => {
  return (
    <div className={cn('gallery-media-modal')}>
      <Modal closeModal={closeModalHandler} isGallery={true}>
        <div className={cn('media-modal-inner-content')}>
          <GalleryMediaCarousel
            mediaData={data}
            className={cn('media-modal__carousel')}
            selectedMediaItem={selectedMediaItem}
            closeModalHandler={closeModalHandler}
          />
        </div>
      </Modal>
    </div>
  );
};

GalleryMediaModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  selectedMediaItem: PropTypes.number,
};
export default GalleryMediaModal;
