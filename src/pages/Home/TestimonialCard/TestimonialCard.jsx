import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Card from '~/components/Card';
import QuotationBefore from '~/assets/icons/Icon_quotation_before.svg';
import QuotationAfter from '~/assets/icons/Icon_quotation_after.svg';
import styles from './TestimonialCard.module.scss';

const cn = classNames.bind(styles);

const MAX_TESTIMONIALS_MESSAGE_LENGTH = 330;

const TestimonialCard = ({ photo, message, name, academy, openModal }) => {
  return (
    <Card>
      <div className={cn('testimonial')}>
        <img
          className={cn('testimonial__photo')}
          src={photo}
          alt={`Photo of ${name}`}
        />
        <figure
          className={cn(
            'testimonial__quotation',
            'testimonial__quotation-before'
          )}
        >
          <QuotationBefore alt="Quotation mark" />
        </figure>
        <div className={cn('testimonial__message')}>
          {message.length > MAX_TESTIMONIALS_MESSAGE_LENGTH ? (
            <>
              {`${message.substring(0, MAX_TESTIMONIALS_MESSAGE_LENGTH)}...`}
              <button
                className={cn('testimonial__read-more')}
                onClick={openModal}
              >
                Read more
              </button>
            </>
          ) : (
            <>{message}</>
          )}
        </div>
        <figure
          className={cn(
            'testimonial__quotation',
            'testimonial__quotation-after'
          )}
        >
          <QuotationAfter alt="Quotation mark" />
        </figure>
        <div className={cn('testimonial__graduate-info')}>
          <h2 className={cn('testimonial__name')}>{name}</h2>
          <h2 className={cn('testimonial__academy')}>{academy}</h2>
        </div>
      </div>
    </Card>
  );
};

TestimonialCard.propTypes = {
  photo: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  academy: PropTypes.string,
  openModal: PropTypes.func,
};

export default TestimonialCard;
