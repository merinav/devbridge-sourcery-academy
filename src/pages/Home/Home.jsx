import React from 'react';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import Card from '../../components/Card';

const Home = () => {
  return (
    <>
      <PromoSection />
      <AcademiesSection />
      {/*TODO: Remove after testing*/}
      <Card>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </Card>
    </>
  );
};

export default Home;
