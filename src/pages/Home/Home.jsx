import React from 'react';
import classNames from 'classnames/bind';
import AcademyList from './AcademyList';
import useTheme from '../../hooks/useTheme';
import PromoHome from './PromoHome';
import AcademiesSection from './AcademiesSection';
import styles from './Home.module';

const cn = classNames.bind(styles);

const Home = () => {
  useTheme();

  return (
    <>
      <PromoHome />
      <AcademiesSection />
      <div className={cn('academy-list-wrapper')}>
        <AcademyList />
      </div>
    </>
  );
};

export default Home;
