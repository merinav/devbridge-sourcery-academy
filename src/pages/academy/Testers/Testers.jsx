import React from 'react';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '~/constants/constants';
import AdmissionSection from '~/components/AdmissionSection/AdmissionSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '~/components/MediaSection';
import ApplySection from '~/components/ApplySection';
import ScheduleSection from '~/components/ExpandableCard/ScheduleSection';
import styles from '~/pages/Home/Home.module.scss';

const cn = classNames.bind(styles);

function Testers() {
  useTheme('green');

  return (
    <>
      <ScheduleSection academy={ACADEMIES.testers} />
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
