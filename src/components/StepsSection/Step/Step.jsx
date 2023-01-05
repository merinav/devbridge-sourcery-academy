import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind.js';
import stepsData from './stepsData.js';
import styles from './Step.module';

//image or figure???

const cn = classNames.bind(styles);

const Step = ({ step, text }) => {
  const data = useMemo(() => {
    switch (step) {
      case 1:
        return stepsData.step1;
      case 2:
        return stepsData.step2;
      case 3:
        return stepsData.step3;
      case 4:
        return stepsData.step4;
      default:
        return stepsData;
    }
  }, [stepsData]);

  return (
    <div className={cn('step')}>
      <h3 className={cn('step__title')}>{data.title}</h3>
      <figure className={cn('step__image')}>{<data.image />}</figure>
      <p className={cn('step__paragraph')}> {text}</p>
    </div>
  );
};

Step.propTypes = {
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Step;
