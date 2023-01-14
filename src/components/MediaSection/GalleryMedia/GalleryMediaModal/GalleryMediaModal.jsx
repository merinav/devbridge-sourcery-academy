import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames/bind';
import Modal from '~/components/Modal';
import GalleryMediaCarousel from '~/components/MediaSection/GalleryMedia/GalleryMediaCarousel';
// import styles from './GalleryMediaModal.module.scss';

// const cn = classNames.bind(styles);

const GalleryMediaModal = ({ closeModalHandler, data }) => {
  return (
    <Modal closeModal={closeModalHandler}>
      <GalleryMediaCarousel mediaData={data}></GalleryMediaCarousel>
    </Modal>
  );
};

GalleryMediaModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
export default GalleryMediaModal;
