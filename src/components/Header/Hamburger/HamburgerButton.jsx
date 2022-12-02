import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import Icon_hamburger_x from '../../../assets/icons/Icon_hamburger_x.svg';
import Icon_hamburger from '../../../assets/icons/Icon_hamburger.svg';
import styles from './HamburgerButton.module';

const cn = classNames.bind(styles);

const HamburgerButton = (props) => {
  const { active, onClick } = props;
  return (
    <>
      {active ? (
        <button onClick={onClick} className={cn('hamburger')}>
          <Icon_hamburger_x />
        </button>
      ) : (
        <button onClick={onClick} className={cn('hamburger')}>
          <Icon_hamburger />
        </button>
      )}
    </>
  );
};

HamburgerButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.any,
};

export default HamburgerButton;
