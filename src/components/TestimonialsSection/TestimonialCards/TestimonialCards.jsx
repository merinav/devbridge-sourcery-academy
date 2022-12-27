import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './TestimonialCards.module.scss';
import TestimonialCard from '~/components/TestimonialsSection/TestimonialCards/TestimonialCard';

const cn = classNames.bind(styles);

const TestimonialCards = ({ testimonials, handleOpenModal }) => {
  return (
    <div className={cn('cards', `cards-${testimonials.length}`)}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          photo={testimonial.photo}
          message={testimonial.message}
          name={testimonial.name}
          academy={testimonial.academy}
          openModal={() => handleOpenModal(testimonial)}
        />
      ))}
    </div>
  );
};

TestimonialCards.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default TestimonialCards;
