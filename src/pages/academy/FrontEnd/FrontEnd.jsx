import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '/src/constants/constants.js';
import AdmissionSection from '../../../components/AdmissionSection/AdmissionSection';
import styles from './FrontEnd.module';

const cn = classNames.bind(styles);

function FrontEnd() {
  useTheme('red');

  return (
    <div className={cn('academy-list-wrapper')}>
      <AdmissionSection academy={ACADEMIES.frontend} />
    </div>
  );
}

FrontEnd.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default FrontEnd;
