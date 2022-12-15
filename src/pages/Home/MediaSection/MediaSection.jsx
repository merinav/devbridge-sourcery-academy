import React from 'react';
import classNames from 'classnames/bind';
import Path_Media from '/src/assets/images/Path_Media.svg';
import Particles_Media from '/src/assets/images/Background_particles_Media.svg';
import styles from './MediaSection.module';

const cn = classNames.bind(styles);

const MediaSection = () => {
  return (
    <section className={cn('media-section')}>
      <div className={cn('media-section__heading-wrapper')}>
        <h1 className={cn('media-section__heading')}>Media</h1>
        <Path_Media className={cn('media-section__path')} aria-hidden="true" />
        <Particles_Media
          className={cn('media-section__particles')}
          aria-hidden="true"
        />
      </div>
      <div className={cn('media-section__gallery')}>Gallery</div>
    </section>
  );
};
export default MediaSection;
