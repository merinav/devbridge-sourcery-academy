import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import TestimonialCard from '~/pages/Home/TestimonialCard';
import { useTestimonialData } from '~/hooks/useTestimonialData';
import TestimonialModal from '~/pages/Home/TestimonialCard/TestimonialModal';
import DateItem from '../../components/DateItem/DateItem';

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
  const date = new Date(2022, 9, 9);
  const date2 = new Date(2023, 11, 12);

  return (
    <>
      <div style={{ width: '300px' }}>
        <DateItem date1={date} date2={date2} text={'Exam'} />
      </div>
      <div style={{ height: '10px' }}></div>
      <div style={{ width: '300px' }}>
        <DateItem date1={date} text={'Exam'} />
      </div>
      <div style={{ height: '10px' }}></div>
      <div style={{ width: '225px' }}>
        <DateItem date1={date} text={'Exam'} />
      </div>
      <div style={{ height: '10px' }}></div>
      <div style={{ width: '225px' }}>
        <DateItem date1={date} showLocationIcon={true} text={'Exam'} />
      </div>
      <PromoSection />
      <AcademiesSection />
    </>
  );
};

export default Home;
