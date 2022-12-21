import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconArrow from '~/assets/icons/Icon_arrow_down.svg';
import styles from './TestimonialsCarousel.module.scss';
import TestimonialCard from '~/pages/Home/TestimonialCard';

const cn = classNames.bind(styles);
const TestimonialsCarousel = ({ testimonials, handleOpenModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 3 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className={cn('carousel')}>
      <div className={cn('carousel__nav-prev')} onClick={handlePrev}>
        <IconArrow alt="previous" />
      </div>
      <div className={cn('carousel__grid')}>
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
      <div className={cn('carousel__nav-next')} onClick={handleNext}>
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
