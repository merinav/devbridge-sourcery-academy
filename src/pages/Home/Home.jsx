import React from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';

import Date_Item from '../../components/Date_Item';

const Home = () => {
  useTheme();

  return (
    <>
      <Date_Item
        itemSize={'big'}
        month={['Oct', 'Dec']}
        day={['10', '12']}
        text={'Kaunas'}
      />
      <PromoSection />
      <AcademiesSection />
    </>
  );
};

export default Home;
