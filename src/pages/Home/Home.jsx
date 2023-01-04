import React from 'react';
// import PropTypes from 'prop-types';
import useTheme from '../../hooks/useTheme';
// import { ACADEMIES } from '/src/constants/constants.js';
import PromoSection from './PromoSection';
import AcademiesSection from './AcademiesSection';
import MediaSection from '/src/components/MediaSection';
// import AdmissionSection from '../../components/AdmissionSection/AdmissionSection';

const Home = () => {
  useTheme();

  return (
    <>
      {/* <AdmissionSection academy={ACADEMIES.developers} /> */}
      {/* <AdmissionSection academy={ACADEMIES.testers} /> */}
      {/* <AdmissionSection academy={ACADEMIES.frontend} /> */}

      <PromoSection />
      <AcademiesSection />
      <MediaSection />
    </>
  );
};

// Home.propTypes = {
//   academy: PropTypes.oneOf(Object.values(ACADEMIES)),
// };

export default Home;
