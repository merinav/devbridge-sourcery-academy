import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '/src/constants/constants.js';
import AdmissionSection from '../../../components/AdmissionSection/AdmissionSection';
import styles from './Testers.module';

const cn = classNames.bind(styles);

function Testers() {
  useTheme('green');

  return (
    <div className={cn('admission-section-wrapper')}>
      <AdmissionSection academy={ACADEMIES.testers} />
    </div>
  );
}

Testers.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default Testers;
