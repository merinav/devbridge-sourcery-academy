import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconArrow from '~/assets/icons/Icon_arrow_down.svg';
import styles from './TestimonialsCarousel.module.scss';

const cn = classNames.bind(styles);
const TestimonialsCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % children.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + children.length) % children.length);
  };

  return (
    <div className={cn('testimonials-carousel')}>
      <div
        className={cn('testimonials-carousel__nav-prev')}
        onClick={handlePrev}
      >
        <IconArrow alt="previous" />
      </div>
      {children[currentIndex]}
      <div
        className={cn('testimonials-carousel__nav-next')}
        onClick={handleNext}
      >
        <IconArrow alt="next" />
      </div>
    </div>
  );
};

TestimonialsCarousel.propTypes = {
  children: PropTypes.node,
};

export default TestimonialsCarousel;
