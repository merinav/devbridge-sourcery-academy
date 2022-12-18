import React from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';

import Date_Item from '../../components/Date_Item';

const Home = () => {
  useTheme();

  return (
    <>
      <Date_Item month={'Dec   Jan'} day={'9 - 12'} text={'Entry Exam'} />
      <PromoSection />
      <AcademiesSection />
    </>
  );
};

export default Home;
