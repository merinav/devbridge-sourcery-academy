import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import Icon_close_x from '../../../assets/icons/Icon_close_x.svg';
import Icon_open from '../../../assets/icons/Icon_open.svg';
import styles from './HamburgerButton.module';

const cn = classNames.bind(styles);

const HamburgerButton = (props) => {
  const { active, onClick } = props;
  return (
    <>
      {active ? (
        <button onClick={onClick} className={cn('hamburger')}>
          <Icon_close_x />
        </button>
      ) : (
        <button onClick={onClick} className={cn('hamburger')}>
          <Icon_open />
        </button>
      )}
    </>
  );
};

HamburgerButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default HamburgerButton;
