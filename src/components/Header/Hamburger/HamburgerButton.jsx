import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Sidebar from '../Sidebar/Sidebar';
import Icon_hamburger_closed from '../../../assets/icons/Icon_hamburger_closed.svg';
import Icon_hamburger_open from '../../../assets/icons/Icon_hamburger_open.svg';
import styles from './HamburgerButton.module';

const cn = classNames.bind(styles);

const HamburgerButton = () => {
  const [status, setisOpen] = useState(false);
  return (
    <>
      {status ? (
        <>
          <button onClick={() => setisOpen(false)} className={cn('hamburger')}>
            <Icon_hamburger_closed />
          </button>{' '}
          <Sidebar />
        </>
      ) : (
        <button onClick={() => setisOpen(true)} className={cn('hamburger')}>
          <Icon_hamburger_open />
        </button>
      )}
    </>
  );
};

// HamburgerButton.propTypes = {
//   isOpen: PropTypes.bool,
//   onClick: PropTypes.any,
// };;

export default HamburgerButton;
