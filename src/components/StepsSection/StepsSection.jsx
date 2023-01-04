import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Image_Academy_1 from '/src/assets/images/Image_Academy_1.svg';
import Image_Academy_2 from '/src/assets/images/Image_Academy_2.svg';
import Image_Academy_3 from '/src/assets/images/Image_Academy_3.svg';
import Image_Academy_4 from '/src/assets/images/Image_Academy_4.svg';
import stepsSectionData from './stepsSectionData';

import styles from './StepsSection.module';

//image or figure???

const cn = classNames.bind(styles);

const StepsSection = () => {
  //{ id }
  const data = stepsSectionData.developers;
  console.log(data);

  return (
    <section className={cn('step-wrapper')}>
      <div className={cn('step')}>
        <h3 className={cn('step__title')}>Apply</h3>
        <Image_Academy_1 className={cn('step__image')} />
        <p className={cn('step__paragraph')}> {data.apply}</p>
      </div>
      <div className={cn('step', 'step--right-aligned')}>
        <h3 className={cn('step__title')}>Pass the admission</h3>
        <Image_Academy_2 className={cn('step__image')} />
        <p className={cn('step__paragraph')}>{data.pass}</p>
      </div>
      <div className={cn('step')}>
        <h3 className={cn('step__title')}>Learn from the experts</h3>
        <Image_Academy_3 className={cn('step__image')} />
        <p className={cn('step__paragraph')}>{data.learn}</p>
      </div>
      <div className={cn('step', 'step--right-aligned')}>
        <h3 className={cn('step__title')}>Join the company</h3>
        <Image_Academy_4 className={cn('step__image')} />
        <p className={cn('step__paragraph')}>{data.join}</p>
      </div>
    </section>
  );
};

// StepsSection.propTypes = {
//     id: PropTypes.string.isRequired,
//   };

export default StepsSection;
