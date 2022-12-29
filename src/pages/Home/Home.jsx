import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import AcademyList from './AcademyList';
import useTheme from '../../hooks/useTheme';
import { useTestimonialData } from '~/hooks/useTestimonialData';
import PromoHome from './PromoHome';
import AcademiesSection from './AcademiesSection';
import TestimonialModal from '../../components/TestimonialCard/TestimonialModal/TestimonialModal';
import TestimonialCard from '../../components/TestimonialCard';
import MediaSection from '/src/components/MediaSection';
import styles from './Home.module';

const cn = classNames.bind(styles);

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
      <PromoHome />
      <AcademiesSection />
      <div className={cn('academy-list-wrapper')}>
        <AcademyList />
      </div>
      <MediaSection />
    </>
  );
};

export default Home;
