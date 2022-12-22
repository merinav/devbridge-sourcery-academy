import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconArrow from '~/assets/icons/Icon_arrow_down.svg';
import TestimonialCard from '~/pages/Home/TestimonialCard';
import styles from './TestimonialsCarousel.module.scss';

const cn = classNames.bind(styles);
const TestimonialsCarousel = ({ testimonials, handleOpenModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={cn('carousel')}>
      <div
        className={cn('carousel__nav-prev')}
        onClick={handlePrev}
        tabIndex={0}
        role="button"
        aria-label="previous"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handlePrev();
          }
        }}
      >
        <IconArrow alt="previous" />
      </div>
      <div className={cn('carousel__testimonials')}>
        {testimonials.length > 0 &&
          testimonials
            .slice(currentIndex, currentIndex + 3)
            .map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                photo={testimonial.photo}
                message={testimonial.message}
                name={testimonial.name}
                academy={testimonial.academy}
                openModal={() => handleOpenModal(testimonial)}
              />
            ))}
      </div>
      <div
        className={cn('carousel__nav-next')}
        tabIndex={0}
        role="button"
        aria-label="next"
        onClick={handleNext}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleNext();
          }
        }}
      >
        <IconArrow alt="next" />
      </div>
    </div>
  );
};

TestimonialsCarousel.propTypes = {
  testimonials: PropTypes.array,
  handleOpenModal: PropTypes.func.isRequired,
};

export default TestimonialsCarousel;
