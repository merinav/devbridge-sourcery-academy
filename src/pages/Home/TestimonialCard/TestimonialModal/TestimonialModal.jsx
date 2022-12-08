import React from 'react';
import classNames from 'classnames/bind';
import styles from './TestimonialModal.module.scss';
import PropTypes from 'prop-types';
import Modal from '~/components/Modal';
import QuotationBefore from '~/assets/icons/Icon_quotation_before.svg';
import QuotationAfter from '~/assets/icons/Icon_quotation_after.svg';

const cn = classNames.bind(styles);

const TestimonialModal = ({ photo, message, name, academy, closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <div className={cn('testimonial')}>
        <figure className={cn('testimonial__photo')}>{photo}</figure>
        <figure className={cn('testimonial__quotation-before')}>
          <QuotationBefore alt="Quotation mark" />
        </figure>
        <p className={cn('testimonial__message')}>{message}</p>
        <figure className={cn('testimonial__quotation-after')}>
          <QuotationAfter alt="Quotation mark" />
        </figure>
        <h2 className={cn('testimonial__name')}>{name}</h2>
        <h2 className={cn('testimonial__academy')}>{academy}</h2>
      </div>
      <button onClick={closeModal}>Close</button>
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
