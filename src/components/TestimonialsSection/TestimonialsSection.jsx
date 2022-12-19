import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TestimonialsSection.module.scss';
import TestimonialCard from '~/pages/Home/TestimonialCard';
import TestimonialModal from '~/pages/Home/TestimonialCard/TestimonialModal';
import useTheme from '~/hooks/useTheme';
import { useTestimonialData } from '~/hooks/useTestimonialData';

const cn = classNames.bind(styles);

const TestimonialsSection = () => {
  useTheme();
  const testimonialUrl = useTestimonialData();
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
        {testimonialUrl.map((testimonial) => (
          <>
            <TestimonialCard
              key={testimonial.id}
              photo={testimonial.photo}
              message={testimonial.message}
              name={testimonial.name}
              academy={testimonial.academy}
              openModal={() => handleOpenModal(testimonial)}
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
          </>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

// if (testimonial.message === testimonial.message.includes("Front-End")) {
//   show all cards that are from Front-End;
// } else {
//   hide whole section;
// }
