import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import TestimonialModal from '~/pages/Home/TestimonialCard/TestimonialModal';
import useTheme from '~/hooks/useTheme';
import PropTypes from 'prop-types';
import TestimonialsCarousel from '~/components/TestimonialsSection/TestimonialsCarousel';
import styles from './TestimonialsSection.module.scss';

const cn = classNames.bind(styles);

const TestimonialsSection = ({ testimonials, academy }) => {
  useTheme();

  const academyTestimonials = testimonials.filter(
    (testimonial) => testimonial.academy === academy
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  const handleOpenModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!academyTestimonials.length) {
    return null;
  }

  if (academyTestimonials.length > 3) {
    return (
      <section className={cn('testimonials-section')}>
        <h1 className={cn('testimonials-section__title')}>Testimonials</h1>
        <TestimonialsCarousel
          testimonials={academyTestimonials}
          handleOpenModal={handleOpenModal}
        />
        {isModalOpen && selectedTestimonial && (
          <TestimonialModal
            photo={selectedTestimonial.photo}
            message={selectedTestimonial.message}
            name={selectedTestimonial.name}
            academy={selectedTestimonial.academy}
            closeModal={handleCloseModal}
          />
        )}
      </section>
    );
  }

  return (
    <section className={cn('testimonials-section')}>
      <h1 className={cn('testimonials-section__title')}>Testimonials</h1>
      testimonials={academyTestimonials}
      handleOpenModal={handleOpenModal}
      {isModalOpen && selectedTestimonial && (
        <TestimonialModal
          photo={selectedTestimonial.photo}
          message={selectedTestimonial.message}
          name={selectedTestimonial.name}
          academy={selectedTestimonial.academy}
          closeModal={handleCloseModal}
        />
      )}
    </section>
  );
};

TestimonialsSection.propTypes = {
  testimonials: PropTypes.array,
  academy: PropTypes.string.isRequired,
};

export default TestimonialsSection;
