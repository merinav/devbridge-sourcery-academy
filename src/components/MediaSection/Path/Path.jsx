import React from 'react';
import classNames from 'classnames/bind';
import Path_Media_Home from '/src/assets/images/Path_Media_Home.svg';
import Path_Media_Academies from '/src/assets/images/Path_Media_Academies.svg';
import PropTypes from 'prop-types';
import styles from '../MediaSection.module';

const cn = classNames.bind(styles);

const Path = ({ academy = 'home' }) => {
  return (
    <>
      {academy === 'home' ? (
        <Path_Media_Home
          className={cn('media-section__home-path')}
          aria-hidden="true"
        />
      ) : (
        <Path_Media_Academies
          className={cn('media-section__academies-path')}
          aria-hidden="true"
        />
      )}
    </>
  );
};

Path.propTypes = {
  academy: PropTypes.oneOf(['home', 'developers', 'testers', 'frontend'])
    .isRequired,
};

export default Path;
