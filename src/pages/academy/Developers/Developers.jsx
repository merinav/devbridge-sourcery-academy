import React from 'react';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '/src/constants/constants.js';
import AdmissionSection from '~/components/AdmissionSection/AdmissionSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '~/components/MediaSection';
import ScheduleSection from '~/components/ExpandableCard/ScheduleSection';
import styles from './Developers.module';

const cn = classNames.bind(styles);

function Developers() {
  useTheme('blue');

  return (
    <>
      <ScheduleSection academy={ACADEMIES.developers} />
      <div className={cn('admission-section-wrapper')}>
        <AdmissionSection academy={ACADEMIES.developers} />
      </div>
      <div className={cn('testimonials-section-wrapper')}>
        <TestimonialsSection academy={ACADEMIES.developers} />
      </div>
      <div className={cn('media-section-wrapper')}>
        <MediaSection academy={ACADEMIES.developers} />
      </div>
    </>
  );
}

export default Developers;
