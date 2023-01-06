import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind.js';
import stepsData from './stepsData.js';
import styles from './Step.module';

//image or figure???

const cn = classNames.bind(styles);

const Step = ({ step, text, isInverted }) => {
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
    <div className={cn('step', { 'step--inverted': isInverted })}>
      <div
        className={cn('content-text', { 'content-text--inverted': isInverted })}
      >
        <h3 className={cn('content-text__title')}>{data.title}</h3>
        <p className={cn('content-text__paragraph')}> {text}</p>
      </div>

      <div
        className={cn('content-image', {
          'content-image--inverted': isInverted,
        })}
      >
        <div className={cn('content-image__ellipse')}>
          <div className={cn('content-image__image')} aria-hidden="true">
            {<data.image />}
          </div>
        </div>
      </div>
    </div>
  );
};

Step.propTypes = {
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isInverted: PropTypes.bool.isRequired,
};

export default Step;
