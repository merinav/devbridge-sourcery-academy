import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import useTheme from '~/hooks/useTheme';
import PropTypes from 'prop-types';
import TestimonialsCarousel from '~/components/TestimonialsSection/TestimonialsCarousel';
import BackgroundParticles from '~/assets/images/Background_particles_Testimonials.svg';
import TestimonialCard from '~/pages/Home/TestimonialCard';
import TestimonialModal from '~/pages/Home/TestimonialCard/TestimonialModal';
import styles from './TestimonialsSection.module.scss';

const cn = classNames.bind(styles);

const MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY = 10;
export const NUMBER_OF_TESTIMONIALS_TO_DISPLAY = 3;

const TestimonialsSection = ({ testimonials, academy }) => {
  useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const firstTenAcademyTestimonials = testimonials
    .filter((testimonial) => testimonial.academy === academy)
    .slice(0, MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY);

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

  if (!firstTenAcademyTestimonials.length) {
    return null;
  }

  return (
    <section className={cn('testimonials-section')}>
      <h1 className={cn('testimonials-section__title')}>Testimonials</h1>
      {firstTenAcademyTestimonials.length >
      NUMBER_OF_TESTIMONIALS_TO_DISPLAY ? (
        <TestimonialsCarousel
          testimonials={firstTenAcademyTestimonials}
          handleOpenModal={handleOpenModal}
        />
      ) : (
        <div className={cn('testimonials-section__cards')}>
          {firstTenAcademyTestimonials.map((testimonial) => (
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
      )}
      {isModalOpen && selectedTestimonial && (
        <TestimonialModal
          photo={selectedTestimonial.photo}
          message={selectedTestimonial.message}
          name={selectedTestimonial.name}
          academy={selectedTestimonial.academy}
          closeModal={handleCloseModal}
        />
      )}
      <BackgroundParticles
        className={cn('testimonials-section__particles')}
        aria-hidden="true"
      />
    </section>
  );
};

TestimonialsSection.propTypes = {
  testimonials: PropTypes.array,
  academy: PropTypes.string.isRequired,
};

export default TestimonialsSection;
