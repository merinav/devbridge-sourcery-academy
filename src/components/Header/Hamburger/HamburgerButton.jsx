import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import Icon_close_x from '../../../assets/icons/Icon_close_x.svg';
import Icon_open from '../../../assets/icons/Icon_open.svg';
import styles from './HamburgerButton.module';

const cn = classNames.bind(styles);

const HamburgerButton = (props) => {
  const { active, onClick } = props;
  let useIcon =
    active === true ? (useIcon = <Icon_close_x />) : (useIcon = <Icon_open />);

  return (
    <button onClick={onClick} className={cn('hamburger')}>
      {useIcon}
    </button>
  );
};

HamburgerButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default HamburgerButton;
