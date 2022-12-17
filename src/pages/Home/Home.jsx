import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import TestimonialCard from '~/pages/Home/TestimonialCard';
import { useTestimonialData } from '~/hooks/useTestimonialData';
import TestimonialModal from '~/pages/Home/TestimonialCard/TestimonialModal';

const Home = () => {
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
    <>
      <PromoSection />
      <AcademiesSection />
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
    </>
  );
};

export default Home;
