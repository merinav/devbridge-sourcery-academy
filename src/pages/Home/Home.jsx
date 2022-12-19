import React from 'react';
import useTheme from '../../hooks/useTheme';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';

import Date_Item from '../../components/Date_Item';

const Home = () => {
  useTheme();

  const date1 = new Date('2023-10-09');
  const date2 = new Date('2023-12-12');

  return (
    <>
      <div style={{ width: '300px' }}>
        {' '}
        {
          <Date_Item
            date1={date1}
            date2={date2}
            showLocationIcon={false}
            text={'Final Exam'}
          />
        }
      </div>
      <div style={{ width: '225px' }}>
        {' '}
        {
          <Date_Item
            date1={date1}
            showLocationIcon={true}
            text={'Final Exam'}
          />
        }
      </div>

      <Date_Item
        date1={date1}
        date2={date2}
        showLocationIcon={false}
        text={'Final Exam'}
      />
      <PromoSection />
      <AcademiesSection />
    </>
  );
};

export default Home;
