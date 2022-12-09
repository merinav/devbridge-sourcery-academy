import React from 'react';
import classNames from 'classnames/bind';
import styles from './TestimonialModal.module.scss';
import PropTypes from 'prop-types';
import Modal from '~/components/Modal';
import Icon_close_x from '../../../../assets/icons/Icon_Academy_check.svg';

const cn = classNames.bind(styles);

const TestimonialModal = ({ photo, message, name, academy, closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <div className={cn('testimonial-modal')}>
        <header className={cn('header')}>
          <div className={cn('testimonial-modal__graduate')}>
            <figure className={cn('testimonial-modal__photo')}>{photo}</figure>
            <div className={cn('testimonial-modal__graduate-name-academy')}>
              <h2 className={cn('testimonial-modal__name')}>{name}</h2>
              <h2 className={cn('testimonial-modal__academy')}>{academy}</h2>
            </div>
          </div>
          <div className={cn('testimonial-modal__close')} onClick={closeModal}>
            <Icon_close_x alt="" />
          </div>
        </header>

        <p className={cn('testimonial-modal__message')}>{message}</p>
      </div>
    </Modal>
  );
};

TestimonialModal.propTypes = {
  // TODO: change photo propType
  photo: PropTypes.any,
  message: PropTypes.string,
  name: PropTypes.string,
  academy: PropTypes.string,
  closeModal: PropTypes.func,
};

export default TestimonialModal;
