import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import TestimonialCard from '~/pages/Home/TestimonialCard';
import TestimonialModal from '~/pages/Home/TestimonialCard/TestimonialModal';
import useTheme from '~/hooks/useTheme';
import PropTypes from 'prop-types';
import styles from './TestimonialsSection.module.scss';
import TestimonialsCarousel from '~/components/TestimonialsSection/TestimonialsCarousel';

const cn = classNames.bind(styles);

const TestimonialsSection = ({ testimonials, academy }) => {
  useTheme();
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

  return (
    <section className={cn('testimonials-section')}>
      <h1 className={cn('testimonials-section__title')}>Testimonials</h1>

      <div className={cn('testimonials-section__cards')}>
        <>
          <TestimonialsCarousel>
            {testimonials.length > 0 &&
              testimonials.map(
                (testimonial) =>
                  testimonial.academy === academy && (
                    <TestimonialCard
                      key={testimonial.id}
                      photo={testimonial.photo}
                      message={testimonial.message}
                      name={testimonial.name}
                      academy={testimonial.academy}
                      openModal={() => handleOpenModal(testimonial)}
                    />
                  )
              )}
          </TestimonialsCarousel>
        </>
        {isModalOpen && selectedTestimonial && (
          <TestimonialModal
            photo={selectedTestimonial.photo}
            message={selectedTestimonial.message}
            name={selectedTestimonial.name}
            academy={selectedTestimonial.academy}
            closeModal={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
};

TestimonialsSection.propTypes = {
  testimonials: PropTypes.array,
  academy: PropTypes.string.isRequired,
};

export default TestimonialsSection;
