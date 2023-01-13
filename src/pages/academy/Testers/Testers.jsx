import React from 'react';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '~/constants/constants';
import StepsSection from '../../../components/StepsSection';
import AdmissionSection from '~/components/AdmissionSection/AdmissionSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '~/components/MediaSection';
import classNames from 'classnames/bind';
import styles from './Testers.module';
import ApplySection from '~/components/ApplySection';

const cn = classNames.bind(styles);

function Testers() {
  useTheme('green');

  return (
    <>
      <div className={cn('steps-section-wrapper')}>
        <StepsSection academy={ACADEMIES.testers} />
      </div>
      <div className={cn('admission-section-wrapper')}>
        <AdmissionSection academy={ACADEMIES.testers} />
      </div>
      <div className={cn('testimonials-section-wrapper')}>
        <TestimonialsSection academy={ACADEMIES.testers} />
      </div>
      <div className={cn('media-section-wrapper')}>
        <MediaSection academy={ACADEMIES.testers} />
      </div>
      <div className={cn('apply-section-wrapper')}>
        <ApplySection academy={ACADEMIES.testers} />
      </div>
    </>
  );
}

export default Testers;
