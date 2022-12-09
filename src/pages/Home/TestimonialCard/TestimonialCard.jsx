import React from 'react';
import classNames from 'classnames/bind';
import styles from './TestimonialCard.module.scss';
import PropTypes from 'prop-types';
import Card from '~/components/Card';
import QuotationBefore from '~/assets/icons/Icon_quotation_before.svg';
import QuotationAfter from '~/assets/icons/Icon_quotation_after.svg';

const cn = classNames.bind(styles);

const TestimonialCard = ({ photo, message, name, academy, openModal }) => {
  return (
    <Card>
      <div className={cn('testimonial')}>
        <figure className={cn('testimonial__photo')}>{photo}</figure>
        <figure className={cn('testimonial__quotation-before')}>
          <QuotationBefore alt="Quotation mark" />
        </figure>
        <div className={cn('testimonial__message')}>
          {message.length > 330 ? (
            <>
              {message.substring(0, 330)}
              <button
                className={cn('testimonial__read-more')}
                onClick={openModal}
              >
                ..Read more
              </button>
            </>
          ) : (
            <>{message}</>
          )}
        </div>
        <figure className={cn('testimonial__quotation-after')}>
          <QuotationAfter alt="Quotation mark" />
        </figure>
        <h2 className={cn('testimonial__name')}>{name}</h2>
        <h2 className={cn('testimonial__academy')}>{academy}</h2>
      </div>
    </Card>
  );
};

TestimonialCard.propTypes = {
  // TODO: change photo propType
  photo: PropTypes.any,
  message: PropTypes.string,
  name: PropTypes.string,
  academy: PropTypes.string,
  openModal: PropTypes.func,
};

export default TestimonialCard;
