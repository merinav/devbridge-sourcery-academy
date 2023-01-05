import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import stepsSectionData from './stepsSectionData';
import { ACADEMIES } from '/src/constants/constants.js';
import Step from './Step/Step';
import styles from './StepsSection.module';

//image or figure???

const cn = classNames.bind(styles);

const StepsSection = ({ academy }) => {
  const data = useMemo(() => {
    switch (academy) {
      case ACADEMIES.developers:
        return stepsSectionData.developers;
      case ACADEMIES.testers:
        return stepsSectionData.testers;
      case ACADEMIES.frontend:
        return stepsSectionData.frontEnd;
      default:
        return stepsSectionData;
    }
  }, [stepsSectionData]);

  return (
    <section className={cn('section-wrapper')}>
      <Step step={1} text={data.apply} />
      <Step step={2} text={data.pass} />
    </section>
  );
};

StepsSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default StepsSection;
