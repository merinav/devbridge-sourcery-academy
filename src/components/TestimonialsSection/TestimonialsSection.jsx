import React, { useEffect, useState } from 'react';
import { useTestimonialData } from '~/hooks/useTestimonialData';
import TestimonialModal from '../../components/TestimonialCard/TestimonialModal/TestimonialModal';
import TestimonialCard from '../../components/TestimonialCard';

const TestimonialsSection = () => {
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
};

export default TestimonialsSection;
