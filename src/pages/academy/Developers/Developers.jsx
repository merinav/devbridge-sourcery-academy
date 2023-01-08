import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '/src/constants/constants.js';
import AdmissionSection from '../../../components/AdmissionSection/AdmissionSection';
import styles from './Developers.module';

const cn = classNames.bind(styles);

function Developers() {
  useTheme('blue');

  return (
    <div className={cn('admission-section-wrapper')}>
      <AdmissionSection academy={ACADEMIES.developers} />
    </div>
  );
}

Developers.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default Developers;
