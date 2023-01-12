import React from 'react';
import classNames from 'classnames/bind';
import AcademyList from './AcademyList';
import useTheme from '../../hooks/useTheme';
import PromoHome from './PromoHome';
import AcademiesSection from './AcademiesSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '/src/components/MediaSection';
import Filter from '../../components/Filter/Filter';
import styles from './Home.module';

const cn = classNames.bind(styles);

const testData = ['Full-stack', 'Testers', 'Front-End']; // TODO remove after testing

const Home = () => {
  useTheme();

  return (
    <>
      {/* // TODO remove after testing */}
      <Filter data={testData} />
      {/* // TODO remove after testing */}
      <Filter />

      <PromoHome />
      <AcademiesSection />
      <div className={cn('academy-list-wrapper')}>
        <AcademyList />
      </div>
      <div className={cn('testimonials-section-wrapper')}>
        <TestimonialsSection />
      </div>
      <div className={cn('media-section-wrapper')}>
        <MediaSection />
      </div>
    </>
  );
};

export default Home;
