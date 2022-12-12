import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AcadDescription.module';

const cn = classNames.bind(styles);

function AcadDescription({ title, paragr, isInverted }) {
  const invBtn = isInverted ? 'academy__link--inv' : '';
  const invTxt = isInverted ? 'academy--inv' : '';

  return (
    <div className={cn(['academy', `${invTxt}`])}>
      <h3 className={cn('academy__title')}>{title}</h3>
      <p className={cn('academy__text')}>{paragr}</p>
      <p className={cn(['academy__link', `${invBtn}`])}>Learn more</p>
    </div>
  );
}

AcadDescription.propTypes = {
  title: PropTypes.string.isRequired,
  paragr: PropTypes.string.isRequired,
  isInverted: PropTypes.bool,
};

export default AcadDescription;
