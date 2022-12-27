import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import { useTestimonialData } from '~/hooks/useTestimonialData';
import TestimonialModal from '../../components/TestimonialCard/TestimonialModal/TestimonialModal';
import TestimonialCard from '../../components/TestimonialCard';
import MediaSection from '/src/components/MediaSection';

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
      <MediaSection />
    </>
  );
};

export default Home;
