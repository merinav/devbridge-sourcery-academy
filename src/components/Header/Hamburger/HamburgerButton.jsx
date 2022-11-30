import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Icon_hamburger_closed from '../../../assets/icons/Icon_hamburger_closed.svg';
import Icon_hamburger_open from '../../../assets/icons/Icon_hamburger_open.svg';
import styles from './HamburgerButton.module';

const cn = classNames.bind(styles);

const HamburgerButton = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <button onClick={() => setisOpen(false)} className={cn('hamburger')}>
          <Icon_hamburger_closed />
        </button>
      ) : (
        <button onClick={() => setisOpen(true)} className={cn('hamburger')}>
          <Icon_hamburger_open />
        </button>
      )}
    </>
  );
};

export default HamburgerButton;
