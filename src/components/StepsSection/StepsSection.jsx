import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import stepsSectionData from './stepsSectionData';
import { ACADEMIES } from '/src/constants/constants.js';
import Step from './Step/Step';
import Path_Steps from '~/assets/images/Path_Steps.svg';
import styles from './StepsSection.module';

//image or figure???

const cn = classNames.bind(styles);

const StepsSection = ({ academy }) => {
  const { developers, testers, frontend } = ACADEMIES;

  const { developersData, testersData, frontEndData } = stepsSectionData;

  const data = useMemo(() => {
    switch (academy) {
      case developers:
        return developersData;
      case testers:
        return testersData;
      case frontend:
        return frontEndData;
      default:
        return stepsSectionData;
    }
  }, [stepsSectionData]);

  return (
    <section className={cn('steps-section')}>
      {/* <Path_Steps
            className={cn('steps-section__path')}
            aria-hidden="true"
          /> */}
      <div className={cn('steps-section__steps-container')}>
        <Step step={1} text={data.apply} isInverted={false} academy={academy} />
        <Step step={2} text={data.pass} isInverted={true} academy={academy} />
        <Step step={3} text={data.learn} isInverted={false} academy={academy} />
        <Step step={4} text={data.join} isInverted={true} academy={academy} />
      </div>
    </section>
  );
};

StepsSection.propTypes = {
  academy: PropTypes.oneOf(Object.values(ACADEMIES)),
};

export default StepsSection;
