import React, { useState } from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import TestimonialCard from '~/pages/Home/TestimonialCard';
import TestPhoto from '~/assets/images/Image.svg';
import { useTestimonialData } from '~/hooks/useTestimonialData';
import TestimonialModal from '~/pages/Home/TestimonialCard/TestimonialModal';

const Home = () => {
  useTheme();

  const [isModelOpen, setIsModalOpen] = useState(false);

  const testimonialData = useTestimonialData();
  console.log(testimonialData);

  return (
    <>
      <PromoSection />
      <AcademiesSection />
      <TestimonialCard
        photo={TestPhoto}
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue dapibus cursus. Sed nec neque eget nibh semper interdum. Mauris nisi felis, congue sit amet blandit vel, rhoncus non felis. Fusce sit amet sapien viverra, elementum felis vitae, ultricies tortor. Ut feugiat leo at libero facilisis, nec pharetra massa bibendum."
        name={'Laura Hales'}
        academy={'Sourcery for Front-End Graduate'}
        openModal={() => setIsModalOpen(true)}
      />
      {isModelOpen && (
        <TestimonialModal
          photo={TestPhoto}
          message="During the 3 month academy we managed to learn not only the basics, but also to create advanced web page. I am glad that I chose to apply and challenge myself. I would definitely recommend to apply for anyone who’s interested in front-end. "
          name={'Laura Hales'}
          academy={'Sourcery for Front-End Graduate'}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Home;
