import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '/src/constants/constants.js';
import AdmissionSection from '../../../components/AdmissionSection/AdmissionSection';

function Testers() {
  useTheme('green');

  return (
    <>
      <AdmissionSection academy={ACADEMIES.testers} />
    </>
  );
}

Testers.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default Testers;
