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

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={cn('testimonials-section')}>
      <h1 className={cn('testimonials-section__title')}>Testimonials</h1>
      <div className={cn('testimonials-section__cards')}>
        {testimonialUrl.length > 0 && (
          <>
            <TestimonialCard
              photo={testimonialUrl[0].photo}
              // TODO: This is to only simulate what happens when message too long. Remove after testing
              message={testimonialUrl[0].message.repeat(4)}
              name={testimonialUrl[0].name}
              academy={testimonialUrl[0].academy}
              openModal={handleOpenModal}
            />
            {isModalOpen && (
              <TestimonialModal
                photo={testimonialUrl[0].photo}
                // TODO: This is to only simulate what happens when message too long. Remove after testing
                message={testimonialUrl[0].message.repeat(4)}
                name={testimonialUrl[0].name}
                academy={testimonialUrl[0].academy}
                closeModal={handleCloseModal}
              />
            )}
          </>
        )}

        {testimonialUrl.length > 0 && (
          <>
            <TestimonialCard
              photo={testimonialUrl[1].photo}
              // TODO: This is to only simulate what happens when message too long. Remove after testing
              message={testimonialUrl[1].message.repeat(4)}
              name={testimonialUrl[1].name}
              academy={testimonialUrl[1].academy}
              openModal={handleOpenModal}
            />
            {isModalOpen && (
              <TestimonialModal
                photo={testimonialUrl[1].photo}
                // TODO: This is to only simulate what happens when message too long. Remove after testing
                message={testimonialUrl[1].message.repeat(4)}
                name={testimonialUrl[1].name}
                academy={testimonialUrl[1].academy}
                closeModal={handleCloseModal}
              />
            )}
          </>
        )}

        {testimonialUrl.length > 0 && (
          <>
            <TestimonialCard
              photo={testimonialUrl[2].photo}
              // TODO: This is to only simulate what happens when message too long. Remove after testing
              message={testimonialUrl[2].message.repeat(4)}
              name={testimonialUrl[2].name}
              academy={testimonialUrl[2].academy}
              openModal={handleOpenModal}
            />
            {isModalOpen && (
              <TestimonialModal
                photo={testimonialUrl[2].photo}
                // TODO: This is to only simulate what happens when message too long. Remove after testing
                message={testimonialUrl[2].message.repeat(4)}
                name={testimonialUrl[2].name}
                academy={testimonialUrl[2].academy}
                closeModal={handleCloseModal}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
