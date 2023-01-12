import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind.js';
import stepsData from './stepsData.js';
import { ACADEMIES } from '/src/constants/constants.js';
import styles from './Step.module';

const cn = classNames.bind(styles);

const Step = ({ step, text, isInverted, academy }) => {
  const { step1, step2, step3, step4 } = stepsData;

  const { developers, testers, frontend } = ACADEMIES;

  const data = useMemo(() => {
    switch (step) {
      case 1:
        return step1;
      case 2:
        return step2;
      case 3:
        return step3;
      case 4:
        return step4;
      default:
        return stepsData;
    }
  }, [stepsData]);

  const image = useMemo(() => {
    switch (academy) {
      case developers:
        return { svg: data.imageDevelopers };
      case testers:
        return { svg: data.imageTesters };
      case frontend:
        return { svg: data.imageFrontEnd };
      default:
        return data;
    }
  }, [data]);

  return (
    <div
      className={cn('step-container', `step-container--${step}`, {
        'step-container--inverted': isInverted,
      })}
    >
      <div className={cn('text', { 'text--inverted': isInverted })}>
        <h3 className={cn('text__title')}>{data.title}</h3>
        <p className={cn('text__paragraph')}> {text}</p>
      </div>
      <div
        className={cn('image', {
          'image--inverted': isInverted,
        })}
      >
        <image.svg
          className={cn('image__illustration', `image__illustration--${step}`)}
        />
        <div className={cn('image__circle-container')}>
          <div className={cn('circle-number-container')}>
            <span className={cn('circle-number-container__number')}>
              {step}
            </span>
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
  academy: PropTypes.oneOf(Object.values(ACADEMIES)).isRequired,
};

export default Step;
