import React from 'react';
import useTheme from '/src/hooks/useTheme';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '~/components/MediaSection';
import { ACADEMIES } from '~/constants/constants';
import classNames from 'classnames/bind';
import styles from '~/pages/Home/Home.module.scss';

const cn = classNames.bind(styles);
function Developers() {
  useTheme('blue');

  return (
    <>
      <div className={cn('testimonials-wrapper')}>
        <TestimonialsSection academy={ACADEMIES.developers} />
      </div>
      <div className={cn('media-wrapper')}>
        <MediaSection academy={ACADEMIES.developers} />
      </div>
    </>
  );
}

export default Developers;
