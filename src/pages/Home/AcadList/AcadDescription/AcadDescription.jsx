import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AcadDescription.module';

const cn = classNames.bind(styles);

function AcadDescription({ title, paragr, invertBtn }) {
  const invertButton = invertBtn ? 'academy__link--inv' : '';

  return (
    <div className={cn('academy')}>
      <h3 className={cn('academy__title')}>{title}</h3>
      <p className={cn('academy__text')}>{paragr}</p>
      <p className={cn(['academy__link', `${invertButton}`])}>Learn More</p>
    </div>
  );
}

AcadDescription.propTypes = {
  title: PropTypes.string.isRequired,
  paragr: PropTypes.string.isRequired,
  invertBtn: PropTypes.bool,
};

export default AcadDescription;
