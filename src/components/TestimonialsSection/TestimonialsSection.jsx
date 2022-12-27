import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import useTheme from '~/hooks/useTheme';
import PropTypes from 'prop-types';
import BackgroundParticles from '~/assets/images/Background_particles_Testimonials.svg';
import TestimonialCard from '~/components/TestimonialCard';
import TestimonialsCarousel from '~/components/TestimonialsSection/TestimonialsCarousel';
import styles from './TestimonialsSection.module.scss';
import TestimonialModal from '~/components/TestimonialCard/TestimonialModal';
import useBreakpointKey from '~/hooks/useBreakpointKey';

const cn = classNames.bind(styles);

const MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY = 10;
export const NUMBER_OF_TESTIMONIALS_TO_DISPLAY = {
  'mobile-only': 1,
  'tablet-portrait': 1,
  'tablet-landscape': 2,
  desktop: 2,
  'big-desktop': 3,
  'big-desktop-up': 3,
};

const TestimonialsSection = ({ testimonials, academy }) => {
  useTheme();
  const breakpointKey = useBreakpointKey();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [
    numberOfTestimonialsToDisplay,
    setNumberOfTestimonialsToDisplay,
  ] = useState(3);

  const firstTenAcademyTestimonials = testimonials
    .filter((testimonial) => testimonial.academy === academy)
    .slice(0, MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY);

  useEffect(() => {
    setNumberOfTestimonialsToDisplay(
      Math.min(
        NUMBER_OF_TESTIMONIALS_TO_DISPLAY[breakpointKey],
        MAX_NUMBER_OF_TESTIMONIALS_TO_DISPLAY
      )
    );
  }, [breakpointKey]);

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
      {firstTenAcademyTestimonials.length > numberOfTestimonialsToDisplay ? (
        <TestimonialsCarousel
          testimonials={firstTenAcademyTestimonials}
          numberOfTestimonialsToDisplay={numberOfTestimonialsToDisplay}
          handleOpenModal={handleOpenModal}
        />
      ) : (
        <div
          className={cn(
            'testimonials-section__cards',
            `testimonials-section__cards-${numberOfTestimonialsToDisplay}`
          )}
        >
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
      <BackgroundParticles aria-hidden="true" />
    </section>
  );
};

TestimonialsSection.propTypes = {
  testimonials: PropTypes.array,
  academy: PropTypes.string.isRequired,
};

export default TestimonialsSection;
