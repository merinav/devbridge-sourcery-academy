import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '/src/constants/constants.js';
import AdmissionSection from '../../../components/AdmissionSection/AdmissionSection';

function FrontEnd() {
  useTheme('red');

  return (
    <>
      <AdmissionSection academy={ACADEMIES.frontend} />
    </>
  );
}

FrontEnd.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default FrontEnd;
