import React from 'react';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '~/constants/constants';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '~/components/MediaSection';
import classNames from 'classnames/bind';
import styles from '~/pages/Home/Home.module.scss';

const cn = classNames.bind(styles);

function Testers() {
  useTheme('green');

  return (
    <>
      <div className={cn('testimonials-wrapper')}>
        <TestimonialsSection academy={ACADEMIES.testers} />
      </div>
      <div className={cn('media-wrapper')}>
        <MediaSection academy={ACADEMIES.testers} />
      </div>
    </>
  );
}

export default Testers;
