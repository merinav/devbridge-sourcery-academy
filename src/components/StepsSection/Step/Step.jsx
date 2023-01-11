import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind.js';
import stepsData from './stepsData.js';
import styles from './Step.module';

// import Step1 from '~/assets/images/StepsStep1.svg';
// import Step2 from '~/assets/images/StepsStep2.svg';
// import Step3 from '~/assets/images/StepsStep3.svg';
// import Step4 from '~/assets/images/StepsStep4.svg';

//image or figure???

const cn = classNames.bind(styles);

const Step = ({ step, text, isInverted }) => {
  const { step1, step2, step3, step4 } = stepsData;

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

  return (
    <div className={cn('step-container', `step-container--${step}`)}>
      <div className={cn('text', { 'text--inverted': isInverted })}>
        <h3 className={cn('text__title')}>{data.title}</h3>
        <p className={cn('text__paragraph')}> {text}</p>
      </div>

      {/* <div className={cn('content-image-container', {
          'content-image-container--inverted': isInverted,
        })}>
             <data.image className={cn('content-image-container__image')}/>
      </div> */}

      <div
        className={cn('image', {
          'image--inverted': isInverted,
        })}
      >
        <data.image
          className={cn('image__illustration', `image__illustration--${step}`)}
        />
        <div className={cn('image__circle-container')}>
          <div className={cn('circle-number-container')}>
            <div className={cn('circle-number-container__number')}>{step}</div>
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
