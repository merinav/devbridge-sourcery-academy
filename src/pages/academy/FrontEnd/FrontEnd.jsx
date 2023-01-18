import React from 'react';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '/src/constants/constants.js';
import StepsSection from '../../../components/StepsSection';
import AdmissionSection from '~/components/AdmissionSection/AdmissionSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '~/components/MediaSection';
import ApplySection from '~/components/ApplySection';
import ScheduleSection from '~/components/ScheduleSection/ScheduleSection';
import AcademiesPromoSection from '~/components/AcademiesPromoSection';
import styles from './FrontEnd.module';

const cn = classNames.bind(styles);

function FrontEnd() {
  useTheme('red');

  return (
    <>
      <div className={cn('academies-promo-section-wrapper')}>
        <AcademiesPromoSection academy={ACADEMIES.frontend} />
      </div>
      <div className={cn('steps-section-wrapper')}>
        <StepsSection academy={ACADEMIES.frontend} />
      </div>
      <div className={cn('admission-section-wrapper')}>
        <AdmissionSection academy={ACADEMIES.frontend} />
      </div>
      <div className={cn('schedule-section-wrapper')}>
        <ScheduleSection academy={ACADEMIES.frontend} />
      </div>
      <div className={cn('testimonials-section-wrapper')}>
        <TestimonialsSection academy={ACADEMIES.frontend} />
      </div>
      <div className={cn('media-section-wrapper')}>
        <MediaSection academy={ACADEMIES.frontend} />
      </div>
      <div className={cn('apply-section-wrapper')}>
        <ApplySection academy={ACADEMIES.frontend} />
      </div>
    </>
  );
}

export default FrontEnd;
